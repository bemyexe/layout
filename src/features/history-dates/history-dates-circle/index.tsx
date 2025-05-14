import clsx from 'clsx';

import './style.scss';

interface Props {
  className?: string;
}

export const HistoryDatesCircle = ({className}: Props) => {
  return (
    <div className={clsx('history-dates-circle', className)}>
      HistoryDatesCircle
    </div>
  );
};
