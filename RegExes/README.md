Rechercher toutes les chaînes sans param protégés sql
`([\S\s])*(\s)*[=<>]+(\s)*[^:]

Rechercher tous les endroits où il manque un await pour une fonction donnée
^[^=]*[=]+\s*((?!await).)*cleanTemplateData\S*$

Rechercher les messages traduits avec arguments
MESSAGES.[0-9A-Z._]*,\W*\{

Recherche et remplace regex
^([0-9A-z ]*,){4}
$0non,

^(((?!\+ADs-).)*\+ADs-){4}
$0non+ADs-