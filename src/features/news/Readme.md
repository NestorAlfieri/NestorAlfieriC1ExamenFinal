Refactorización del componente Noticias:

Use el primer principio SOLID, resposabilidad unica para refactorizar el archivo Noticias.tsx realizando los siguientes cambios:

-Refactorización del componente principal <News/>.
-Creación de una carpeta "hooks" en la carpeta "app" y creación de custom hook useNews.
-Creación de un componente <NewsCard/> separado.
-Creación de un componente <Newsmodal/> separado.
-Creación de un componente <RegularNewsModal/> separado.
-Creación de un componente <PremiumNewsModal/> separado.
-Creación de un archivo Utils.ts que contiene las funciones.
-Creación de un archivo styled.ts que contiene los estilos para los Styled Component.
