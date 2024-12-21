import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const CustomMenu = () => {
    return (
        <AppBar
            position="static"
            style={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                padding: '10px 20px',
            }}
        >
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo à gauche */}
                <Typography
                    variant="h6"
                    style={{
                        fontFamily: 'cursive',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                    }}
                >
                    Tamby Mampionona
                </Typography>

                {/* Liens à droite */}
                <Box
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '30px', // Espacement entre les liens
                        flex: 1, // Pousse les liens à l'extrême droite
                    }}
                >
                    {['Home', 'Experience & Education', 'Projects', 'Contact Me'].map((text) => (
                        <Typography
                            key={text}
                            variant="body1"
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                textTransform: 'uppercase',
                                textDecoration: 'none', // Pas de soulignement
                                transition: 'color 0.3s',
                            }}
                            onMouseEnter={(e) => (e.target.style.color = '#00FF00')} // Animation au survol
                            onMouseLeave={(e) => (e.target.style.color = 'white')}
                            component="a"
                            href={`#${text.toLowerCase().replace(/ /g, '')}`}
                        >
                            {text}
                        </Typography>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default CustomMenu;
