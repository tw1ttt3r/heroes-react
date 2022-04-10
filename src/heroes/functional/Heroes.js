function Heroes({ nombreSuper, identidad, image, alt, className, children }) {
  return (
    <section className={className}>
      <h1>{nombreSuper}</h1>
      <h3>{identidad}</h3>
      <img style={{width: "100%"}} src={image} alt={alt} />
      { children }
    </section>
  )
}

export default Heroes;