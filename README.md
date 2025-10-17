actions:  
	1 dispatches: todos las acciones que modifican el store
	2 http: Todas las llamadas a algún API, backend etc 
	3 tasks: todos los procesos que queremos que se ejecuten con periodicidad o por background (actualización de datos, notificaciones etc)
components: componentes tontos, solo muestran información
hooks: hooks customisados 
configs: todos los archivos de configuración, puede ser configuración para un canal de notificaciones, un websocket, configuración de algún servicio etc
constans: todas las constantes del sistema 
containers:la unificación de componentes, aquí si se trabaja los datos y se ejeceutan procesos y se maquetan las diferentes pantallas
contexts: contextos del sistema 
data: todo lo que tiene que ver con la data que se consume en la app, como el store principal, si utilizamos sql lite etc etc
navigators: todas las navegaciones del sistema, draw navigation, stack navigation etc 
reducers:los reducers del store etc
forms:todos nuestros formuarios 
screens: la llamada a los containers, las pantallas deben de mantenerse muy simples
theme: el tema principal de la aplicación
utils: todas las funciones que nos pueden servir en el futuro por ejemplo la sleep, getbsae64 etc 
languajes: los lenguajes en para los que se tiene soporte 



