import classNames from 'classnames';

function Skeleton({ nofGreyBoxes }) {
  const boxes = Array(nofGreyBoxes)
    .fill(0)
    .map((_, i) => {
      return <div key={i} />;
    });
}

export default Skeleton;
