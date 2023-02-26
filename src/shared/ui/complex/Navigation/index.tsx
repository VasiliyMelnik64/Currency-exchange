import { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import { NavLink as NavigationLink, useLocation } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Tabs, TabsProps, Tab } from '../../basic/mui';
import { FormattedText } from '../../basic/typography';

function a11yProps(id: number) {
  return {
    id: `navigation-tab-${id}`,
    'aria-controls': `navigation-tabpanel-${id}`,
  };
}

const NavLink = styled(NavigationLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};

  span {
    display: block;
  }
`;

type Props = TabsProps & {
  tabs: { id: number | string; label: string; href: string }[];
};

export const Navigation = ({ tabs, ...props }: Props) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const [value, setValue] = useState(Number(pathname === '/history'));

  const handleChange = (__e: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
          label={
            <NavLink to={tab.href}>
              <FormattedText bold label={tab.label} />
            </NavLink>
          }
          sx={{
            color: theme.colors.dark,
          }}
          {...a11yProps(+tab.id)}
        />
      ))}
    </Tabs>
  );
};
