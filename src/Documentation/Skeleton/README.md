
# SkeletonLoader

Display a placeholder preview of your content before the data gets loaded.
## Props
- **isLoading** -> Value: `true` | `false`. Defines whether the skeleton or the children component will be displayed.
- **children** -> Value: `node`. It is the component that will be displayed when isLoading is false.
- **align** -> Value: `"left"`|`"center"`|`"right"`. It will align the component towards the direction indicated as string.
- **width** -> Type of value: `number`|`string`. It is the width that the Skeleton will have, if a number is assigned it will take pixels as the unit of measurement.
- **height** -> Type of value: `number`|`string`. Idem width, but for the height of the Skeleton.
- **variant** -> Value: `"rect"`|`"text"`|`"circle"`. It is the type of content to be rendered, by default it is `"rect"`.
- **animation** -> Value: `"wave"`|`"pulse"`|`false`. It is the animation effect of the Skeleton, by default it is `"wave"`, if it is `false` it will not have animation.

## Usage/Examples

```javascript
//Current Path: /src/Components/Card/CustomCard

import SkeletonLoader from '../Loader/SkeletonLoader';
import { useState } from 'react';

const CustomCard = () => {
  const [loading, setLoading] = useState(true)
  const [card, setCard] = useState(emptyCard)
  useEffect(() => {
      getCardContent().then(cardData => {
          setCard(cardData);
          setLoading(false)
      })
  })
  return (
      <Card>
        <SkeletonLoader isLoading={loading} width={345} height={140}>
            <CardImage src={card.image}>
        </SkeletonLoader>
        <SkeletonLoader isLoading={loading} variant="text" height={30}>
            <CardTitle title={card.title}>
        </SkeletonLoader>
        <SkeletonLoader isLoading={loading} variant="text" height={80}> 
            <CardDescription description={card.description}>
        </SkeletonLoader>
      </Card>
  )
}
```
![Alt text](https://lh5.googleusercontent.com/0h_CVX2HWpGp1h0EF9PZb6bPyc-W8XdO9dbR5-C2O3pV7xeymRK6nK7dl6MUWX-wxx1hjhvWVNvfkg=w861-h672)