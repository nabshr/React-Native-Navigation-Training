import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const TabRoute = {
  root: {
    bottomTabs: {
      id: 'BOTTOM_TABS_LAYOUT',
      children: [
        {
          stack: {
            id: 'HOME_TAB',
            children: [
              {
                component: {
                  id: 'HOME_SCREEN',
                  name: 'Home',
                  options: {
                    topBar: {
                      title: {
                        text: 'Home',
                      },
                    },
                  },
                },
              },
            ],
            options: {
              bottomTab: {
                text: 'Home',
                // FontAwesome5: {
                //   name: 'Home',
                // },
              },
            },
          },
        },
        {
          stack: {
            id: 'PROFILE_TAB',
            children: [
              {
                component: {
                  id: 'PROFILE_SCREEN',
                  name: 'Profile',
                  options: {
                    topBar: {
                      title: {
                        text: 'Profile',
                      },
                    },
                  },
                },
              },
            ],
            options: {
              bottomTab: {
                text: 'Profile',
              },
            },
          },
        },
        {
          stack: {
            id: 'EXPLORE_TAB',
            children: [
              {
                component: {
                  id: 'EXPLORE_SCREEN',
                  name: 'Explore',
                  options: {
                    topBar: {
                      title: {
                        text: 'Explore',
                      },
                    },
                  },
                },
              },
            ],
            options: {
              bottomTab: {
                text: 'Explore',
              },
            },
          },
        },
      ],
    },
  },
};

export const LoginRoot = {
  root: {
    sideMenu: {
      // id: 'sideMenu',
      // left: {
      //   component: {
      //     id: 'Drawer',
      //     name: 'Drawer',
      //   },
      // },
      center: {
        stack: {
          id: 'LoginStack',
          children: [
            {
              component: {
                name: 'Login',
                options: {
                  topBar: {
                    title: {
                      text: 'Login',
                    },
                  },
                },
              },
            },
          ],
        },
      },
    },
  },
};

export const sideMenuRoot = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: 'Login',
            options: {
              topBar: {
                title: {
                  text: 'Login',
                },
                leftButtons: {
                  id: 'sideMenu',
                  text: 'Side Menu',
                },
              },
            },
          },
        },
      ],
    },
  },
};
