import landingImage from "../assets/landing.png"

const HomePage = () => {
    return(
        <div className="flex flex-col gap-12">
             <div className="bg-write rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                    Tuck into a takeway today
                </h1>
                <span className="text-xl">Food is just a click away!</span>
             </div>
             <div className="grid md:grid-cols-2 gap-5">
                <img src={landingImage}/>
                <div className="flex flex-col items-center justify-center gap-4">

                </div>
             </div>
        </div>
    );
};

export default HomePage;