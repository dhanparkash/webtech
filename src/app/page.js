import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[700px]">
          <div className="bg-[url('/webtechbanner.png')] min-h-[500px] bg-cover">
          </div>
          <div className="columns-3 lg:px-12 py-6">
               <div>
               You can change the name that is associated with your Git commits using the git config command. The new name you set will be visible in any future commits you push to GitHub from the command line. If you'd like to keep your real name private, 
               you can use any text as your Git username. Changing the name associated with your Git commits using git config will only affect future commits and will not change the name used for past commits.
                </div>
                <div>
                You can change the name that is associated with your Git commits using the git config command. The new name you set will be visible in any future commits you push to 
                GitHub from the command line. If you'd like to keep your real name private, you can use any text as your Git username. Changing the name associated with your Git commits using git config will only affect future commits and will not change the name used for past commits.
                </div>
                <div>
                You can change the name that is associated with your Git commits using the git config command. The new name you set will be visible in any future commits you push to GitHub from the command line. If you'd like to keep your real name private, you can use any text as your Git username.
Changing the name associated with your Git commits using git config will only affect future commits and will not change the name used for past commits.
                </div>
          </div>

    </div>
  );
}
