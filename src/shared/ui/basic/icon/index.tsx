import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import FindReplaceIcon from '@mui/icons-material/FindReplace';

type Props = {
  fill?: string;
  name: 'deleteForever' | 'compareArrows' | 'removeRedEye' | 'findReplace';
};

export const Icon = ({ name, fill, ...props }: Props) => {
  switch (name) {
    case 'deleteForever':
      return (
        <DeleteForeverIcon
          {...props}
          sx={{
            fill,
          }}
        />
      );
    case 'compareArrows':
      return (
        <CompareArrowsIcon
          {...props}
          sx={{
            fill,
          }}
        />
      );
    case 'removeRedEye':
      return (
        <RemoveRedEyeIcon
          {...props}
          sx={{
            fill,
          }}
        />
      );
    case 'findReplace':
      return (
        <FindReplaceIcon
          {...props}
          sx={{
            fill,
          }}
        />
      );
    default:
      return (
        <QuestionMarkIcon
          {...props}
          sx={{
            fill,
          }}
        />
      );
  }
};
