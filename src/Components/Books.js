export const Book = ({title, image, author, children, id, getBook, number}) => {
    return (
        <article className="book">
            <div className="image-container">
                <img
                    src={image}
                    width="300"
                    height="200"
                    alt={"book cover photo " + title}
                />
                <div className="block">{/* Empty tag used for cropping the image to prevent showing thin white borders. */}</div>
            </div>
            <h2>{title}</h2>
            <h4>{author}</h4>
            <span className="number">{`# ${number + 1}`}</span>
            <button className="getbook" onClick={()=>getBook(id)}>Get Book</button>
            {children}
        </article>
    )
}