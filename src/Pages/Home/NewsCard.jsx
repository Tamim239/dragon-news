import { Link } from "react-router-dom"

export const NewsCard = ({news}) => {
    const {image_url, thumbnail_url, title, author, details, _id} = news
  return (
    <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mb-10 p-5">
	<div className="flex items-center justify-between p-3">
		<div className="flex items-center space-x-2">
			<img src={author?.img} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
			<div className="-space-y-1">
				<h2 className="text-sm font-semibold leading-none">{author?.name}</h2>
				<span className="inline-block text-xs leading-none dark:text-gray-600">{author?.published_date}</span>
			</div>
		</div>
        <div className="flex items-center space-x-3">

		<button type="button" title="Bookmark post" className="flex items-center justify-center" fdprocessedid="zrbewi">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
					<path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
				</svg>
			</button>
            <button type="button" title="Share post" className="flex items-center justify-center" fdprocessedid="kyoy0g">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
						<path d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"></path>
					</svg>
				</button>
			</div>
	</div>
	<img src={image_url} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
    <p className="text-xl font-bold my-2">{title}</p>
    {
        details ? <p>{details.slice(0, 200)}<Link to={`/news/${_id}`} className="text-black font-extrabold">Read more...</Link> </p>
        :
        <p>{details}</p>
    }
</div>
  )
}
