import React, {useEffect, useState} from "react";
import MkdSDK from "../utils/MkdSDK";

const AdminDashboardPage = () => {

  const [movieData, setMovieData] = useState()
  useEffect(() => {
    // Create an instance of MkdSDK
    const sdk = new MkdSDK();

    // Define the payload for the API call (if needed)
    const payload = {
    "payload": {},
    "page": 1,
    "limit": 10

    };

    // Call the callRestAPI function with the GET method
    const fetchData = async () => {
      console.log(payload)
      try {
        const response = await sdk.callRestAPI(payload, "PAGINATE");
        if(response){
          setMovieData(response?.list)
          console.log(response.list)
        }
      } catch (error) {
        console.error("API call failed:", error.message);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts

  
  }, []); 
  return (
    <div className="Main w-[1440px] h-[1024px] relative bg-neutral-900">
      <div className="Item w-[1216px] h-[544px] left-[112px] top-[308px] absolute">
        <div className="Content w-[1216px] h-24 left-0 top-0 absolute">
        
        </div>
        <div className="Content w-[1216px] h-24 left-0 top-[112px] absolute rounded-2xl border border-white border-opacity-10">
          <div className="Likes w-[53px] h-5 left-[1139px] top-[38px] absolute">
            <div className=" left-0 top-0 absolute text-right text-white text-base font-thin leading-tight">
              203
            </div>
            <div className="MediaIcons w-5 h-5 left-[33px] top-0 absolute">
              <div className="Group w-2.5 h-[12.50px] left-[5.02px] top-[3.75px] absolute"></div>
            </div>
          </div>
          <div className="Avatar left-[596px] top-[36px] absolute flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="Container justify-center items-center gap-2 inline-flex">
              <div className="AvatarStyleXsmallWithImage w-6 h-6 relative">
                <div className="AvatarMasterXsmall w-6 h-6 left-0 top-0 absolute rounded-[100px]">
                  <img
                    className="Avatar w-6 h-6 left-0 top-0 absolute rounded-[100px]"
                    src="https://via.placeholder.com/24x24"
                  />
                </div>
              </div>
              <div className="Sjkj3987423kjbdfsf text-lime-300 text-base font-thin leading-tight">
                deniscrypto
              </div>
            </div>
          </div>
          <div className="Title w-[364px] left-[197px] top-[34px] absolute text-white text-xl font-thin leading-7">
            The Cryptocurrency Trading Bible
          </div>
          <img
            className="Rectangle1534 w-[118px] h-16 left-[63px] top-[16px] absolute rounded-lg"
            src="https://via.placeholder.com/118x64"
          />
          <div className=" left-[24px] top-[39px] absolute text-stone-500 text-sm font-thin">
            01
          </div>
        </div>
        
        
        
      </div>
      <div className="HeaderTable w-[1216px] h-[35px] left-[112px] top-[265px] absolute rounded-lg">
        <div className=" left-[24px] top-[8px] absolute text-stone-500 text-base font-thin">
          #
        </div>
        <div className="Author left-[596px] top-[8px] absolute text-stone-500 text-base font-thin">
          Author
        </div>
        <div className="MostLiked left-[1115px] top-[8px] absolute text-stone-500 text-base font-thin">
          Most Liked
        </div>
        <div className="Title left-[63px] top-[8px] absolute text-stone-500 text-base font-thin">
          Title
        </div>
        <div className="MediaIcons w-6 h-6 left-[1192px] top-[6px] absolute" />
      </div>
      <div className="TitleTime w-[1216px] h-[88px] left-[112px] top-[169px] absolute">
        <div className="Time w-[418px] h-14 left-[798px] top-[16px] absolute">
          <div className="May2022 left-[24px] top-[18px] absolute text-white text-base font-thin leading-tight">
            30 May 2022
          </div>
          <div className="Type w-[156px] h-[25px] px-2.5 py-1 left-[151px] top-[16px] absolute bg-lime-400 rounded-lg justify-center items-center gap-2 inline-flex">
            <div className="SubmissionsOpen text-black text-sm font-thin uppercase">
              Submissions OPEN
            </div>
          </div>
          <div className="3419 left-[340px] top-[18px] absolute text-white text-base font-thin leading-tight">
            11:34
          </div>
          <div className="Ellipse20 w-1 h-1 left-[320px] top-[26px] absolute bg-stone-500 rounded-full" />
          <div className="Ellipse21 w-1 h-1 left-[131px] top-[26px] absolute bg-stone-500 rounded-full" />
        </div>
        <div className="Profile left-0 top-[20px] absolute text-white text-[40px] font-thin leading-[48px]">
          Today’s leaderboard
        </div>
      </div>
      <div className="HeaderNotLoggined w-[1216px] h-24 left-[112px] top-[1px] absolute">
        <div className="Rectangle5 w-[1440px] h-24 left-[-111px] top-[99px] absolute" />
        <div className="Buttons left-[1078px] top-[24px] absolute flex-col justify-start items-start inline-flex">
          <div className="ButtonStyleWithLabelPrimaryLarge flex-col justify-start items-start flex">
            <div className="ButtonMasterLarge px-6 py-3 bg-lime-400 rounded-[40px] flex-col justify-center items-center gap-2.5 flex">
              <div className="Container h-6 justify-center items-center gap-1 inline-flex">
                <div className="IconsLeft w-6 h-6 relative">
                  <div className="Group2 w-6 h-6 left-0 top-0 absolute"></div>
                </div>
                <div className="Label text-zinc-950 text-base font-thin leading-tight">
                  Logout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="App left-[113px] top-[43px] absolute text-white text-5xl font-black leading-tight">
        APP
      </div>
    </div>
  );
};

export default AdminDashboardPage;
