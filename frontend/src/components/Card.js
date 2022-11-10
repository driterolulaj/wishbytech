
const Card = ()=>{

return(
	
<div className="product-card"><img className="product-img" src="https://image.shutterstock.com/z/stock-photo-vintage-red-shoes-on-white-background-92008067.jpg" alt="product" width="100%"/>
  <div className="product-info">
    <h3 className="product-title">product title</h3>
    <div className="product-price"><span className="product-price-new">$ 123</span><span className="product-price-old">$ 456</span></div>
    <div className="product-rate"><i className="fas fa-star icon active"></i><i className="fas fa-star icon active"></i><i className="fas fa-star-half-alt icon active"></i><i className="far fa-star icon"></i><i className="far fa-star icon"></i></div>
    <div className="product-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam deleniti corrupti quam delectus placeat nihil, nobis dolore maxime ipsum sequi numquam, architecto accusantium quia excepturi, rerum labore harum iure.</div>
    <div className="product-btn">
			<button className="icon">Me shume</button>

      <button>add to cart</button>
    </div>
  </div>
</div>
)

}

export default Card