import tailwindTutorialImageUrl from './assets/tailwind-tutorial-image.png'


function App() {

  return (
    <>
    <div className="flex gap-8">
      <div className="flex-1 flex flex-col gap-8">
        <div className="text-xl">
          Welcome! implement this card using Tailwind on the right. <br/> Ignore all details, icons, just focus on the layout
        </div>
        <div>
          <img src={tailwindTutorialImageUrl} alt="Tailwind tutorial" width="400px" />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-8">
        <div className="text-xl">
          Implement it here
        </div>
        <div className="flex flex-col">
          <div>
            <h1 className="text-2xl font-semibold">
              Create an account
            </h1>
            <p className="text-slate-400">
              Enter your email below to create your account
            </p>
            <div className="flex gap-8">
              <button className="flex-1 p-2 rounded-lg text-center border border-slate-400">
                Github
              </button>
              <button className="flex-1 p-2 rounded-lg text-center border border-slate-400">
                Google
              </button>

            </div>

          </div>
          
        </div>
      </div>
    </div>

    </>
  )
}

export default App
