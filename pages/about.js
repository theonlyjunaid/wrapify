import React from 'react'

const about = () => {
  return (
    <div className='w-5/6 max-w-[1080px] mx-auto my-10 min-h-[50vh] flex items-center'>

      <div>
         <h2 className='text-2xl font-bold justify-center text-center'>About Us!</h2>
        <h3 className='text-xl font-bold' style={{ textAlign: "center" }}>
          Welcome To <span id="W_Name1">mzart</span>
        </h3>
        <p>
          <span id="W_Name2">mzart</span> is a Professional{" "}
          <span id="W_Type1">ecommerce</span> Platform. Here we will provide you only
          interesting content, which you will like very much. We're dedicated to
          providing you the best of <span id="W_Type2">ecommerce</span>, with a focus
          on dependability and <span id="W_Spec">Best mobile skin</span>. We're
          working to turn our passion for <span id="W_Type3">ecommerce</span> into a
          booming{" "}
          
            online website

          . We hope you enjoy our <span id="W_Type4">ecommerce</span> as much as we
          enjoy offering them to you.
        </p>
        <p>
          I will keep posting more important posts on my Website for all of you.
          Please give your support and love.
        </p>
        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          Thanks For Visiting Our Site
          <br />
          <br />
          <span
            style={{
              color: "blue",
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            Have a nice day!
          </span>
        </p>
      </div>

    </div>
  )
}

export default about