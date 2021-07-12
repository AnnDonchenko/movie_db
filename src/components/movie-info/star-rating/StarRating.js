import Rating from '@material-ui/lab/Rating';

export default function StarRating({voteAverage}) {
    const newVoteValue = () => {
        return voteAverage * 4 / 10;
    }
    return (
        <p>
            <Rating name="size-medium" defaultValue={newVoteValue()} max={4} precision={0.1}/>
        </p>
    );
}