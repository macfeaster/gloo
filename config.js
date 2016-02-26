// Configurations, for example ports for the templates

module.exports = {
    port: 3000,
    defaultTemplate: "_default",
    subdomainToHost: {
    	www: "taitan.datasektionen.se", 
    	gloo: "taitan.datasektionen.se" //if we deploy it to dokku it will get this subdomain, so for easy of use talk to taitan for this aswell.
    },
    supportedEngines: [
        {extension: "jade", engine: "jade"},
        {extension: "handlebars", engine: "handlebars"}
    ]
}