interface PokemonCardProps {
	name: string;
	imgSrc?: string;
	className: string;
}
function PokemonCard({ name, imgSrc, className }: PokemonCardProps) {
	return (
		<figure className={className}> 
			{imgSrc ? (
				<img src={imgSrc} alt={name} />
			) : (
				<p>???</p>
			)}
			<figcaption>{name}</figcaption>
		</figure>
		)
	}

export default PokemonCard;
