import {
  FormattedMessage as ReactIntlFormattedMessage,
  FormattedDate as ReactIntlFormattedDate,
} from 'react-intl';
import { StyledTitle, StyledSubtitle, StyledText } from './styles';

type FormattedMessageProps = {
  capitalized?: boolean;
  bold?: boolean;
  italic?: boolean;
  label?: string | null;
  values?: Record<string, any>;
  children?: any;
  testId?: string;
  privateData?: boolean;
};

type FormattedDateProps = {
  value: string | number | Date | undefined;
};

export const FormattedMessage = ({
  label,
  values,
  children,
  testId,
}: FormattedMessageProps) => {
  if (!label) {
    return null;
  }

  return (
    <ReactIntlFormattedMessage
      id={label}
      data-testid={testId}
      defaultMessage={label}
      values={{ ...values }}
    >
      {children}
    </ReactIntlFormattedMessage>
  );
};

export const FormattedTitle = ({
  capitalized,
  ...props
}: FormattedMessageProps) => {
  return (
    <StyledTitle capitalized={capitalized}>
      <FormattedMessage {...props} />
    </StyledTitle>
  );
};

export const FormattedSubtitle = ({
  capitalized,
  ...props
}: FormattedMessageProps) => {
  return (
    <StyledSubtitle capitalized={capitalized}>
      <FormattedMessage {...props} />
    </StyledSubtitle>
  );
};

export const FormattedText = ({
  capitalized,
  bold,
  italic,
  ...props
}: FormattedMessageProps) => {
  return (
    <StyledText bold={bold} capitalized={capitalized} italic={italic}>
      <FormattedMessage {...props} />
    </StyledText>
  );
};

export const FormattedDate = ({ ...props }: FormattedDateProps) => {
  return (
    <StyledText>
      <ReactIntlFormattedDate {...props} />
    </StyledText>
  );
};
