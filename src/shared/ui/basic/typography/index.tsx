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
  color?: string;
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
  bold = true,
  ...props
}: FormattedMessageProps) => {
  return (
    <StyledTitle bold={bold} {...props}>
      <FormattedMessage {...props} />
    </StyledTitle>
  );
};

export const FormattedSubtitle = ({ ...props }: FormattedMessageProps) => {
  return (
    <StyledSubtitle {...props}>
      <FormattedMessage {...props} />
    </StyledSubtitle>
  );
};

export const FormattedText = ({ ...props }: FormattedMessageProps) => {
  return (
    <StyledText {...props}>
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
