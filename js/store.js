function n(){let n={platform:Deviceinfo.downloadPlatform,storeLink:null};return n.platform==="ios"?n.storeLink="https://appstore.com/minecraft":n.platform==="android"?n.storeLink="https://play.google.com/store/apps/details?id=com.mojang.minecraftpe":n.platform==="windows"?n.storeLink="https://www.microsoft.com/store/apps/9nblggh2jhxj":n.platform=="windowsphone"?n.storeLink="https://www.microsoft.com/store/apps/minecraft-pocket-edition/9wzdncrdzsbb":n.platform==="amazon"?n.storeLink="https://www.amazon.com/gp/mas/dl/android?p=com.mojang.minecraftpe":n.platform=="xbone"?n.storeLink=null:n.platform=="xb360"?n.storeLink=null:n.platform==="mac"?n.storeLink=null:n.platform==="linux"&&(n.storeLink=null),n}import Deviceinfo from"./deviceinfo.js";export{n as getStoreInfo}