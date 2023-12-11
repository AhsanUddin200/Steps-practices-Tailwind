
import './App.css';

function App() {
  const menu = [
    {
      title: "Biryani",
      description: "Mazedar beef nalli biryani with extra masala and chatni",
      price: 500,
      colddrink: true,
      image: "/biryani.jpg"
    },
    {
      title: "Tikka",
      description: "Mazedar beef nalli biryani with extra masala and chatni",
      price: 500,
      colddrink: true,
      image: "/biryani.jpg"
    },
    {
      title: "Malai Boti",
      description: "Mazedar beef nalli biryani with extra masala and chatni",
      price: 500,
      colddrink: true,
      image: "/biryani.jpg"
    },
    {
      title: "Bihari Kabab",
      description: "Mazedar beef nalli biryani with extra masala and chatni",
      price: 500,
      colddrink: true,
      image: "/biryani.jpg"
    },
    {
      title: "Fish and Chips",
      description: "Mazedar beef nalli biryani with extra masala and chatni",
      price: 500,
      colddrink: true,
      image: "/biryani.jpg"
    },
  ]
  return (
    
    <div className="flex justify-center">
    <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {
        menu.map((item) => {
          return (
            <div className=" border rounded-md p-5 shadow-2xl">
            
              <div className="mt-5">
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <p>Cold Drink : {item.colddrink ? "Pepsi" : "Water"}</p>
              </div>
            </div>
          )
        })
      }

    </div>
  </div>
    
  );
}

export default App;
