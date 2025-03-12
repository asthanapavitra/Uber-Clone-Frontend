import React from 'react'

const LocationSearchPanel = (props) => {
    const locations=[
        "Onyx County , Sector-1 Bisrakh, Greater Noida",
        "Ace City , Sector-1 Bisrakh, Greater Noida",
        "Steller Jeevan , Sector-1 Bisrakh, Greater Noida",
        "Palm Village , Sector-1 Bisrakh, Greater Noida"
    ]
  return (
    <div className='px-8 py-5'>
    {locations.map((location,idx)=>{
        return (
            <div key={idx}>
                <div onClick={()=>{
                    props.setVehiclePanel(true);
                    props.setPanelOpen(false);
                }} className='flex items-center border-2 active:border-black border-gray-50 py-3 px-1 rounded-lg justify-start gap-3 mb-2'>
                    <h4 className='bg-gray-300 h-8 w-11 rounded-full flex items-center justify-center'>
                    <i className="ri-map-pin-fill"></i>
                    </h4>
                    <h5 className='text-xl font-medium'>
                    {location}
                    </h5>
                </div>
            </div>
            
        )
    })}
    
       
        
    </div>
  )
}

export default LocationSearchPanel