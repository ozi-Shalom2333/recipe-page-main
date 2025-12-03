

const Nutrition = () => {
  return (
    <div className=" flex flex-col gap-4 px-6">
      <h2 className="text-[32px] md:text-[30px] font-young-serif font-bold text-custom-brown">Nutrition</h2>
      <p className="font-outfit md:text-sm text-custom-stone90 font-medium">
        The table below shows nutritional values per serving without the additional fillings.
      </p>
      <section className="flex flex-col gap-6 md:text-sm">
        <div className="border-b-2 w-full h-6 border-b-custom-stone150 flex py-6">
            <div className="w-1/2 flex items-center justify-center">
               Calories 
            </div>
            <div className="w-1/2 flex items-center justify-center">
               277kcal
            </div>
        </div>
        <div className="border-b-2 w-full h-6 border-b-custom-stone150 flex py-6">
            <div className="w-1/2 flex items-center justify-center">
               Carbs
            </div>
            <div className="w-1/2 flex items-center justify-center">
              0g
            </div>
        </div>
        <div className="border-b-2 w-full h-6 border-b-custom-stone150 flex py-6">
            <div className="w-1/2 flex items-center justify-center">
               Protein
            </div>
            <div className="w-1/2 flex items-center justify-center">
               20g
            </div>
        </div>
        <div className=" w-full h-6 border-b-custom-stone150 flex py-6">
            <div className="w-1/2 flex items-center justify-center">
              Fat
            </div>
            <div className="w-1/2 flex items-center justify-center">
              22g
            </div>
        </div>
      </section>
    </div>
  )
}

export default Nutrition
