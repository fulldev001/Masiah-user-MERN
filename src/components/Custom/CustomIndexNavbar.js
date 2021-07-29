import React from 'react';
// nodejs library that concatenates strings
import classnames from 'classnames';
// reactstrap components
import {
  Collapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from 'reactstrap';
import {Link} from 'react-router-dom';

function CustomIndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle('nav-open');
  };

  const navLinks = [
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Our Team',
      link: '/our-team'
    },
    {
      name: 'Blog',
      link: '/blog'
    },
    {
      name: 'Collaborate',
      link: '/collaborate'
    },
    {
      name: 'Services',
      link: '/services'
    },
    // {
    //   name: 'Join Us',
    //   link: '/join-us'
    // },
    {
      name: 'Contact Us',
      link: '/contact-us'
    }
  ];

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor('');
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor('navbar-transparent');
      }
    };

    window.addEventListener('scroll', updateNavbarColor);

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames('fixed-top', navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <Link to="/" className="navbar-brand" title="Masiaha">Masiaha</Link> 
          <button
            aria-expanded={navbarCollapse}
            className={classnames('navbar-toggler navbar-toggler', {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            {navLinks.map((navLink, i) => (
              <NavItem key={i}>
                <Link to={navLink.link} className="nav-link">
                  {navLink.name}
                </Link>
              </NavItem>
            ))}

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.github.com/CreativeTimOfficial/paper-kit-react?ref=creativetim"
                target="_blank"
                title="Star on GitHub"
              >
                <i className="fa fa-linkedin" />
                <p className="d-lg-none">Linkedin</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomIndexNavbar;
