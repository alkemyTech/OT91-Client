import { Skeleton } from '@material-ui/lab';

const SkeletonLoader = ({isLoading, children, align, ...restProps}) => {
    const alignments = {
        left: '0 auto 0 0',
        center: '0 auto',
        right: '0 0 0 auto'
    }
    return (
        <>
        {isLoading ?
            <Skeleton animation="wave" variant="rect" style={{margin: alignments[align]}} {...restProps}/>
            :
            children}
        </>
    )
}

export default SkeletonLoader;
