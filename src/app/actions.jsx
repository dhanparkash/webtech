"use server"

export async function submitContactForm(data){

    try {

        const result = await Promise.all([
            await sendEmail({
              params: { NAME: data.name },
              templateId: 2,
              to: [{ email: data.email }],
            }),
            await sendEmail({
              params: { NAME: data.name, EMAIL: data.email, MESSAGE: data.message },
              templateId: 3,
              to: [{ email: "info@advikitsolutions.com" }],
              replyTo: {email: data.email}
            })
        ])

        const messageIdExists = result.every(response => response.messageId)

        if(messageIdExists){
          return {success: true,  message: "Your message has been sent!"};
        }

          return {success: false, message: 'There was an error sending your message.' };
        
    } catch (error) {
        // console.log(error)
        return {success: false, message: "Something went wrong. Try again later."}
    }
}

async function sendEmail(emailOptions){
    const apiKey = process.env.BREVO_API_KEY
    const url = 'https://api.brevo.com/v3/smtp/email';
  
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(emailOptions),
    };
  
    const response = await fetch(url, options);
  
    if (!response.ok) {
        console.log('response ', response)
      throw new Error('Failed to send email');
    }
    const data = await response.json()
    return data
  }
  