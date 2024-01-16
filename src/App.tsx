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
          {/* Place your code here */}
          
        </div>
      </div>
    </div>

    </>
  )
}

export default App
