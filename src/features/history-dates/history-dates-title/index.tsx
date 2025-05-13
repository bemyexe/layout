import clsx from 'clsx';

import './style.scss';

interface Props {
  className?: string;
}

export const HistoryDatesTitle = ({className}: Props) => {
  return (
    <h2 className={clsx('history-dates-title', className)}>
      Исторические <span>даты</span>
    </h2>
  );
};
