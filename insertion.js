function insertSort(arr) {
    const numbersArray = [64, 34, 25, 12, 22, 11, 90];
    for (let i = 1; i < arr.length; i++) {
      let currentValue = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > currentValue) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = currentValue;
    }
  
    return arr;
  }
  
 // const numbersArray = [64, 34, 25, 12, 22, 11, 90]; ceci est notre array (tableau) de base
 //l'objectif de l'algorithm c'est de construire progressivement un tableau trié en insérant un élément non trié à la bonne position dans le tableau trié déjà existant. L'idée est de parcourir le tableau élément par élément, en comparant chaque élément avec les éléments précédents dans le tableau trié.
  //insertSort(numbersArray); // [11, 12, 22, 25, 34, 64, 90]  ceci est donc le resultat effectué de l'algorithm en js du tri par insertion.
  