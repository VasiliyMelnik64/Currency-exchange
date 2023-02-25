import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import FindReplaceIcon from '@mui/icons-material/FindReplace';

type Props = {
  name: 'deleteForever' | 'compareArrows' | 'removeRedEye' | 'findReplace';
};

export const Icon = ({ name, ...props }: Props) => {
  switch (name) {
    case 'deleteForever':
      return <DeleteForeverIcon {...props} />;
    case 'compareArrows':
      return <CompareArrowsIcon {...props} />;
    case 'removeRedEye':
      return <RemoveRedEyeIcon {...props} />;
    case 'findReplace':
      return <FindReplaceIcon {...props} />;
    default:
      return <QuestionMarkIcon {...props} />;
  }
};
