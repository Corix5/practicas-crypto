const {app, BrowserWindow, Menu} = require('electron');
const url = require('url');
const path = require('path');

if(process.env.NODE_ENV !== 'production'){
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, '../node_modules', '.bin', 'electron')

    })
}

let mainWindow;
let newProductWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 860,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }))

    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);

    mainWindow.on('closed', () => {
        app.quit();
    });
});

function createNewProductWindow(){
    newProductWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            width: 500,
            height: 430,
            title: 'inicio'
        }

    });
    newProductWindow.setMenu(null);
    newProductWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/new-product.html'),
        protocol: 'file',
        slashes: true
    }))
    newProductWindow.on('closed', () => {
        newProductWindow = null;
    });
}

function createNewVerificationWindow(){
    newVerifyWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            width: 500,
            height: 430,
            title: 'inicio'
        }

    });
    // newProductWindow.setMenu(null);
    newVerifyWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/verificacion.html'),
        protocol: 'file',
        slashes: true
    }))
    newVerifyWindow.on('closed', () => {
        newVerifyWindow = null;
    });
}

const templateMenu = [
    {
        label: 'Firma y verificación',
        submenu: [
            {
                label: 'Firmar',
                accelerator: 'Ctrl+n',
                click(){
                   createNewProductWindow(); 
                }
            },

            {
                label: 'Verificar',
                accelerator: 'Ctrl+x',
                click(){
                    createNewVerificationWindow()   
                }
            }
            
        ]
    },
    {
        label: 'Cifrado y Descifrado',
        submenu: [
            {
                label: 'Cifrar',
                accelerator: 'Ctrl+z',
                click(){
                   
                }
            },

            {
                label: 'Descifrar',
                accelerator: 'Ctrl+y',
                click(){
                    
                }
            }
            
        ]
    }
];

if(process.platform ===  'darwin'){
    templateMenu.unshift({
        label: app.getName()
    });
}

if(process.env.NODE_NEV !== 'production'){
    templateMenu.push({
        label: 'Devtools',
        submenu: [
            {
                label: 'show/hide Dev Tools',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    })
}