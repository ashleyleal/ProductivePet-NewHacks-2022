// This file contains the metadata of the extensions; it's separate from the main JS logic file, which is script.js
{
  "manifest_version": 3, //not sure what version is
  "name": "Productive Pet", // name of extension
  "description": "Base Level Extension", // type of extension
  "content_scripts":[
    {
      "js" : ["init.js"] //inject scripts
    }
  ]
  "version": "1.0", // duh
  "action": {
    "default_popup": "index.html", //default page (?) 
    "default_icon": "pp_extension.png"  // icon image (The default_icon is what appears in the extensions toolbar, and the other icons appear in different parts of the Chrome Web Store.)
  }
}