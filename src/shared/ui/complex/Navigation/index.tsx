import { SyntheticEvent, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Tabs, TabsProps, Tab } from '../../basic/mui';
import { FormattedText } from '../../basic/typography';

function a11yProps(id: number) {
  return {
    id: `navigation-tab-${id}`,
    'aria-controls': `navigation-tabpanel-${id}`,
  };
}

type Props = TabsProps & {
  tabs: { id: number | string; label: string; href: string }[];
};

export const Navigation = ({ tabs, ...props }: Props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (__e: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    navigate(tabs[value].href);
  }, [navigate, tabs, value]);

  return (
    <Tabs
      {...props}
      textColor='inherit'
      value={value}
      onChange={handleChange}
      TabIndicatorProps={{
        style: {
          backgroundColor: theme.colors.primary,
        },
      }}
    >
      {tabs.map((tab, i) => (
        <Tab
          key={tab.id}
          label={<FormattedText bold={value === i} label={tab.label} />}
          sx={{
            color: theme.colors.dark,
          }}
          {...a11yProps(+tab.id)}
        />
      ))}
    </Tabs>
  );
};
