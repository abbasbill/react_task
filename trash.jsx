<div className="Main w-[1440px] h-[1024px] max-w[100%] border border-red-500 border-1px border-solid relative bg-neutral-900">
  <div className="border border-red-500 left-[113px] top-[43px] absolute text-white text-5xl font-black leading-tight">
    APP
  </div>

  {movieData ? (
    movieData.map((movie, index) => {
      const { like, photo, title, user_id, username } = movie;
      return (
        <div
          key={index}
          className=" w-[1216px] h-24 left-0 top-0 absolute justify-center items-center inline-flex"
        >
          <div className="ContentMasterLarge1Tag w-[1216px] h-24 relative rounded-2xl border border-white border-opacity-10 flex-col justify-start items-start flex">
            <img
              className="Rectangle1534 w-[118px] h-16 rounded-lg"
              src={photo}
            />
            <div className="Title w-[364px] text-white text-xl font-thin leading-7">
              {title}
            </div>
            <div className="Flair" />
            <div className="Avatar flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="Container justify-center items-center gap-2 inline-flex">
                <div className="AvatarStyleXsmallWithImage w-6 h-6 rounded-[40px] justify-center items-center flex">
                  <div className="AvatarMasterXsmall w-6 h-6 rounded-[100px] justify-center items-center inline-flex">
                    <img
                      className="Avatar w-6 h-6 relative rounded-[40px]"
                      src="https://via.placeholder.com/24x24"
                    />
                  </div>
                </div>
                <div className="Sjkj3987423kjbdfsf text-lime-300 text-base font-thin leading-tight">
                  {username}
                </div>
              </div>
            </div>
            <div className="Likes h-5 relative">
              <div className=" left-0 top-0 absolute text-right text-white text-base font-thin leading-tight">
                {like}
              </div>
              <div className="MediaIcons w-5 h-5 left-[33px] top-0 absolute flex-col justify-start items-start inline-flex">
                <div className="Group w-2.5 h-[12.50px] relative"></div>
              </div>
            </div>
            <div className=" text-stone-500 text-sm font-thin">01</div>
          </div>
        </div>
      );
    })
  ) : (
    <p className="text-white border-red-500">No movie</p>
  )}
  <div className="Item w-[1216px] h-[544px] left-[112px] top-[308px] absolute">
        <div className="Content w-[1216px] h-24 left-0 top-0 absolute justify-center items-center inline-flex">
          <div className="ContentMasterLarge1Tag w-[1216px] h-24 relative rounded-2xl border border-white border-opacity-10 flex-col justify-start items-start flex">
            <img
              className="Rectangle1534 w-[118px] h-16 rounded-lg"
              src="https://via.placeholder.com/118x64"
            />
            <div className="Title w-[364px] text-white text-xl font-thin leading-7">
              Rune raises $100,000 for marketing through NFT butterflies sale
            </div>
            <div className="Flair" />
            <div className="Avatar flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="Container justify-center items-center gap-2 inline-flex">
                <div className="AvatarStyleXsmallWithImage w-6 h-6 rounded-[40px] justify-center items-center flex">
                  <div className="AvatarMasterXsmall w-6 h-6 rounded-[100px] justify-center items-center inline-flex">
                    <img
                      className="Avatar w-6 h-6 relative rounded-[40px]"
                      src="https://via.placeholder.com/24x24"
                    />
                  </div>
                </div>
                <div className="Sjkj3987423kjbdfsf text-lime-300 text-base font-thin leading-tight">
                  ninjanft
                </div>
              </div>
            </div>
            <div className="Likes h-5 relative">
              <div className=" left-0 top-0 absolute text-right text-white text-base font-thin leading-tight">
                254
              </div>
              <div className="MediaIcons w-5 h-5 left-[33px] top-0 absolute flex-col justify-start items-start inline-flex">
                <div className="Group w-2.5 h-[12.50px] relative"></div>
              </div>
            </div>
            <div className=" text-stone-500 text-sm font-thin">01</div>
          </div>
        </div>
        <div className="Content w-[1216px] h-24 left-0 top-[112px] absolute rounded-2xl border border-white border-opacity-10 flex-col justify-start items-start inline-flex">
          <img
            className="Rectangle1534 w-[118px] h-16 rounded-lg"
            src="https://via.placeholder.com/118x64"
          />
          <div className="Title w-[364px] text-white text-xl font-thin leading-7">
            The Cryptocurrency Trading Bible
          </div>
          <div className="Avatar flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="Container justify-center items-center gap-2 inline-flex">
              <div className="AvatarStyleXsmallWithImage w-6 h-6 justify-center items-center flex">
                <div className="AvatarMasterXsmall w-6 h-6 rounded-[100px] justify-center items-center inline-flex">
                  <img
                    className="Avatar w-6 h-6 relative rounded-[100px]"
                    src="https://via.placeholder.com/24x24"
                  />
                </div>
              </div>
              <div className="Sjkj3987423kjbdfsf text-lime-300 text-base font-thin leading-tight">
                deniscrypto
              </div>
            </div>
          </div>
          <div className="Likes h-5 relative">
            <div className=" left-0 top-0 absolute text-right text-white text-base font-thin leading-tight">
              203
            </div>
            <div className="MediaIcons w-5 h-5 left-[33px] top-0 absolute flex-col justify-start items-start inline-flex">
              <div className="Group w-2.5 h-[12.50px] relative"></div>
            </div>
          </div>
          <div className=" text-stone-500 text-sm font-thin">01</div>
        </div>
        <div className="Content w-[1216px] h-24 left-0 top-[224px] absolute justify-center items-center inline-flex">
          <div className="ContentMasterLarge1Tag w-[1216px] h-24 relative rounded-2xl border border-white border-opacity-10 flex-col justify-start items-start flex">
            <img
              className="Rectangle1534 w-[118px] h-16 rounded-lg"
              src="https://via.placeholder.com/118x64"
            />
            <div className="Title w-[364px] text-white text-xl font-thin leading-7">
              Designing our new company brand: Meta
            </div>
            <div className="Avatar flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="Container justify-center items-center gap-2 inline-flex">
                <div className="AvatarStyleXsmallWithImage w-6 h-6 justify-center items-center flex">
                  <div className="AvatarMasterXsmall w-6 h-6 rounded-[100px] justify-center items-center inline-flex">
                    <img
                      className="Avatar w-6 h-6 relative rounded-[100px]"
                      src="https://via.placeholder.com/24x24"
                    />
                  </div>
                </div>
                <div className="Sjkj3987423kjbdfsf text-lime-300 text-base font-thin leading-tight">
                  meta_world98
                </div>
              </div>
            </div>
            <div className="Likes h-5 relative">
              <div className=" left-0 top-0 absolute text-right text-white text-base font-thin leading-tight">
                134
              </div>
              <div className="MediaIcons w-5 h-5 left-[30px] top-0 absolute flex-col justify-start items-start inline-flex">
                <div className="Group w-2.5 h-[12.50px] relative"></div>
              </div>
            </div>
            <div className=" text-stone-500 text-sm font-thin">03</div>
          </div>
        </div>
        <div className="Content w-[1216px] h-24 left-0 top-[336px] absolute justify-center items-center inline-flex">
          <div className="ContentMasterLarge1Tag w-[1216px] h-24 relative rounded-2xl border border-white border-opacity-10 flex-col justify-start items-start flex">
            <img
              className="Rectangle1534 w-[118px] h-16 rounded-lg"
              src="https://via.placeholder.com/118x64"
            />
            <div className="Title w-[364px] text-white text-xl font-thin leading-7">
              Connect media partners, earn exciting rewards for today
            </div>
            <div className="Avatar flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="Container justify-center items-center gap-2 inline-flex">
                <div className="AvatarStyleXsmallWithImage w-6 h-6 justify-center items-center flex">
                  <div className="AvatarMasterXsmall w-6 h-6 rounded-[100px] justify-center items-center inline-flex">
                    <img
                      className="Avatar w-6 h-6 relative rounded-[100px]"
                      src="https://via.placeholder.com/24x24"
                    />
                  </div>
                </div>
                <div className="Sjkj3987423kjbdfsf text-lime-300 text-base font-thin leading-tight">
                  kingdom43world
                </div>
              </div>
            </div>
            <div className="Likes w-[43px] h-5 relative">
              <div className=" left-0 top-0 absolute text-right text-white text-base font-thin leading-tight">
                99
              </div>
              <div className="MediaIcons w-5 h-5 left-[23px] top-0 absolute flex-col justify-start items-start inline-flex">
                <div className="Group w-2.5 h-[12.50px] relative"></div>
              </div>
            </div>
            <div className=" text-stone-500 text-sm font-thin">04</div>
          </div>
        </div>
        <div className="Content w-[1216px] h-24 left-0 top-[448px] absolute justify-center items-center inline-flex">
          <div className="ContentMasterLarge1Tag w-[1216px] h-24 relative rounded-2xl border border-white border-opacity-10 flex-col justify-start items-start flex">
            <img
              className="Rectangle1534 w-[118px] h-16 rounded-lg"
              src="https://via.placeholder.com/118x64"
            />
            <div className="Title w-[364px] text-white text-xl font-thin leading-7">
              Designing a more effective proejcts
            </div>
            <div className="Avatar flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="Container justify-center items-center gap-2 inline-flex">
                <div className="AvatarStyleXsmallWithImage w-6 h-6 justify-center items-center flex">
                  <div className="AvatarMasterXsmall w-6 h-6 rounded-[100px] justify-center items-center inline-flex">
                    <div className="Avatar w-6 h-6 rounded-[100px] justify-center items-center inline-flex">
                      <div className="MediaAvatar w-6 h-6 relative rounded-[100px] flex-col justify-start items-start flex">
                        <div className="Group w-[38.93px] h-[33.81px] relative"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Sjkj3987423kjbdfsf text-lime-300 text-base font-thin leading-tight">
                  sjkj3987423kjbdfsf
                </div>
              </div>
            </div>
            <div className="Likes w-11 h-5 relative">
              <div className=" left-0 top-0 absolute text-right text-white text-base font-thin leading-tight">
                88
              </div>
              <div className="MediaIcons w-5 h-5 left-[24px] top-0 absolute flex-col justify-start items-start inline-flex">
                <div className="Group w-2.5 h-[12.50px] relative"></div>
              </div>
            </div>
            <div className=" text-stone-500 text-sm font-thin">05</div>
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
      <div className="TitleTime w-[1216px] h-[88px] py-4 left-[112px] top-[169px] absolute justify-center items-center gap-[433px] inline-flex">
        <div className="Profile text-white text-[40px] font-thin leading-[48px]">
          Today’s leaderboard
        </div>
        <div className="Time w-[418px] h-14 relative">
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
      </div>
      <div className="HeaderNotLoggined w-[1216px] h-24 left-[112px] top-[1px] absolute">
        <div className="Rectangle5 w-[1440px] h-24 left-[-111px] top-[99px] absolute" />
        <div className="Buttons left-[1078px] top-[24px] absolute flex-col justify-start items-start inline-flex">
          <div className="ButtonStyleWithLabelPrimaryLarge flex-col justify-start items-start flex">
            <div className="ButtonMasterLarge px-6 py-3 bg-lime-400 rounded-[40px] flex-col justify-center items-center gap-2.5 flex">
              <div className="Container h-6 justify-center items-center gap-1 inline-flex">
                <div className="IconsLeft w-6 h-6 justify-center items-center flex">
                  <div className="Group2 w-6 h-6 relative"></div>
                </div>
                <div className="Label text-zinc-950 text-base font-thin leading-tight">
                  Logout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>;
