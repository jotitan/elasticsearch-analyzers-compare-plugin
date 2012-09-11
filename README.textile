elasticsearch-analyzers-compare-plugin
======================================

Plugin web permettant de tester et comparer différentes combinaisons de filtres / tokenizers pour elasticsearch (configuré pour le francais)

Attention : il faut le plugin phonetic installé (ou le commenter dans la page web) : https://github.com/elasticsearch/elasticsearch-analysis-phonetic

Installation
------------

Il suffit d'utiliser le plugin d'installation : 'bin/plugin -install jotitan/elasticsearch-analyzers-compare-plugin/1.0.0'.



Le champ PREFIX permet de définir un prefix commun à tous les indexs qui seront créés. Si le prefixe n'est pas précisé, il est possible de tout supprimer tous les indexs présents sur le serveur. Il faut faire attention en manipulant le plugin au risque de perdre toutes ses données.
