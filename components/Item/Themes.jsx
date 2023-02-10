import React from 'react'

const Themes = ({ setColor ,theme}) => {
  return (
      <section className='h-[300px] scroll max-w-[480px]  overflow-y-scroll '>
          <style
              dangerouslySetInnerHTML={{
                  __html:
                      "\n\t*   .scroll {\n      overflow-y: scroll;\n     \n      margin: 10px 5px; \n  }\n  .scroll::-webkit-scrollbar {\n      width:10px;\n  }\n  .scroll::-webkit-scrollbar-track {\n      -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3); \n      border-radius:5px;\n  }\n  .scroll::-webkit-scrollbar-thumb {\n      border-radius:5px;\n      -webkit-box-shadow: inset 0 0 6px gray; \n  }\n"
              }}
          />
          {
              Object.keys(theme).map((key, index) => {
                  // console.log(key)
                  return (
                      <div key={index} className=' justify-center items-center '>
                          <h2 className='flex justify-start mx-6 py-2'>{key}</h2>
                          <div className='grid grid-cols-4   mb-3  '>
                              {
                                  theme[key].map((item, index) => {
                                      return (
                                          <div key={index} onClick={() => setColor(item.name)} className='text-center mb-3 flex justify-center'>
                                              <div >

                                                  <img src={item.URL} alt="" className='w-[50px] md:w-[100px] h-[50px] rounded-full' />
                                                  <p className='text-[12px] flex justify-center'>{item.name.toUpperCase()}</p>
                                              </div>
                                          </div>
                                      )
                                  }
                                  )
                              }
                          </div>
                      </div>
                  )
              }
              )
          }
      </section>
  )
}

export default Themes