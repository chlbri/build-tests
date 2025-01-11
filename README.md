# @bemedev/build-tests

<br/>
<br/>

## Description

`@bemedev/build-tests` est une bibliothèque permettant de construire et
tester des packages Node.js. Elle inclut des commandes CLI pour automatiser
les processus de pre-test, test et post-test. Il crée un tarball et permet
de générer des des tests du avec la version qui sera livrée aux
développeurs.

<br/>
<br/>

## Installation

Pour installer la bibliothèque, utilisez `pnpm` :

```sh
pnpm add @bemedev/build-tests
```

<br/>
<br/>

## Utilisation

### Commandes CLI

La bibliothèque fournit plusieurs commandes CLI pour gérer les tests de
votre package.

<br/>

#### Pré-test

La commande `pretest` prépare votre environnement de test en ajoutant un
tarball.

```sh
pnpm build-tests pretest
```

<br/>

#### Test

La commande `test` exécute les tests de votre package.

```sh
pnpm build-tests test
```

<br/>

#### Options pour la commande `test`

La commande `test` accepte les options `-pre` et `-post` pour exécuter des
scripts avant et après les tests.

##### Option `--pretest`

Utilisez l'option `-pre` pour exécuter un script avant les tests.

```sh
pnpm build-tests test --pretest
```

OR

```sh
pnpm build-tests test -pre
```

<br/>

##### Option `--posttest`

Utilisez l'option `-post` pour exécuter un script après les tests.

```sh
pnpm build-tests test --posttest
```

OR

```sh
pnpm build-tests test -post
```

<br/>

#### Post-test

La commande `posttest` nettoie votre environnement de test après
l'exécution des tests.

```sh
pnpm build-tests posttest
```
