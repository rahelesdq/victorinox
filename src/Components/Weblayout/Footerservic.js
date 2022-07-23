import React from "react";

const Footerservic = ({ showServic }) => {
  console.log("showServic : ", showServic);
  return showServic ? (
    <div class="justify-center items-center lg:justify-between  p-6 xl:m-20 border-gray-300 ">
      <div class="flex  justify-center grid grid-2 xl:space-x-24 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="https://imageengine.victorinox.com/medias/?context=bWFzdGVyfGltYWdlc3w2NTB8aW1hZ2UvcG5nfGltYWdlcy9oYmQvaGYxLzg4MzcwNzU4Mjg3NjYucG5nfDJmZWUxZjZjZTRiMWJhODY0N2Y5OTFlMjlhNmU0MDkxYzlkZWZkZGI2MTFlNzYwZmQ5Njk4NjQ3MTc3NjMwMmY"></img>
          Free Returns
        </div>
        <div>
          <img src="https://imageengine.victorinox.com/medias/?context=bWFzdGVyfGltYWdlc3w3OTV8aW1hZ2UvcG5nfGltYWdlcy9oOTYvaGVjLzg4MzcwNzU2MzIxNTgucG5nfDg4NjZkOGUzNzg1YjQ3NzlmNjk4MTY4NjliYTFlZGZhZGZmYzUyYmZjNmViZjhkNTVjYzk3MTYyOTdmYTAxODA"></img>
          Official Shop
        </div>
        <div>
          <img src="https://imageengine.victorinox.com/medias/?context=bWFzdGVyfGltYWdlc3w5MTZ8aW1hZ2UvcG5nfGgwMS9oYjMvMTM2NDcyMTI3NDA2MzgvbGt3LXVzLnBuZ3xkNjFlNTFiMjQ3MmM2MWE2M2Y1NDZjNDMxOWE5NjBkNmVkNjZiNDk5OWYzMDg2MDJlMWIxZmNkOTZkMThiMDg2"></img>
          Free Shipping
        </div>
        <div>
          <img src="https://imageengine.victorinox.com/medias/?context=bWFzdGVyfGltYWdlc3wxOTIwfGltYWdlL3BuZ3xpbWFnZXMvaGIyL2hhZi84ODExOTQ3MTYzNjc4LnBuZ3xlNzIwZDk4MDlmNjQ2MDVmNjgyOWM5YmViMDhmZTEyMjM1YjU2OWEyY2UxZDYxNDYwNzBlMTMzY2Q1ZWJiNTBh"></img>
          official shop
        </div>
      </div>
    </div>
  ) : null;
};

export default Footerservic;
