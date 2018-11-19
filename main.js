(function() {
  "use strict";

  var app = angular.module('app', []);

  app.factory('terms', ['$location', function($location) {
    var emptyTask = { title: 'Empty task', id: -1, page_title: 'litvinanna' };
    var emptyTerm = { title: 'Empty term', id: -1, page_title: '', tasks: [] };

    var currentTerm = emptyTerm;
    var currentTask = emptyTask;

    var terms = [{
      id: 0,
      title: 'I',
      page_title: 'Term 1',
      description: 'Начало',
      tasks: [{
        id: 0,
        title: 'Краткое описание генома вируса <i>Clitocybe odora virus</i>',
        url: 'pages/study_process/terms/term1/pr5_virus.html',
        page_title: 'Virus'
      }, {
        id: 1,
        title: 'Краткое описание генома бактерии <i>Proteus mirabilis</i> BB2000',
        url: 'pages/study_process/terms/term1/pr6_bacterium.html',
        page_title: 'Bacterium'
      }, {
        id: 2,
        title: 'Краткое описание белка и его геномного окружения',
        url: 'pages/study_process/terms/term1/pr6_protein.html',
        page_title: 'Protein'
      }, {
        id: 3,
        title: 'Упражнения в Microsoft Office Excel',
        url: 'pages/study_process/terms/term1/pr11_exceltasks.html',
        page_title: 'Excel tasks'
      }, {
        id: 4,
        title: 'Плазмиды',
        url: 'pages/study_process/terms/term1/pr13_plasmids.html',
        page_title: 'Plasmids'
      }, {
        id: 5,
        title: 'Мини-обзор протема бактерии <i>Proteus mirabilis</i>BB2000',
        url: 'pages/study_process/terms/term1/proteus_mirabilis.html',
        page_title: 'Proteus mirabilis'
      }, {
        id: 6,
        title: 'Дополнительные материалы к обзору',
        url: 'pages/study_process/terms/term1/additional_materials.html',
        page_title: 'Additional materials'
      }]
    }, {
      id: 1,
      title: 'II',
      page_title: 'Term 2',
      description: 'Визуализация биомолекул',
      tasks: [{
        id: 0,
        title: 'Визуализация молекул в Jmol',
        url: 'pages/study_process/terms/term2/pr1_jmol.html',
        page_title: 'JMOL'
      }, {
        id: 1,
        title: 'Внутренности белков и макромолекулярных комплексов',
        url: 'pages/study_process/terms/term2/pr2_jmol.html',
        page_title: 'JMOL'
      }, {
        id: 2,
        title: 'Атлас аминокислот - глутамин',
        url: 'pages/study_process/terms/term2/atlas/glutamine.html',
        page_title: 'Glutamine'
      }, {
        id: 3,
        title: 'Атлас аминокислот - аспарагиновая кислота',
        url: 'pages/study_process/terms/term2/atlas/aspartic.html',
        page_title: 'Aspartic'
      }, {
        id: 4,
        title: 'Uniprot',
        url: 'pages/study_process/terms/term2/pr7_uniprot.html',
        page_title: 'Uniprot'
      }, {
        id: 5,
        title: 'Emboss',
        url: 'pages/study_process/terms/term2/pr8_emboss.html',
        page_title: 'Emboss'
      }, {
        id: 6,
        title: 'JalView',
        url: 'pages/study_process/terms/term2/pr9_jal.html',
        page_title: 'JalView'
      }, {
        id: 7,
        title: 'Multiple alignments',
        url: 'pages/study_process/terms/term2/pr10_multiple.html',
        page_title: 'Alignments'
      }, {
        id: 8,
        title: 'Blast',
        url: 'pages/study_process/terms/term2/pr11_blast.html',
        page_title: 'Blast'
      }]
    }, {
      id: 2,
      title: 'III',
      page_title: 'Term 3',
      description: 'Последовательности и структуры нуклеиновых кислот',
      tasks: [{
        id: 0,
        title: 'Химическое строение нуклеиновых кислот',
        url: 'pages/study_process/terms/term3/pr1_chem.html',
        page_title: 'MarvinSketch'
      }, {
        id: 1,
        title: 'A- и В- формы ДНК. Структура РНК',
        url: 'pages/study_process/terms/term3/pr2_dna.html',
        page_title: 'Structure'
      }, {
        id: 2,
        title: 'Комплексы ДНК-белок',
        url: 'pages/study_process/terms/term3/pr3_rna.html',
        page_title: 'Complexes'
      }, {
        id: 3,
        title: 'Чтение последовательностей по Сенгеру',
        url: 'pages/study_process/terms/term3/pr6_sang.html',
        page_title: 'Sang'
      },  {
        id: 4,
        title: 'Нуклеотидные банки данных',
        url: 'pages/study_process/terms/term3/pr7_nsb.html',
        page_title: 'NSB'
      }, {
        id: 5,
        title: 'Blast',
        url: 'pages/study_process/terms/term3/pr8_blast.html',
        page_title: 'Blast'
      }, {
        id: 6,
        title: 'Emboss и выравнивание геномов',
        url: 'pages/study_process/terms/term3/pr9_emboss.html',
        page_title: 'Emboss'
      }, {
        id: 7,
        title: 'Предсказание генов прокариот',
        url: 'pages/study_process/terms/term3/pr11_prediction.html',
        page_title: 'Prediction'
      }, {
        id: 8,
        title: 'Предсказание генов эукариот',
        url: 'pages/study_process/terms/term3/pr12_prediction.html',
        page_title: 'Prediction'
      }, {
        id: 9,
        title: 'Поиск полиморфизмов в геноме человека',
        url: 'pages/study_process/terms/term3/pr13_genome.html',
        page_title: 'Genome'
      }, {
        id: 10,
        title: 'Сборка генома <em>de novo</em>',
        url: 'pages/study_process/terms/term3/pr15_denovo.html',
        page_title: 'De novo'

      }]
    }, {
      id: 3,
      title: 'IV',
      page_title: 'Term 4',
      description: 'Эволюция последовательностей ',
      tasks: [{
        id: 0,
        title: 'Что такое филогенетическое дерево',
        url: 'pages/study_process/terms/term4/pr1_tree.html',
        page_title: 'Tree'
      }, {
        id: 1,
        title: 'Допы по реконструкции',
        url: 'pages/study_process/terms/term4/pr2_rec.html',
        page_title: 'Reconstruction'
      }, {
        id: 2,
        title: 'Укоренения в среднюю точку',
        url: 'pages/study_process/terms/term4/pr3_mid.html',
        page_title: 'Midpoint'
      }, {
        id: 3,
        title: 'Нуклеотидные деревья и паралоги',
        url: 'pages/study_process/terms/term4/pr4_para.html',
        page_title: 'Nucleotide trees'
      }, {
        id: 4,
        title: 'Работа с KEGG ORTHOLOGY',
        url: 'pages/study_process/terms/term4/pr5_kegg.html',
        page_title: 'KEGG ORTHOLOGY'
      }, {
        id: 5,
        title: 'Работа с Gene Ontology',
        url: 'pages/study_process/terms/term4/pr6_onto.html',
        page_title: 'Gene ontology'
      }, {
        id: 6,
        title: 'Мембранные белки',
        url: 'pages/study_process/terms/term4/pr7_memb.html',
        page_title: 'Membrane prot.'
      }, {
        id: 7,
        title: 'Поиск мотива',
        url: 'pages/study_process/terms/term4/pr9_meme.html',
        page_title: 'Motif'
      }, {
        id: 8,
        title: 'Поиск сигналов, chip-seq',
        url: 'pages/study_process/terms/term4/pr10_chip.html',
        page_title: ''
      }, {
        id: 9,
        title: 'Реконструкция эволюции доменной архитектуры',
        url: 'pages/study_process/terms/term4/pr11_pfam.html',
        page_title: 'PFAM'
      }, {
        id: 10,
        title: 'Профили',
        url: 'pages/study_process/terms/term4/pr12_hmm.html',
        page_title: 'HMM'



      }]
    }, {
      id: 4,
      title: 'VII',
      page_title: 'Term 7',
      description: 'RSA',
      tasks: [{
        id: 0,
        title: 'Электронная плотность в PyMol',
        url: 'pages/study_process/terms/term7/pr1_elecdens.html',
        page_title: 'E-density'
      } , {
        id: 1,
        title: 'Восстановление кристалла из PDB файла',
        url: 'pages/study_process/terms/term7/pr2_restor.html',
        page_title: 'Crystall estoration'
      } , {
        id: 2,
        title: 'Восстановление структуры в одномерной модели',
        url: 'pages/study_process/terms/term7/pr3_fourier.html',
        page_title: 'Structure restoration'



      }]
    }]

    if ($location.search()['term'] !== undefined) {
      var currentTermId = $location.search()['term'];
      currentTerm = findTermById(currentTermId);

      if ($location.search()['task'] !== undefined) {
        var currentTaskId = $location.search()['task'];
        currentTask = findTaskById(currentTerm, currentTaskId);
      }
    }

    function findTermById(id) {
      for (var i = 0; i < terms.length; i++) {
        if (terms[i].id == id) return terms[i];
      }
      return emptyTerm;
    }

    function findTaskById(term, id) {
      for (var i = 0; i < term.tasks.length; i++) {
        if (term.tasks[i].id == id) return term.tasks[i];
      }
      return emptyTask;
    }

    /*
    * Term functions
    */
    function getCurrentTerm() {
      return currentTerm;
    }

    function setTerm(term) {
      currentTerm = term;
      currentTask = emptyTask;
      $location.search('term', term.id);
    }

    function isTermActive(term) {
      return term.id === currentTerm.id;
    }

    function isTermChoosen() {
      return currentTerm.id >= 0;
    }

    /*
    * Tasks functions
    */
    function getCurrentTask() {
      return currentTask;
    }

    function setTask(task) {
      currentTask = task;
      $location.search('task', task.id);
    }

    function isTaskActive(task) {
      return task.id === currentTask.id;
    }

    function isTaskChoosen() {
      return currentTask.id >= 0;
    }

    return {
      getCurrentTerm: getCurrentTerm,
      getCurrentTask: getCurrentTask,
      findTermById: findTermById,
      findTaskById: findTaskById,
      terms: terms,
      setTerm: setTerm,
      isTermActive: isTermActive,
      isTermChoosen: isTermChoosen,
      setTask,
      isTaskActive: isTaskActive,
      isTaskChoosen: isTaskChoosen
    }
  }]);

  app.factory('navigation', [function() {
    var currentPage = 'study_process';

    function setPage(page) {
      currentPage = page;
    }

    function isPage(page) {
      return currentPage === page;
    }

    return {
      setPage: setPage,
      isPage: isPage
    }
  }]);

  app.directive('title', function() {
    return {
      restrict: 'E',
      controller: ['$scope', 'terms', function($scope, terms) {
        $scope.title = 'litvinanna';

        $scope.$watch(terms.getCurrentTask, function() {
          var currentTerm = terms.getCurrentTerm();
          var currentTask = terms.getCurrentTask();

          $scope.title = currentTerm.page_title + ' ' + currentTask.page_title;
        })
      }]
    }
  })

  app.directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'pages/navbar.html',
      controller: ['$scope', 'navigation', function($scope, navigation) {
        $scope.setPage = navigation.setPage;
        $scope.isPage = navigation.isPage;
      }]
    }
  });

  app.directive('content', function() {
    return {
      restrict: 'E',
      controller: ['$scope', 'navigation', function($scope, navigation) {
        $scope.setPage = navigation.setPage;
        $scope.isPage = navigation.isPage;
      }]
    }
  });

  app.directive('footer', function() {
    return {
      restrict: 'E',
      templateUrl: 'pages/footer.html'
    }
  })

  app.directive('about', function() {
    return {
      restrict: 'E',
      templateUrl: 'pages/about_me.html'
    }
  });

  app.directive('study', function() {
    return {
      restrict: 'E',
      templateUrl: 'pages/study_process/study_process.html',
      controller: ['$scope', 'terms', '$location', function($scope, terms, $location) {
        $scope.currentTerm = terms.getCurrentTerm;
        $scope.currentTask = terms.getCurrentTask;
        $scope.terms = terms.terms;

        $scope.setTerm = terms.setTerm;
        $scope.isTermActive = terms.isTermActive;
        $scope.isTermChoosen = terms.isTermChoosen;

        $scope.setTask = terms.setTask;
        $scope.isTaskActive = terms.isTaskActive;
        $scope.isTaskChoosen = terms.isTaskChoosen;

        $scope.innerLink = function(termId, taskId) {
          var term = terms.findTermById(termId);
          var task = terms.findTaskById(term, taskId);
          terms.setTerm(term);
          terms.setTask(task);
        }


        $scope.$on('$locationChangeSuccess', function() {
          if ($location.search()['term'] !== undefined) {
            var currentTermId = $location.search()['term'];
            if (currentTermId !== $scope.currentTerm.id) {
              var currentTerm = terms.findTermById(currentTermId);
              terms.setTerm(currentTerm);
            }

            if ($location.search()['task'] !== undefined) {
              var currentTaskId = $location.search()['task'];
              if (currentTaskId !== $scope.currentTask.id) {
                var currentTask = terms.findTaskById(currentTerm, currentTaskId);
                terms.setTask(currentTask);
              }
            }
          }
        })
      }]
    }
  })

  app.directive('switch', function() {
    return {
      restrict: 'E',
      controller: ['$scope', function($scope) {
        // var current = 'default';
        var states = ['default'];

        $scope.setCurrent = function(newCurrent) { //old method do not use
          // current = newCurrent;
          states = [newCurrent];
        }

        $scope.addCurrent = function(newCurrent) {
          states.push(newCurrent);
        }

        $scope.isCurrent = function(check) {
          // return check === current;
          return states.indexOf(check) > -1;
        }
        $scope.isnotCurrent = function(check) {
          // return check === current;
          return states.indexOf(check) === -1;
        }
        $scope.rmCurrent = function(check) {
          states = states.filter(function(item) {
            return item !== check
          });
        }

      }]
    }

  })

  //Utils functions do not touch please
  app.directive('script', function() {
    return {
      restrict: 'E',
      scope: false,
      link: function(scope, elem, attr) {
        if (attr.type === 'text/javascript-lazy') {
          var code = elem.text();
          var f = new Function(code);
          f();
        }
      }
    };
  });

  app.directive('compile', ['$compile', function($compile) {
    return function(scope, element, attrs) {
      var unregister = scope.$watch(
        function(scope) {
          return scope.$eval(attrs.compile);
        },
        function(value) {
          element.html(value);
          $compile(element.contents())(scope);
          unregister();
        }
      )
    };
  }]);

}());
