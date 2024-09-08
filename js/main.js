(() => {
  var alias;
  var secondArg;
  var thirdArg;
  var methodActions = {
    31091(anonymousUser, onUserLogin, userLoginData) {
      userLoginData.p;
    },
    49544(handleEvent, EventDetail, eventHandler) {
      eventHandler.p;
    },
    63166(anonymousData, additionalArg, filterData) {
      filterData.p;
    },
    4391(jQueryWrapper, userActionEvt, context) {
      context.p;
    },
    10103(imagePathRef, loadErrorTrak, imageLoadTime) {
      imageLoadTime.d(loadErrorTrak, {
        A: () => introIconPath,
      });
      let introIconPath = imageLoadTime.p + "img/intro-icon.png";
    },
    57088(templateData, TemplateError, _templateData) {
      _templateData.p;
    },
    15481(dataHandler, dataHandlers, registerDataH) {
      registerDataH.d(dataHandlers, {
        A: () => register,
      });
      var dataRegistry = registerDataH(83839);
      registerDataH(60821);
      class initializeR7T extends dataRegistry.r7T {
        constructor(_dataRegistry) {
          super();
          (0, dataRegistry.TsN)(
            this,
            _dataRegistry,
            function _eventHandler(processData, initializeAnd, _introIconPath) {
              let itemsArray = [];
              let _initializeAnd = (0, dataRegistry.URP)(
                initializeAnd,
                itemsArray,
              );
              let { $$slots: slotData = {}, $$scope: createSlotAss } =
                initializeAnd;
              processData.$$set = (initWithData) => {
                initializeAnd = (0, dataRegistry.kpz)(
                  (0, dataRegistry.kpz)({}, initializeAnd),
                  (0, dataRegistry.Qe9)(initWithData),
                );
                _introIconPath(
                  0,
                  (_initializeAnd = (0, dataRegistry.URP)(
                    initializeAnd,
                    itemsArray,
                  )),
                );
                if ("$$scope" in initWithData) {
                  _introIconPath(1, (createSlotAss = initWithData.$$scope));
                }
              };
              return [
                _initializeAnd,
                createSlotAss,
                slotData,
                function (anonymousFunc) {
                  dataRegistry.Tq.call(this, processData, anonymousFunc);
                },
              ];
            },
            function __eventHandler(iconPathGetFn) {
              let tempPlace;
              let innerIterVar;
              let loopCount;
              let iteration;
              let _iconPathGetFn = iconPathGetFn[2].default;
              let iconResult = (0, dataRegistry.Of3)(
                _iconPathGetFn,
                iconPathGetFn,
                iconPathGetFn[1],
                null,
              );
              let defaultIconTo = [
                {
                  class: "button",
                },
                iconPathGetFn[0],
              ];
              let iconPathGet = {};
              for (
                let iconLoop = 0;
                iconLoop < defaultIconTo.length;
                iconLoop += 1
              ) {
                iconPathGet = (0, dataRegistry.kpz)(
                  iconPathGet,
                  defaultIconTo[iconLoop],
                );
              }
              return {
                c() {
                  tempPlace = (0, dataRegistry.ND4)("button");
                  if (iconResult) {
                    iconResult.c();
                  }
                  (0, dataRegistry.vhI)(tempPlace, iconPathGet);
                  (0, dataRegistry.goL)(tempPlace, "s-cv3b48", true);
                },
                m(executeInside, dynamicValue) {
                  (0, dataRegistry.Yry)(executeInside, tempPlace, dynamicValue);
                  if (iconResult) {
                    iconResult.m(tempPlace, null);
                  }
                  if (tempPlace.autofocus) {
                    tempPlace.focus();
                  }
                  innerIterVar = true;
                  if (!loopCount) {
                    iteration = (0, dataRegistry.KTR)(
                      tempPlace,
                      "click",
                      iconPathGetFn[3],
                    );
                    loopCount = true;
                  }
                },
                p(iconPathData, [___eventHandler]) {
                  if (
                    iconResult &&
                    iconResult.p &&
                    (!innerIterVar || ___eventHandler & 2)
                  ) {
                    (0, dataRegistry.nkG)(
                      iconResult,
                      _iconPathGetFn,
                      iconPathData,
                      iconPathData[1],
                      innerIterVar
                        ? (0, dataRegistry.sWk)(
                            _iconPathGetFn,
                            iconPathData[1],
                            ___eventHandler,
                            null,
                          )
                        : (0, dataRegistry.i32)(iconPathData[1]),
                      null,
                    );
                  }
                  (0, dataRegistry.vhI)(
                    tempPlace,
                    (iconPathGet = (0, dataRegistry.HN9)(defaultIconTo, [
                      {
                        class: "button",
                      },
                      ___eventHandler & 1 && iconPathData[0],
                    ])),
                  );
                  (0, dataRegistry.goL)(tempPlace, "s-cv3b48", true);
                },
                i(_iconResult) {
                  if (!innerIterVar) {
                    (0, dataRegistry.c7F)(iconResult, _iconResult);
                    innerIterVar = true;
                  }
                },
                o(executeRegist) {
                  (0, dataRegistry.Tn8)(iconResult, executeRegist);
                  innerIterVar = false;
                },
                d(getDataFromP) {
                  if (getDataFromP) {
                    (0, dataRegistry.YoD)(tempPlace);
                  }
                  if (iconResult) {
                    iconResult.d(getDataFromP);
                  }
                  loopCount = false;
                  iteration();
                },
              };
            },
            dataRegistry.jXN,
            {},
          );
        }
      }
      let register = initializeR7T;
    },
    19680(initialize, referenceTo, _anonymousData) {
      _anonymousData.d(referenceTo, {
        A: () => initializeAnn,
      });
      var dataFromAnonF = _anonymousData(83839);
      _anonymousData(60821);
      var resultOfAnonF = _anonymousData(74173);
      var dataAccessIdx = _anonymousData(95669);
      function n(__iconResult) {
        let eventDetails;
        let isValidTest;
        let _dataFromAnonF;
        let getDefaultFor = __iconResult[5].default;
        let dataItem = (0, dataFromAnonF.Of3)(
          getDefaultFor,
          __iconResult,
          __iconResult[4],
          null,
        );
        return {
          c() {
            eventDetails = (0, dataFromAnonF.ND4)("div");
            if (dataItem) {
              dataItem.c();
            }
            (0, dataFromAnonF.hgi)(
              eventDetails,
              "top",
              __iconResult[1].y + "px",
            );
            (0, dataFromAnonF.hgi)(
              eventDetails,
              "left",
              __iconResult[1].x + "px",
            );
            (0, dataFromAnonF.CFu)(
              eventDetails,
              "class",
              "context-menu s-1mp7axm",
            );
          },
          m(____eventHandler, _____eventHandler) {
            (0, dataFromAnonF.Yry)(
              ____eventHandler,
              eventDetails,
              _____eventHandler,
            );
            if (dataItem) {
              dataItem.m(eventDetails, null);
            }
            _dataFromAnonF = true;
          },
          p(configStore, useDefault) {
            if (
              dataItem &&
              dataItem.p &&
              (!_dataFromAnonF || useDefault & 16)
            ) {
              (0, dataFromAnonF.nkG)(
                dataItem,
                getDefaultFor,
                configStore,
                configStore[4],
                _dataFromAnonF
                  ? (0, dataFromAnonF.sWk)(
                      getDefaultFor,
                      configStore[4],
                      useDefault,
                      null,
                    )
                  : (0, dataFromAnonF.i32)(configStore[4]),
                null,
              );
            }
            if (!_dataFromAnonF || useDefault & 2) {
              (0, dataFromAnonF.hgi)(
                eventDetails,
                "top",
                configStore[1].y + "px",
              );
            }
            if (!_dataFromAnonF || useDefault & 2) {
              (0, dataFromAnonF.hgi)(
                eventDetails,
                "left",
                configStore[1].x + "px",
              );
            }
          },
          i(validateAndP) {
            if (!_dataFromAnonF) {
              (0, dataFromAnonF.c7F)(dataItem, validateAndP);
              if (validateAndP) {
                (0, dataFromAnonF.Dti)(() => {
                  if (_dataFromAnonF) {
                    (isValidTest =
                      isValidTest ||
                      (0, dataFromAnonF.h86)(
                        eventDetails,
                        dataAccessIdx.Rv,
                        {
                          duration: 200,
                        },
                        true,
                      )).run(1);
                  }
                });
              }
              _dataFromAnonF = true;
            }
          },
          o(dispatchData) {
            (0, dataFromAnonF.Tn8)(dataItem, dispatchData);
            if (dispatchData) {
              (isValidTest =
                isValidTest ||
                (0, dataFromAnonF.h86)(
                  eventDetails,
                  dataAccessIdx.Rv,
                  {
                    duration: 200,
                  },
                  false,
                )).run(0);
            }
            _dataFromAnonF = false;
          },
          d(_context) {
            if (_context) {
              (0, dataFromAnonF.YoD)(eventDetails);
            }
            if (dataItem) {
              dataItem.d(_context);
            }
            if (_context && isValidTest) {
              isValidTest.end();
            }
          },
        };
      }
      class DataFromAnonF extends dataFromAnonF.r7T {
        constructor(_anonymousFunc) {
          super();
          (0, dataFromAnonF.TsN)(
            this,
            _anonymousFunc,
            function storeOrManipG(dataAccessor, firstAnonData, generateInteg) {
              let { $$slots: indexer = {}, $$scope: n } = firstAnonData;
              let { show: toggleFlag = false } = firstAnonData;
              let generateInts = resultOfAnonF.A.from();
              dataAccessor.$$set = (conditionalIn) => {
                if ("show" in conditionalIn) {
                  generateInteg(0, (toggleFlag = conditionalIn.show));
                }
                if ("$$scope" in conditionalIn) {
                  generateInteg(4, (n = conditionalIn.$$scope));
                }
              };
              return [
                toggleFlag,
                generateInts,
                (position) => {
                  generateInts.set(position.clientX, position.clientY);
                },
                () => {
                  if (toggleFlag) {
                    generateInteg(1, generateInts);
                  }
                },
                n,
                indexer,
              ];
            },
            function initAnonymous(_eventDetails) {
              let eventData;
              let placeholder;
              let unusedCounter;
              let _placeholder;
              let extractedArg = _eventDetails[0] && n(_eventDetails);
              return {
                c() {
                  if (extractedArg) {
                    extractedArg.c();
                  }
                  eventData = (0, dataFromAnonF.Iex)();
                },
                m(__context, n) {
                  if (extractedArg) {
                    extractedArg.m(__context, n);
                  }
                  (0, dataFromAnonF.Yry)(__context, eventData, n);
                  placeholder = true;
                  if (!unusedCounter) {
                    _placeholder = (0, dataFromAnonF.KTR)(
                      window,
                      "mousemove",
                      _eventDetails[2],
                    );
                    unusedCounter = true;
                  }
                },
                p(firstTruthyOr, [event]) {
                  if (firstTruthyOr[0]) {
                    if (extractedArg) {
                      extractedArg.p(firstTruthyOr, event);
                      if (event & 1) {
                        (0, dataFromAnonF.c7F)(extractedArg, 1);
                      }
                    } else {
                      (extractedArg = n(firstTruthyOr)).c();
                      (0, dataFromAnonF.c7F)(extractedArg, 1);
                      extractedArg.m(eventData.parentNode, eventData);
                    }
                  } else if (extractedArg) {
                    (0, dataFromAnonF.V44)();
                    (0, dataFromAnonF.Tn8)(extractedArg, 1, 1, () => {
                      extractedArg = null;
                    });
                    (0, dataFromAnonF.GYV)();
                  }
                },
                i(ensurePlaceHo) {
                  if (!placeholder) {
                    (0, dataFromAnonF.c7F)(extractedArg);
                    placeholder = true;
                  }
                },
                o(extractAndDeh) {
                  (0, dataFromAnonF.Tn8)(extractedArg);
                  placeholder = false;
                },
                d(checkAndCall) {
                  if (checkAndCall) {
                    (0, dataFromAnonF.YoD)(eventData);
                  }
                  if (extractedArg) {
                    extractedArg.d(checkAndCall);
                  }
                  unusedCounter = false;
                  _placeholder();
                },
              };
            },
            dataFromAnonF.jXN,
            {
              show: 0,
              update: 3,
            },
          );
        }
        get update() {
          return this.$$.ctx[3];
        }
      }
      let initializeAnn = DataFromAnonF;
    },
    98781(configOptions, ______eventHandler, _______eventHandler) {
      _______eventHandler.d(______eventHandler, {
        A: () => eventDataGet,
      });
      var triggerEvent = _______eventHandler(83839);
      _______eventHandler(60821);
      var dispatchNumer = _______eventHandler(41949);
      var ________eventHandler = _______eventHandler(95669);
      function n(fetchAnonymus) {
        let __eventDetails;
        let timerId;
        let _triggerEvent;
        let n;
        let __anonymousData;
        let ___anonymousData;
        let retrievedData;
        let undefined;
        let iterationTrak;
        let ____anonymousData = fetchAnonymus[4].default;
        let dataFetchTrak = (0, triggerEvent.Of3)(
          ____anonymousData,
          fetchAnonymus,
          fetchAnonymus[3],
          null,
        );
        let calculatePotl = [
          {
            class: "modal container",
          },
          fetchAnonymus[2],
        ];
        let fetchedData = {};
        for (
          let elementIndex = 0;
          elementIndex < calculatePotl.length;
          elementIndex += 1
        ) {
          fetchedData = (0, triggerEvent.kpz)(
            fetchedData,
            calculatePotl[elementIndex],
          );
        }
        return {
          c() {
            __eventDetails = (0, triggerEvent.ND4)("div");
            timerId = (0, triggerEvent.ND4)("div");
            _triggerEvent = (0, triggerEvent.xem)();
            n = (0, triggerEvent.ND4)("div");
            __anonymousData = (0, triggerEvent.ND4)("div");
            if (dataFetchTrak) {
              dataFetchTrak.c();
            }
            (0, triggerEvent.CFu)(timerId, "class", "background s-1rrv5lu");
            (0, triggerEvent.CFu)(
              __anonymousData,
              "class",
              "content s-1rrv5lu",
            );
            (0, triggerEvent.vhI)(n, fetchedData);
            (0, triggerEvent.goL)(n, "s-1rrv5lu", true);
          },
          m(eventIndex, eventArgs) {
            (0, triggerEvent.Yry)(eventIndex, __eventDetails, eventArgs);
            (0, triggerEvent.BCw)(__eventDetails, timerId);
            (0, triggerEvent.BCw)(__eventDetails, _triggerEvent);
            (0, triggerEvent.BCw)(__eventDetails, n);
            (0, triggerEvent.BCw)(n, __anonymousData);
            if (dataFetchTrak) {
              dataFetchTrak.m(__anonymousData, null);
            }
            retrievedData = true;
            if (!undefined) {
              iterationTrak = (0, triggerEvent.KTR)(
                timerId,
                "click",
                fetchAnonymus[5],
              );
              undefined = true;
            }
          },
          p(getUserById, shouldProceed) {
            if (
              dataFetchTrak &&
              dataFetchTrak.p &&
              (!retrievedData || shouldProceed & 8)
            ) {
              (0, triggerEvent.nkG)(
                dataFetchTrak,
                ____anonymousData,
                getUserById,
                getUserById[3],
                retrievedData
                  ? (0, triggerEvent.sWk)(
                      ____anonymousData,
                      getUserById[3],
                      shouldProceed,
                      null,
                    )
                  : (0, triggerEvent.i32)(getUserById[3]),
                null,
              );
            }
            (0, triggerEvent.vhI)(
              n,
              (fetchedData = (0, triggerEvent.HN9)(calculatePotl, [
                {
                  class: "modal container",
                },
                shouldProceed & 4 && getUserById[2],
              ])),
            );
            (0, triggerEvent.goL)(n, "s-1rrv5lu", true);
          },
          i(dataRetrieval) {
            if (!retrievedData) {
              (0, triggerEvent.c7F)(dataFetchTrak, dataRetrieval);
              if (dataRetrieval) {
                (0, triggerEvent.Dti)(() => {
                  if (retrievedData) {
                    (___anonymousData =
                      ___anonymousData ||
                      (0, triggerEvent.h86)(
                        __eventDetails,
                        ________eventHandler.Rv,
                        {
                          duration: 200,
                        },
                        true,
                      )).run(1);
                  }
                });
              }
              retrievedData = true;
            }
          },
          o(triggerAsync) {
            (0, triggerEvent.Tn8)(dataFetchTrak, triggerAsync);
            if (triggerAsync) {
              (___anonymousData =
                ___anonymousData ||
                (0, triggerEvent.h86)(
                  __eventDetails,
                  ________eventHandler.Rv,
                  {
                    duration: 200,
                  },
                  false,
                )).run(0);
            }
            retrievedData = false;
          },
          d(isEventTrackH) {
            if (isEventTrackH) {
              (0, triggerEvent.YoD)(__eventDetails);
            }
            if (dataFetchTrak) {
              dataFetchTrak.d(isEventTrackH);
            }
            if (isEventTrackH && ___anonymousData) {
              ___anonymousData.end();
            }
            undefined = false;
            iterationTrak();
          },
        };
      }
      class eventList extends triggerEvent.r7T {
        constructor(bindEventHand) {
          super();
          (0, triggerEvent.TsN)(
            this,
            bindEventHand,
            function anonymousType(__dataFromAnonF, multipleArgs, loopIndex) {
              let n = ["show"];
              let __triggerEvent = (0, triggerEvent.URP)(multipleArgs, n);
              let { $$slots: __templateData = {}, $$scope: validEmailReg } =
                multipleArgs;
              let formatAndDiss = (0, dispatchNumer.ur)();
              let { show: dataPreparer = false } = multipleArgs;
              let __anonymousFunc = (_dataHandler) => {
                loopIndex(0, (dataPreparer = _dataHandler));
                formatAndDiss("visibility", _dataHandler);
              };
              __dataFromAnonF.$$set = (___triggerEvent) => {
                multipleArgs = (0, triggerEvent.kpz)(
                  (0, triggerEvent.kpz)({}, multipleArgs),
                  (0, triggerEvent.Qe9)(___triggerEvent),
                );
                loopIndex(
                  2,
                  (__triggerEvent = (0, triggerEvent.URP)(multipleArgs, n)),
                );
                if ("show" in ___triggerEvent) {
                  loopIndex(0, (dataPreparer = ___triggerEvent.show));
                }
                if ("$$scope" in ___triggerEvent) {
                  loopIndex(3, (validEmailReg = ___triggerEvent.$$scope));
                }
              };
              return [
                dataPreparer,
                __anonymousFunc,
                __triggerEvent,
                validEmailReg,
                __templateData,
                () => __anonymousFunc(false),
              ];
            },
            function transformArgs(_extractedArg) {
              let triggerAndGet;
              let __placeholder;
              let extractedArg1 = _extractedArg[0] && n(_extractedArg);
              return {
                c() {
                  if (extractedArg1) {
                    extractedArg1.c();
                  }
                  triggerAndGet = (0, triggerEvent.Iex)();
                },
                m(__extractedArg, eventTrigger) {
                  if (extractedArg1) {
                    extractedArg1.m(__extractedArg, eventTrigger);
                  }
                  (0, triggerEvent.Yry)(
                    __extractedArg,
                    triggerAndGet,
                    eventTrigger,
                  );
                  __placeholder = true;
                },
                p(conditionalHo, [error]) {
                  if (conditionalHo[0]) {
                    if (extractedArg1) {
                      extractedArg1.p(conditionalHo, error);
                      if (error & 1) {
                        (0, triggerEvent.c7F)(extractedArg1, 1);
                      }
                    } else {
                      (extractedArg1 = n(conditionalHo)).c();
                      (0, triggerEvent.c7F)(extractedArg1, 1);
                      extractedArg1.m(triggerAndGet.parentNode, triggerAndGet);
                    }
                  } else if (extractedArg1) {
                    (0, triggerEvent.V44)();
                    (0, triggerEvent.Tn8)(extractedArg1, 1, 1, () => {
                      extractedArg1 = null;
                    });
                    (0, triggerEvent.GYV)();
                  }
                },
                i(____triggerEvent) {
                  if (!__placeholder) {
                    (0, triggerEvent.c7F)(extractedArg1);
                    __placeholder = true;
                  }
                },
                o(minifiedAnon) {
                  (0, triggerEvent.Tn8)(extractedArg1);
                  __placeholder = false;
                },
                d(conditionalAd) {
                  if (conditionalAd) {
                    (0, triggerEvent.YoD)(triggerAndGet);
                  }
                  if (extractedArg1) {
                    extractedArg1.d(conditionalAd);
                  }
                },
              };
            },
            triggerEvent.jXN,
            {
              show: 0,
            },
          );
        }
      }
      let eventDataGet = eventList;
    },
    6716(_initializeAnn, helperStore, contextualAnn) {
      contextualAnn.d(helperStore, {
        A: () => __________contextualAnn,
      });
      var _contextualAnn = contextualAnn(83839);
      contextualAnn(60821);
      var __contextualAnn = contextualAnn(98837);
      var initContextAn = contextualAnn(79305);
      var n = contextualAnn(92008);
      var ___contextualAnn = contextualAnn(98685);
      var initializer = contextualAnn(87399);
      var __initializeAnd = contextualAnn(14389);
      var list = contextualAnn(33203);
      var annotationApp = contextualAnn(58650);
      var contextInit = contextualAnn(64127);
      var setAction = contextualAnn(95669);
      contextualAnn(4391);
      var annInitial = contextualAnn(95195);
      var ____contextualAnn = contextualAnn(28858);
      function temp(dispatchEvent) {
        let _annotationApp;
        let anonymizeData;
        _annotationApp = new annotationApp.A({});
        return {
          c() {
            (0, _contextualAnn.N0i)(_annotationApp.$$.fragment);
          },
          m(invokeContext, _____contextualAnn) {
            (0, _contextualAnn.wSR)(
              _annotationApp,
              invokeContext,
              _____contextualAnn,
            );
            anonymizeData = true;
          },
          p: _contextualAnn.lQ1,
          i(anonymizeIfUn) {
            if (!anonymizeData) {
              (0, _contextualAnn.c7F)(
                _annotationApp.$$.fragment,
                anonymizeIfUn,
              );
              anonymizeData = true;
            }
          },
          o(_____anonymousData) {
            (0, _contextualAnn.Tn8)(
              _annotationApp.$$.fragment,
              _____anonymousData,
            );
            anonymizeData = false;
          },
          d(______contextualAnn) {
            (0, _contextualAnn.Hbl)(_annotationApp, ______contextualAnn);
          },
        };
      }
      function m(___placeholder) {
        let filteredPosts;
        let innerLoopCoun;
        let acc;
        let formatDate;
        let dataStore;
        let getEligibleIn;
        let ____placeholder;
        let _initializeApp;
        let configureApp;
        let setupInitial;
        let formatDateAnd;
        let config;
        let calculateNorm;
        let _____placeholder;
        let __initializeApp;
        let argumentY;
        let getPersonByID;
        let ___initializeApp;
        innerLoopCoun = new __contextualAnn.A({});
        formatDate = new initContextAn.A({});
        getEligibleIn = new n.A({});
        _initializeApp = new ___contextualAnn.A({});
        setupInitial = new __initializeAnd.A({});
        config = new list.A({});
        let _loopIndex = ___placeholder[1] && createLayout(___placeholder);
        __initializeApp = new initializer.A({});
        return {
          c() {
            filteredPosts = (0, _contextualAnn.ND4)("div");
            (0, _contextualAnn.N0i)(innerLoopCoun.$$.fragment);
            acc = (0, _contextualAnn.xem)();
            (0, _contextualAnn.N0i)(formatDate.$$.fragment);
            dataStore = (0, _contextualAnn.xem)();
            (0, _contextualAnn.N0i)(getEligibleIn.$$.fragment);
            ____placeholder = (0, _contextualAnn.xem)();
            (0, _contextualAnn.N0i)(_initializeApp.$$.fragment);
            configureApp = (0, _contextualAnn.xem)();
            (0, _contextualAnn.N0i)(setupInitial.$$.fragment);
            formatDateAnd = (0, _contextualAnn.xem)();
            (0, _contextualAnn.N0i)(config.$$.fragment);
            calculateNorm = (0, _contextualAnn.xem)();
            if (_loopIndex) {
              _loopIndex.c();
            }
            _____placeholder = (0, _contextualAnn.xem)();
            (0, _contextualAnn.N0i)(__initializeApp.$$.fragment);
            argumentY = (0, _contextualAnn.xem)();
            getPersonByID = (0, _contextualAnn.ND4)("div");
            (0, _contextualAnn.CFu)(filteredPosts, "class", "hud s-xuc99v");
            (0, _contextualAnn.CFu)(
              getPersonByID,
              "class",
              "captcha-container center",
            );
          },
          m(processFilter, AdditionalFil) {
            (0, _contextualAnn.Yry)(
              processFilter,
              filteredPosts,
              AdditionalFil,
            );
            (0, _contextualAnn.wSR)(innerLoopCoun, filteredPosts, null);
            (0, _contextualAnn.BCw)(filteredPosts, acc);
            (0, _contextualAnn.wSR)(formatDate, filteredPosts, null);
            (0, _contextualAnn.BCw)(filteredPosts, dataStore);
            (0, _contextualAnn.wSR)(getEligibleIn, filteredPosts, null);
            (0, _contextualAnn.BCw)(filteredPosts, ____placeholder);
            (0, _contextualAnn.wSR)(_initializeApp, filteredPosts, null);
            (0, _contextualAnn.Yry)(processFilter, configureApp, AdditionalFil);
            (0, _contextualAnn.wSR)(setupInitial, processFilter, AdditionalFil);
            (0, _contextualAnn.Yry)(
              processFilter,
              formatDateAnd,
              AdditionalFil,
            );
            (0, _contextualAnn.wSR)(config, processFilter, AdditionalFil);
            (0, _contextualAnn.Yry)(
              processFilter,
              calculateNorm,
              AdditionalFil,
            );
            if (_loopIndex) {
              _loopIndex.m(processFilter, AdditionalFil);
            }
            (0, _contextualAnn.Yry)(
              processFilter,
              _____placeholder,
              AdditionalFil,
            );
            (0, _contextualAnn.wSR)(
              __initializeApp,
              processFilter,
              AdditionalFil,
            );
            (0, _contextualAnn.Yry)(processFilter, argumentY, AdditionalFil);
            (0, _contextualAnn.Yry)(
              processFilter,
              getPersonByID,
              AdditionalFil,
            );
            ___initializeApp = true;
          },
          p(___anonymousFunc, actionPerform) {
            if (___anonymousFunc[1]) {
              if (_loopIndex) {
                _loopIndex.p(___anonymousFunc, actionPerform);
                if (actionPerform & 2) {
                  (0, _contextualAnn.c7F)(_loopIndex, 1);
                }
              } else {
                (_loopIndex = createLayout(___anonymousFunc)).c();
                (0, _contextualAnn.c7F)(_loopIndex, 1);
                _loopIndex.m(_____placeholder.parentNode, _____placeholder);
              }
            } else if (_loopIndex) {
              (0, _contextualAnn.V44)();
              (0, _contextualAnn.Tn8)(_loopIndex, 1, 1, () => {
                _loopIndex = null;
              });
              (0, _contextualAnn.GYV)();
            }
          },
          i(______anonymousData) {
            if (!___initializeApp) {
              (0, _contextualAnn.c7F)(
                innerLoopCoun.$$.fragment,
                ______anonymousData,
              );
              (0, _contextualAnn.c7F)(
                formatDate.$$.fragment,
                ______anonymousData,
              );
              (0, _contextualAnn.c7F)(
                getEligibleIn.$$.fragment,
                ______anonymousData,
              );
              (0, _contextualAnn.c7F)(
                _initializeApp.$$.fragment,
                ______anonymousData,
              );
              (0, _contextualAnn.c7F)(
                setupInitial.$$.fragment,
                ______anonymousData,
              );
              (0, _contextualAnn.c7F)(config.$$.fragment, ______anonymousData);
              (0, _contextualAnn.c7F)(_loopIndex);
              (0, _contextualAnn.c7F)(
                __initializeApp.$$.fragment,
                ______anonymousData,
              );
              ___initializeApp = true;
            }
          },
          o(_fetchAnonymus) {
            (0, _contextualAnn.Tn8)(innerLoopCoun.$$.fragment, _fetchAnonymus);
            (0, _contextualAnn.Tn8)(formatDate.$$.fragment, _fetchAnonymus);
            (0, _contextualAnn.Tn8)(getEligibleIn.$$.fragment, _fetchAnonymus);
            (0, _contextualAnn.Tn8)(_initializeApp.$$.fragment, _fetchAnonymus);
            (0, _contextualAnn.Tn8)(setupInitial.$$.fragment, _fetchAnonymus);
            (0, _contextualAnn.Tn8)(config.$$.fragment, _fetchAnonymus);
            (0, _contextualAnn.Tn8)(_loopIndex);
            (0, _contextualAnn.Tn8)(
              __initializeApp.$$.fragment,
              _fetchAnonymus,
            );
            ___initializeApp = false;
          },
          d(_______contextualAnn) {
            if (_______contextualAnn) {
              (0, _contextualAnn.YoD)(filteredPosts);
              (0, _contextualAnn.YoD)(configureApp);
              (0, _contextualAnn.YoD)(formatDateAnd);
              (0, _contextualAnn.YoD)(calculateNorm);
              (0, _contextualAnn.YoD)(_____placeholder);
              (0, _contextualAnn.YoD)(argumentY);
              (0, _contextualAnn.YoD)(getPersonByID);
            }
            (0, _contextualAnn.Hbl)(innerLoopCoun);
            (0, _contextualAnn.Hbl)(formatDate);
            (0, _contextualAnn.Hbl)(getEligibleIn);
            (0, _contextualAnn.Hbl)(_initializeApp);
            (0, _contextualAnn.Hbl)(setupInitial, _______contextualAnn);
            (0, _contextualAnn.Hbl)(config, _______contextualAnn);
            if (_loopIndex) {
              _loopIndex.d(_______contextualAnn);
            }
            (0, _contextualAnn.Hbl)(__initializeApp, _______contextualAnn);
          },
        };
      }
      function createLayout(scopeRef) {
        let ________contextualAnn;
        let _anonymousUser;
        let userCounter;
        let iterCounter;
        let n;
        let layoutConfig;
        let index;
        let calculateRate;
        return {
          c() {
            ________contextualAnn = (0, _contextualAnn.ND4)("div");
            _anonymousUser = (0, _contextualAnn.ND4)("button");
            userCounter = (0, _contextualAnn.ND4)("i");
            (0, _contextualAnn.CFu)(userCounter, "class", "fal fa-times");
            (0, _contextualAnn.CFu)(
              _anonymousUser,
              "class",
              "exit-button s-xuc99v",
            );
            _anonymousUser.disabled = iterCounter = !scopeRef[0];
            (0, _contextualAnn.CFu)(________contextualAnn, "class", "overlay");
          },
          m(dataIndex, n) {
            (0, _contextualAnn.Yry)(dataIndex, ________contextualAnn, n);
            (0, _contextualAnn.BCw)(________contextualAnn, _anonymousUser);
            (0, _contextualAnn.BCw)(_anonymousUser, userCounter);
            layoutConfig = true;
            if (!index) {
              calculateRate = [
                (0, _contextualAnn.KTR)(_anonymousUser, "click", scopeRef[3]),
                (0, _contextualAnn.KTR)(
                  ________contextualAnn,
                  "click",
                  scopeRef[4],
                ),
              ];
              index = true;
            }
          },
          p(indexedDOMRef, toggleAnonDis) {
            if (
              !layoutConfig ||
              (toggleAnonDis & 1 &&
                iterCounter !== (iterCounter = !indexedDOMRef[0]))
            ) {
              _anonymousUser.disabled = iterCounter;
            }
          },
          i(RvContextual) {
            if (!layoutConfig) {
              if (RvContextual) {
                (0, _contextualAnn.Dti)(() => {
                  if (layoutConfig) {
                    (n =
                      n ||
                      (0, _contextualAnn.h86)(
                        ________contextualAnn,
                        setAction.Rv,
                        {
                          duration: 200,
                        },
                        true,
                      )).run(1);
                  }
                });
              }
              layoutConfig = true;
            }
          },
          o(_________eventHandler) {
            if (_________eventHandler) {
              (n =
                n ||
                (0, _contextualAnn.h86)(
                  ________contextualAnn,
                  setAction.Rv,
                  {
                    duration: 200,
                  },
                  false,
                )).run(0);
            }
            layoutConfig = false;
          },
          d(contextualLif) {
            if (contextualLif) {
              (0, _contextualAnn.YoD)(________contextualAnn);
            }
            if (contextualLif && n) {
              n.end();
            }
            ((index = false), _contextualAnn.oOW)(calculateRate);
          },
        };
      }
      class anonymousId extends _contextualAnn.r7T {
        constructor(initProcess) {
          super();
          (0, _contextualAnn.TsN)(
            this,
            initProcess,
            function _eventTrigger(errorHandler, extractValues, debugTrigger) {
              let debugIndex;
              let n;
              (0, _contextualAnn.j0C)(
                errorHandler,
                contextInit.z,
                (_debugIndex) => debugTrigger(1, (debugIndex = _debugIndex)),
              );
              (0, _contextualAnn.j0C)(
                errorHandler,
                ____contextualAnn.S,
                (debugTrigger2) => debugTrigger(2, (n = debugTrigger2)),
              );
              annInitial.A.on("Dcxyoc", (debugIndexTem) => {
                (0, _contextualAnn.vu6)(
                  contextInit.z,
                  (debugIndex = debugIndexTem),
                  debugIndex,
                );
              });
              let __debugIndex;
              annInitial.A.on("started", () =>
                debugTrigger(0, (__debugIndex = true)),
              );
              annInitial.A.on("stopped", () =>
                debugTrigger(0, (__debugIndex = false)),
              );
              return [
                __debugIndex,
                debugIndex,
                n,
                () => {
                  if (__debugIndex) {
                    annInitial.A.eWI.forEach((toggleClose) =>
                      toggleClose.close(),
                    );
                    annInitial.A.stop();
                  }
                },
                () => {
                  if (__debugIndex) {
                    annInitial.A.FQe(false);
                  }
                },
              ];
            },
            function processEvent(eventContext) {
              let generateId;
              let findElement;
              let _index;
              let n;
              let ___eventDetails = [m, temp];
              let hasElementAt2 = [];
              function checkThird(_alias) {
                if (_alias[2]) {
                  return 0;
                } else {
                  return 1;
                }
              }
              _index = hasElementAt2[(findElement = checkThird(eventContext))] =
                ___eventDetails[findElement](eventContext);
              return {
                c() {
                  generateId = (0, _contextualAnn.ND4)("div");
                  _index.c();
                  (0, _contextualAnn.CFu)(generateId, "class", "app");
                },
                m(_________contextualAnn, __________eventHandler) {
                  (0, _contextualAnn.Yry)(
                    _________contextualAnn,
                    generateId,
                    __________eventHandler,
                  );
                  hasElementAt2[findElement].m(generateId, null);
                  n = true;
                },
                p(_anonymousType, [UnhandledProm]) {
                  let n = findElement;
                  if ((findElement = checkThird(_anonymousType)) === n) {
                    hasElementAt2[findElement].p(_anonymousType, UnhandledProm);
                  } else {
                    (0, _contextualAnn.V44)();
                    (0, _contextualAnn.Tn8)(hasElementAt2[n], 1, 1, () => {
                      hasElementAt2[n] = null;
                    });
                    (0, _contextualAnn.GYV)();
                    if ((_index = hasElementAt2[findElement])) {
                      _index.p(_anonymousType, UnhandledProm);
                    } else {
                      (_index = hasElementAt2[findElement] =
                        ___eventDetails[findElement](_anonymousType)).c();
                    }
                    (0, _contextualAnn.c7F)(_index, 1);
                    _index.m(generateId, null);
                  }
                },
                i(ensureNHasNoT) {
                  if (!n) {
                    (0, _contextualAnn.c7F)(_index);
                    n = true;
                  }
                },
                o(processInput) {
                  (0, _contextualAnn.Tn8)(_index);
                  n = false;
                },
                d(shouldExecute) {
                  if (shouldExecute) {
                    (0, _contextualAnn.YoD)(generateId);
                  }
                  hasElementAt2[findElement].d();
                },
              };
            },
            _contextualAnn.jXN,
            {},
          );
        }
      }
      let __________contextualAnn = anonymousId;
    },
    3854(initializeX, initKey, keyInitializr) {
      keyInitializr.d(initKey, {
        A: () => n,
      });
      var protocolKeyAl = keyInitializr(83839);
      keyInitializr(60821);
      var keyInitialize = keyInitializr(54659);
      class ItemInit extends protocolKeyAl.r7T {
        constructor(hasProperties) {
          super();
          (0, protocolKeyAl.TsN)(
            this,
            hasProperties,
            function uniqueCounter(_processEvent, checkUserVerf, commentIter) {
              let n = ["used", "owned", "height"];
              let result = (0, protocolKeyAl.URP)(checkUserVerf, n);
              let { used: usageCount = 0 } = checkUserVerf;
              let { owned: actionCounter = 0 } = checkUserVerf;
              let { height: keywordAssoci = 22 } = checkUserVerf;
              var processCount = keyInitialize.R.find(
                (useCount) => !!(usageCount & useCount[0]),
              );
              var processCount = {
                index: processCount[0],
                path: processCount[1],
                text: processCount[2],
                selected: !!(usageCount & processCount[0]),
                owned: !!(actionCounter & processCount[0]),
              };
              _processEvent.$$set = (performCalcul) => {
                checkUserVerf = (0, protocolKeyAl.kpz)(
                  (0, protocolKeyAl.kpz)({}, checkUserVerf),
                  (0, protocolKeyAl.Qe9)(performCalcul),
                );
                commentIter(
                  3,
                  (result = (0, protocolKeyAl.URP)(checkUserVerf, n)),
                );
                if ("used" in performCalcul) {
                  commentIter(4, (usageCount = performCalcul.used));
                }
                if ("owned" in performCalcul) {
                  commentIter(0, (actionCounter = performCalcul.owned));
                }
                if ("height" in performCalcul) {
                  commentIter(1, (keywordAssoci = performCalcul.height));
                }
              };
              return [
                actionCounter,
                keywordAssoci,
                processCount,
                result,
                usageCount,
              ];
            },
            function contextualFil(filteredList) {
              let userList;
              let isNullOrUndef;
              let arrayIndexer;
              let n;
              let aBadgeFilter = [
                {
                  class: "badge",
                },
                filteredList[3],
              ];
              let userContext = {};
              for (
                let badgeFilterBy = 0;
                badgeFilterBy < aBadgeFilter.length;
                badgeFilterBy += 1
              ) {
                userContext = (0, protocolKeyAl.kpz)(
                  userContext,
                  aBadgeFilter[badgeFilterBy],
                );
              }
              return {
                c() {
                  userList = (0, protocolKeyAl.ND4)("div");
                  isNullOrUndef = (0, protocolKeyAl.ND4)("img");
                  (0, protocolKeyAl.CFu)(
                    isNullOrUndef,
                    "class",
                    "badge-icon s-1c9puth",
                  );
                  (0, protocolKeyAl.CFu)(
                    isNullOrUndef,
                    "crossorigin",
                    "anonymous",
                  );
                  (0, protocolKeyAl.CFu)(isNullOrUndef, "draggable", "false");
                  if (
                    !(0, protocolKeyAl.mq_)(
                      isNullOrUndef.src,
                      (arrayIndexer =
                        "./img/badges/" + filteredList[2].path + ".png"),
                    )
                  ) {
                    (0, protocolKeyAl.CFu)(isNullOrUndef, "src", arrayIndexer);
                  }
                  (0, protocolKeyAl.CFu)(
                    isNullOrUndef,
                    "data-tip",
                    (n = filteredList[2].text),
                  );
                  (0, protocolKeyAl.CFu)(
                    isNullOrUndef,
                    "height",
                    filteredList[1],
                  );
                  (0, protocolKeyAl.CFu)(isNullOrUndef, "alt", "Perk badge");
                  (0, protocolKeyAl.goL)(
                    isNullOrUndef,
                    "dim",
                    !filteredList[2].selected,
                  );
                  (0, protocolKeyAl.goL)(
                    isNullOrUndef,
                    "unpickable",
                    !filteredList[2].owned && filteredList[0],
                  );
                  (0, protocolKeyAl.goL)(
                    isNullOrUndef,
                    "pickable",
                    filteredList[2].owned,
                  );
                  (0, protocolKeyAl.vhI)(userList, userContext);
                  (0, protocolKeyAl.goL)(userList, "s-1c9puth", true);
                },
                m(__processEvent, userAction) {
                  (0, protocolKeyAl.Yry)(__processEvent, userList, userAction);
                  (0, protocolKeyAl.BCw)(userList, isNullOrUndef);
                },
                p(offset, [eValue]) {
                  if (eValue & 2) {
                    (0, protocolKeyAl.CFu)(isNullOrUndef, "height", offset[1]);
                  }
                  if (eValue & 5) {
                    (0, protocolKeyAl.goL)(
                      isNullOrUndef,
                      "unpickable",
                      !offset[2].owned && offset[0],
                    );
                  }
                  (0, protocolKeyAl.vhI)(
                    userList,
                    (userContext = (0, protocolKeyAl.HN9)(aBadgeFilter, [
                      {
                        class: "badge",
                      },
                      eValue & 8 && offset[3],
                    ])),
                  );
                  (0, protocolKeyAl.goL)(userList, "s-1c9puth", true);
                },
                i: protocolKeyAl.lQ1,
                o: protocolKeyAl.lQ1,
                d(protocolKeyIn) {
                  if (protocolKeyIn) {
                    (0, protocolKeyAl.YoD)(userList);
                  }
                },
              };
            },
            protocolKeyAl.jXN,
            {
              used: 4,
              owned: 0,
              height: 1,
            },
          );
        }
      }
      let n = ItemInit;
    },
    14389(taskExecutor, ___context, rememberWith) {
      rememberWith.d(___context, {
        A: () => initializeAsy,
      });
      var timeTrack = rememberWith(83839);
      rememberWith(60821);
      var rememberedId9 = rememberWith(95195);
      var memoryTimeTra = rememberWith(95514);
      var n = rememberWith(41958);
      var contextHolder = rememberWith(15308);
      var getTimeTrack = rememberWith(19680);
      var contextualMem = rememberWith(15481);
      function EventTracker(_processFilter) {
        let eventRef;
        return {
          c() {
            eventRef = (0, timeTrack.Qq7)("Spectate");
          },
          m(______placeholder, eventTime) {
            (0, timeTrack.Yry)(______placeholder, eventRef, eventTime);
          },
          d(elementInterC) {
            if (elementInterC) {
              (0, timeTrack.YoD)(eventRef);
            }
          },
        };
      }
      function toggleElement(processPlaceh) {
        let shouldHideCsm = processPlaceh[2].cSM ? "Hide" : "Show";
        let timestampsFor;
        let timeBasedCond;
        return {
          c() {
            timestampsFor = (0, timeTrack.Qq7)(shouldHideCsm);
            timeBasedCond = (0, timeTrack.Qq7)(" Name");
          },
          m(anonymousReve, eventEmitter) {
            (0, timeTrack.Yry)(anonymousReve, timestampsFor, eventEmitter);
            (0, timeTrack.Yry)(anonymousReve, timeBasedCond, eventEmitter);
          },
          p(cSMVisibility, hiddenStateFl) {
            if (
              hiddenStateFl & 4 &&
              shouldHideCsm !==
                (shouldHideCsm = cSMVisibility[2].cSM ? "Hide" : "Show")
            ) {
              (0, timeTrack.iQh)(timestampsFor, shouldHideCsm);
            }
          },
          d(isAssignedAnd) {
            if (isAssignedAnd) {
              (0, timeTrack.YoD)(timestampsFor);
              (0, timeTrack.YoD)(timeBasedCond);
            }
          },
        };
      }
      function conditionalEv(aggregateNode) {
        let nameToCopy;
        return {
          c() {
            nameToCopy = (0, timeTrack.Qq7)("Copy Name");
          },
          m(____anonymousFunc, trackedStart) {
            (0, timeTrack.Yry)(____anonymousFunc, nameToCopy, trackedStart);
          },
          d(dIsNotNil) {
            if (dIsNotNil) {
              (0, timeTrack.YoD)(nameToCopy);
            }
          },
        };
      }
      function createContext(loopCounter) {
        let initializeMem;
        let tempVar;
        let defaultSlot;
        let _loopCount;
        let n;
        let _contextualMem;
        (initializeMem = new contextualMem.A({
          props: {
            $$slots: {
              default: [convertToAnon],
            },
            $$scope: {
              ctx: loopCounter,
            },
          },
        })).$on("click", loopCounter[5]);
        (defaultSlot = new contextualMem.A({
          props: {
            $$slots: {
              default: [hasObject],
            },
            $$scope: {
              ctx: loopCounter,
            },
          },
        })).$on("click", loopCounter[7]);
        (n = new contextualMem.A({
          props: {
            $$slots: {
              default: [timeManager],
            },
            $$scope: {
              ctx: loopCounter,
            },
          },
        })).$on("click", loopCounter[8]);
        return {
          c() {
            (0, timeTrack.N0i)(initializeMem.$$.fragment);
            tempVar = (0, timeTrack.xem)();
            (0, timeTrack.N0i)(defaultSlot.$$.fragment);
            _loopCount = (0, timeTrack.xem)();
            (0, timeTrack.N0i)(n.$$.fragment);
          },
          m(self, trackingData) {
            (0, timeTrack.wSR)(initializeMem, self, trackingData);
            (0, timeTrack.Yry)(self, tempVar, trackingData);
            (0, timeTrack.wSR)(defaultSlot, self, trackingData);
            (0, timeTrack.Yry)(self, _loopCount, trackingData);
            (0, timeTrack.wSR)(n, self, trackingData);
            _contextualMem = true;
          },
          p(_______anonymousData, stateTracker) {
            var currentAppSta = {};
            if (stateTracker & 4100) {
              currentAppSta.$$scope = {
                dirty: stateTracker,
                ctx: _______anonymousData,
              };
            }
            initializeMem.$set(currentAppSta);
            var currentAppSta = {};
            if (stateTracker & 4096) {
              currentAppSta.$$scope = {
                dirty: stateTracker,
                ctx: _______anonymousData,
              };
            }
            defaultSlot.$set(currentAppSta);
            var currentAppSta = {};
            if (stateTracker & 4096) {
              currentAppSta.$$scope = {
                dirty: stateTracker,
                ctx: _______anonymousData,
              };
            }
            n.$set(currentAppSta);
          },
          i(initTrackers) {
            if (!_contextualMem) {
              (0, timeTrack.c7F)(initializeMem.$$.fragment, initTrackers);
              (0, timeTrack.c7F)(defaultSlot.$$.fragment, initTrackers);
              (0, timeTrack.c7F)(n.$$.fragment, initTrackers);
              _contextualMem = true;
            }
          },
          o(fragmentStore) {
            (0, timeTrack.Tn8)(initializeMem.$$.fragment, fragmentStore);
            (0, timeTrack.Tn8)(defaultSlot.$$.fragment, fragmentStore);
            (0, timeTrack.Tn8)(n.$$.fragment, fragmentStore);
            _contextualMem = false;
          },
          d(externalTimeT) {
            if (externalTimeT) {
              (0, timeTrack.YoD)(tempVar);
              (0, timeTrack.YoD)(_loopCount);
            }
            (0, timeTrack.Hbl)(initializeMem, externalTimeT);
            (0, timeTrack.Hbl)(defaultSlot, externalTimeT);
            (0, timeTrack.Hbl)(n, externalTimeT);
          },
        };
      }
      function convertToAnon(__anonymousUser) {
        let toggleAction = __anonymousUser[2].urX ? "Hide" : "Show";
        let hideShowEvent;
        let shouldShow;
        return {
          c() {
            hideShowEvent = (0, timeTrack.Qq7)(toggleAction);
            shouldShow = (0, timeTrack.Qq7)(" Skin");
          },
          m(timeTracker, _event) {
            (0, timeTrack.Yry)(timeTracker, hideShowEvent, _event);
            (0, timeTrack.Yry)(timeTracker, shouldShow, _event);
          },
          p(externalData, toggleStateB) {
            if (
              toggleStateB & 4 &&
              toggleAction !==
                (toggleAction = externalData[2].urX ? "Hide" : "Show")
            ) {
              (0, timeTrack.iQh)(hideShowEvent, toggleAction);
            }
          },
          d(timeTrackingH) {
            if (timeTrackingH) {
              (0, timeTrack.YoD)(hideShowEvent);
              (0, timeTrack.YoD)(shouldShow);
            }
          },
        };
      }
      function hasObject(userInteracts) {
        let copySkinTimem;
        return {
          c() {
            copySkinTimem = (0, timeTrack.Qq7)("Copy Skin");
          },
          m(currencyCode, currencyTimeD) {
            (0, timeTrack.Yry)(currencyCode, copySkinTimem, currencyTimeD);
          },
          d(aliasSingle) {
            if (aliasSingle) {
              (0, timeTrack.YoD)(copySkinTimem);
            }
          },
        };
      }
      function timeManager(convertToMin) {
        let trackingInfo;
        return {
          c() {
            trackingInfo = (0, timeTrack.Qq7)("Copy Info");
          },
          m(getTrackingID, _timeTracker) {
            (0, timeTrack.Yry)(getTrackingID, trackingInfo, _timeTracker);
          },
          d(_timeTrack) {
            if (_timeTrack) {
              (0, timeTrack.YoD)(trackingInfo);
            }
          },
        };
      }
      function m(___________contextualAnn) {
        var unassignedE;
        let totalContext;
        let anonFunc;
        let contextualArg;
        let contextLabel = ___________contextualAnn[2].name + "";
        let _______placeholder;
        let contextName;
        let ________placeholder;
        let m;
        let generateLabel;
        let propertyName;
        let extractKeyed;
        let ____________contextualAnn;
        let _contextLabel;
        let __contextLabel;
        let _____________contextualAnn =
          !rememberedId9.A.alive &&
          ((unassignedE = ___________contextualAnn),
          (totalContext = new contextualMem.A({
            props: {
              $$slots: {
                default: [EventTracker],
              },
              $$scope: {
                ctx: unassignedE,
              },
            },
          })).$on("click", unassignedE[3]),
          {
            c() {
              (0, timeTrack.N0i)(totalContext.$$.fragment);
            },
            m(operationTime, eventRecorder) {
              (0, timeTrack.wSR)(totalContext, operationTime, eventRecorder);
              anonFunc = true;
            },
            p(sharedContext, shouldUpdate) {
              var updateChecker = {};
              if (shouldUpdate & 4096) {
                updateChecker.$$scope = {
                  dirty: shouldUpdate,
                  ctx: sharedContext,
                };
              }
              totalContext.$set(updateChecker);
            },
            i(dataSource) {
              if (!anonFunc) {
                (0, timeTrack.c7F)(totalContext.$$.fragment, dataSource);
                anonFunc = true;
              }
            },
            o(performanceSn) {
              (0, timeTrack.Tn8)(totalContext.$$.fragment, performanceSn);
              anonFunc = false;
            },
            d(_additionalArg) {
              (0, timeTrack.Hbl)(totalContext, _additionalArg);
            },
          });
        (generateLabel = new contextualMem.A({
          props: {
            $$slots: {
              default: [toggleElement],
            },
            $$scope: {
              ctx: ___________contextualAnn,
            },
          },
        })).$on("click", ___________contextualAnn[4]);
        (extractKeyed = new contextualMem.A({
          props: {
            $$slots: {
              default: [conditionalEv],
            },
            $$scope: {
              ctx: ___________contextualAnn,
            },
          },
        })).$on("click", ___________contextualAnn[6]);
        let ______________contextualAnn =
          ___________contextualAnn[2] instanceof n.A &&
          createContext(___________contextualAnn);
        return {
          c() {
            contextualArg = (0, timeTrack.ND4)("span");
            _______placeholder = (0, timeTrack.Qq7)(contextLabel);
            ________placeholder = (0, timeTrack.xem)();
            if (_____________contextualAnn) {
              _____________contextualAnn.c();
            }
            m = (0, timeTrack.xem)();
            (0, timeTrack.N0i)(generateLabel.$$.fragment);
            propertyName = (0, timeTrack.xem)();
            (0, timeTrack.N0i)(extractKeyed.$$.fragment);
            ____________contextualAnn = (0, timeTrack.xem)();
            if (______________contextualAnn) {
              ______________contextualAnn.c();
            }
            _contextLabel = (0, timeTrack.Iex)();
            (0, timeTrack.CFu)(contextualArg, "class", "player-name s-e6gqjf");
            (0, timeTrack.CFu)(
              contextualArg,
              "style",
              (contextName =
                ___________contextualAnn[2] instanceof n.A &&
                ___________contextualAnn[2].TIJ != null
                  ? "font-weight:bold;color:" + ___________contextualAnn[2].TIJ
                  : ""),
            );
          },
          m(AnonymousFunc, timeContext) {
            (0, timeTrack.Yry)(AnonymousFunc, contextualArg, timeContext);
            (0, timeTrack.BCw)(contextualArg, _______placeholder);
            (0, timeTrack.Yry)(AnonymousFunc, ________placeholder, timeContext);
            if (_____________contextualAnn) {
              _____________contextualAnn.m(AnonymousFunc, timeContext);
            }
            (0, timeTrack.Yry)(AnonymousFunc, m, timeContext);
            (0, timeTrack.wSR)(generateLabel, AnonymousFunc, timeContext);
            (0, timeTrack.Yry)(AnonymousFunc, propertyName, timeContext);
            (0, timeTrack.wSR)(extractKeyed, AnonymousFunc, timeContext);
            (0, timeTrack.Yry)(
              AnonymousFunc,
              ____________contextualAnn,
              timeContext,
            );
            if (______________contextualAnn) {
              ______________contextualAnn.m(AnonymousFunc, timeContext);
            }
            (0, timeTrack.Yry)(AnonymousFunc, _contextLabel, timeContext);
            __contextLabel = true;
          },
          p(_____anonymousFunc, userEventCode) {
            if (
              (!__contextLabel || userEventCode & 4) &&
              contextLabel !== (contextLabel = _____anonymousFunc[2].name + "")
            ) {
              (0, timeTrack.iQh)(_______placeholder, contextLabel);
            }
            if (
              !__contextLabel ||
              (userEventCode & 4 &&
                contextName !==
                  (contextName =
                    _____anonymousFunc[2] instanceof n.A &&
                    _____anonymousFunc[2].TIJ != null
                      ? "font-weight:bold;color:" + _____anonymousFunc[2].TIJ
                      : ""))
            ) {
              (0, timeTrack.CFu)(contextualArg, "style", contextName);
            }
            if (!rememberedId9.A.alive) {
              _____________contextualAnn.p(_____anonymousFunc, userEventCode);
            }
            var elementEvent = {};
            if (userEventCode & 4100) {
              elementEvent.$$scope = {
                dirty: userEventCode,
                ctx: _____anonymousFunc,
              };
            }
            generateLabel.$set(elementEvent);
            var elementEvent = {};
            if (userEventCode & 4096) {
              elementEvent.$$scope = {
                dirty: userEventCode,
                ctx: _____anonymousFunc,
              };
            }
            extractKeyed.$set(elementEvent);
            if (_____anonymousFunc[2] instanceof n.A) {
              if (______________contextualAnn) {
                ______________contextualAnn.p(
                  _____anonymousFunc,
                  userEventCode,
                );
                if (userEventCode & 4) {
                  (0, timeTrack.c7F)(______________contextualAnn, 1);
                }
              } else {
                (______________contextualAnn =
                  createContext(_____anonymousFunc)).c();
                (0, timeTrack.c7F)(______________contextualAnn, 1);
                ______________contextualAnn.m(
                  _contextLabel.parentNode,
                  _contextLabel,
                );
              }
            } else if (______________contextualAnn) {
              (0, timeTrack.V44)();
              (0, timeTrack.Tn8)(______________contextualAnn, 1, 1, () => {
                ______________contextualAnn = null;
              });
              (0, timeTrack.GYV)();
            }
          },
          i(fragmentKeys) {
            if (!__contextLabel) {
              (0, timeTrack.c7F)(_____________contextualAnn);
              (0, timeTrack.c7F)(generateLabel.$$.fragment, fragmentKeys);
              (0, timeTrack.c7F)(extractKeyed.$$.fragment, fragmentKeys);
              (0, timeTrack.c7F)(______________contextualAnn);
              __contextLabel = true;
            }
          },
          o(contextData) {
            (0, timeTrack.Tn8)(_____________contextualAnn);
            (0, timeTrack.Tn8)(generateLabel.$$.fragment, contextData);
            (0, timeTrack.Tn8)(extractKeyed.$$.fragment, contextData);
            (0, timeTrack.Tn8)(______________contextualAnn);
            __contextLabel = false;
          },
          d(determineType) {
            if (determineType) {
              (0, timeTrack.YoD)(contextualArg);
              (0, timeTrack.YoD)(________placeholder);
              (0, timeTrack.YoD)(m);
              (0, timeTrack.YoD)(propertyName);
              (0, timeTrack.YoD)(____________contextualAnn);
              (0, timeTrack.YoD)(_contextLabel);
            }
            if (_____________contextualAnn) {
              _____________contextualAnn.d(determineType);
            }
            (0, timeTrack.Hbl)(generateLabel, determineType);
            (0, timeTrack.Hbl)(extractKeyed, determineType);
            if (______________contextualAnn) {
              ______________contextualAnn.d(determineType);
            }
          },
        };
      }
      class DurationTrail extends timeTrack.r7T {
        constructor(service) {
          super();
          (0, timeTrack.TsN)(
            this,
            service,
            function _shouldExecute(
              contextCheck,
              executeIfCond,
              elementExists,
            ) {
              let temporary;
              var memoryTimeRet = memoryTimeTra.Uk.view;
              let isMemoryTimeS = false;
              let inputData;
              rememberedId9.A.on("stopped", () => {
                elementExists(2, (inputData = null));
              });
              rememberedId9.A.on("WdtSom", async (currentAsyncE) => {
                if (currentAsyncE?.pid) {
                  if (temporary && isMemoryTimeS) {
                    temporary.update();
                  }
                  elementExists(2, (inputData = currentAsyncE));
                  elementExists(1, (isMemoryTimeS = true));
                } else {
                  elementExists(1, (isMemoryTimeS = false));
                }
              });
              memoryTimeRet.addEventListener("click", () => {
                elementExists(1, (isMemoryTimeS = false));
              });
              return [
                temporary,
                isMemoryTimeS,
                inputData,
                () => {
                  if (inputData != null) {
                    rememberedId9.A.kmM.Xiy(inputData.pid);
                  }
                },
                () => {
                  if (inputData != null) {
                    elementExists(
                      2,
                      (inputData.vyo = !inputData.cSM),
                      inputData,
                    );
                    inputData.AaG();
                  }
                },
                () => {
                  if (inputData != null && inputData instanceof n.A) {
                    elementExists(
                      2,
                      (inputData.GeA = !inputData.urX),
                      inputData,
                    );
                    inputData.AaG();
                  }
                },
                () => {
                  if (inputData != null) {
                    navigator.clipboard.writeText(inputData.name);
                    (0, contextHolder.me)("Copied name to clipboard", 0, 2000);
                  }
                },
                () => {
                  if (inputData != null) {
                    navigator.clipboard.writeText(inputData.skinUrl || "");
                    (0, contextHolder.me)("Copied skin to clipboard", 0, 2000);
                  }
                },
                () => {
                  var inputDataInfo;
                  if (inputData != null && inputData instanceof n.A) {
                    (inputDataInfo = []).push(
                      "Name: " + (inputData.name ?? "Unnamed"),
                    );
                    inputDataInfo.push(
                      "Tag ID: " + (inputData.tagId ?? "<global tag>"),
                    );
                    inputDataInfo.push(
                      "Name Color: " + (inputData.TIJ ?? "#ffffff"),
                    );
                    inputDataInfo.push(
                      "Skin URL: " +
                        (inputData.skinUrl ?? "https://vanis.io/s/vanis1"),
                    );
                    navigator.clipboard.writeText(inputDataInfo.join("\r\n"));
                    (0, contextHolder.me)(
                      "Copied information to clipboard",
                      0,
                      2000,
                    );
                  }
                },
                function (iterateComent) {
                  timeTrack.Dnk[iterateComent ? "unshift" : "push"](() => {
                    elementExists(0, (temporary = iterateComent));
                  });
                },
                function (calculationCt) {
                  elementExists(1, (isMemoryTimeS = calculationCt));
                },
              ];
            },
            function calculateArea(processResult) {
              let tempStorage;
              let snapshot;
              let _processResult;
              function n(JQueryLib) {
                processResult[10](JQueryLib);
              }
              var slotManager = {
                $$slots: {
                  default: [m],
                },
                $$scope: {
                  ctx: processResult,
                },
              };
              if (processResult[1] !== undefined) {
                slotManager.show = processResult[1];
              }
              tempStorage = new getTimeTrack.A({
                props: slotManager,
              });
              processResult[9](tempStorage);
              timeTrack.Dnk.push(() =>
                (0, timeTrack.oIE)(tempStorage, "show", n),
              );
              return {
                c() {
                  (0, timeTrack.N0i)(tempStorage.$$.fragment);
                },
                m(_________placeholder, _eventData) {
                  (0, timeTrack.wSR)(
                    tempStorage,
                    _________placeholder,
                    _eventData,
                  );
                  _processResult = true;
                },
                p(emptyObject, [eBase]) {
                  var toggleDirtyRe = {};
                  if (eBase & 4100) {
                    toggleDirtyRe.$$scope = {
                      dirty: eBase,
                      ctx: emptyObject,
                    };
                  }
                  if (!snapshot && eBase & 2) {
                    snapshot = true;
                    toggleDirtyRe.show = emptyObject[1];
                    (0, timeTrack.Jk$)(() => (snapshot = false));
                  }
                  tempStorage.$set(toggleDirtyRe);
                },
                i(temporaryData) {
                  if (!_processResult) {
                    (0, timeTrack.c7F)(tempStorage.$$.fragment, temporaryData);
                    _processResult = true;
                  }
                },
                o(_tempStorage) {
                  (0, timeTrack.Tn8)(tempStorage.$$.fragment, _tempStorage);
                  _processResult = false;
                },
                d(argumentValue) {
                  processResult[9](null);
                  (0, timeTrack.Hbl)(tempStorage, argumentValue);
                },
              };
            },
            timeTrack.jXN,
            {},
          );
        }
      }
      let initializeAsy = DurationTrail;
    },
    92008(factory, eventService, ___anonymousUser) {
      ___anonymousUser.d(eventService, {
        A: () => notifyEventNo,
      });
      var userProcessed = ___anonymousUser(83839);
      ___anonymousUser(60821);
      var userSession = ___anonymousUser(95195);
      var __index = ___anonymousUser(83529);
      var n = ___anonymousUser(95514);
      var __initializeAnn = ___anonymousUser(15308);
      var transformAnon = ___anonymousUser(54659);
      var calculateUser = ___anonymousUser(3854);
      var processAnon = ___anonymousUser(95669);
      var ____anonymousUser = ___anonymousUser(41949);
      function executeEvent(isElementPres, userActionInv, sendMessage) {
        (isElementPres = isElementPres.slice())[21] =
          userActionInv[sendMessage];
        return isElementPres;
      }
      function elementManip(____context) {
        let processedUser;
        let tempVal;
        let processedSum = 1 + ____context[21].ePG + "";
        let ___index;
        let n;
        return {
          c() {
            processedUser = (0, userProcessed.ND4)("span");
            tempVal = (0, userProcessed.Qq7)("[tab ");
            ___index = (0, userProcessed.Qq7)(processedSum);
            n = (0, userProcessed.Qq7)("]");
            (0, userProcessed.CFu)(
              processedUser,
              "class",
              "message tabid s-619hc6",
            );
          },
          m(anonymityVerf, indexOfPlace) {
            (0, userProcessed.Yry)(anonymityVerf, processedUser, indexOfPlace);
            (0, userProcessed.BCw)(processedUser, tempVal);
            (0, userProcessed.BCw)(processedUser, ___index);
            (0, userProcessed.BCw)(processedUser, n);
          },
          p(indexedValue, eventFlag) {
            if (
              eventFlag & 8 &&
              processedSum !== (processedSum = 1 + indexedValue[21].ePG + "")
            ) {
              (0, userProcessed.iQh)(___index, processedSum);
            }
          },
          d(ensureProcess) {
            if (ensureProcess) {
              (0, userProcessed.YoD)(processedUser);
            }
          },
        };
      }
      function UserBadgeAnn(userData) {
        let hasErrorOccur;
        let badgeTimeTrav;
        let usernameFromS = userData[21].from + "";
        let processUserDt;
        let n;
        let _userData;
        let inputObject;
        let __processResult;
        let toggleSwitch;
        let usernameWithS;
        let hash;
        let processBadge = userData[21].badges && _calculateUser(userData);
        return {
          c() {
            hasErrorOccur = (0, userProcessed.ND4)("span");
            if (processBadge) {
              processBadge.c();
            }
            badgeTimeTrav = (0, userProcessed.xem)();
            processUserDt = (0, userProcessed.Qq7)(usernameFromS);
            n = (0, userProcessed.xem)();
            __processResult = (0, userProcessed.Qq7)(":");
            (0, userProcessed.CFu)(
              hasErrorOccur,
              "class",
              "message sender s-619hc6",
            );
            (0, userProcessed.CFu)(
              hasErrorOccur,
              "style",
              (_userData =
                "color:" +
                userData[21].Yqh +
                ";" +
                (userData[21].Yqh === "#ffffff"
                  ? ""
                  : "text-shadow: 0 0 3px " + userData[21].Yqh + ";")),
            );
            (0, userProcessed.CFu)(
              hasErrorOccur,
              "data-pid",
              (inputObject = userData[21].pid),
            );
            (0, userProcessed.CFu)(
              hasErrorOccur,
              "data-tip",
              "Click to spectate",
            );
          },
          m(_processInput, _userProcessed) {
            (0, userProcessed.Yry)(
              _processInput,
              hasErrorOccur,
              _userProcessed,
            );
            if (processBadge) {
              processBadge.m(hasErrorOccur, null);
            }
            (0, userProcessed.BCw)(hasErrorOccur, badgeTimeTrav);
            (0, userProcessed.BCw)(hasErrorOccur, processUserDt);
            (0, userProcessed.BCw)(hasErrorOccur, n);
            (0, userProcessed.Yry)(
              _processInput,
              __processResult,
              _userProcessed,
            );
            toggleSwitch = true;
            if (!usernameWithS) {
              hash = (0, userProcessed.KTR)(
                hasErrorOccur,
                "click",
                userData[12],
              );
              usernameWithS = true;
            }
          },
          p(processBadges, n) {
            if (processBadges[21].badges) {
              if (processBadge) {
                processBadge.p(processBadges, n);
                if (n & 8) {
                  (0, userProcessed.c7F)(processBadge, 1);
                }
              } else {
                (processBadge = _calculateUser(processBadges)).c();
                (0, userProcessed.c7F)(processBadge, 1);
                processBadge.m(hasErrorOccur, badgeTimeTrav);
              }
            } else if (processBadge) {
              (0, userProcessed.V44)();
              (0, userProcessed.Tn8)(processBadge, 1, 1, () => {
                processBadge = null;
              });
              (0, userProcessed.GYV)();
            }
            if (
              (!toggleSwitch || n & 8) &&
              usernameFromS !== (usernameFromS = processBadges[21].from + "")
            ) {
              (0, userProcessed.iQh)(processUserDt, usernameFromS);
            }
            if (
              !toggleSwitch ||
              (n & 8 &&
                _userData !==
                  (_userData =
                    "color:" +
                    processBadges[21].Yqh +
                    ";" +
                    (processBadges[21].Yqh === "#ffffff"
                      ? ""
                      : "text-shadow: 0 0 3px " + processBadges[21].Yqh + ";")))
            ) {
              (0, userProcessed.CFu)(hasErrorOccur, "style", _userData);
            }
            if (
              !toggleSwitch ||
              (n & 8 && inputObject !== (inputObject = processBadges[21].pid))
            ) {
              (0, userProcessed.CFu)(hasErrorOccur, "data-pid", inputObject);
            }
          },
          i(shouldTrigger) {
            if (!toggleSwitch) {
              (0, userProcessed.c7F)(processBadge);
              toggleSwitch = true;
            }
          },
          o(transformAndF) {
            (0, userProcessed.Tn8)(processBadge);
            toggleSwitch = false;
          },
          d(handleYoDAndC) {
            if (handleYoDAndC) {
              (0, userProcessed.YoD)(hasErrorOccur);
              (0, userProcessed.YoD)(__processResult);
            }
            if (processBadge) {
              processBadge.d();
            }
            usernameWithS = false;
            hash();
          },
        };
      }
      function statusCollect(trackStart) {
        let _temporaryData;
        let counter;
        let contentString;
        let trackStartIdx;
        let n;
        let checkBadgesOn = trackStart[21].badges && m(trackStart);
        let initializeTra = trackStart[21].from && prepareUserPB(trackStart);
        let _statusCollect = trackStart[21].from && ProcessLifesu();
        return {
          c() {
            _temporaryData = (0, userProcessed.ND4)("span");
            if (checkBadgesOn) {
              checkBadgesOn.c();
            }
            counter = (0, userProcessed.xem)();
            if (initializeTra) {
              initializeTra.c();
            }
            contentString = (0, userProcessed.xem)();
            if (_statusCollect) {
              _statusCollect.c();
            }
            trackStartIdx = (0, userProcessed.Iex)();
            (0, userProcessed.CFu)(_temporaryData, "class", "message s-619hc6");
          },
          m(getUserData, fetchUserData) {
            (0, userProcessed.Yry)(getUserData, _temporaryData, fetchUserData);
            if (checkBadgesOn) {
              checkBadgesOn.m(_temporaryData, null);
            }
            (0, userProcessed.BCw)(_temporaryData, counter);
            if (initializeTra) {
              initializeTra.m(_temporaryData, null);
            }
            (0, userProcessed.Yry)(getUserData, contentString, fetchUserData);
            if (_statusCollect) {
              _statusCollect.m(getUserData, fetchUserData);
            }
            (0, userProcessed.Yry)(getUserData, trackStartIdx, fetchUserData);
            n = true;
          },
          p(isBadgesInPro, isProProcessF) {
            if (isBadgesInPro[21].badges) {
              if (checkBadgesOn) {
                checkBadgesOn.p(isBadgesInPro, isProProcessF);
                if (isProProcessF & 8) {
                  (0, userProcessed.c7F)(checkBadgesOn, 1);
                }
              } else {
                (checkBadgesOn = m(isBadgesInPro)).c();
                (0, userProcessed.c7F)(checkBadgesOn, 1);
                checkBadgesOn.m(_temporaryData, counter);
              }
            } else if (checkBadgesOn) {
              (0, userProcessed.V44)();
              (0, userProcessed.Tn8)(checkBadgesOn, 1, 1, () => {
                checkBadgesOn = null;
              });
              (0, userProcessed.GYV)();
            }
            if (isBadgesInPro[21].from) {
              if (initializeTra) {
                initializeTra.p(isBadgesInPro, isProProcessF);
              } else {
                (initializeTra = prepareUserPB(isBadgesInPro)).c();
                initializeTra.m(_temporaryData, null);
              }
            } else if (initializeTra) {
              initializeTra.d(1);
              initializeTra = null;
            }
            if (isBadgesInPro[21].from) {
              if (!_statusCollect) {
                (_statusCollect = ProcessLifesu()).c();
                _statusCollect.m(trackStartIdx.parentNode, trackStartIdx);
              }
            } else if (_statusCollect) {
              _statusCollect.d(1);
              _statusCollect = null;
            }
          },
          i(initializeCMS) {
            if (!n) {
              (0, userProcessed.c7F)(checkBadgesOn);
              n = true;
            }
          },
          o(__userProcessed) {
            (0, userProcessed.Tn8)(checkBadgesOn);
            n = false;
          },
          d(isOperationRe) {
            if (isOperationRe) {
              (0, userProcessed.YoD)(_temporaryData);
              (0, userProcessed.YoD)(contentString);
              (0, userProcessed.YoD)(trackStartIdx);
            }
            if (checkBadgesOn) {
              checkBadgesOn.d();
            }
            if (initializeTra) {
              initializeTra.d();
            }
            if (_statusCollect) {
              _statusCollect.d(isOperationRe);
            }
          },
        };
      }
      function _calculateUser(________anonymousData) {
        let errorFlag;
        let dataTen;
        let getUserWithBG;
        dataTen = new calculateUser.A({
          props: {
            used: ________anonymousData[21].badges,
            height: 15,
          },
        });
        return {
          c() {
            errorFlag = (0, userProcessed.ND4)("div");
            (0, userProcessed.N0i)(dataTen.$$.fragment);
            (0, userProcessed.CFu)(
              errorFlag,
              "class",
              "message-badges s-619hc6",
            );
          },
          m(processUser, currentIndex) {
            (0, userProcessed.Yry)(processUser, errorFlag, currentIndex);
            (0, userProcessed.wSR)(dataTen, errorFlag, null);
            getUserWithBG = true;
          },
          p(badgeManager, needsFeatureX) {
            var temporaryBadg = {};
            if (needsFeatureX & 8) {
              temporaryBadg.used = badgeManager[21].badges;
            }
            dataTen.$set(temporaryBadg);
          },
          i(processUserTx) {
            if (!getUserWithBG) {
              (0, userProcessed.c7F)(dataTen.$$.fragment, processUserTx);
              getUserWithBG = true;
            }
          },
          o(_userContext) {
            (0, userProcessed.Tn8)(dataTen.$$.fragment, _userContext);
            getUserWithBG = false;
          },
          d(dollarSignMem) {
            if (dollarSignMem) {
              (0, userProcessed.YoD)(errorFlag);
            }
            (0, userProcessed.Hbl)(dataTen);
          },
        };
      }
      function m(updateTimeTra) {
        let temporaryMetr;
        let calculator;
        let uniqueID;
        calculator = new calculateUser.A({
          props: {
            used: updateTimeTra[21].badges,
            height: 15,
          },
        });
        return {
          c() {
            temporaryMetr = (0, userProcessed.ND4)("div");
            (0, userProcessed.N0i)(calculator.$$.fragment);
            (0, userProcessed.CFu)(
              temporaryMetr,
              "class",
              "message-badges s-619hc6",
            );
          },
          m(__________placeholder, iterCount) {
            (0, userProcessed.Yry)(
              __________placeholder,
              temporaryMetr,
              iterCount,
            );
            (0, userProcessed.wSR)(calculator, temporaryMetr, null);
            uniqueID = true;
          },
          p(updateItemBad, includeUpdate) {
            var updateCondEx = {};
            if (includeUpdate & 8) {
              updateCondEx.used = updateItemBad[21].badges;
            }
            calculator.$set(updateCondEx);
          },
          i(calculationId) {
            if (!uniqueID) {
              (0, userProcessed.c7F)(calculator.$$.fragment, calculationId);
              uniqueID = true;
            }
          },
          o(codeFragment) {
            (0, userProcessed.Tn8)(calculator.$$.fragment, codeFragment);
            uniqueID = false;
          },
          d(checkAndCallB) {
            if (checkAndCallB) {
              (0, userProcessed.YoD)(temporaryMetr);
            }
            (0, userProcessed.Hbl)(calculator);
          },
        };
      }
      function prepareUserPB(userInteract) {
        let ___userProcessed;
        let userIdToStr = userInteract[21].from + "";
        let ProcessInfo;
        let ____index;
        return {
          c() {
            ___userProcessed = (0, userProcessed.Qq7)("[");
            ProcessInfo = (0, userProcessed.Qq7)(userIdToStr);
            ____index = (0, userProcessed.Qq7)("]");
          },
          m(arg, taskTimestamp) {
            (0, userProcessed.Yry)(arg, ___userProcessed, taskTimestamp);
            (0, userProcessed.Yry)(arg, ProcessInfo, taskTimestamp);
            (0, userProcessed.Yry)(arg, ____index, taskTimestamp);
          },
          p(importantData, isUserProcess) {
            if (
              isUserProcess & 8 &&
              userIdToStr !== (userIdToStr = importantData[21].from + "")
            ) {
              (0, userProcessed.iQh)(ProcessInfo, userIdToStr);
            }
          },
          d(processDataBy) {
            if (processDataBy) {
              (0, userProcessed.YoD)(___userProcessed);
              (0, userProcessed.YoD)(ProcessInfo);
              (0, userProcessed.YoD)(____index);
            }
          },
        };
      }
      function ProcessLifesu() {
        let ___________placeholder;
        return {
          c() {
            ___________placeholder = (0, userProcessed.Qq7)(":");
          },
          m(_processedUser, ____userProcessed) {
            (0, userProcessed.Yry)(
              _processedUser,
              ___________placeholder,
              ____userProcessed,
            );
          },
          d(executeIfUser) {
            if (executeIfUser) {
              (0, userProcessed.YoD)(___________placeholder);
            }
          },
        };
      }
      function f(underscore) {
        let enclosingExec;
        let tempT;
        let extractedTime;
        let _counter;
        let n = underscore[21].timeStamp + "";
        let ____________placeholder;
        let objectAfterUn;
        let processedTime;
        let __anonymousType;
        let tempTimeData;
        let extractTimeSt;
        let scopeCounter;
        let m;
        let _extractedTime = underscore[21].text + "";
        let anonymousP;
        let _updateElement;
        let _iteration;
        let operation =
          typeof underscore[21].ePG == "number" && elementManip(underscore);
        let eventActionCt = [statusCollect, UserBadgeAnn];
        let extractTime3 = [];
        function isPropertyPid(_______________contextualAnn, getKeyLabel) {
          if (
            (__anonymousType =
              (__anonymousType = getKeyLabel & 8 ? null : __anonymousType) ==
              null
                ? !!Number.isNaN(_______________contextualAnn[21].pid)
                : __anonymousType)
          ) {
            return 0;
          } else if (_______________contextualAnn[21].from) {
            return 1;
          } else {
            return -1;
          }
        }
        if (~(tempTimeData = isPropertyPid(underscore, -1))) {
          extractTimeSt = extractTime3[tempTimeData] =
            eventActionCt[tempTimeData](underscore);
        }
        return {
          c() {
            enclosingExec = (0, userProcessed.ND4)("div");
            if (operation) {
              operation.c();
            }
            tempT = (0, userProcessed.xem)();
            extractedTime = (0, userProcessed.ND4)("span");
            _counter = (0, userProcessed.Qq7)("[");
            ____________placeholder = (0, userProcessed.Qq7)(n);
            objectAfterUn = (0, userProcessed.Qq7)("]");
            processedTime = (0, userProcessed.xem)();
            if (extractTimeSt) {
              extractTimeSt.c();
            }
            scopeCounter = (0, userProcessed.xem)();
            m = (0, userProcessed.ND4)("span");
            anonymousP = (0, userProcessed.Qq7)(_extractedTime);
            _updateElement = (0, userProcessed.xem)();
            (0, userProcessed.hgi)(
              extractedTime,
              "color",
              underscore[21].DvN || "#818589",
            );
            (0, userProcessed.CFu)(
              extractedTime,
              "class",
              "message stamp s-619hc6",
            );
            (0, userProcessed.CFu)(m, "class", "message text s-619hc6");
            (0, userProcessed.hgi)(m, "color", underscore[21].textColor);
            (0, userProcessed.CFu)(enclosingExec, "class", "message s-619hc6");
          },
          m(_____________placeholder, n) {
            (0, userProcessed.Yry)(_____________placeholder, enclosingExec, n);
            if (operation) {
              operation.m(enclosingExec, null);
            }
            (0, userProcessed.BCw)(enclosingExec, tempT);
            (0, userProcessed.BCw)(enclosingExec, extractedTime);
            (0, userProcessed.BCw)(extractedTime, _counter);
            (0, userProcessed.BCw)(extractedTime, ____________placeholder);
            (0, userProcessed.BCw)(extractedTime, objectAfterUn);
            (0, userProcessed.BCw)(enclosingExec, processedTime);
            if (~tempTimeData) {
              extractTime3[tempTimeData].m(enclosingExec, null);
            }
            (0, userProcessed.BCw)(enclosingExec, scopeCounter);
            (0, userProcessed.BCw)(enclosingExec, m);
            (0, userProcessed.BCw)(m, anonymousP);
            (0, userProcessed.BCw)(enclosingExec, _updateElement);
            _iteration = true;
          },
          p(invokeAtIndex, _invokeAtIndex) {
            if (typeof invokeAtIndex[21].ePG == "number") {
              if (operation) {
                operation.p(invokeAtIndex, _invokeAtIndex);
              } else {
                (operation = elementManip(invokeAtIndex)).c();
                operation.m(enclosingExec, tempT);
              }
            } else if (operation) {
              operation.d(1);
              operation = null;
            }
            if (
              (!_iteration || _invokeAtIndex & 8) &&
              n !== (n = invokeAtIndex[21].timeStamp + "")
            ) {
              (0, userProcessed.iQh)(____________placeholder, n);
            }
            if (!_iteration || _invokeAtIndex & 8) {
              (0, userProcessed.hgi)(
                extractedTime,
                "color",
                invokeAtIndex[21].DvN || "#818589",
              );
            }
            let _operation = tempTimeData;
            if (
              (tempTimeData = isPropertyPid(invokeAtIndex, _invokeAtIndex)) ===
              _operation
            ) {
              if (~tempTimeData) {
                extractTime3[tempTimeData].p(invokeAtIndex, _invokeAtIndex);
              }
            } else {
              if (extractTimeSt) {
                (0, userProcessed.V44)();
                (0, userProcessed.Tn8)(extractTime3[_operation], 1, 1, () => {
                  extractTime3[_operation] = null;
                });
                (0, userProcessed.GYV)();
              }
              if (~tempTimeData) {
                if ((extractTimeSt = extractTime3[tempTimeData])) {
                  extractTimeSt.p(invokeAtIndex, _invokeAtIndex);
                } else {
                  (extractTimeSt = extractTime3[tempTimeData] =
                    eventActionCt[tempTimeData](invokeAtIndex)).c();
                }
                (0, userProcessed.c7F)(extractTimeSt, 1);
                extractTimeSt.m(enclosingExec, scopeCounter);
              } else {
                extractTimeSt = null;
              }
            }
            if (
              (!_iteration || _invokeAtIndex & 8) &&
              _extractedTime !== (_extractedTime = invokeAtIndex[21].text + "")
            ) {
              (0, userProcessed.iQh)(anonymousP, _extractedTime);
            }
            if (!_iteration || _invokeAtIndex & 8) {
              (0, userProcessed.hgi)(m, "color", invokeAtIndex[21].textColor);
            }
          },
          i(documentReady) {
            if (!_iteration) {
              (0, userProcessed.c7F)(extractTimeSt);
              _iteration = true;
            }
          },
          o(getProcessed) {
            (0, userProcessed.Tn8)(extractTimeSt);
            _iteration = false;
          },
          d(triggerUser) {
            if (triggerUser) {
              (0, userProcessed.YoD)(enclosingExec);
            }
            if (operation) {
              operation.d();
            }
            if (~tempTimeData) {
              extractTime3[tempTimeData].d();
            }
          },
        };
      }
      function processUserEV(___anonymousType) {
        let userEvent;
        let __processedUser;
        let _processData = (0, userProcessed.rv_)(___anonymousType[3]);
        let _userList = [];
        for (let n = 0; n < _processData.length; n += 1) {
          _userList[n] = f(executeEvent(___anonymousType, _processData, n));
        }
        return {
          c() {
            for (
              let _____index = 0;
              _____index < _userList.length;
              _____index += 1
            ) {
              _userList[_____index].c();
            }
            userEvent = (0, userProcessed.Iex)();
          },
          m(notifyUsers, notifyUserAnd) {
            for (let n = 0; n < _userList.length; n += 1) {
              if (_userList[n]) {
                _userList[n].m(notifyUsers, notifyUserAnd);
              }
            }
            (0, userProcessed.Yry)(notifyUsers, userEvent, notifyUserAnd);
            __processedUser = true;
          },
          p(______________placeholder, bitFlagCheck) {
            if (bitFlagCheck & 4104) {
              _processData = (0, userProcessed.rv_)(
                ______________placeholder[3],
              );
              let n;
              for (n = 0; n < _processData.length; n += 1) {
                var undefinedVar;
                var eventResult = executeEvent(
                  ______________placeholder,
                  _processData,
                  n,
                );
                if (_userList[n]) {
                  _userList[n].p(eventResult, bitFlagCheck);
                  (0, userProcessed.c7F)(_userList[n], 1);
                } else {
                  _userList[n] = f(eventResult);
                  _userList[n].c();
                  (0, userProcessed.c7F)(_userList[n], 1);
                  _userList[n].m(userEvent.parentNode, userEvent);
                }
              }
              (0, userProcessed.V44)();
              n = _processData.length;
              for (; n < _userList.length; n += 1) {
                undefinedVar = n;
                (0, userProcessed.Tn8)(_userList[undefinedVar], 1, 1, () => {
                  _userList[undefinedVar] = null;
                });
              }
              (0, userProcessed.GYV)();
            }
          },
          i(hasBeenProces) {
            if (!__processedUser) {
              for (
                let ______index = 0;
                ______index < _processData.length;
                ______index += 1
              ) {
                (0, userProcessed.c7F)(_userList[______index]);
              }
              __processedUser = true;
            }
          },
          o(filterAndPurD) {
            _userList = _userList.filter(Boolean);
            for (
              let userIndex = 0;
              userIndex < _userList.length;
              userIndex += 1
            ) {
              (0, userProcessed.Tn8)(_userList[userIndex]);
            }
            __processedUser = false;
          },
          d(_____userProcessed) {
            if (_____userProcessed) {
              (0, userProcessed.YoD)(userEvent);
            }
            (0, userProcessed.ppq)(_userList, _____userProcessed);
          },
        };
      }
      function initUserProc(eventRegistry) {
        let ___processedUser;
        let userAfterPrev;
        let _______index;
        let _processUser;
        let n;
        let userProcess;
        let userProcessor;
        let _userIndex;
        let userIterator;
        return {
          c() {
            ___processedUser = (0, userProcessed.ND4)("select");
            userAfterPrev = (0, userProcessed.ND4)("option");
            _______index = (0, userProcessed.Qq7)("Tab 1");
            n = (0, userProcessed.ND4)("option");
            userProcess = (0, userProcessed.Qq7)("Tab 2");
            userAfterPrev.disabled = _processUser = !eventRegistry[9][0];
            userAfterPrev.__value = "0";
            (0, userProcessed.Gvd)(userAfterPrev, userAfterPrev.__value);
            n.disabled = userProcessor = !eventRegistry[9][1];
            n.__value = "1";
            (0, userProcessed.Gvd)(n, n.__value);
            (0, userProcessed.CFu)(
              ___processedUser,
              "class",
              "tab-selection s-619hc6",
            );
            (0, userProcessed.CFu)(___processedUser, "name", "speaker");
            if (eventRegistry[0] === undefined) {
              (0, userProcessed.Dti)(() =>
                eventRegistry[15].call(___processedUser),
              );
            }
          },
          m(________index, _____anonymousUser) {
            (0, userProcessed.Yry)(
              ________index,
              ___processedUser,
              _____anonymousUser,
            );
            (0, userProcessed.BCw)(___processedUser, userAfterPrev);
            (0, userProcessed.BCw)(userAfterPrev, _______index);
            (0, userProcessed.BCw)(___processedUser, n);
            (0, userProcessed.BCw)(n, userProcess);
            (0, userProcessed.fs8)(___processedUser, eventRegistry[0], true);
            if (!_userIndex) {
              userIterator = (0, userProcessed.KTR)(
                ___processedUser,
                "change",
                eventRegistry[15],
              );
              _userIndex = true;
            }
          },
          p(______userProcessed, _______userProcessed) {
            if (
              _______userProcessed & 512 &&
              _processUser !== (_processUser = !______userProcessed[9][0])
            ) {
              userAfterPrev.disabled = _processUser;
            }
            if (
              _______userProcessed & 512 &&
              userProcessor !== (userProcessor = !______userProcessed[9][1])
            ) {
              n.disabled = userProcessor;
            }
            if (_______userProcessed & 1) {
              (0, userProcessed.fs8)(___processedUser, ______userProcessed[0]);
            }
          },
          d(_checkAndCall) {
            if (_checkAndCall) {
              (0, userProcessed.YoD)(___processedUser);
            }
            _userIndex = false;
            userIterator();
          },
        };
      }
      class ____processedUser extends userProcessed.r7T {
        constructor(______anonymousUser) {
          super();
          (0, userProcessed.TsN)(
            this,
            ______anonymousUser,
            function ________________contextualAnn(
              _operationTime,
              _________________contextualAnn,
              getContextual,
            ) {
              let onAnonymousUX;
              n.Uk.view.addEventListener("mousedown", async (getAnonymous) => {
                await (0, ____anonymousUser.io)();
                anonymize?.blur();
              });
              let anonymize;
              let onMouseDown;
              let getOperationE = async (signInThenPer) => {
                if (f) {
                  await (0, ____anonymousUser.io)();
                  if (
                    !!signInThenPer ||
                    !(
                      Math.abs(
                        onMouseDown.scrollHeight -
                          onMouseDown.clientHeight -
                          onMouseDown.scrollTop,
                      ) > 200
                    )
                  ) {
                    getContextual(
                      2,
                      (onMouseDown.scrollTop = onMouseDown.scrollHeight),
                      onMouseDown,
                    );
                  }
                }
              };
              userSession.A.on("osKiSw", () => anonymize.focus());
              let handleMouseDO = [];
              let contextualTim = false;
              let m = (mouseEventEvt) => {
                handleMouseDO.push(mouseEventEvt);
                if (handleMouseDO.length > 300) {
                  handleMouseDO.shift();
                }
                getContextual(4, (contextualTim = !contextualTim));
                getOperationE(false);
              };
              let _getContextual = {
                Yqh: "#99cdff",
                pid: NaN,
                badges: transformAnon.H.get("official"),
              };
              let __________________contextualAnn = {
                Yqh: "#e1dedd",
                pid: NaN,
                badges: transformAnon.H.get("system"),
              };
              userSession.A.on("QsoZPW", (combineTextSt) => {
                m(
                  Object.assign(
                    {
                      text: combineTextSt,
                      timeStamp: (0, __initializeAnn.rO)(),
                    },
                    _getContextual,
                  ),
                );
              });
              userSession.A.on("cjyapb", (elementText, textColor) => {
                m(
                  Object.assign(
                    {
                      text: elementText,
                      textColor: textColor,
                      timeStamp: (0, __initializeAnn.rO)(),
                    },
                    __________________contextualAnn,
                  ),
                );
              });
              userSession.A.on("NExDkf", (defaultInit) => {
                defaultInit.Yqh ||= "#ffffff";
                defaultInit.textColor ||= "#ffffff";
                defaultInit.timeStamp ||= (0, __initializeAnn.rO)();
                m(defaultInit);
              });
              userSession.A.on("IickcJ", () => {
                getContextual(3, (handleMouseDO = []));
              });
              let f = false;
              let unusedArg =
                __index.A.get("showHud") && __index.A.get("showChat");
              let handleContext = __index.A.get("hudScale");
              let onMouseDownOn = __index.A.get("chatHeight");
              userSession.A.on("uEBHda", (_self) => {
                getContextual(5, (f = _self));
              });
              __index.A.on("zrVIMz", (_______anonymousUser, onMouseDownAn) => {
                if (_______anonymousUser === "chatHeight") {
                  getContextual(8, (onMouseDownOn = onMouseDownAn));
                } else if (
                  _______anonymousUser === "showChat" &&
                  __index.A.get("showHud")
                ) {
                  getContextual(6, (unusedArg = onMouseDownAn));
                } else if (_______anonymousUser === "showHud") {
                  getContextual(
                    6,
                    (unusedArg = onMouseDownAn && __index.A.get("showChat")),
                  );
                } else if (_______anonymousUser === "hudScale") {
                  getContextual(7, (handleContext = onMouseDownAn));
                }
              });
              let ___________________contextualAnn = "0";
              let handleAnonuxM = [false, false];
              userSession.A.on("jPH", (element, _handleEvent) => {
                if (_handleEvent && !handleAnonuxM[onAnonymousUX]) {
                  getContextual(
                    0,
                    (___________________contextualAnn = "" + element),
                  );
                  getContextual(10, (onAnonymousUX = element));
                }
                getContextual(
                  9,
                  (handleAnonuxM[element] = _handleEvent),
                  handleAnonuxM,
                );
                getContextual(9, handleAnonuxM);
              });
              _operationTime.$$.update = () => {
                if (_operationTime.$$.dirty & 1) {
                  getContextual(
                    10,
                    (onAnonymousUX = +___________________contextualAnn),
                  );
                }
              };
              return [
                ___________________contextualAnn,
                anonymize,
                onMouseDown,
                handleMouseDO,
                contextualTim,
                f,
                unusedArg,
                handleContext,
                onMouseDownOn,
                handleAnonuxM,
                onAnonymousUX,
                (handleEnterTo) => {
                  if (handleEnterTo.key === "Enter") {
                    if (anonymize.value?.trim()) {
                      userSession.A.eWI[onAnonymousUX].uot(anonymize.value);
                      getContextual(1, (anonymize.value = ""), anonymize);
                    }
                    n.Uk.view.focus();
                    getOperationE(true);
                  }
                },
                (patternMagic) => {
                  var patternMagic = patternMagic.target;
                  if ((patternMagic &&= +patternMagic.dataset.pid)) {
                    userSession.A.kmM.Xiy(patternMagic);
                  }
                },
                function (replaceNulls) {
                  userProcessed.Dnk[replaceNulls ? "unshift" : "push"](() => {
                    getContextual(2, (onMouseDown = replaceNulls));
                  });
                },
                function (______anonymousFunc) {
                  userProcessed.Dnk[______anonymousFunc ? "unshift" : "push"](
                    () => {
                      getContextual(1, (anonymize = ______anonymousFunc));
                    },
                  );
                },
                function () {
                  getContextual(
                    0,
                    (___________________contextualAnn = (0, userProcessed.Hw5)(
                      this,
                    )),
                  );
                },
              ];
            },
            function DnkUtil(hasCommentAtZ) {
              let tFlag;
              let initializing;
              let arrayIndex;
              let n = hasCommentAtZ[4];
              let tempResult;
              let initializeOrP;
              let commentArray;
              let commentStarts;
              let commentIndic;
              let commentIndex = hasCommentAtZ[9];
              let _unusedArg;
              let commentList;
              let userCount;
              let m;
              let _minifiedAnon = processUserEV(hasCommentAtZ);
              let pointer = initUserProc(hasCommentAtZ);
              return {
                c() {
                  tFlag = (0, userProcessed.ND4)("div");
                  initializing = (0, userProcessed.ND4)("div");
                  arrayIndex = (0, userProcessed.ND4)("div");
                  _minifiedAnon.c();
                  tempResult = (0, userProcessed.xem)();
                  initializeOrP = (0, userProcessed.ND4)("div");
                  commentArray = (0, userProcessed.ND4)("input");
                  commentIndic = (0, userProcessed.xem)();
                  pointer.c();
                  (0, userProcessed.CFu)(
                    arrayIndex,
                    "class",
                    "message-list s-619hc6",
                  );
                  (0, userProcessed.CFu)(
                    commentArray,
                    "class",
                    "message-input s-619hc6",
                  );
                  (0, userProcessed.CFu)(commentArray, "type", "text");
                  (0, userProcessed.CFu)(commentArray, "spellcheck", "false");
                  (0, userProcessed.CFu)(commentArray, "autocomplete", "off");
                  (0, userProcessed.CFu)(commentArray, "maxlength", "100");
                  (0, userProcessed.CFu)(commentArray, "tabindex", "-1");
                  (0, userProcessed.CFu)(
                    commentArray,
                    "placeholder",
                    (commentStarts =
                      "Enter message as tab " +
                      (1 + hasCommentAtZ[10]) +
                      "..."),
                  );
                  (0, userProcessed.CFu)(
                    initializeOrP,
                    "class",
                    "inputs s-619hc6",
                  );
                  (0, userProcessed.CFu)(
                    initializing,
                    "class",
                    "chatbox s-619hc6",
                  );
                  (0, userProcessed.hgi)(
                    initializing,
                    "height",
                    hasCommentAtZ[8],
                  );
                  (0, userProcessed.CFu)(
                    tFlag,
                    "class",
                    "chat-container s-619hc6",
                  );
                  (0, userProcessed.hgi)(
                    tFlag,
                    "transform",
                    "scale(" + hasCommentAtZ[7] + ")",
                  );
                  (0, userProcessed.hgi)(
                    tFlag,
                    "display",
                    hasCommentAtZ[5] && hasCommentAtZ[6] ? "block" : "none",
                  );
                },
                m(invokeUserLib, n) {
                  (0, userProcessed.Yry)(invokeUserLib, tFlag, n);
                  (0, userProcessed.BCw)(tFlag, initializing);
                  (0, userProcessed.BCw)(initializing, arrayIndex);
                  _minifiedAnon.m(arrayIndex, null);
                  hasCommentAtZ[13](arrayIndex);
                  (0, userProcessed.BCw)(initializing, tempResult);
                  (0, userProcessed.BCw)(initializing, initializeOrP);
                  (0, userProcessed.BCw)(initializeOrP, commentArray);
                  hasCommentAtZ[14](commentArray);
                  (0, userProcessed.BCw)(initializeOrP, commentIndic);
                  pointer.m(initializeOrP, null);
                  commentList = true;
                  if (!userCount) {
                    m = (0, userProcessed.KTR)(
                      commentArray,
                      "keydown",
                      hasCommentAtZ[11],
                    );
                    userCount = true;
                  }
                },
                p(_userProcessor, [_eBase]) {
                  if (
                    _eBase & 16 &&
                    (0, userProcessed.jXN)(n, (n = _userProcessor[4]))
                  ) {
                    (0, userProcessed.V44)();
                    (0, userProcessed.Tn8)(
                      _minifiedAnon,
                      1,
                      1,
                      userProcessed.lQ1,
                    );
                    (0, userProcessed.GYV)();
                    (_minifiedAnon = processUserEV(_userProcessor)).c();
                    (0, userProcessed.c7F)(_minifiedAnon, 1);
                    _minifiedAnon.m(arrayIndex, null);
                  } else {
                    _minifiedAnon.p(_userProcessor, _eBase);
                  }
                  if (
                    !commentList ||
                    (_eBase & 1024 &&
                      commentStarts !==
                        (commentStarts =
                          "Enter message as tab " +
                          (1 + _userProcessor[10]) +
                          "..."))
                  ) {
                    (0, userProcessed.CFu)(
                      commentArray,
                      "placeholder",
                      commentStarts,
                    );
                  }
                  if (
                    _eBase & 512 &&
                    (0, userProcessed.jXN)(
                      commentIndex,
                      (commentIndex = _userProcessor[9]),
                    )
                  ) {
                    pointer.d(1);
                    (pointer = initUserProc(_userProcessor)).c();
                    pointer.m(initializeOrP, null);
                  } else {
                    pointer.p(_userProcessor, _eBase);
                  }
                  if (!commentList || _eBase & 256) {
                    (0, userProcessed.hgi)(
                      initializing,
                      "height",
                      _userProcessor[8],
                    );
                  }
                  if (!commentList || _eBase & 128) {
                    (0, userProcessed.hgi)(
                      tFlag,
                      "transform",
                      "scale(" + _userProcessor[7] + ")",
                    );
                  }
                  if (!commentList || _eBase & 96) {
                    (0, userProcessed.hgi)(
                      tFlag,
                      "display",
                      _userProcessor[5] && _userProcessor[6] ? "block" : "none",
                    );
                  }
                },
                i(initComment) {
                  if (!commentList) {
                    (0, userProcessed.c7F)(_minifiedAnon);
                    if (initComment) {
                      (0, userProcessed.Dti)(() => {
                        if (commentList) {
                          (_unusedArg =
                            _unusedArg ||
                            (0, userProcessed.h86)(
                              tFlag,
                              processAnon.Rv,
                              {
                                duration: 300,
                              },
                              true,
                            )).run(1);
                        }
                      });
                    }
                    commentList = true;
                  }
                },
                o(processIfUser) {
                  (0, userProcessed.Tn8)(_minifiedAnon);
                  if (processIfUser) {
                    (_unusedArg =
                      _unusedArg ||
                      (0, userProcessed.h86)(
                        tFlag,
                        processAnon.Rv,
                        {
                          duration: 300,
                        },
                        false,
                      )).run(0);
                  }
                  commentList = false;
                },
                d(checkPlace) {
                  if (checkPlace) {
                    (0, userProcessed.YoD)(tFlag);
                  }
                  _minifiedAnon.d(checkPlace);
                  hasCommentAtZ[13](null);
                  hasCommentAtZ[14](null);
                  pointer.d(checkPlace);
                  if (checkPlace && _unusedArg) {
                    _unusedArg.end();
                  }
                  userCount = false;
                  m();
                },
              };
            },
            userProcessed.jXN,
            {},
          );
        }
      }
      let notifyEventNo = ____processedUser;
    },
    79305(initializeMap, initialState, updateState) {
      updateState.d(initialState, {
        A: () => objectId,
      });
      var newStateFrom8 = updateState(83839);
      updateState(60821);
      var finalState = updateState(95195);
      var eventCounter = updateState(78225);
      var n = updateState(83529);
      var stateUpdater = updateState(3854);
      var __userData = updateState(95669);
      function setGETKey(document, assignTimeTra, determineBadg) {
        (document = document.slice())[11] = assignTimeTra[determineBadg];
        document[13] = determineBadg;
        return document;
      }
      function l(parseOrError) {
        let _emptyObject;
        let transformer;
        let dataContainer;
        let _________index;
        let n;
        let fifthArgOrVal = parseOrError[5];
        let __________index;
        let transformData;
        let emptyObjectId = processAndMap(parseOrError);
        return {
          c() {
            _emptyObject = (0, newStateFrom8.ND4)("div");
            transformer = (0, newStateFrom8.ND4)("div");
            dataContainer = (0, newStateFrom8.Qq7)(parseOrError[3]);
            _________index = (0, newStateFrom8.xem)();
            n = (0, newStateFrom8.ND4)("div");
            emptyObjectId.c();
            (0, newStateFrom8.CFu)(
              transformer,
              "class",
              "leaderboard title s-mzwvqb",
            );
            (0, newStateFrom8.goL)(transformer, "hide", !parseOrError[4]);
            (0, newStateFrom8.CFu)(
              _emptyObject,
              "class",
              "leaderboard-container s-mzwvqb",
            );
            (0, newStateFrom8.hgi)(
              _emptyObject,
              "transform",
              "scale(" + parseOrError[2] + ")",
            );
          },
          m(stateTransluc, dataObject) {
            (0, newStateFrom8.Yry)(stateTransluc, _emptyObject, dataObject);
            (0, newStateFrom8.BCw)(_emptyObject, transformer);
            (0, newStateFrom8.BCw)(transformer, dataContainer);
            (0, newStateFrom8.BCw)(_emptyObject, _________index);
            (0, newStateFrom8.BCw)(_emptyObject, n);
            emptyObjectId.m(n, null);
            transformData = true;
          },
          p(switches, checkAndTrans) {
            if (!transformData || checkAndTrans & 8) {
              (0, newStateFrom8.iQh)(dataContainer, switches[3]);
            }
            if (!transformData || checkAndTrans & 16) {
              (0, newStateFrom8.goL)(transformer, "hide", !switches[4]);
            }
            if (
              checkAndTrans & 32 &&
              (0, newStateFrom8.jXN)(
                fifthArgOrVal,
                (fifthArgOrVal = switches[5]),
              )
            ) {
              (0, newStateFrom8.V44)();
              (0, newStateFrom8.Tn8)(emptyObjectId, 1, 1, newStateFrom8.lQ1);
              (0, newStateFrom8.GYV)();
              (emptyObjectId = processAndMap(switches)).c();
              (0, newStateFrom8.c7F)(emptyObjectId, 1);
              emptyObjectId.m(n, null);
            } else {
              emptyObjectId.p(switches, checkAndTrans);
            }
            if (!transformData || checkAndTrans & 4) {
              (0, newStateFrom8.hgi)(
                _emptyObject,
                "transform",
                "scale(" + switches[2] + ")",
              );
            }
          },
          i(isEmptyData) {
            if (!transformData) {
              (0, newStateFrom8.c7F)(emptyObjectId);
              if (isEmptyData) {
                (0, newStateFrom8.Dti)(() => {
                  if (transformData) {
                    (__________index =
                      __________index ||
                      (0, newStateFrom8.h86)(
                        _emptyObject,
                        __userData.Rv,
                        {
                          duration: 300,
                        },
                        true,
                      )).run(1);
                  }
                });
              }
              transformData = true;
            }
          },
          o(hasAndUseFor) {
            (0, newStateFrom8.Tn8)(emptyObjectId);
            if (hasAndUseFor) {
              (__________index =
                __________index ||
                (0, newStateFrom8.h86)(
                  _emptyObject,
                  __userData.Rv,
                  {
                    duration: 300,
                  },
                  false,
                )).run(0);
            }
            transformData = false;
          },
          d(__eventTrigger) {
            if (__eventTrigger) {
              (0, newStateFrom8.YoD)(_emptyObject);
            }
            emptyObjectId.d(__eventTrigger);
            if (__eventTrigger && __________index) {
              __________index.end();
            }
          },
        };
      }
      function transformSpan(minifiedNum) {
        let spanElement;
        let indexPosition = minifiedNum[11].position + "";
        let userInput;
        let iterator;
        return {
          c() {
            spanElement = (0, newStateFrom8.ND4)("span");
            userInput = (0, newStateFrom8.Qq7)(indexPosition);
            iterator = (0, newStateFrom8.Qq7)(".");
            (0, newStateFrom8.CFu)(
              spanElement,
              "class",
              "leaderboard entry-position s-mzwvqb",
            );
          },
          m(calculateSpan, interactionT) {
            (0, newStateFrom8.Yry)(calculateSpan, spanElement, interactionT);
            (0, newStateFrom8.BCw)(spanElement, userInput);
            (0, newStateFrom8.BCw)(spanElement, iterator);
          },
          p(_element, hasSelected) {
            if (
              hasSelected & 64 &&
              indexPosition !== (indexPosition = _element[11].position + "")
            ) {
              (0, newStateFrom8.iQh)(userInput, indexPosition);
            }
          },
          d(detectAndAdv7) {
            if (detectAndAdv7) {
              (0, newStateFrom8.YoD)(spanElement);
            }
          },
        };
      }
      function mapInit(isSwitchOn) {
        let stateUpdaterS;
        let switchStatus;
        stateUpdaterS = new stateUpdater.A({
          props: {
            used: isSwitchOn[11].badges,
            height: 18,
            style:
              "margin-top:3px;position:absolute;inset:0;margin-left:" +
              (calculateNewF ? 24 : 16) +
              "px;",
          },
        });
        return {
          c() {
            (0, newStateFrom8.N0i)(stateUpdaterS.$$.fragment);
          },
          m(toggleClass, _toggleClass) {
            (0, newStateFrom8.wSR)(stateUpdaterS, toggleClass, _toggleClass);
            switchStatus = true;
          },
          p(badgeCounts, useBadgeFromS) {
            var updateBadgeIf = {};
            if (useBadgeFromS & 64) {
              updateBadgeIf.used = badgeCounts[11].badges;
            }
            stateUpdaterS.$set(updateBadgeIf);
          },
          i(triggerUpdate) {
            if (!switchStatus) {
              (0, newStateFrom8.c7F)(stateUpdaterS.$$.fragment, triggerUpdate);
              switchStatus = true;
            }
          },
          o(currentState) {
            (0, newStateFrom8.Tn8)(stateUpdaterS.$$.fragment, currentState);
            switchStatus = false;
          },
          d(_currentState) {
            (0, newStateFrom8.Hbl)(stateUpdaterS, _currentState);
          },
        };
      }
      function hasBadgesAndS(usernameHasS) {
        let badgesState;
        let tBadgeFilter;
        let usernameHasS1 = usernameHasS[11].badges && mapInit(usernameHasS);
        return {
          c() {
            if (usernameHasS1) {
              usernameHasS1.c();
            }
            badgesState = (0, newStateFrom8.Iex)();
          },
          m(____anonymousType, ___________index) {
            if (usernameHasS1) {
              usernameHasS1.m(____anonymousType, ___________index);
            }
            (0, newStateFrom8.Yry)(
              ____anonymousType,
              badgesState,
              ___________index,
            );
            tBadgeFilter = true;
          },
          p(evaluateUserB, flagCombiner) {
            if (evaluateUserB[11].badges) {
              if (usernameHasS1) {
                usernameHasS1.p(evaluateUserB, flagCombiner);
                if (flagCombiner & 64) {
                  (0, newStateFrom8.c7F)(usernameHasS1, 1);
                }
              } else {
                (usernameHasS1 = mapInit(evaluateUserB)).c();
                (0, newStateFrom8.c7F)(usernameHasS1, 1);
                usernameHasS1.m(badgesState.parentNode, badgesState);
              }
            } else if (usernameHasS1) {
              (0, newStateFrom8.V44)();
              (0, newStateFrom8.Tn8)(usernameHasS1, 1, 1, () => {
                usernameHasS1 = null;
              });
              (0, newStateFrom8.GYV)();
            }
          },
          i(isEmptyOrRun) {
            if (!tBadgeFilter) {
              (0, newStateFrom8.c7F)(usernameHasS1);
              tBadgeFilter = true;
            }
          },
          o(checkS1Unlock) {
            (0, newStateFrom8.Tn8)(usernameHasS1);
            tBadgeFilter = false;
          },
          d(init) {
            if (init) {
              (0, newStateFrom8.YoD)(badgesState);
            }
            if (usernameHasS1) {
              usernameHasS1.d(init);
            }
          },
        };
      }
      function createStatePb(________anonymousUser) {
        let _initialState;
        let userTextAtKey = ________anonymousUser[11].text + "";
        let ____________index;
        let itemIndex;
        return {
          c() {
            _initialState = (0, newStateFrom8.ND4)("a");
            ____________index = (0, newStateFrom8.Qq7)(userTextAtKey);
            (0, newStateFrom8.CFu)(
              _initialState,
              "href",
              (itemIndex = ________anonymousUser[11].link),
            );
            (0, newStateFrom8.CFu)(_initialState, "target", "_blank");
            (0, newStateFrom8.CFu)(_initialState, "rel", "noopener");
            (0, newStateFrom8.CFu)(_initialState, "class", "s-mzwvqb");
          },
          m(handler, progressTrail) {
            (0, newStateFrom8.Yry)(handler, _initialState, progressTrail);
            (0, newStateFrom8.BCw)(_initialState, ____________index);
          },
          p(tweeth12, n) {
            if (
              n & 64 &&
              userTextAtKey !== (userTextAtKey = tweeth12[11].text + "")
            ) {
              (0, newStateFrom8.iQh)(____________index, userTextAtKey);
            }
            if (n & 64 && itemIndex !== (itemIndex = tweeth12[11].link)) {
              (0, newStateFrom8.CFu)(_initialState, "href", itemIndex);
            }
          },
          d(_____anonymousType) {
            if (_____anonymousType) {
              (0, newStateFrom8.YoD)(_initialState);
            }
          },
        };
      }
      function textManager(_userInteracts) {
        let trimmedIntera = _userInteracts[11].text + "";
        let cleanedUserTr;
        return {
          c() {
            cleanedUserTr = (0, newStateFrom8.Qq7)(trimmedIntera);
          },
          m(mergeNewState, errorObject) {
            (0, newStateFrom8.Yry)(mergeNewState, cleanedUserTr, errorObject);
          },
          p(nestedValues, ensureCondsRe) {
            if (
              ensureCondsRe & 64 &&
              trimmedIntera !== (trimmedIntera = nestedValues[11].text + "")
            ) {
              (0, newStateFrom8.iQh)(cleanedUserTr, trimmedIntera);
            }
          },
          d(isUserDataCle) {
            if (isUserDataCle) {
              (0, newStateFrom8.YoD)(cleanedUserTr);
            }
          },
        };
      }
      function resolveState(initUserOrTra) {
        let unusedElement;
        let isEven;
        function getStateOrMan(createInitial) {
          if (createInitial[11].link) {
            return createStatePb;
          } else {
            return textManager;
          }
        }
        let _________anonymousUser = getStateOrMan(initUserOrTra);
        let n = _________anonymousUser(initUserOrTra);
        return {
          c() {
            unusedElement = (0, newStateFrom8.ND4)("span");
            n.c();
            (0, newStateFrom8.CFu)(
              unusedElement,
              "class",
              "leaderboard entry-text s-mzwvqb",
            );
            (0, newStateFrom8.CFu)(
              unusedElement,
              "style",
              (isEven =
                "color:" +
                initUserOrTra[11].color +
                ";" +
                (initUserOrTra[11].color === "#ffffff"
                  ? ""
                  : "text-shadow:0 0 3px " + initUserOrTra[11].color + ";") +
                "font-weight:" +
                (initUserOrTra[11].bold ? "bold" : "normal")),
            );
          },
          m(combine, _secondArg) {
            (0, newStateFrom8.Yry)(combine, unusedElement, _secondArg);
            n.m(unusedElement, null);
          },
          p(userActionTra, requiresAuth) {
            if (
              _________anonymousUser ===
                (_________anonymousUser = getStateOrMan(userActionTra)) &&
              n
            ) {
              n.p(userActionTra, requiresAuth);
            } else {
              n.d(1);
              if ((n = _________anonymousUser(userActionTra))) {
                n.c();
                n.m(unusedElement, null);
              }
            }
            if (
              requiresAuth & 64 &&
              isEven !==
                (isEven =
                  "color:" +
                  userActionTra[11].color +
                  ";" +
                  (userActionTra[11].color === "#ffffff"
                    ? ""
                    : "text-shadow:0 0 3px " + userActionTra[11].color + ";") +
                  "font-weight:" +
                  (userActionTra[11].bold ? "bold" : "normal"))
            ) {
              (0, newStateFrom8.CFu)(unusedElement, "style", isEven);
            }
          },
          d(_______anonymousFunc) {
            if (_______anonymousFunc) {
              (0, newStateFrom8.YoD)(unusedElement);
            }
            n.d();
          },
        };
      }
      function m(__alias) {
        let undefinedData;
        let _temp;
        let getValueAtFif = __alias[5];
        let _____________index;
        let n = __alias[5];
        let index5Value;
        let assignAtIndex;
        let __tempStorage;
        let l;
        let getValueAt5;
        let swapAtIndex;
        let ___tempStorage;
        let m = calculateNewF && __alias[11].position && transformSpan(__alias);
        let fifthElement = hasBadgesAndS(__alias);
        let inputArray = resolveState(__alias);
        return {
          c() {
            undefinedData = (0, newStateFrom8.ND4)("div");
            if (m) {
              m.c();
            }
            _temp = (0, newStateFrom8.xem)();
            fifthElement.c();
            _____________index = (0, newStateFrom8.xem)();
            inputArray.c();
            index5Value = (0, newStateFrom8.xem)();
            (0, newStateFrom8.CFu)(
              undefinedData,
              "class",
              "leaderboard entry s-mzwvqb",
            );
            (0, newStateFrom8.CFu)(
              undefinedData,
              "data-pid",
              (assignAtIndex = __alias[11].pid),
            );
            (0, newStateFrom8.CFu)(
              undefinedData,
              "data-key",
              (__tempStorage = __alias[13]),
            );
            (0, newStateFrom8.CFu)(
              undefinedData,
              "data-tip",
              (l = __alias[11].pid ? "Click to spectate player" : ""),
            );
            (0, newStateFrom8.goL)(undefinedData, "custom", !__alias[11].pid);
          },
          m(_inputData, n) {
            (0, newStateFrom8.Yry)(_inputData, undefinedData, n);
            if (m) {
              m.m(undefinedData, null);
            }
            (0, newStateFrom8.BCw)(undefinedData, _temp);
            fifthElement.m(undefinedData, null);
            (0, newStateFrom8.BCw)(undefinedData, _____________index);
            inputArray.m(undefinedData, null);
            (0, newStateFrom8.BCw)(undefinedData, index5Value);
            getValueAt5 = true;
            if (!swapAtIndex) {
              ___tempStorage = (0, newStateFrom8.KTR)(
                undefinedData,
                "click",
                function () {
                  if (
                    (0, newStateFrom8.Qk1)(__alias[11].pid ? __alias[7] : f)
                  ) {
                    (__alias[11].pid ? __alias[7] : f).apply(this, arguments);
                  }
                },
              );
              swapAtIndex = true;
            }
          },
          p(referencing, transformed) {
            __alias = referencing;
            if (calculateNewF && __alias[11].position) {
              if (m) {
                m.p(__alias, transformed);
              } else {
                (m = transformSpan(__alias)).c();
                m.m(undefinedData, _temp);
              }
            } else if (m) {
              m.d(1);
              m = null;
            }
            if (
              transformed & 32 &&
              (0, newStateFrom8.jXN)(
                getValueAtFif,
                (getValueAtFif = __alias[5]),
              )
            ) {
              (0, newStateFrom8.V44)();
              (0, newStateFrom8.Tn8)(fifthElement, 1, 1, newStateFrom8.lQ1);
              (0, newStateFrom8.GYV)();
              (fifthElement = hasBadgesAndS(__alias)).c();
              (0, newStateFrom8.c7F)(fifthElement, 1);
              fifthElement.m(undefinedData, _____________index);
            } else {
              fifthElement.p(__alias, transformed);
            }
            if (
              transformed & 32 &&
              (0, newStateFrom8.jXN)(n, (n = __alias[5]))
            ) {
              inputArray.d(1);
              (inputArray = resolveState(__alias)).c();
              inputArray.m(undefinedData, index5Value);
            } else {
              inputArray.p(__alias, transformed);
            }
            if (
              !getValueAt5 ||
              (transformed & 64 &&
                assignAtIndex !== (assignAtIndex = __alias[11].pid))
            ) {
              (0, newStateFrom8.CFu)(undefinedData, "data-pid", assignAtIndex);
            }
            if (
              !getValueAt5 ||
              (transformed & 64 &&
                l !== (l = __alias[11].pid ? "Click to spectate player" : ""))
            ) {
              (0, newStateFrom8.CFu)(undefinedData, "data-tip", l);
            }
            if (!getValueAt5 || transformed & 64) {
              (0, newStateFrom8.goL)(undefinedData, "custom", !__alias[11].pid);
            }
          },
          i(processFifth) {
            if (!getValueAt5) {
              (0, newStateFrom8.c7F)(fifthElement);
              getValueAt5 = true;
            }
          },
          o(createState) {
            (0, newStateFrom8.Tn8)(fifthElement);
            getValueAt5 = false;
          },
          d(createWithOrg) {
            if (createWithOrg) {
              (0, newStateFrom8.YoD)(undefinedData);
            }
            if (m) {
              m.d();
            }
            fifthElement.d(createWithOrg);
            inputArray.d(createWithOrg);
            swapAtIndex = false;
            ___tempStorage();
          },
        };
      }
      function processAndMap(processTempor) {
        let handleProcess;
        let accumulator;
        let processedTem8 = (0, newStateFrom8.rv_)(processTempor[6]);
        let iterationHold = [];
        for (let n = 0; n < processedTem8.length; n += 1) {
          iterationHold[n] = m(setGETKey(processTempor, processedTem8, n));
        }
        return {
          c() {
            for (
              let _loopCounter = 0;
              _loopCounter < iterationHold.length;
              _loopCounter += 1
            ) {
              iterationHold[_loopCounter].c();
            }
            handleProcess = (0, newStateFrom8.Iex)();
          },
          m(mapEach, __initialState) {
            for (let n = 0; n < iterationHold.length; n += 1) {
              if (iterationHold[n]) {
                iterationHold[n].m(mapEach, __initialState);
              }
            }
            (0, newStateFrom8.Yry)(mapEach, handleProcess, __initialState);
            accumulator = true;
          },
          p(fetchPageData, processFlag) {
            if (processFlag & 224) {
              processedTem8 = (0, newStateFrom8.rv_)(fetchPageData[6]);
              let n;
              for (n = 0; n < processedTem8.length; n += 1) {
                var _______________placeholder;
                var _dataSource = setGETKey(fetchPageData, processedTem8, n);
                if (iterationHold[n]) {
                  iterationHold[n].p(_dataSource, processFlag);
                  (0, newStateFrom8.c7F)(iterationHold[n], 1);
                } else {
                  iterationHold[n] = m(_dataSource);
                  iterationHold[n].c();
                  (0, newStateFrom8.c7F)(iterationHold[n], 1);
                  iterationHold[n].m(handleProcess.parentNode, handleProcess);
                }
              }
              (0, newStateFrom8.V44)();
              n = processedTem8.length;
              for (; n < iterationHold.length; n += 1) {
                _______________placeholder = n;
                (0, newStateFrom8.Tn8)(
                  iterationHold[_______________placeholder],
                  1,
                  1,
                  () => {
                    iterationHold[_______________placeholder] = null;
                  },
                );
              }
              (0, newStateFrom8.GYV)();
            }
          },
          i(sequentialUpd) {
            if (!accumulator) {
              for (
                let processedData = 0;
                processedData < processedTem8.length;
                processedData += 1
              ) {
                (0, newStateFrom8.c7F)(iterationHold[processedData]);
              }
              accumulator = true;
            }
          },
          o(filteredMap) {
            iterationHold = iterationHold.filter(Boolean);
            for (
              let iterationIdx = 0;
              iterationIdx < iterationHold.length;
              iterationIdx += 1
            ) {
              (0, newStateFrom8.Tn8)(iterationHold[iterationIdx]);
            }
            accumulator = false;
          },
          d(selector) {
            if (selector) {
              (0, newStateFrom8.YoD)(handleProcess);
            }
            (0, newStateFrom8.ppq)(iterationHold, selector);
          },
        };
      }
      let calculateNewF = false;
      let f = () => {};
      class stateFrom8 extends newStateFrom8.r7T {
        constructor(_errorHandler) {
          super();
          (0, newStateFrom8.TsN)(
            this,
            _errorHandler,
            function currentScope(
              getTimeFromDt,
              _tempTimeData,
              _extractTimeSt,
            ) {
              let displayToggle = false;
              let isHudAndLeadb =
                n.A.get("showHud") && n.A.get("showLeaderboard");
              let hudScale = n.A.get("hudScale");
              n.A.on("zrVIMz", (gameMode, leaderboardHU) => {
                if (gameMode === "showLeaderboard" && n.A.get("showHud")) {
                  _extractTimeSt(1, (isHudAndLeadb = leaderboardHU));
                } else if (gameMode === "showHud") {
                  _extractTimeSt(
                    1,
                    (isHudAndLeadb =
                      leaderboardHU && n.A.get("showLeaderboard")),
                  );
                } else if (gameMode === "hudScale") {
                  _extractTimeSt(2, (hudScale = leaderboardHU));
                }
              });
              let l = "Leaderboard";
              let HUDManager = true;
              let _hudScale = false;
              let _isEven = [];
              let ___userData = new Map([
                [0, "first"],
                [1, "second"],
                [2, "third"],
                [3, "fourth"],
                [4, "fifth"],
                [5, "sixth"],
                [6, "seventh"],
                [7, "eighth"],
                [8, "ninth"],
                [9, "tenth"],
              ]);
              new (class {
                constructor() {
                  this.AfU = (currentPid, __event) => {
                    if (displayToggle && finalState.A.alive) {
                      if (
                        currentPid.some((exists) =>
                          eventCounter.A.pids.includes(exists.pid),
                        )
                      ) {
                        currentPid = currentPid.map((currentItem) => {
                          var pidIndex;
                          if (
                            eventCounter.A.pids.includes(currentItem.pid) &&
                            ((pidIndex = eventCounter.A.pids.findIndex(
                              (itemId) => itemId === currentItem.pid,
                            )),
                            (pidIndex = finalState.A.scores[pidIndex]))
                          ) {
                            currentItem.text +=
                              " (" + finalState.A.Hdd(pidIndex) + ")";
                          }
                          return currentItem;
                        });
                      } else {
                        let ___initialState = "You";
                        var ____initialState = finalState.A.YIr;
                        if (____initialState) {
                          ___initialState +=
                            " (" + finalState.A.Hdd(____initialState) + ")";
                        }
                        currentPid.push({
                          pid: finalState.A.SAd,
                          text: ___initialState,
                          color: "#ffffff",
                          bold: false,
                        });
                      }
                    }
                    _extractTimeSt(6, (_isEven = currentPid));
                    _extractTimeSt(5, (_hudScale = !_hudScale));
                    if (__event) {
                      _extractTimeSt(3, (l = __event.text));
                      _extractTimeSt(4, (HUDManager = __event.visible));
                    } else if (
                      n.A.get("showServerName") &&
                      eventCounter.A.selectedServer
                    ) {
                      _extractTimeSt(4, (HUDManager = true));
                      let formattedHost =
                        eventCounter.A.selectedServer.region || "";
                      if (formattedHost) {
                        formattedHost += " ";
                      }
                      formattedHost +=
                        eventCounter.A.selectedServer.name || "Unknown server";
                      _extractTimeSt(3, (l = formattedHost));
                    } else {
                      _extractTimeSt(4, (HUDManager = true));
                      _extractTimeSt(3, (l = "Leaderboard"));
                    }
                  };
                  finalState.A.on("rBrwjl", (shouldExtract) => {
                    _extractTimeSt(1, (isHudAndLeadb = shouldExtract));
                  });
                  finalState.A.on("lnBlYR", this.show.bind(this));
                  finalState.A.on("EnBeEu", this.hide.bind(this));
                }
                show() {
                  if (!displayToggle) {
                    finalState.A.on("OyTJwL", this.AfU);
                    _extractTimeSt(0, (displayToggle = true));
                  }
                }
                hide() {
                  if (displayToggle) {
                    finalState.A.off("OyTJwL", this.AfU);
                    _extractTimeSt(5, (_hudScale = !_hudScale));
                    _extractTimeSt(6, (_isEven = []));
                    _extractTimeSt(0, (displayToggle = false));
                  }
                }
              })();
              return [
                displayToggle,
                isHudAndLeadb,
                hudScale,
                l,
                HUDManager,
                _hudScale,
                _isEven,
                (getDataAttrs) => {
                  let targetElement = getDataAttrs.target;
                  let parentWithBot = 3;
                  while (
                    !targetElement.classList.contains("entry") &&
                    --parentWithBot
                  ) {
                    targetElement = targetElement.parentElement;
                  }
                  var getDataAttrs = +targetElement.dataset.pid;
                  var getEntryData = +targetElement.dataset.key;
                  if (
                    typeof getDataAttrs == "number" &&
                    typeof getEntryData == "number"
                  ) {
                    finalState.A.kmM.Xiy(
                      getDataAttrs,
                      ___userData.get(getEntryData) + " largest player",
                    );
                  }
                },
              ];
            },
            function getVisiblePar(operationHand) {
              let _result;
              let ___processResult;
              let contextualOp =
                operationHand[0] && operationHand[1] && l(operationHand);
              return {
                c() {
                  if (contextualOp) {
                    contextualOp.c();
                  }
                  _result = (0, newStateFrom8.Iex)();
                },
                m(instanceId, ___event) {
                  if (contextualOp) {
                    contextualOp.m(instanceId, ___event);
                  }
                  (0, newStateFrom8.Yry)(instanceId, _result, ___event);
                  ___processResult = true;
                },
                p(handleClick, [calculateFib]) {
                  if (handleClick[0] && handleClick[1]) {
                    if (contextualOp) {
                      contextualOp.p(handleClick, calculateFib);
                      if (calculateFib & 3) {
                        (0, newStateFrom8.c7F)(contextualOp, 1);
                      }
                    } else {
                      (contextualOp = l(handleClick)).c();
                      (0, newStateFrom8.c7F)(contextualOp, 1);
                      contextualOp.m(_result.parentNode, _result);
                    }
                  } else if (contextualOp) {
                    (0, newStateFrom8.V44)();
                    (0, newStateFrom8.Tn8)(contextualOp, 1, 1, () => {
                      contextualOp = null;
                    });
                    (0, newStateFrom8.GYV)();
                  }
                },
                i(_____initialState) {
                  if (!___processResult) {
                    (0, newStateFrom8.c7F)(contextualOp);
                    ___processResult = true;
                  }
                },
                o(getNewState) {
                  (0, newStateFrom8.Tn8)(contextualOp);
                  ___processResult = false;
                },
                d(transitionIfP) {
                  if (transitionIfP) {
                    (0, newStateFrom8.YoD)(_result);
                  }
                  if (contextualOp) {
                    contextualOp.d(transitionIfP);
                  }
                },
              };
            },
            newStateFrom8.jXN,
            {},
          );
        }
      }
      let objectId = stateFrom8;
    },
    98685(initializeBud, _config, createAndInit) {
      createAndInit.d(_config, {
        A: () => _initialValue,
      });
      var initWithValue = createAndInit(83839);
      createAndInit(60821);
      var _initializer = createAndInit(95195);
      var initConfig = createAndInit(78225);
      var n = createAndInit(83529);
      var _initializeBud = createAndInit(49853);
      var createConfig = createAndInit(35171);
      var constructor = createAndInit(41949);
      var l = createAndInit(54603);
      function c(updateUser) {
        let eUnassigned;
        let updateHandler;
        let isUserUpdate;
        let updatingIndic;
        let n;
        let initialValue;
        let isValidUserUp =
          updateUser[17] && updateUser[11] != null && extractData(updateUser);
        let userUpdater =
          updateUser[16] && updateUser[10] != null && initElements(updateUser);
        let l =
          updateUser[14] && updateUser[6] != null && uiInitializer(updateUser);
        let userInfo =
          updateUser[13] && updateUser[8] !== 0 && _initElements(updateUser);
        let validateUser =
          updateUser[12] && updateUser[7] !== 0 && initializeWeb(updateUser);
        let isValidUserAt =
          updateUser[15] && updateUser[9] != null && m(updateUser);
        return {
          c() {
            eUnassigned = (0, initWithValue.ND4)("div");
            if (isValidUserUp) {
              isValidUserUp.c();
            }
            updateHandler = (0, initWithValue.xem)();
            if (userUpdater) {
              userUpdater.c();
            }
            isUserUpdate = (0, initWithValue.xem)();
            if (l) {
              l.c();
            }
            updatingIndic = (0, initWithValue.xem)();
            if (userInfo) {
              userInfo.c();
            }
            n = (0, initWithValue.xem)();
            if (validateUser) {
              validateUser.c();
            }
            initialValue = (0, initWithValue.xem)();
            if (isValidUserAt) {
              isValidUserAt.c();
            }
            (0, initWithValue.CFu)(eUnassigned, "class", "stats s-xbgjyv");
          },
          m(unknownValue, _handler) {
            (0, initWithValue.Yry)(unknownValue, eUnassigned, _handler);
            if (isValidUserUp) {
              isValidUserUp.m(eUnassigned, null);
            }
            (0, initWithValue.BCw)(eUnassigned, updateHandler);
            if (userUpdater) {
              userUpdater.m(eUnassigned, null);
            }
            (0, initWithValue.BCw)(eUnassigned, isUserUpdate);
            if (l) {
              l.m(eUnassigned, null);
            }
            (0, initWithValue.BCw)(eUnassigned, updatingIndic);
            if (userInfo) {
              userInfo.m(eUnassigned, null);
            }
            (0, initWithValue.BCw)(eUnassigned, n);
            if (validateUser) {
              validateUser.m(eUnassigned, null);
            }
            (0, initWithValue.BCw)(eUnassigned, initialValue);
            if (isValidUserAt) {
              isValidUserAt.m(eUnassigned, null);
            }
          },
          p(validatePerm, _validateUser) {
            if (validatePerm[17] && validatePerm[11] != null) {
              if (isValidUserUp) {
                isValidUserUp.p(validatePerm, _validateUser);
              } else {
                (isValidUserUp = extractData(validatePerm)).c();
                isValidUserUp.m(eUnassigned, updateHandler);
              }
            } else if (isValidUserUp) {
              isValidUserUp.d(1);
              isValidUserUp = null;
            }
            if (validatePerm[16] && validatePerm[10] != null) {
              if (userUpdater) {
                userUpdater.p(validatePerm, _validateUser);
              } else {
                (userUpdater = initElements(validatePerm)).c();
                userUpdater.m(eUnassigned, isUserUpdate);
              }
            } else if (userUpdater) {
              userUpdater.d(1);
              userUpdater = null;
            }
            if (validatePerm[14] && validatePerm[6] != null) {
              if (l) {
                l.p(validatePerm, _validateUser);
              } else {
                (l = uiInitializer(validatePerm)).c();
                l.m(eUnassigned, updatingIndic);
              }
            } else if (l) {
              l.d(1);
              l = null;
            }
            if (validatePerm[13] && validatePerm[8] !== 0) {
              if (userInfo) {
                userInfo.p(validatePerm, _validateUser);
              } else {
                (userInfo = _initElements(validatePerm)).c();
                userInfo.m(eUnassigned, n);
              }
            } else if (userInfo) {
              userInfo.d(1);
              userInfo = null;
            }
            if (validatePerm[12] && validatePerm[7] !== 0) {
              if (validateUser) {
                validateUser.p(validatePerm, _validateUser);
              } else {
                (validateUser = initializeWeb(validatePerm)).c();
                validateUser.m(eUnassigned, initialValue);
              }
            } else if (validateUser) {
              validateUser.d(1);
              validateUser = null;
            }
            if (validatePerm[15] && validatePerm[9] != null) {
              if (isValidUserAt) {
                isValidUserAt.p(validatePerm, _validateUser);
              } else {
                (isValidUserAt = m(validatePerm)).c();
                isValidUserAt.m(eUnassigned, null);
              }
            } else if (isValidUserAt) {
              isValidUserAt.d(1);
              isValidUserAt = null;
            }
          },
          d(conditionalSc) {
            if (conditionalSc) {
              (0, initWithValue.YoD)(eUnassigned);
            }
            if (isValidUserUp) {
              isValidUserUp.d();
            }
            if (userUpdater) {
              userUpdater.d();
            }
            if (l) {
              l.d();
            }
            if (userInfo) {
              userInfo.d();
            }
            if (validateUser) {
              validateUser.d();
            }
            if (isValidUserAt) {
              isValidUserAt.d();
            }
          },
        };
      }
      function extractData(_____processedUser) {
        let userDataHtmlE;
        let userDataHtml;
        return {
          c() {
            userDataHtmlE = (0, initWithValue.ND4)("div");
            userDataHtml = (0, initWithValue.Qq7)(_____processedUser[11]);
          },
          m(____userData, htmlContent) {
            (0, initWithValue.Yry)(____userData, userDataHtmlE, htmlContent);
            (0, initWithValue.BCw)(userDataHtmlE, userDataHtml);
          },
          p(renderUserDri, renderingCond) {
            if (renderingCond[0] & 2048) {
              (0, initWithValue.iQh)(userDataHtml, renderUserDri[11]);
            }
          },
          d(isValueSet) {
            if (isValueSet) {
              (0, initWithValue.YoD)(userDataHtmlE);
            }
          },
        };
      }
      function initElements(______anonymousType) {
        let elementDiv;
        let _tempResult;
        let tempAttrs;
        return {
          c() {
            elementDiv = (0, initWithValue.ND4)("div");
            _tempResult = (0, initWithValue.Qq7)(______anonymousType[10]);
            tempAttrs = (0, initWithValue.Qq7)(" session");
          },
          m(initializeUI, initUIIndex) {
            (0, initWithValue.Yry)(initializeUI, elementDiv, initUIIndex);
            (0, initWithValue.BCw)(elementDiv, _tempResult);
            (0, initWithValue.BCw)(elementDiv, tempAttrs);
          },
          p(processEvenBs, evenBit10Set) {
            if (evenBit10Set[0] & 1024) {
              (0, initWithValue.iQh)(_tempResult, processEvenBs[10]);
            }
          },
          d(ensureOtherS) {
            if (ensureOtherS) {
              (0, initWithValue.YoD)(elementDiv);
            }
          },
        };
      }
      function uiInitializer(scopeSaver) {
        let newDiv;
        let initializeObj;
        return {
          c() {
            newDiv = (0, initWithValue.ND4)("div");
            initializeObj = (0, initWithValue.Qq7)(scopeSaver[6]);
          },
          m(createAndMod, divInitial) {
            (0, initWithValue.Yry)(createAndMod, newDiv, divInitial);
            (0, initWithValue.BCw)(newDiv, initializeObj);
          },
          p(_dataContainer, InitEvent) {
            if (InitEvent[0] & 64) {
              (0, initWithValue.iQh)(initializeObj, _dataContainer[6]);
            }
          },
          d(hasTruthyInit) {
            if (hasTruthyInit) {
              (0, initWithValue.YoD)(newDiv);
            }
          },
        };
      }
      function _initElements(jQueryShort) {
        let elementWithEx;
        let checkIfInDire;
        let initValue;
        let determineSing = jQueryShort[8] == 1 ? "" : "s";
        let n;
        return {
          c() {
            elementWithEx = (0, initWithValue.ND4)("div");
            checkIfInDire = (0, initWithValue.Qq7)(jQueryShort[8]);
            initValue = (0, initWithValue.Qq7)(" spectator");
            n = (0, initWithValue.Qq7)(determineSing);
          },
          m(__fetchAnonymus, _elementIndex) {
            (0, initWithValue.Yry)(
              __fetchAnonymus,
              elementWithEx,
              _elementIndex,
            );
            (0, initWithValue.BCw)(elementWithEx, checkIfInDire);
            (0, initWithValue.BCw)(elementWithEx, initValue);
            (0, initWithValue.BCw)(elementWithEx, n);
          },
          p(SymbolKey, info) {
            if (info[0] & 256) {
              (0, initWithValue.iQh)(checkIfInDire, SymbolKey[8]);
            }
            if (
              info[0] & 256 &&
              determineSing !== (determineSing = SymbolKey[8] == 1 ? "" : "s")
            ) {
              (0, initWithValue.iQh)(n, determineSing);
            }
          },
          d(ensureInitial) {
            if (ensureInitial) {
              (0, initWithValue.YoD)(elementWithEx);
            }
          },
        };
      }
      function initializeWeb(processWithOw) {
        let ____event;
        let initialString = _initializer.A.Hdd(processWithOw[7]) + "";
        let ______________index;
        let n;
        return {
          c() {
            ____event = (0, initWithValue.ND4)("div");
            ______________index = (0, initWithValue.Qq7)(initialString);
            n = (0, initWithValue.Qq7)(" total mass");
          },
          m(__self, eventConfigur) {
            (0, initWithValue.Yry)(__self, ____event, eventConfigur);
            (0, initWithValue.BCw)(____event, ______________index);
            (0, initWithValue.BCw)(____event, n);
          },
          p(firstArg, eventIsValid) {
            if (
              eventIsValid[0] & 128 &&
              initialString !==
                (initialString = _initializer.A.Hdd(firstArg[7]) + "")
            ) {
              (0, initWithValue.iQh)(______________index, initialString);
            }
          },
          d(_initialize) {
            if (_initialize) {
              (0, initWithValue.YoD)(____event);
            }
          },
        };
      }
      function m(_fetchUserData) {
        let __element;
        let restartDelay;
        let storage;
        return {
          c() {
            __element = (0, initWithValue.ND4)("div");
            restartDelay = (0, initWithValue.Qq7)("Restart in ");
            storage = (0, initWithValue.Qq7)(_fetchUserData[9]);
          },
          m(initializeOnD, _itemIndex) {
            (0, initWithValue.Yry)(initializeOnD, __element, _itemIndex);
            (0, initWithValue.BCw)(__element, restartDelay);
            (0, initWithValue.BCw)(__element, storage);
          },
          p(isValidDollar, isDollarSign) {
            if (isDollarSign[0] & 512) {
              (0, initWithValue.iQh)(storage, isValidDollar[9]);
            }
          },
          d(isInitialized) {
            if (isInitialized) {
              (0, initWithValue.YoD)(__element);
            }
          },
        };
      }
      class _constructor extends initWithValue.r7T {
        constructor(isAnonymous) {
          super();
          (0, initWithValue.TsN)(
            this,
            isAnonymous,
            function isTimingEvent(handleMouseEv, dragEventHand, c) {
              let userProfile;
              let initUser;
              let userProfileDn;
              let eventTiming;
              let dragStartTime;
              let m;
              let handlerMouseE;
              let eventSequence;
              let f;
              let operationOut;
              let anonymousSign;
              let dragEvent;
              (0, initWithValue.j0C)(
                handleMouseEv,
                createConfig.nK,
                (___initializeAnn) => c(7, (userProfile = ___initializeAnn)),
              );
              (0, initWithValue.j0C)(
                handleMouseEv,
                createConfig.$f,
                (initialize8) => c(8, (initUser = initialize8)),
              );
              (0, initWithValue.j0C)(
                handleMouseEv,
                createConfig.x4,
                (_userProfileDn) => c(9, (userProfileDn = _userProfileDn)),
              );
              (0, initWithValue.j0C)(
                handleMouseEv,
                createConfig.U_,
                (eventDelay) => c(10, (eventTiming = eventDelay)),
              );
              (0, initWithValue.j0C)(
                handleMouseEv,
                createConfig.qo,
                (eventStart) => c(11, (dragStartTime = eventStart)),
              );
              let EventContext = false;
              let eventInitiate =
                n.A.get("showHud") && n.A.get("minimapEnabled");
              let onDragEvent = false;
              let detectAccentu =
                n.A.get("showHud") && n.A.get("showMinimapStats");
              let _initializeOnD = n.A.get("hudScale");
              let dragSequence = (0, l.T5)(false);
              (0, initWithValue.j0C)(
                handleMouseEv,
                dragSequence,
                (_dragEvent) => c(18, (dragEvent = _dragEvent)),
              );
              n.A.on("zrVIMz", (showMinimapHU, shouldShowHUD) => {
                if (showMinimapHU === "minimapEnabled" && n.A.get("showHud")) {
                  c(1, (eventInitiate = shouldShowHUD));
                } else if (showMinimapHU === "showHud") {
                  c(
                    1,
                    (eventInitiate =
                      shouldShowHUD && n.A.get("minimapEnabled")),
                  );
                  c(
                    3,
                    (detectAccentu =
                      shouldShowHUD && n.A.get("showMinimapStats")),
                  );
                } else if (showMinimapHU === "hudScale") {
                  c(4, (_initializeOnD = shouldShowHUD));
                } else if (showMinimapHU === "showMinimapStats") {
                  c(3, (detectAccentu = shouldShowHUD));
                }
              });
              let dragEventSequ = createConfig.qo.visible;
              (0, initWithValue.j0C)(
                handleMouseEv,
                dragEventSequ,
                (createAnnoted) => c(17, (anonymousSign = createAnnoted)),
              );
              let eventDuration = createConfig.U_.visible;
              (0, initWithValue.j0C)(
                handleMouseEv,
                eventDuration,
                (identityFn) => c(16, (operationOut = identityFn)),
              );
              let isActive = createConfig.x4.visible;
              (0, initWithValue.j0C)(handleMouseEv, isActive, (anonymousWith) =>
                c(15, (f = anonymousWith)),
              );
              let startDrag = (0, l.T5)(false);
              (0, initWithValue.j0C)(
                handleMouseEv,
                startDrag,
                (createEventSe) => c(14, (eventSequence = createEventSe)),
              );
              let isTimingWitho = createConfig.$f.visible;
              (0, initWithValue.j0C)(
                handleMouseEv,
                isTimingWitho,
                (eventConfig) => c(13, (handlerMouseE = eventConfig)),
              );
              let initialDragSt = createConfig.nK.visible;
              (0, initWithValue.j0C)(
                handleMouseEv,
                initialDragSt,
                (numberArrayOr) => c(12, (m = numberArrayOr)),
              );
              let isDragAndDrop = () => {
                (0, initWithValue.vu6)(
                  dragEventSequ,
                  (anonymousSign = n.A.get("showClock")),
                  anonymousSign,
                );
                (0, initWithValue.vu6)(
                  eventDuration,
                  (operationOut = n.A.get("showSessionTime")),
                  operationOut,
                );
                (0, initWithValue.vu6)(
                  isActive,
                  (f = n.A.get("showRestartTiming")),
                  f,
                );
                (0, initWithValue.vu6)(
                  startDrag,
                  (eventSequence = n.A.get("showPlayerCount")),
                  eventSequence,
                );
                (0, initWithValue.vu6)(
                  isTimingWitho,
                  (handlerMouseE = n.A.get("showSpectators")),
                  handlerMouseE,
                );
                (0, initWithValue.vu6)(
                  initialDragSt,
                  (m = n.A.get("showTagTotalMass")),
                  m,
                );
              };
              _initializer.A.on("gWdDAg", () => isDragAndDrop());
              isDragAndDrop();
              _initializer.A.on("omMooP", (__dragEvent) => {
                c(2, (onDragEvent = __dragEvent));
              });
              let dragEventSeq;
              (0, constructor.Rc)(() => {
                _initializeBud.A.init(dragEventSeq);
              });
              _initializer.A.on("started", () => {
                dragSequence.set(
                  (_initializeBud.A.round = !!_initializer.A.border.circle),
                );
                _initializeBud.A.SCp();
              });
              _initializer.A.on("PSbuQD", () => {
                c(0, (EventContext = false));
              });
              _initializer.A.on("OTySHI", () => {
                c(0, (EventContext = true));
              });
              let _dragStartTime = (timeInterval, _isActive = false) => {
                if (_isActive && timeInterval < 1) {
                  return "instant";
                }
                var totalMinutes = Math.floor(
                  (timeInterval = Math.floor(timeInterval)) / 60,
                );
                var calculateMin = Math.floor(totalMinutes / 60);
                if (totalMinutes < 1) {
                  if (_isActive) {
                    return timeInterval + "s";
                  } else {
                    return "<1min";
                  }
                } else if (calculateMin < 1) {
                  return totalMinutes + "min";
                } else if (totalMinutes % 60 == 0) {
                  return calculateMin + "hr";
                } else {
                  return calculateMin + "hr " + (totalMinutes % 60) + "min";
                }
              };
              let mousePosition = performance.now();
              let dragEventTimi = 0;
              _initializer.A.on("NZB", (handleDragEnd) => {
                dragEventTimi = handleDragEnd;
              });
              _initializer.A.on("GzmcRb", () => {
                (0, initWithValue.vu6)(
                  createConfig.qo,
                  (dragStartTime = new Date().toLocaleTimeString()),
                  dragStartTime,
                );
                var elapsedTime = (performance.now() - mousePosition) / 1000;
                (0, initWithValue.vu6)(
                  createConfig.U_,
                  (eventTiming = _dragStartTime(elapsedTime)),
                  eventTiming,
                );
                if (dragEventTimi && _initializer.A.KRz) {
                  elapsedTime = (dragEventTimi - _initializer.A.KRz) / 25;
                  (0, initWithValue.vu6)(
                    createConfig.x4,
                    (userProfileDn = _dragStartTime(elapsedTime, true)),
                    userProfileDn,
                  );
                } else {
                  (0, initWithValue.vu6)(
                    createConfig.x4,
                    (userProfileDn = null),
                    userProfileDn,
                  );
                }
                (0, initWithValue.vu6)(
                  createConfig.$f,
                  (initUser = initConfig.A.bTs),
                  initUser,
                );
                (0, initWithValue.vu6)(
                  createConfig.nK,
                  (userProfile = initConfig.A.biB),
                  userProfile,
                );
              });
              let captureUserBe = null;
              let filteredArray = 0;
              let anonymousFile = 0;
              _initializer.A.FCi.on("JmnFrX", (calculateSum) => {
                c(27, anonymousFile++, anonymousFile);
              });
              _initializer.A.FCi.on("seZDXL", (generateCss) => {
                c(27, anonymousFile--, anonymousFile);
              });
              _initializer.A.FCi.on("WnIviS", (incrementAndW) => {
                c(26, filteredArray++, filteredArray);
              });
              _initializer.A.FCi.on("KneCHr", (_________anonymousData) => {
                c(26, filteredArray--, filteredArray);
              });
              _initializer.A.on("stopped", () => {
                c(6, (captureUserBe = null));
                c(26, (filteredArray = c(27, (anonymousFile = 0))));
                (0, initWithValue.vu6)(
                  createConfig.$f,
                  (initUser = (0, initWithValue.vu6)(
                    createConfig.nK,
                    (userProfile = 0),
                    userProfile,
                  )),
                  initUser,
                );
              });
              handleMouseEv.$$.update = () => {
                if (handleMouseEv.$$.dirty[0] & 201326592) {
                  var selectedServe;
                  let isSelected = "";
                  if (initConfig.A.selectedServer) {
                    isSelected =
                      Math.min(
                        filteredArray,
                        (selectedServe = initConfig.A.selectedServer.slots),
                      ) +
                      " / " +
                      selectedServe +
                      " players";
                  } else {
                    isSelected =
                      filteredArray +
                      " player" +
                      (filteredArray === 1 ? "" : "s");
                  }
                  isSelected +=
                    " | " +
                    anonymousFile +
                    " bot" +
                    (anonymousFile === 1 ? "" : "s");
                  c(6, (captureUserBe = isSelected));
                }
              };
              return [
                EventContext,
                eventInitiate,
                onDragEvent,
                detectAccentu,
                _initializeOnD,
                dragEventSeq,
                captureUserBe,
                userProfile,
                initUser,
                userProfileDn,
                eventTiming,
                dragStartTime,
                m,
                handlerMouseE,
                eventSequence,
                f,
                operationOut,
                anonymousSign,
                dragEvent,
                dragSequence,
                dragEventSequ,
                eventDuration,
                isActive,
                startDrag,
                isTimingWitho,
                initialDragSt,
                filteredArray,
                anonymousFile,
                function (processUserRa) {
                  initWithValue.Dnk[processUserRa ? "unshift" : "push"](() => {
                    c(5, (dragEventSeq = processUserRa));
                  });
                },
              ];
            },
            function __processUser(userId) {
              let divElement;
              let ____tempStorage;
              let processUserCh;
              let n;
              let fourthAndFifh = userId[2] && userId[3] && c(userId);
              return {
                c() {
                  divElement = (0, initWithValue.ND4)("div");
                  if (fourthAndFifh) {
                    fourthAndFifh.c();
                  }
                  ____tempStorage = (0, initWithValue.xem)();
                  processUserCh = (0, initWithValue.ND4)("div");
                  n = (0, initWithValue.ND4)("canvas");
                  (0, initWithValue.CFu)(n, "class", "map canvas s-xbgjyv");
                  (0, initWithValue.CFu)(
                    processUserCh,
                    "class",
                    "minimap-wrapper s-xbgjyv",
                  );
                  (0, initWithValue.goL)(processUserCh, "circle", userId[18]);
                  (0, initWithValue.CFu)(
                    divElement,
                    "class",
                    "minimap-container s-xbgjyv",
                  );
                  (0, initWithValue.hgi)(
                    divElement,
                    "display",
                    userId[0] && userId[1] ? "block" : "none",
                  );
                  (0, initWithValue.hgi)(
                    divElement,
                    "transform",
                    "scale(" + userId[4] + ")",
                  );
                },
                m(_dataObject, __initializer) {
                  (0, initWithValue.Yry)(
                    _dataObject,
                    divElement,
                    __initializer,
                  );
                  if (fourthAndFifh) {
                    fourthAndFifh.m(divElement, null);
                  }
                  (0, initWithValue.BCw)(divElement, ____tempStorage);
                  (0, initWithValue.BCw)(divElement, processUserCh);
                  (0, initWithValue.BCw)(processUserCh, n);
                  userId[28](n);
                },
                p(ActionHandler, actionHandler) {
                  if (ActionHandler[2] && ActionHandler[3]) {
                    if (fourthAndFifh) {
                      fourthAndFifh.p(ActionHandler, actionHandler);
                    } else {
                      (fourthAndFifh = c(ActionHandler)).c();
                      fourthAndFifh.m(divElement, ____tempStorage);
                    }
                  } else if (fourthAndFifh) {
                    fourthAndFifh.d(1);
                    fourthAndFifh = null;
                  }
                  if (actionHandler[0] & 262144) {
                    (0, initWithValue.goL)(
                      processUserCh,
                      "circle",
                      ActionHandler[18],
                    );
                  }
                  if (actionHandler[0] & 3) {
                    (0, initWithValue.hgi)(
                      divElement,
                      "display",
                      ActionHandler[0] && ActionHandler[1] ? "block" : "none",
                    );
                  }
                  if (actionHandler[0] & 16) {
                    (0, initWithValue.hgi)(
                      divElement,
                      "transform",
                      "scale(" + ActionHandler[4] + ")",
                    );
                  }
                },
                i: initWithValue.lQ1,
                o: initWithValue.lQ1,
                d(anonymousID) {
                  if (anonymousID) {
                    (0, initWithValue.YoD)(divElement);
                  }
                  if (fourthAndFifh) {
                    fourthAndFifh.d();
                  }
                  userId[28](null);
                },
              };
            },
            initWithValue.jXN,
            {},
            null,
            [-1, -1],
          );
        }
      }
      let _initialValue = _constructor;
    },
    98837(mapObjectKeys, keyMapper, anonymousCtx) {
      anonymousCtx.d(keyMapper, {
        A: () => keyCallback,
      });
      var __fetchUserData = anonymousCtx(83839);
      anonymousCtx(60821);
      var resultS = anonymousCtx(95195);
      var ___fetchUserData = anonymousCtx(83529);
      var n = anonymousCtx(54915);
      anonymousCtx(63836);
      anonymousCtx(70679);
      var ____fetchUserData = anonymousCtx(95669);
      function o(_initializeOrP) {
        let _eventCounter;
        let eventTracker;
        let __initialValue;
        let __________anonymousUser;
        let n;
        let ensureMinimum;
        let placementId;
        let ___________anonymousUser;
        let guestUser;
        let _isAnonymous;
        let ____________anonymousUser;
        let _____________anonymousUser = _initializeOrP[3];
        let ______________anonymousUser;
        let _______________anonymousUser;
        let _userCount;
        let ________________anonymousUser;
        let _________________anonymousUser =
          _initializeOrP[25] &&
          _initializeOrP[24] &&
          fetchUserFPS(_initializeOrP);
        let __________________anonymousUser =
          _initializeOrP[27] && _initializeOrP[26] && l(_initializeOrP);
        let ___________________anonymousUser =
          _initializeOrP[23] && _initializeOrP[22] && c(_initializeOrP);
        let ____________________anonymousUser =
          _initializeOrP[19] &&
          _initializeOrP[18] &&
          _fetchUserById(_initializeOrP);
        let _____________________anonymousUser =
          _initializeOrP[21] &&
          _initializeOrP[20] &&
          updateTotalMs(_initializeOrP);
        let EventSession =
          _initializeOrP[17] &&
          _initializeOrP[16] &&
          __________fetchUserData(_initializeOrP);
        let users =
          _initializeOrP[14] &&
          _initializeOrP[13] != -1 &&
          getNextTab(_initializeOrP);
        let ______________________anonymousUser =
          _initializeOrP[12] &&
          _initializeOrP[11] != -1 &&
          startsWithDig(_initializeOrP);
        let isAnonymousSn =
          _initializeOrP[10] && _initializeOrP[9] != -1 && m(_initializeOrP);
        let minimumFallT0 =
          _initializeOrP[5] && __userDataFetch(_initializeOrP);
        let _anonymousId = f(_initializeOrP);
        let _______________________anonymousUser =
          _initializeOrP[28] && ______________fetchUserData(_initializeOrP);
        let ________________________anonymousUser =
          _initializeOrP[8] && _initializeOrP[7] && _createConfig();
        return {
          c() {
            _eventCounter = (0, __fetchUserData.ND4)("div");
            if (_________________anonymousUser) {
              _________________anonymousUser.c();
            }
            eventTracker = (0, __fetchUserData.xem)();
            if (__________________anonymousUser) {
              __________________anonymousUser.c();
            }
            __initialValue = (0, __fetchUserData.xem)();
            if (___________________anonymousUser) {
              ___________________anonymousUser.c();
            }
            __________anonymousUser = (0, __fetchUserData.xem)();
            if (____________________anonymousUser) {
              ____________________anonymousUser.c();
            }
            n = (0, __fetchUserData.xem)();
            if (_____________________anonymousUser) {
              _____________________anonymousUser.c();
            }
            ensureMinimum = (0, __fetchUserData.xem)();
            if (EventSession) {
              EventSession.c();
            }
            placementId = (0, __fetchUserData.xem)();
            if (users) {
              users.c();
            }
            ___________anonymousUser = (0, __fetchUserData.xem)();
            if (______________________anonymousUser) {
              ______________________anonymousUser.c();
            }
            guestUser = (0, __fetchUserData.xem)();
            if (isAnonymousSn) {
              isAnonymousSn.c();
            }
            _isAnonymous = (0, __fetchUserData.xem)();
            if (minimumFallT0) {
              minimumFallT0.c();
            }
            ____________anonymousUser = (0, __fetchUserData.xem)();
            _anonymousId.c();
            ______________anonymousUser = (0, __fetchUserData.xem)();
            if (_______________________anonymousUser) {
              _______________________anonymousUser.c();
            }
            _______________anonymousUser = (0, __fetchUserData.xem)();
            if (________________________anonymousUser) {
              ________________________anonymousUser.c();
            }
            (0, __fetchUserData.CFu)(
              _eventCounter,
              "class",
              "stats-container s-fr5xtt",
            );
            (0, __fetchUserData.hgi)(
              _eventCounter,
              "transform",
              "scale(" + _initializeOrP[2] + ")",
            );
          },
          m(mContextArg, additionalCfg) {
            (0, __fetchUserData.Yry)(mContextArg, _eventCounter, additionalCfg);
            if (_________________anonymousUser) {
              _________________anonymousUser.m(_eventCounter, null);
            }
            (0, __fetchUserData.BCw)(_eventCounter, eventTracker);
            if (__________________anonymousUser) {
              __________________anonymousUser.m(_eventCounter, null);
            }
            (0, __fetchUserData.BCw)(_eventCounter, __initialValue);
            if (___________________anonymousUser) {
              ___________________anonymousUser.m(_eventCounter, null);
            }
            (0, __fetchUserData.BCw)(_eventCounter, __________anonymousUser);
            if (____________________anonymousUser) {
              ____________________anonymousUser.m(_eventCounter, null);
            }
            (0, __fetchUserData.BCw)(_eventCounter, n);
            if (_____________________anonymousUser) {
              _____________________anonymousUser.m(_eventCounter, null);
            }
            (0, __fetchUserData.BCw)(_eventCounter, ensureMinimum);
            if (EventSession) {
              EventSession.m(_eventCounter, null);
            }
            (0, __fetchUserData.BCw)(_eventCounter, placementId);
            if (users) {
              users.m(_eventCounter, null);
            }
            (0, __fetchUserData.BCw)(_eventCounter, ___________anonymousUser);
            if (______________________anonymousUser) {
              ______________________anonymousUser.m(_eventCounter, null);
            }
            (0, __fetchUserData.BCw)(_eventCounter, guestUser);
            if (isAnonymousSn) {
              isAnonymousSn.m(_eventCounter, null);
            }
            (0, __fetchUserData.BCw)(_eventCounter, _isAnonymous);
            if (minimumFallT0) {
              minimumFallT0.m(_eventCounter, null);
            }
            (0, __fetchUserData.BCw)(_eventCounter, ____________anonymousUser);
            _anonymousId.m(_eventCounter, null);
            (0, __fetchUserData.BCw)(
              _eventCounter,
              ______________anonymousUser,
            );
            if (_______________________anonymousUser) {
              _______________________anonymousUser.m(_eventCounter, null);
            }
            (0, __fetchUserData.BCw)(
              _eventCounter,
              _______________anonymousUser,
            );
            if (________________________anonymousUser) {
              ________________________anonymousUser.m(_eventCounter, null);
            }
            ________________anonymousUser = true;
          },
          p(operationRef, __processData) {
            if (operationRef[25] && operationRef[24]) {
              if (_________________anonymousUser) {
                _________________anonymousUser.p(operationRef, __processData);
              } else {
                (_________________anonymousUser =
                  fetchUserFPS(operationRef)).c();
                _________________anonymousUser.m(_eventCounter, eventTracker);
              }
            } else if (_________________anonymousUser) {
              _________________anonymousUser.d(1);
              _________________anonymousUser = null;
            }
            if (operationRef[27] && operationRef[26]) {
              if (__________________anonymousUser) {
                __________________anonymousUser.p(operationRef, __processData);
              } else {
                (__________________anonymousUser = l(operationRef)).c();
                __________________anonymousUser.m(
                  _eventCounter,
                  __initialValue,
                );
              }
            } else if (__________________anonymousUser) {
              __________________anonymousUser.d(1);
              __________________anonymousUser = null;
            }
            if (operationRef[23] && operationRef[22]) {
              if (___________________anonymousUser) {
                ___________________anonymousUser.p(operationRef, __processData);
              } else {
                (___________________anonymousUser = c(operationRef)).c();
                ___________________anonymousUser.m(
                  _eventCounter,
                  __________anonymousUser,
                );
              }
            } else if (___________________anonymousUser) {
              ___________________anonymousUser.d(1);
              ___________________anonymousUser = null;
            }
            if (operationRef[19] && operationRef[18]) {
              if (____________________anonymousUser) {
                ____________________anonymousUser.p(
                  operationRef,
                  __processData,
                );
              } else {
                (____________________anonymousUser =
                  _fetchUserById(operationRef)).c();
                ____________________anonymousUser.m(_eventCounter, n);
              }
            } else if (____________________anonymousUser) {
              ____________________anonymousUser.d(1);
              ____________________anonymousUser = null;
            }
            if (operationRef[21] && operationRef[20]) {
              if (_____________________anonymousUser) {
                _____________________anonymousUser.p(
                  operationRef,
                  __processData,
                );
              } else {
                (_____________________anonymousUser =
                  updateTotalMs(operationRef)).c();
                _____________________anonymousUser.m(
                  _eventCounter,
                  ensureMinimum,
                );
              }
            } else if (_____________________anonymousUser) {
              _____________________anonymousUser.d(1);
              _____________________anonymousUser = null;
            }
            if (operationRef[17] && operationRef[16]) {
              if (EventSession) {
                EventSession.p(operationRef, __processData);
              } else {
                (EventSession = __________fetchUserData(operationRef)).c();
                EventSession.m(_eventCounter, placementId);
              }
            } else if (EventSession) {
              EventSession.d(1);
              EventSession = null;
            }
            if (operationRef[14] && operationRef[13] != -1) {
              if (users) {
                users.p(operationRef, __processData);
              } else {
                (users = getNextTab(operationRef)).c();
                users.m(_eventCounter, ___________anonymousUser);
              }
            } else if (users) {
              users.d(1);
              users = null;
            }
            if (operationRef[12] && operationRef[11] != -1) {
              if (______________________anonymousUser) {
                ______________________anonymousUser.p(
                  operationRef,
                  __processData,
                );
              } else {
                (______________________anonymousUser =
                  startsWithDig(operationRef)).c();
                ______________________anonymousUser.m(_eventCounter, guestUser);
              }
            } else if (______________________anonymousUser) {
              ______________________anonymousUser.d(1);
              ______________________anonymousUser = null;
            }
            if (operationRef[10] && operationRef[9] != -1) {
              if (isAnonymousSn) {
                isAnonymousSn.p(operationRef, __processData);
              } else {
                (isAnonymousSn = m(operationRef)).c();
                isAnonymousSn.m(_eventCounter, _isAnonymous);
              }
            } else if (isAnonymousSn) {
              isAnonymousSn.d(1);
              isAnonymousSn = null;
            }
            if (operationRef[5]) {
              if (minimumFallT0) {
                minimumFallT0.p(operationRef, __processData);
              } else {
                (minimumFallT0 = __userDataFetch(operationRef)).c();
                minimumFallT0.m(_eventCounter, ____________anonymousUser);
              }
            } else if (minimumFallT0) {
              minimumFallT0.d(1);
              minimumFallT0 = null;
            }
            if (
              __processData[0] & 8 &&
              (0, __fetchUserData.jXN)(
                _____________anonymousUser,
                (_____________anonymousUser = operationRef[3]),
              )
            ) {
              _anonymousId.d(1);
              (_anonymousId = f(operationRef)).c();
              _anonymousId.m(_eventCounter, ______________anonymousUser);
            } else {
              _anonymousId.p(operationRef, __processData);
            }
            if (operationRef[28]) {
              if (_______________________anonymousUser) {
                _______________________anonymousUser.p(
                  operationRef,
                  __processData,
                );
              } else {
                (_______________________anonymousUser =
                  ______________fetchUserData(operationRef)).c();
                _______________________anonymousUser.m(
                  _eventCounter,
                  _______________anonymousUser,
                );
              }
            } else if (_______________________anonymousUser) {
              _______________________anonymousUser.d(1);
              _______________________anonymousUser = null;
            }
            if (operationRef[8] && operationRef[7]) {
              if (!________________________anonymousUser) {
                (________________________anonymousUser = _createConfig()).c();
                ________________________anonymousUser.m(_eventCounter, null);
              }
            } else if (________________________anonymousUser) {
              ________________________anonymousUser.d(1);
              ________________________anonymousUser = null;
            }
            if (!________________anonymousUser || __processData[0] & 4) {
              (0, __fetchUserData.hgi)(
                _eventCounter,
                "transform",
                "scale(" + operationRef[2] + ")",
              );
            }
          },
          i(uniqueAnonUid) {
            if (!________________anonymousUser) {
              if (uniqueAnonUid) {
                (0, __fetchUserData.Dti)(() => {
                  if (________________anonymousUser) {
                    (_userCount =
                      _userCount ||
                      (0, __fetchUserData.h86)(
                        _eventCounter,
                        ____fetchUserData.Rv,
                        {
                          duration: 300,
                        },
                        true,
                      )).run(1);
                  }
                });
              }
              ________________anonymousUser = true;
            }
          },
          o(checkAndSync) {
            if (checkAndSync) {
              (_userCount =
                _userCount ||
                (0, __fetchUserData.h86)(
                  _eventCounter,
                  ____fetchUserData.Rv,
                  {
                    duration: 300,
                  },
                  false,
                )).run(0);
            }
            ________________anonymousUser = false;
          },
          d(_anonymousFile) {
            if (_anonymousFile) {
              (0, __fetchUserData.YoD)(_eventCounter);
            }
            if (_________________anonymousUser) {
              _________________anonymousUser.d();
            }
            if (__________________anonymousUser) {
              __________________anonymousUser.d();
            }
            if (___________________anonymousUser) {
              ___________________anonymousUser.d();
            }
            if (____________________anonymousUser) {
              ____________________anonymousUser.d();
            }
            if (_____________________anonymousUser) {
              _____________________anonymousUser.d();
            }
            if (EventSession) {
              EventSession.d();
            }
            if (users) {
              users.d();
            }
            if (______________________anonymousUser) {
              ______________________anonymousUser.d();
            }
            if (isAnonymousSn) {
              isAnonymousSn.d();
            }
            if (minimumFallT0) {
              minimumFallT0.d();
            }
            _anonymousId.d(_anonymousFile);
            if (_______________________anonymousUser) {
              _______________________anonymousUser.d();
            }
            if (________________________anonymousUser) {
              ________________________anonymousUser.d();
            }
            if (_anonymousFile && _userCount) {
              _userCount.end();
            }
          },
        };
      }
      function fetchUserFPS(jqueryDom) {
        let asyncUserData;
        let _____userData;
        let indexIter;
        let indexCounter;
        let n;
        return {
          c() {
            asyncUserData = (0, __fetchUserData.ND4)("p");
            (_____userData = (0, __fetchUserData.ND4)("span")).textContent =
              "FPS";
            indexIter = (0, __fetchUserData.xem)();
            indexCounter = (0, __fetchUserData.ND4)("span");
            n = (0, __fetchUserData.Qq7)(jqueryDom[24]);
            (0, __fetchUserData.CFu)(
              _____userData,
              "class",
              "stat-name s-fr5xtt",
            );
            (0, __fetchUserData.CFu)(
              indexCounter,
              "class",
              "stat-value s-fr5xtt",
            );
            (0, __fetchUserData.CFu)(
              asyncUserData,
              "class",
              "stat-item s-fr5xtt",
            );
          },
          m(_____fetchUserData, onUserDataRet) {
            (0, __fetchUserData.Yry)(
              _____fetchUserData,
              asyncUserData,
              onUserDataRet,
            );
            (0, __fetchUserData.BCw)(asyncUserData, _____userData);
            (0, __fetchUserData.BCw)(asyncUserData, indexIter);
            (0, __fetchUserData.BCw)(asyncUserData, indexCounter);
            (0, __fetchUserData.BCw)(indexCounter, n);
          },
          p(checkAndFetch, __userContext) {
            if (__userContext[0] & 16777216) {
              (0, __fetchUserData.iQh)(n, checkAndFetch[24]);
            }
          },
          d(_checkAndFetch) {
            if (_checkAndFetch) {
              (0, __fetchUserData.YoD)(asyncUserData);
            }
          },
        };
      }
      function l(templateWithM) {
        let fetchedUser;
        let userDataFetch;
        let _userId;
        let userIdIndex;
        let n;
        return {
          c() {
            fetchedUser = (0, __fetchUserData.ND4)("p");
            (userDataFetch = (0, __fetchUserData.ND4)("span")).textContent =
              "Ping";
            _userId = (0, __fetchUserData.xem)();
            userIdIndex = (0, __fetchUserData.ND4)("span");
            n = (0, __fetchUserData.Qq7)(templateWithM[26]);
            (0, __fetchUserData.CFu)(
              userDataFetch,
              "class",
              "stat-name s-fr5xtt",
            );
            (0, __fetchUserData.CFu)(
              userIdIndex,
              "class",
              "stat-value s-fr5xtt",
            );
            (0, __fetchUserData.CFu)(
              fetchedUser,
              "class",
              "stat-item s-fr5xtt",
            );
          },
          m(_calculateSum, __userId) {
            (0, __fetchUserData.Yry)(_calculateSum, fetchedUser, __userId);
            (0, __fetchUserData.BCw)(fetchedUser, userDataFetch);
            (0, __fetchUserData.BCw)(fetchedUser, _userId);
            (0, __fetchUserData.BCw)(fetchedUser, userIdIndex);
            (0, __fetchUserData.BCw)(userIdIndex, n);
          },
          p(isSignificant, elementCheck) {
            if (elementCheck[0] & 67108864) {
              (0, __fetchUserData.iQh)(n, isSignificant[26]);
            }
          },
          d(fetchUserById) {
            if (fetchUserById) {
              (0, __fetchUserData.YoD)(fetchedUser);
            }
          },
        };
      }
      function c(currentStateF) {
        let ______fetchUserData;
        let dataFetchCall;
        let _stateTracker;
        let fetchUsersNth;
        let n;
        return {
          c() {
            ______fetchUserData = (0, __fetchUserData.ND4)("p");
            (dataFetchCall = (0, __fetchUserData.ND4)("span")).textContent =
              "Mass";
            _stateTracker = (0, __fetchUserData.xem)();
            fetchUsersNth = (0, __fetchUserData.ND4)("span");
            n = (0, __fetchUserData.Qq7)(currentStateF[22]);
            (0, __fetchUserData.CFu)(
              dataFetchCall,
              "class",
              "stat-name s-fr5xtt",
            );
            (0, __fetchUserData.CFu)(
              fetchUsersNth,
              "class",
              "stat-value s-fr5xtt",
            );
            (0, __fetchUserData.CFu)(
              ______fetchUserData,
              "class",
              "stat-item s-fr5xtt",
            );
          },
          m(PromiseResult, _______fetchUserData) {
            (0, __fetchUserData.Yry)(
              PromiseResult,
              ______fetchUserData,
              _______fetchUserData,
            );
            (0, __fetchUserData.BCw)(______fetchUserData, dataFetchCall);
            (0, __fetchUserData.BCw)(______fetchUserData, _stateTracker);
            (0, __fetchUserData.BCw)(______fetchUserData, fetchUsersNth);
            (0, __fetchUserData.BCw)(fetchUsersNth, n);
          },
          p(processArray, permissionBit) {
            if (permissionBit[0] & 4194304) {
              (0, __fetchUserData.iQh)(n, processArray[22]);
            }
          },
          d(hasElements) {
            if (hasElements) {
              (0, __fetchUserData.YoD)(______fetchUserData);
            }
          },
        };
      }
      function _fetchUserById(_anonFunc) {
        let ______userData;
        let _dataRetrieval;
        let uninitialized;
        let __loopCounter;
        let n;
        return {
          c() {
            ______userData = (0, __fetchUserData.ND4)("p");
            (_dataRetrieval = (0, __fetchUserData.ND4)("span")).textContent =
              "Score";
            uninitialized = (0, __fetchUserData.xem)();
            __loopCounter = (0, __fetchUserData.ND4)("span");
            n = (0, __fetchUserData.Qq7)(_anonFunc[18]);
            (0, __fetchUserData.CFu)(
              _dataRetrieval,
              "class",
              "stat-name s-fr5xtt",
            );
            (0, __fetchUserData.CFu)(
              __loopCounter,
              "class",
              "stat-value s-fr5xtt",
            );
            (0, __fetchUserData.CFu)(
              ______userData,
              "class",
              "stat-item s-fr5xtt",
            );
          },
          m(DOMHandler, sessionId) {
            (0, __fetchUserData.Yry)(DOMHandler, ______userData, sessionId);
            (0, __fetchUserData.BCw)(______userData, _dataRetrieval);
            (0, __fetchUserData.BCw)(______userData, uninitialized);
            (0, __fetchUserData.BCw)(______userData, __loopCounter);
            (0, __fetchUserData.BCw)(__loopCounter, n);
          },
          p(checkUserType, userTypeCheck) {
            if (userTypeCheck[0] & 262144) {
              (0, __fetchUserData.iQh)(n, checkUserType[18]);
            }
          },
          d(hasUserData) {
            if (hasUserData) {
              (0, __fetchUserData.YoD)(______userData);
            }
          },
        };
      }
      function updateTotalMs(createAnonId) {
        let _______userData;
        let ________fetchUserData;
        let ___loopCounter;
        let ____loopCounter;
        let n;
        return {
          c() {
            _______userData = (0, __fetchUserData.ND4)("p");
            (________fetchUserData = (0, __fetchUserData.ND4)(
              "span",
            )).textContent = "Total Mass";
            ___loopCounter = (0, __fetchUserData.xem)();
            ____loopCounter = (0, __fetchUserData.ND4)("span");
            n = (0, __fetchUserData.Qq7)(createAnonId[20]);
            (0, __fetchUserData.CFu)(
              ________fetchUserData,
              "class",
              "stat-name s-fr5xtt",
            );
            (0, __fetchUserData.CFu)(
              ____loopCounter,
              "class",
              "stat-value s-fr5xtt",
            );
            (0, __fetchUserData.CFu)(
              _______userData,
              "class",
              "stat-item s-fr5xtt",
            );
          },
          m(_________fetchUserData, ________userData) {
            (0, __fetchUserData.Yry)(
              _________fetchUserData,
              _______userData,
              ________userData,
            );
            (0, __fetchUserData.BCw)(_______userData, ________fetchUserData);
            (0, __fetchUserData.BCw)(_______userData, ___loopCounter);
            (0, __fetchUserData.BCw)(_______userData, ____loopCounter);
            (0, __fetchUserData.BCw)(____loopCounter, n);
          },
          p(handleData, hasMoreItems) {
            if (hasMoreItems[0] & 1048576) {
              (0, __fetchUserData.iQh)(n, handleData[20]);
            }
          },
          d(hasPreviously) {
            if (hasPreviously) {
              (0, __fetchUserData.YoD)(_______userData);
            }
          },
        };
      }
      function __________fetchUserData(isInitialAndC) {
        let _________userData;
        let resultOf;
        let initialDataNe;
        let __loopIndex;
        let n;
        return {
          c() {
            _________userData = (0, __fetchUserData.ND4)("p");
            (resultOf = (0, __fetchUserData.ND4)("span")).textContent = "Cells";
            initialDataNe = (0, __fetchUserData.xem)();
            __loopIndex = (0, __fetchUserData.ND4)("span");
            n = (0, __fetchUserData.Qq7)(isInitialAndC[16]);
            (0, __fetchUserData.CFu)(resultOf, "class", "stat-name s-fr5xtt");
            (0, __fetchUserData.CFu)(
              __loopIndex,
              "class",
              "stat-value s-fr5xtt",
            );
            (0, __fetchUserData.CFu)(
              _________userData,
              "class",
              "stat-item s-fr5xtt",
            );
          },
          m(inputArgument, _fetchedUser) {
            (0, __fetchUserData.Yry)(
              inputArgument,
              _________userData,
              _fetchedUser,
            );
            (0, __fetchUserData.BCw)(_________userData, resultOf);
            (0, __fetchUserData.BCw)(_________userData, initialDataNe);
            (0, __fetchUserData.BCw)(_________userData, __loopIndex);
            (0, __fetchUserData.BCw)(__loopIndex, n);
          },
          p(filterEventBy, filteredEvent) {
            if (filteredEvent[0] & 65536) {
              (0, __fetchUserData.iQh)(n, filterEventBy[16]);
            }
          },
          d(userDataCheck) {
            if (userDataCheck) {
              (0, __fetchUserData.YoD)(_________userData);
            }
          },
        };
      }
      function getNextTab(processTrimed) {
        let __________userData;
        let tabSwitcher;
        let switchTabWith =
          processTrimed[13] != 2
            ? " tab " + (1 + processTrimed[13])
            : "both tabs";
        let tabIndex;
        return {
          c() {
            __________userData = (0, __fetchUserData.ND4)("p");
            tabSwitcher = (0, __fetchUserData.Qq7)("Mouse frozen on ");
            tabIndex = (0, __fetchUserData.Qq7)(switchTabWith);
            (0, __fetchUserData.CFu)(
              __________userData,
              "class",
              "stat-item s-fr5xtt",
            );
          },
          m(mParameter, ___________userData) {
            (0, __fetchUserData.Yry)(
              mParameter,
              __________userData,
              ___________userData,
            );
            (0, __fetchUserData.BCw)(__________userData, tabSwitcher);
            (0, __fetchUserData.BCw)(__________userData, tabIndex);
          },
          p(TabSwitchable, selectedTab) {
            if (
              selectedTab[0] & 8192 &&
              switchTabWith !==
                (switchTabWith =
                  TabSwitchable[13] != 2
                    ? " tab " + (1 + TabSwitchable[13])
                    : "both tabs")
            ) {
              (0, __fetchUserData.iQh)(tabIndex, switchTabWith);
            }
          },
          d(sendUserData) {
            if (sendUserData) {
              (0, __fetchUserData.YoD)(__________userData);
            }
          },
        };
      }
      function startsWithDig(anonymousTipC) {
        let tempData;
        let _____tempStorage;
        let useTabBoth =
          anonymousTipC[11] != 2
            ? "tab " + (1 + anonymousTipC[11])
            : "both tabs";
        let _iterator;
        return {
          c() {
            tempData = (0, __fetchUserData.ND4)("p");
            _____tempStorage = (0, __fetchUserData.Qq7)("Movement stopped on ");
            _iterator = (0, __fetchUserData.Qq7)(useTabBoth);
            (0, __fetchUserData.CFu)(tempData, "class", "stat-item s-fr5xtt");
          },
          m(inputString, sessionUserSt) {
            (0, __fetchUserData.Yry)(inputString, tempData, sessionUserSt);
            (0, __fetchUserData.BCw)(tempData, _____tempStorage);
            (0, __fetchUserData.BCw)(tempData, _iterator);
          },
          p(anonid, fetchStatus) {
            if (
              fetchStatus[0] & 2048 &&
              useTabBoth !==
                (useTabBoth =
                  anonid[11] != 2 ? "tab " + (1 + anonid[11]) : "both tabs")
            ) {
              (0, __fetchUserData.iQh)(_iterator, useTabBoth);
            }
          },
          d(hasDataAndYod) {
            if (hasDataAndYod) {
              (0, __fetchUserData.YoD)(tempData);
            }
          },
        };
      }
      function m(anonName) {
        let _userDataFetch;
        let _tabIndex;
        let isSingleTab =
          anonName[9] != 2 ? "tab " + (1 + anonName[9]) : "both tabs";
        let arrayLength;
        return {
          c() {
            _userDataFetch = (0, __fetchUserData.ND4)("p");
            _tabIndex = (0, __fetchUserData.Qq7)("Linesplitting on ");
            arrayLength = (0, __fetchUserData.Qq7)(isSingleTab);
            (0, __fetchUserData.CFu)(
              _userDataFetch,
              "class",
              "stat-item s-fr5xtt",
            );
          },
          m(___________fetchUserData, UserAddress) {
            (0, __fetchUserData.Yry)(
              ___________fetchUserData,
              _userDataFetch,
              UserAddress,
            );
            (0, __fetchUserData.BCw)(_userDataFetch, _tabIndex);
            (0, __fetchUserData.BCw)(_userDataFetch, arrayLength);
          },
          p(interactTabOr, eventObject) {
            if (
              eventObject[0] & 512 &&
              isSingleTab !==
                (isSingleTab =
                  interactTabOr[9] != 2
                    ? "tab " + (1 + interactTabOr[9])
                    : "both tabs")
            ) {
              (0, __fetchUserData.iQh)(arrayLength, isSingleTab);
            }
          },
          d(checkCriteria) {
            if (checkCriteria) {
              (0, __fetchUserData.YoD)(_userDataFetch);
            }
          },
        };
      }
      function __userDataFetch(_userActionTra) {
        let ____________userData;
        let consistentApi;
        return {
          c() {
            ____________userData = (0, __fetchUserData.ND4)("p");
            consistentApi = (0, __fetchUserData.Qq7)(_userActionTra[6]);
            (0, __fetchUserData.CFu)(
              ____________userData,
              "class",
              "stat-item s-fr5xtt",
            );
          },
          m(UserDataOps, ______processedUser) {
            (0, __fetchUserData.Yry)(
              UserDataOps,
              ____________userData,
              ______processedUser,
            );
            (0, __fetchUserData.BCw)(____________userData, consistentApi);
          },
          p(mergeObjects, targetEvent) {
            if (targetEvent[0] & 64) {
              (0, __fetchUserData.iQh)(consistentApi, mergeObjects[6]);
            }
          },
          d(dollarToDegre) {
            if (dollarToDegre) {
              (0, __fetchUserData.YoD)(____________userData);
            }
          },
        };
      }
      function selectRenderT(indexFiveAssn) {
        let _inputArray;
        let backendType = indexFiveAssn[3] ? "web-gl" : "canvas";
        let indexNumber;
        let conditionB;
        let n = indexFiveAssn[4] ? "w/" : "w/o";
        let configureGfx;
        let o;
        return {
          c() {
            _inputArray = (0, __fetchUserData.ND4)("p");
            indexNumber = (0, __fetchUserData.Qq7)(backendType);
            conditionB = (0, __fetchUserData.Qq7)(" renderer ");
            configureGfx = (0, __fetchUserData.Qq7)(n);
            o = (0, __fetchUserData.Qq7)(" anti-aliasing");
            (0, __fetchUserData.CFu)(
              _inputArray,
              "class",
              "stat-item s-fr5xtt",
            );
          },
          m(userDataPlace, ____________fetchUserData) {
            (0, __fetchUserData.Yry)(
              userDataPlace,
              _inputArray,
              ____________fetchUserData,
            );
            (0, __fetchUserData.BCw)(_inputArray, indexNumber);
            (0, __fetchUserData.BCw)(_inputArray, conditionB);
            (0, __fetchUserData.BCw)(_inputArray, configureGfx);
            (0, __fetchUserData.BCw)(_inputArray, o);
          },
          p(backendDeterm, forceFetch) {
            if (
              forceFetch[0] & 8 &&
              backendType !==
                (backendType = backendDeterm[3] ? "web-gl" : "canvas")
            ) {
              (0, __fetchUserData.iQh)(indexNumber, backendType);
            }
            if (
              forceFetch[0] & 16 &&
              n !== (n = backendDeterm[4] ? "w/" : "w/o")
            ) {
              (0, __fetchUserData.iQh)(configureGfx, n);
            }
          },
          d(hasUserInput) {
            if (hasUserInput) {
              (0, __fetchUserData.YoD)(_inputArray);
            }
          },
        };
      }
      function f(anonymized) {
        let _fifthElement = anonymized[4];
        let __fetchedUser;
        let RendererArray = selectRenderT(anonymized);
        return {
          c() {
            RendererArray.c();
            __fetchedUser = (0, __fetchUserData.Iex)();
          },
          m(renderer, mergeStrings) {
            RendererArray.m(renderer, mergeStrings);
            (0, __fetchUserData.Yry)(renderer, __fetchedUser, mergeStrings);
          },
          p(collection, _______________index) {
            if (
              _______________index[0] & 16 &&
              (0, __fetchUserData.jXN)(
                _fifthElement,
                (_fifthElement = collection[4]),
              )
            ) {
              RendererArray.d(1);
              (RendererArray = selectRenderT(collection)).c();
              RendererArray.m(__fetchedUser.parentNode, __fetchedUser);
            } else {
              RendererArray.p(collection, _______________index);
            }
          },
          d(_____________fetchUserData) {
            if (_____________fetchUserData) {
              (0, __fetchUserData.YoD)(__fetchedUser);
            }
            RendererArray.d(_____________fetchUserData);
          },
        };
      }
      function ______________fetchUserData(fetchFlag) {
        let getUserAtSpec = fetchFlag[15];
        let _____________userData;
        let ___userDataFetch = ___initializeAnd(fetchFlag);
        return {
          c() {
            ___userDataFetch.c();
            _____________userData = (0, __fetchUserData.Iex)();
          },
          m(_______________fetchUserData, asyncEvent) {
            ___userDataFetch.m(_______________fetchUserData, asyncEvent);
            (0, __fetchUserData.Yry)(
              _______________fetchUserData,
              _____________userData,
              asyncEvent,
            );
          },
          p(__userIndex, userSelection) {
            if (
              userSelection[0] & 32768 &&
              (0, __fetchUserData.jXN)(
                getUserAtSpec,
                (getUserAtSpec = __userIndex[15]),
              )
            ) {
              ___userDataFetch.d(1);
              (___userDataFetch = ___initializeAnd(__userIndex)).c();
              ___userDataFetch.m(
                _____________userData.parentNode,
                _____________userData,
              );
            } else {
              ___userDataFetch.p(__userIndex, userSelection);
            }
          },
          d(__checkAndCall) {
            if (__checkAndCall) {
              (0, __fetchUserData.YoD)(_____________userData);
            }
            ___userDataFetch.d(__checkAndCall);
          },
        };
      }
      function ___initializeAnd(updateDOMWith) {
        let ______________userData;
        let setupUserData;
        return {
          c() {
            ______________userData = (0, __fetchUserData.ND4)("p");
            setupUserData = (0, __fetchUserData.Qq7)(updateDOMWith[15]);
            (0, __fetchUserData.CFu)(
              ______________userData,
              "class",
              "stat-item s-fr5xtt",
            );
            (0, __fetchUserData.hgi)(
              ______________userData,
              "white-space",
              "nowrap",
            );
            (0, __fetchUserData.hgi)(
              ______________userData,
              "text-overflow",
              "ellipsis",
            );
          },
          m(fetchAndSetUp, ___userContext) {
            (0, __fetchUserData.Yry)(
              fetchAndSetUp,
              ______________userData,
              ___userContext,
            );
            (0, __fetchUserData.BCw)(______________userData, setupUserData);
          },
          p(jqueryElement, jqEvent) {
            if (jqEvent[0] & 32768) {
              (0, __fetchUserData.iQh)(setupUserData, jqueryElement[15]);
            }
          },
          d(conditionYoD) {
            if (conditionYoD) {
              (0, __fetchUserData.YoD)(______________userData);
            }
          },
        };
      }
      function _createConfig() {
        let fetchAndSetUn;
        return {
          c() {
            (fetchAndSetUn = (0, __fetchUserData.ND4)("p")).innerHTML =
              "<b>Warning: Unstable latency detected!</b> <br/>\n        Dual gameplay may be affected";
            (0, __fetchUserData.CFu)(
              fetchAndSetUn,
              "class",
              "warning s-fr5xtt",
            );
          },
          m(___userId, ________________fetchUserData) {
            (0, __fetchUserData.Yry)(
              ___userId,
              fetchAndSetUn,
              ________________fetchUserData,
            );
          },
          d(isFetchDataNe) {
            if (isFetchDataNe) {
              (0, __fetchUserData.YoD)(fetchAndSetUn);
            }
          },
        };
      }
      class FetchUserData extends __fetchUserData.r7T {
        constructor(_________________fetchUserData) {
          super();
          (0, __fetchUserData.TsN)(
            this,
            _________________fetchUserData,
            function configObject(conditionally, assignMemoryB, handleEventB) {
              let o;
              let configCache;
              let l;
              let c;
              let hashtableUtil;
              let settingsStore;
              let __config;
              let data;
              let hashUtility;
              let m;
              let eventState;
              let postId;
              let f;
              let configuration;
              let myFunction;
              let configHandler;
              let handleToggle;
              let configMap;
              let eventProcess;
              let configureAndE;
              let isValid;
              let collectUserTe;
              let configManager;
              let __createConfig;
              (0, __fetchUserData.j0C)(conditionally, n.hZ, (initEventHand) =>
                handleEventB(6, (configCache = initEventHand)),
              );
              (0, __fetchUserData.j0C)(
                conditionally,
                n.ZK,
                (___________eventHandler) =>
                  handleEventB(7, (l = ___________eventHandler)),
              );
              (0, __fetchUserData.j0C)(
                conditionally,
                n.NC,
                (____________eventHandler) =>
                  handleEventB(9, (hashtableUtil = ____________eventHandler)),
              );
              (0, __fetchUserData.j0C)(conditionally, n.Xt, (_handleEventB) =>
                handleEventB(11, (__config = _handleEventB)),
              );
              (0, __fetchUserData.j0C)(conditionally, n.KP, (handleEvent13) =>
                handleEventB(13, (hashUtility = handleEvent13)),
              );
              (0, __fetchUserData.j0C)(
                conditionally,
                n.BW,
                (_____________eventHandler) =>
                  handleEventB(15, (eventState = _____________eventHandler)),
              );
              (0, __fetchUserData.j0C)(conditionally, n.Yo, (_postId) =>
                handleEventB(16, (postId = _postId)),
              );
              (0, __fetchUserData.j0C)(conditionally, n.fN, (_eventConfig) =>
                handleEventB(18, (configuration = _eventConfig)),
              );
              (0, __fetchUserData.j0C)(conditionally, n.fj, (handleEventB2) =>
                handleEventB(20, (configHandler = handleEventB2)),
              );
              (0, __fetchUserData.j0C)(conditionally, n.rd, (eventHandler2) =>
                handleEventB(22, (configMap = eventHandler2)),
              );
              (0, __fetchUserData.j0C)(conditionally, n.uU, (_eventHandler2) =>
                handleEventB(24, (configureAndE = _eventHandler2)),
              );
              (0, __fetchUserData.j0C)(conditionally, n.hU, (_eventContext) =>
                handleEventB(26, (collectUserTe = _eventContext)),
              );
              let _________________________anonymousUser = false;
              let calculateMax =
                ___fetchUserData.A.get("showHud") &&
                ___fetchUserData.A.get("showStats");
              let InitConfig = ___fetchUserData.A.get("hudScale");
              let _configCache = n.uU.visible;
              (0, __fetchUserData.j0C)(
                conditionally,
                _configCache,
                (eventSuccess) => handleEventB(25, (isValid = eventSuccess)),
              );
              let userConfig = n.hU.visible;
              (0, __fetchUserData.j0C)(
                conditionally,
                userConfig,
                (_configManager) =>
                  handleEventB(27, (configManager = _configManager)),
              );
              let configStorage = n.rd.visible;
              (0, __fetchUserData.j0C)(
                conditionally,
                configStorage,
                (_eventProcess) =>
                  handleEventB(23, (eventProcess = _eventProcess)),
              );
              let ___config = n.fj.visible;
              (0, __fetchUserData.j0C)(
                conditionally,
                ___config,
                (handleEventBL) =>
                  handleEventB(21, (handleToggle = handleEventBL)),
              );
              let configureAlgo = n.fN.visible;
              (0, __fetchUserData.j0C)(
                conditionally,
                configureAlgo,
                (arrayHandler) => handleEventB(19, (myFunction = arrayHandler)),
              );
              let ________________index = n.Yo.visible;
              (0, __fetchUserData.j0C)(
                conditionally,
                ________________index,
                (______________eventHandler) =>
                  handleEventB(17, (f = ______________eventHandler)),
              );
              let ConfigOptions = n.ZK.visible;
              (0, __fetchUserData.j0C)(
                conditionally,
                ConfigOptions,
                (__handleEventB) => handleEventB(8, (c = __handleEventB)),
              );
              let ___processData = n.hZ.visible;
              (0, __fetchUserData.j0C)(
                conditionally,
                ___processData,
                (selfReferral) => handleEventB(5, (o = selfReferral)),
              );
              let eventHasher = n.KP.visible;
              (0, __fetchUserData.j0C)(
                conditionally,
                eventHasher,
                (eventHandle14) => handleEventB(14, (m = eventHandle14)),
              );
              let appConfig = n.Xt.visible;
              (0, __fetchUserData.j0C)(
                conditionally,
                appConfig,
                (__eventData) => handleEventB(12, (data = __eventData)),
              );
              let filteredData = n.NC.visible;
              (0, __fetchUserData.j0C)(
                conditionally,
                filteredData,
                (settings) => handleEventB(10, (settingsStore = settings)),
              );
              var configInitial = n.BW.visible;
              (0, __fetchUserData.j0C)(
                conditionally,
                configInitial,
                (EventHandler) =>
                  handleEventB(28, (__createConfig = EventHandler)),
              );
              let configKey = ___fetchUserData.A.useWebGL;
              let multiCondConf = ___fetchUserData.A.get("useAntialiasing");
              ___fetchUserData.A.on(
                "zrVIMz",
                (_______________eventHandler, _____event) => {
                  if (_______________eventHandler === "useWebGL") {
                    handleEventB(3, (configKey = ___fetchUserData.A.useWebGL));
                  } else if (_______________eventHandler == "useAntialiasing") {
                    handleEventB(
                      4,
                      (multiCondConf =
                        ___fetchUserData.A.get("useAntialiasing")),
                    );
                  } else if (
                    _______________eventHandler === "showStats" &&
                    ___fetchUserData.A.get("showHud")
                  ) {
                    handleEventB(1, (calculateMax = _____event));
                  } else if (_______________eventHandler === "showHud") {
                    handleEventB(
                      1,
                      (calculateMax =
                        _____event && ___fetchUserData.A.get("showStats")),
                    );
                  } else if (_______________eventHandler === "hudScale") {
                    handleEventB(2, (InitConfig = _____event));
                  }
                },
              );
              conditionally = () => {
                (0, __fetchUserData.vu6)(
                  _configCache,
                  (isValid = ___fetchUserData.A.get("showFPS")),
                  isValid,
                );
                (0, __fetchUserData.vu6)(
                  userConfig,
                  (configManager = ___fetchUserData.A.get("showPing")),
                  configManager,
                );
                (0, __fetchUserData.vu6)(
                  configStorage,
                  (eventProcess = ___fetchUserData.A.get("showPlayerMass")),
                  eventProcess,
                );
                (0, __fetchUserData.vu6)(
                  ___config,
                  (handleToggle = ___fetchUserData.A.get(
                    "showTotalPlayerMass",
                  )),
                  handleToggle,
                );
                (0, __fetchUserData.vu6)(
                  configureAlgo,
                  (myFunction = ___fetchUserData.A.get("showPlayerScore")),
                  myFunction,
                );
                (0, __fetchUserData.vu6)(
                  ________________index,
                  (f = ___fetchUserData.A.get("showCellCount")),
                  f,
                );
                (0, __fetchUserData.vu6)(
                  ConfigOptions,
                  (c = ___fetchUserData.A.get("showLatencyWarning")),
                  c,
                );
                (0, __fetchUserData.vu6)(
                  ___processData,
                  (o = !!configCache),
                  o,
                );
              };
              resultS.A.on("uzPfcB", (selectedAnon) => {
                handleEventB(
                  0,
                  (_________________________anonymousUser = selectedAnon),
                );
              });
              resultS.A.on("oiKdMc", conditionally);
              conditionally();
              resultS.A.on("TNRyrb", (__postId) => {
                if (f) {
                  (0, __fetchUserData.vu6)(n.Yo, (postId = __postId), postId);
                }
              });
              resultS.A.on("EMciAd", (_getUserData) => {
                if (configManager) {
                  (0, __fetchUserData.vu6)(
                    n.hU,
                    (collectUserTe = _getUserData),
                    collectUserTe,
                  );
                }
              });
              resultS.A.on("DEPJkV", () => {
                var resultSuccess;
                if (isValid) {
                  (0, __fetchUserData.vu6)(
                    n.uU,
                    (configureAndE = Math.round(resultS.A.fps.average)),
                    configureAndE,
                  );
                }
                if (eventProcess) {
                  resultSuccess = resultS.A.score;
                  (0, __fetchUserData.vu6)(
                    n.rd,
                    (configMap = resultSuccess
                      ? resultS.A.Hdd(resultSuccess)
                      : ""),
                    configMap,
                  );
                }
                if (handleToggle) {
                  resultSuccess = resultS.A.YIr;
                  (0, __fetchUserData.vu6)(
                    n.fj,
                    (configHandler = resultSuccess
                      ? resultS.A.Hdd(resultSuccess)
                      : ""),
                    configHandler,
                  );
                }
                if (myFunction) {
                  resultSuccess = resultS.A.fIW;
                  (0, __fetchUserData.vu6)(
                    n.fN,
                    (configuration = resultSuccess
                      ? resultS.A.Hdd(resultSuccess)
                      : ""),
                    configuration,
                  );
                }
                if (f) {
                  (0, __fetchUserData.vu6)(
                    n.Yo,
                    (postId = resultS.A.cellCount),
                    postId,
                  );
                }
              });
              let anonymousFac = [, ,];
              let __configManager = [, ,];
              let __configCache = [, ,];
              resultS.A.on("RAwTus", (mouseState) => {
                if ("mouseFrozen" in mouseState) {
                  resultS.A.eWI.forEach((assignAnonFx, frozenIdx) => {
                    anonymousFac[frozenIdx] = assignAnonFx.mouse.frozen;
                  });
                  if (anonymousFac[0]) {
                    (0, __fetchUserData.vu6)(
                      n.KP,
                      (hashUtility = anonymousFac[1] ? 2 : 0),
                      hashUtility,
                    );
                  } else if (anonymousFac[1]) {
                    (0, __fetchUserData.vu6)(
                      n.KP,
                      (hashUtility = 1),
                      hashUtility,
                    );
                  } else {
                    (0, __fetchUserData.vu6)(
                      n.KP,
                      (hashUtility = -1),
                      hashUtility,
                    );
                  }
                  (0, __fetchUserData.vu6)(
                    eventHasher,
                    (m = hashUtility >= 0),
                    m,
                  );
                }
                if ("LZd" in mouseState) {
                  resultS.A.eWI.forEach((jquery, mouseCentralZ) => {
                    __configManager[mouseCentralZ] = jquery.mouse.centralize;
                  });
                  if (__configManager[0]) {
                    (0, __fetchUserData.vu6)(
                      n.Xt,
                      (__config = __configManager[1] ? 2 : 0),
                      __config,
                    );
                  } else if (__configManager[1]) {
                    (0, __fetchUserData.vu6)(n.Xt, (__config = 1), __config);
                  } else {
                    (0, __fetchUserData.vu6)(n.Xt, (__config = -1), __config);
                  }
                  (0, __fetchUserData.vu6)(
                    appConfig,
                    (data = __config >= 0),
                    data,
                  );
                }
                if ("lockLinesplit" in mouseState) {
                  resultS.A.eWI.forEach((handleMouseUp, MouseUpEvent) => {
                    __configCache[MouseUpEvent] = handleMouseUp.mouse.pause;
                  });
                  if (__configCache[0]) {
                    (0, __fetchUserData.vu6)(
                      n.NC,
                      (hashtableUtil = __configCache[1] ? 2 : 0),
                      hashtableUtil,
                    );
                  } else if (__configCache[1]) {
                    (0, __fetchUserData.vu6)(
                      n.NC,
                      (hashtableUtil = 1),
                      hashtableUtil,
                    );
                  } else {
                    (0, __fetchUserData.vu6)(
                      n.NC,
                      (hashtableUtil = -1),
                      hashtableUtil,
                    );
                  }
                  (0, __fetchUserData.vu6)(
                    filteredData,
                    (settingsStore = hashtableUtil >= 0),
                    settingsStore,
                  );
                }
              });
              resultS.A.on("GfXwco", (handleUser) => {
                if (c) {
                  (0, __fetchUserData.vu6)(n.ZK, (l = handleUser), l);
                }
              });
              resultS.A.on("RyKxvm", (_userConfig) => {
                (0, __fetchUserData.vu6)(
                  n.hZ,
                  (configCache = _userConfig),
                  configCache,
                );
                (0, __fetchUserData.vu6)(
                  ___processData,
                  (o = !!_userConfig),
                  o,
                );
              });
              return [
                _________________________anonymousUser,
                calculateMax,
                InitConfig,
                configKey,
                multiCondConf,
                o,
                configCache,
                l,
                c,
                hashtableUtil,
                settingsStore,
                __config,
                data,
                hashUtility,
                m,
                eventState,
                postId,
                f,
                configuration,
                myFunction,
                configHandler,
                handleToggle,
                configMap,
                eventProcess,
                configureAndE,
                isValid,
                collectUserTe,
                configManager,
                __createConfig,
                _configCache,
                userConfig,
                configStorage,
                ___config,
                configureAlgo,
                ________________index,
                ConfigOptions,
                ___processData,
                eventHasher,
                appConfig,
                filteredData,
                configInitial,
              ];
            },
            function accumulateAnd(______initialState) {
              let accumulate;
              let useStateOrSet =
                ______initialState[0] &&
                ______initialState[1] &&
                o(______initialState);
              return {
                c() {
                  if (useStateOrSet) {
                    useStateOrSet.c();
                  }
                  accumulate = (0, __fetchUserData.Iex)();
                },
                m(__handleEvent, _userEvent) {
                  if (useStateOrSet) {
                    useStateOrSet.m(__handleEvent, _userEvent);
                  }
                  (0, __fetchUserData.Yry)(
                    __handleEvent,
                    accumulate,
                    _userEvent,
                  );
                },
                p(shouldPerform, fetchUserArgs) {
                  if (shouldPerform[0] && shouldPerform[1]) {
                    if (useStateOrSet) {
                      useStateOrSet.p(shouldPerform, fetchUserArgs);
                      if (fetchUserArgs[0] & 3) {
                        (0, __fetchUserData.c7F)(useStateOrSet, 1);
                      }
                    } else {
                      (useStateOrSet = o(shouldPerform)).c();
                      (0, __fetchUserData.c7F)(useStateOrSet, 1);
                      useStateOrSet.m(accumulate.parentNode, accumulate);
                    }
                  } else if (useStateOrSet) {
                    (0, __fetchUserData.V44)();
                    (0, __fetchUserData.Tn8)(useStateOrSet, 1, 1, () => {
                      useStateOrSet = null;
                    });
                    (0, __fetchUserData.GYV)();
                  }
                },
                i(validateEmail) {
                  (0, __fetchUserData.c7F)(useStateOrSet);
                },
                o(__________________fetchUserData) {
                  (0, __fetchUserData.Tn8)(useStateOrSet);
                },
                d(___________________fetchUserData) {
                  if (___________________fetchUserData) {
                    (0, __fetchUserData.YoD)(accumulate);
                  }
                  if (useStateOrSet) {
                    useStateOrSet.d(___________________fetchUserData);
                  }
                },
              };
            },
            __fetchUserData.jXN,
            {},
            null,
            [-1, -1],
          );
        }
      }
      let keyCallback = FetchUserData;
    },
    58650(________anonymousFunc, anonymousFn, enhanceObject) {
      enhanceObject.d(anonymousFn, {
        A: () => dispatcher,
      });
      var _enhanceObject = enhanceObject(83839);
      enhanceObject(60821);
      var enhancedObj2 = enhanceObject(64127);
      var enhancedObj = enhanceObject(30847);
      var n = enhanceObject(15308);
      var doubleEnhance = enhanceObject(10103);
      var o = enhanceObject(41949);
      var __enhanceObject = enhanceObject(95669);
      var l = enhanceObject(28858);
      function c(toggleDisplay) {
        let lastElementHd;
        let _____loopCounter;
        let incrementalCn;
        let _________________index;
        let n;
        let o;
        let l;
        let c;
        let aggregateScor;
        let _tempVar;
        let uniqueId;
        let __iteration;
        let ___iteration;
        let m;
        let totalScore;
        let scoreIncSumUp;
        let f;
        return {
          c() {
            lastElementHd = (0, _enhanceObject.ND4)("div");
            _____loopCounter = (0, _enhanceObject.ND4)("div");
            incrementalCn = (0, _enhanceObject.ND4)("div");
            _________________index = (0, _enhanceObject.ND4)("img");
            o = (0, _enhanceObject.xem)();
            l = (0, _enhanceObject.ND4)("div");
            (c = (0, _enhanceObject.ND4)("b")).textContent = "luka";
            aggregateScor = (0, _enhanceObject.Qq7)(": ");
            (_tempVar = (0, _enhanceObject.ND4)("span")).textContent =
              "" + toggleDisplay[2];
            if (
              !(0, _enhanceObject.mq_)(
                _________________index.src,
                (n = doubleEnhance.A),
              )
            ) {
              (0, _enhanceObject.CFu)(_________________index, "src", n);
            }
            (0, _enhanceObject.CFu)(
              _________________index,
              "crossorigin",
              "anonymous",
            );
            (0, _enhanceObject.CFu)(
              _________________index,
              "class",
              "image s-13o84a9",
            );
            (0, _enhanceObject.CFu)(_________________index, "alt", "Icon");
            (0, _enhanceObject.CFu)(c, "class", "name s-13o84a9");
            (0, _enhanceObject.CFu)(_tempVar, "class", "text s-13o84a9");
            (0, _enhanceObject.CFu)(l, "class", "message s-13o84a9");
            (0, _enhanceObject.CFu)(
              incrementalCn,
              "class",
              "image-wrapper s-13o84a9",
            );
            (0, _enhanceObject.CFu)(
              _____loopCounter,
              "class",
              "center s-13o84a9",
            );
            (0, _enhanceObject.CFu)(
              lastElementHd,
              "class",
              "container s-13o84a9",
            );
          },
          m(n, extraArgs) {
            (0, _enhanceObject.Yry)(n, lastElementHd, extraArgs);
            (0, _enhanceObject.BCw)(lastElementHd, _____loopCounter);
            (0, _enhanceObject.BCw)(_____loopCounter, incrementalCn);
            (0, _enhanceObject.BCw)(incrementalCn, _________________index);
            (0, _enhanceObject.BCw)(incrementalCn, o);
            (0, _enhanceObject.BCw)(incrementalCn, l);
            (0, _enhanceObject.BCw)(l, c);
            (0, _enhanceObject.BCw)(l, aggregateScor);
            (0, _enhanceObject.BCw)(l, _tempVar);
            totalScore = true;
            if (!scoreIncSumUp) {
              f = (0, _enhanceObject.KTR)(
                lastElementHd,
                "click",
                toggleDisplay[1],
              );
              scoreIncSumUp = true;
            }
          },
          p: _enhanceObject.lQ1,
          i(validateAndEn) {
            if (!totalScore) {
              if (validateAndEn) {
                (0, _enhanceObject.Dti)(() => {
                  if (totalScore) {
                    if (__iteration) {
                      __iteration.end(1);
                    }
                    (uniqueId = (0, _enhanceObject.b7f)(
                      _____loopCounter,
                      __enhanceObject._J,
                      {
                        y: 150,
                        duration: 1100,
                      },
                    )).start();
                  }
                });
              }
              if (validateAndEn) {
                (0, _enhanceObject.Dti)(() => {
                  if (totalScore) {
                    if (m) {
                      m.end(1);
                    }
                    (___iteration = (0, _enhanceObject.b7f)(
                      lastElementHd,
                      __enhanceObject.Rv,
                      {
                        duration: 700,
                      },
                    )).start();
                  }
                });
              }
              totalScore = true;
            }
          },
          o(__iterator) {
            if (uniqueId) {
              uniqueId.invalidate();
            }
            if (__iterator) {
              __iteration = (0, _enhanceObject.CUz)(
                _____loopCounter,
                __enhanceObject._J,
                {
                  y: -150,
                  duration: 500,
                },
              );
            }
            if (___iteration) {
              ___iteration.invalidate();
            }
            if (__iterator) {
              m = (0, _enhanceObject.CUz)(lastElementHd, __enhanceObject.Rv, {
                duration: 500,
              });
            }
            totalScore = false;
          },
          d(hasResources) {
            if (hasResources) {
              (0, _enhanceObject.YoD)(lastElementHd);
            }
            if (hasResources && __iteration) {
              __iteration.end();
            }
            if (hasResources && m) {
              m.end();
            }
            scoreIncSumUp = false;
            f();
          },
        };
      }
      class ___enhanceObject extends _enhanceObject.r7T {
        constructor(enhance) {
          super();
          (0, _enhanceObject.TsN)(
            this,
            enhance,
            function __________anonymousData(
              __errorHandler,
              stateTransfer,
              _______initialState,
            ) {
              let dataResult;
              let c;
              let enhancedData;
              (0, _enhanceObject.j0C)(__errorHandler, enhancedObj2.z, (match) =>
                _______initialState(4, (dataResult = match)),
              );
              (0, _enhanceObject.j0C)(
                __errorHandler,
                l.S,
                (________initialState) =>
                  _______initialState(5, (c = ________initialState)),
              );
              (0, _enhanceObject.j0C)(
                __errorHandler,
                l.W,
                (___________anonymousData) =>
                  _______initialState(
                    0,
                    (enhancedData = ___________anonymousData),
                  ),
              );
              let processDataEn;
              (0, o.Rc)(() => {
                (0, _enhanceObject.vu6)(
                  l.W,
                  (enhancedData = true),
                  enhancedData,
                );
                processDataEn = (0, enhancedObj.wg)(() => {
                  (0, _enhanceObject.vu6)(
                    l.W,
                    (enhancedData = false),
                    enhancedData,
                  );
                  processDataEn = (0, enhancedObj.wg)(() => {
                    (0, _enhanceObject.vu6)(
                      l.S,
                      (c = (0, _enhanceObject.vu6)(
                        enhancedObj2.z,
                        (dataResult = true),
                        dataResult,
                      )),
                      c,
                    );
                  }, 600);
                }, 1200);
              });
              __errorHandler = (__errorHandler = [
                "c2hlJ3MlMjB0aGUlMjBraWQlMjBpbiUyMG1l",
                "aWYlMjBzaGUncyUyMG5pbmUsJTIwc2hlJ3MlMjBtaW5lJTIwJUYwJTlGJTk4JTg4",
                "aWYlMjBoZXIlMjBhZ2UlMjBpcyUyMG9uJTIwdGhlJTIwY2xvY2suLi4lMjAlRjAlOUYlOTglOEY=",
                "aSdtJTIwbm90JTIwJTIyc3RvcCUyMHRvdWNoaW5nJTIwbWUlMjBlbG1vJTIyIQ==",
                "aSUyMGxpa2UlMjBraWRzJTIwJUYwJTlGJUE1JUI0",
                "dGhlIHlvdW5nZXIgdGhlIHNvdWwsIHRoZSB0aWdodGVyIHRoZSBob2xl",
                "aWYgc2hlJ3MgZWxldmVuLCBJIHNlbmQgaGVyIHRvIGhlYXZlbg==",
              ].map((decodeURIEnc1) => decodeURI(atob(decodeURIEnc1))))[
                ~~(Math.random() * __errorHandler.length)
              ];
              return [
                enhancedData,
                () => {
                  clearTimeout(processDataEn);
                  (0, _enhanceObject.vu6)(
                    l.W,
                    (enhancedData = false),
                    enhancedData,
                  );
                  (0, _enhanceObject.vu6)(
                    l.S,
                    (c = (0, _enhanceObject.vu6)(
                      enhancedObj2.z,
                      (dataResult = true),
                      dataResult,
                    )),
                    c,
                  );
                  (0, n.$s)(0, "Skipped intro animation");
                },
                __errorHandler,
              ];
            },
            function _updateUser(createUnassig) {
              let _enhancedData;
              let findFunction = createUnassig[0] && c(createUnassig);
              return {
                c() {
                  if (findFunction) {
                    findFunction.c();
                  }
                  _enhancedData = (0, _enhanceObject.Iex)();
                },
                m(enhancedFind, _enhancedFind) {
                  if (findFunction) {
                    findFunction.m(enhancedFind, _enhancedFind);
                  }
                  (0, _enhanceObject.Yry)(
                    enhancedFind,
                    _enhancedData,
                    _enhancedFind,
                  );
                },
                p(primaryObject, [__minifiedAnon]) {
                  if (primaryObject[0]) {
                    if (findFunction) {
                      findFunction.p(primaryObject, __minifiedAnon);
                      if (__minifiedAnon & 1) {
                        (0, _enhanceObject.c7F)(findFunction, 1);
                      }
                    } else {
                      (findFunction = c(primaryObject)).c();
                      (0, _enhanceObject.c7F)(findFunction, 1);
                      findFunction.m(_enhancedData.parentNode, _enhancedData);
                    }
                  } else if (findFunction) {
                    (0, _enhanceObject.V44)();
                    (0, _enhanceObject.Tn8)(findFunction, 1, 1, () => {
                      findFunction = null;
                    });
                    (0, _enhanceObject.GYV)();
                  }
                },
                i(compose) {
                  (0, _enhanceObject.c7F)(findFunction);
                },
                o(objectEnhanci) {
                  (0, _enhanceObject.Tn8)(findFunction);
                },
                d(_contextData) {
                  if (_contextData) {
                    (0, _enhanceObject.YoD)(_enhancedData);
                  }
                  if (findFunction) {
                    findFunction.d(_contextData);
                  }
                },
              };
            },
            _enhanceObject.jXN,
            {},
          );
        }
      }
      let dispatcher = ___enhanceObject;
    },
    8167(entity, parentObject, cloneEntity) {
      cloneEntity.d(parentObject, {
        A: () => n,
      });
      var clone83839Cl1 = cloneEntity(83839);
      cloneEntity(60821);
      var cloneOfEntity = cloneEntity(95669);
      class Clone83839Ref extends clone83839Cl1.r7T {
        constructor(elementQuery) {
          super();
          (0, clone83839Cl1.TsN)(
            this,
            elementQuery,
            null,
            function __initialize(inputValue) {
              let cloneDivWithN;
              let enumerateIt;
              let n;
              let cloneInitial;
              return {
                c() {
                  (((cloneDivWithN = (0, clone83839Cl1.ND4)("div")).innerHTML =
                    ""),
                  clone83839Cl1.CFu)(
                    cloneDivWithN,
                    "class",
                    "account-container container s-cxw380",
                  );
                },
                m(cloneAndInit, initialEvent) {
                  (0, clone83839Cl1.Yry)(
                    cloneAndInit,
                    cloneDivWithN,
                    initialEvent,
                  );
                  cloneInitial = true;
                },
                p: clone83839Cl1.lQ1,
                i(flagOrClone) {
                  if (!cloneInitial) {
                    if (flagOrClone) {
                      (0, clone83839Cl1.Dti)(() => {
                        if (cloneInitial) {
                          if (n) {
                            n.end(1);
                          }
                          (enumerateIt = (0, clone83839Cl1.b7f)(
                            cloneDivWithN,
                            cloneOfEntity._J,
                            {
                              x: 150,
                              duration: 500,
                            },
                          )).start();
                        }
                      });
                    }
                    cloneInitial = true;
                  }
                },
                o(clonedElement) {
                  if (enumerateIt) {
                    enumerateIt.invalidate();
                  }
                  if (clonedElement) {
                    n = (0, clone83839Cl1.CUz)(
                      cloneDivWithN,
                      cloneOfEntity._J,
                      {
                        x: 150,
                        duration: 500,
                      },
                    );
                  }
                  cloneInitial = false;
                },
                d(jqueryCheckOr) {
                  if (jqueryCheckOr) {
                    (0, clone83839Cl1.YoD)(cloneDivWithN);
                  }
                  if (jqueryCheckOr && n) {
                    n.end();
                  }
                },
              };
            },
            clone83839Cl1.jXN,
            {},
          );
        }
      }
      let n = Clone83839Ref;
    },
    49053(fetchData, ______event, ___handleEvent) {
      ___handleEvent.d(______event, {
        A: () => onEvent49053,
      });
      var _eventResult = ___handleEvent(83839);
      ___handleEvent(60821);
      var eventResult95 = ___handleEvent(95669);
      var ______event = ___handleEvent(54603);
      var fetchProduct = ___handleEvent(60743);
      var n = ___handleEvent(22808);
      function divSkinTypes(handleUserReg) {
        let __eventResult;
        let skinsHtmlElem;
        let skinTypes;
        let currentSkin;
        let n;
        return {
          c() {
            (__eventResult = (0, _eventResult.ND4)("div")).textContent =
              "Skins";
            skinsHtmlElem = (0, _eventResult.xem)();
            (skinTypes = (0, _eventResult.ND4)("div")).textContent = "Perks";
            (0, _eventResult.CFu)(__eventResult, "class", "tab");
            (0, _eventResult.goL)(
              __eventResult,
              "active",
              handleUserReg[0] === 0,
            );
            (0, _eventResult.CFu)(skinTypes, "class", "tab");
            (0, _eventResult.goL)(skinTypes, "active", handleUserReg[0] === 1);
          },
          m(_____context, o) {
            (0, _eventResult.Yry)(_____context, __eventResult, o);
            (0, _eventResult.Yry)(_____context, skinsHtmlElem, o);
            (0, _eventResult.Yry)(_____context, skinTypes, o);
            if (!currentSkin) {
              n = [
                (0, _eventResult.KTR)(__eventResult, "click", handleUserReg[1]),
                (0, _eventResult.KTR)(skinTypes, "click", handleUserReg[2]),
              ];
              currentSkin = true;
            }
          },
          p(contextualGet, activateEvent) {
            if (activateEvent & 1) {
              (0, _eventResult.goL)(
                __eventResult,
                "active",
                contextualGet[0] === 0,
              );
            }
            if (activateEvent & 1) {
              (0, _eventResult.goL)(
                skinTypes,
                "active",
                contextualGet[0] === 1,
              );
            }
          },
          d(________________placeholder) {
            if (________________placeholder) {
              (0, _eventResult.YoD)(__eventResult);
              (0, _eventResult.YoD)(skinsHtmlElem);
              (0, _eventResult.YoD)(skinTypes);
            }
            ((currentSkin = false), _eventResult.oOW)(n);
          },
        };
      }
      function o(_getAnonymous) {
        let _fetchProduct;
        let triggerAction;
        _fetchProduct = new fetchProduct.A({});
        return {
          c() {
            (0, _eventResult.N0i)(_fetchProduct.$$.fragment);
          },
          m(product, fetchSettings) {
            (0, _eventResult.wSR)(_fetchProduct, product, fetchSettings);
            triggerAction = true;
          },
          i(productEvent) {
            if (!triggerAction) {
              (0, _eventResult.c7F)(_fetchProduct.$$.fragment, productEvent);
              triggerAction = true;
            }
          },
          o(productData) {
            (0, _eventResult.Tn8)(_fetchProduct.$$.fragment, productData);
            triggerAction = false;
          },
          d(productDetail) {
            (0, _eventResult.Hbl)(_fetchProduct, productDetail);
          },
        };
      }
      function createNClass(jqObj) {
        let newElement;
        let nClassData;
        newElement = new n.A({});
        return {
          c() {
            (0, _eventResult.N0i)(newElement.$$.fragment);
          },
          m(currentItemHw, _currentItem) {
            (0, _eventResult.wSR)(newElement, currentItemHw, _currentItem);
            nClassData = true;
          },
          i(initFragment) {
            if (!nClassData) {
              (0, _eventResult.c7F)(newElement.$$.fragment, initFragment);
              nClassData = true;
            }
          },
          o(stateObject) {
            (0, _eventResult.Tn8)(newElement.$$.fragment, stateObject);
            nClassData = false;
          },
          d(dollarSign) {
            (0, _eventResult.Hbl)(newElement, dollarSign);
          },
        };
      }
      let l = (0, ______event.T5)(0);
      let c = (assignUserByX) => {
        l.set(assignUserByX);
      };
      class EventResult extends _eventResult.r7T {
        constructor(_eventEmitter) {
          super();
          (0, _eventResult.TsN)(
            this,
            _eventEmitter,
            function initialized(_userInput, _initializeUI, elementTypes) {
              let ___eventData;
              let n = _eventResult.lQ1;
              (0, _eventResult.j0C)(_userInput, l, (getElementAt) =>
                elementTypes(0, (___eventData = getElementAt)),
              );
              _userInput.$$.on_destroy.push(() => n());
              return [___eventData, () => c(0), () => c(1)];
            },
            function domHandler(_updateDOMWith) {
              let __counter;
              let ___loopIndex;
              let n = _updateDOMWith[0];
              let l;
              let c;
              let dynamicUpdate;
              let applyDivStyCz;
              let domStyleUpdta;
              let styleUpdater;
              let domStateStore = divSkinTypes(_updateDOMWith);
              let m = [createNClass, o];
              let domElementUpd = [];
              function checkFirstInN(getElement) {
                if (getElement[0] === 0) {
                  return 0;
                } else {
                  return 1;
                }
              }
              dynamicUpdate = domElementUpd[
                (c = checkFirstInN(_updateDOMWith))
              ] = m[c](_updateDOMWith);
              return {
                c() {
                  __counter = (0, _eventResult.ND4)("div");
                  ___loopIndex = (0, _eventResult.ND4)("div");
                  domStateStore.c();
                  l = (0, _eventResult.xem)();
                  dynamicUpdate.c();
                  (0, _eventResult.CFu)(___loopIndex, "class", "tabs");
                  (0, _eventResult.CFu)(
                    __counter,
                    "class",
                    "customization container s-rp2x31",
                  );
                  (0, _eventResult.goL)(
                    __counter,
                    "skins",
                    _updateDOMWith[0] === 0,
                  );
                  (0, _eventResult.goL)(
                    __counter,
                    "perks",
                    _updateDOMWith[0] === 1,
                  );
                },
                m(_________anonymousFunc, ____eventData) {
                  (0, _eventResult.Yry)(
                    _________anonymousFunc,
                    __counter,
                    ____eventData,
                  );
                  (0, _eventResult.BCw)(__counter, ___loopIndex);
                  domStateStore.m(___loopIndex, null);
                  (0, _eventResult.BCw)(__counter, l);
                  domElementUpd[c].m(__counter, null);
                  styleUpdater = true;
                },
                p(eventMatchUpd, [errorInfo]) {
                  if (
                    errorInfo & 1 &&
                    (0, _eventResult.jXN)(n, (n = eventMatchUpd[0]))
                  ) {
                    domStateStore.d(1);
                    (domStateStore = divSkinTypes(eventMatchUpd)).c();
                    domStateStore.m(___loopIndex, null);
                  } else {
                    domStateStore.p(eventMatchUpd, errorInfo);
                  }
                  let ___eventResult = c;
                  if ((c = checkFirstInN(eventMatchUpd)) !== ___eventResult) {
                    (0, _eventResult.V44)();
                    (0, _eventResult.Tn8)(
                      domElementUpd[___eventResult],
                      1,
                      1,
                      () => {
                        domElementUpd[___eventResult] = null;
                      },
                    );
                    (0, _eventResult.GYV)();
                    if (!(dynamicUpdate = domElementUpd[c])) {
                      (dynamicUpdate = domElementUpd[c] =
                        m[c](eventMatchUpd)).c();
                    }
                    (0, _eventResult.c7F)(dynamicUpdate, 1);
                    dynamicUpdate.m(__counter, null);
                  }
                  if (!styleUpdater || errorInfo & 1) {
                    (0, _eventResult.goL)(
                      __counter,
                      "skins",
                      eventMatchUpd[0] === 0,
                    );
                  }
                  if (!styleUpdater || errorInfo & 1) {
                    (0, _eventResult.goL)(
                      __counter,
                      "perks",
                      eventMatchUpd[0] === 1,
                    );
                  }
                },
                i(eventResults) {
                  if (!styleUpdater) {
                    (0, _eventResult.c7F)(dynamicUpdate);
                    if (eventResults) {
                      (0, _eventResult.Dti)(() => {
                        if (styleUpdater) {
                          if (domStyleUpdta) {
                            domStyleUpdta.end(1);
                          }
                          (applyDivStyCz = (0, _eventResult.b7f)(
                            __counter,
                            eventResult95._J,
                            {
                              x: 150,
                              duration: 500,
                            },
                          )).start();
                        }
                      });
                    }
                    styleUpdater = true;
                  }
                },
                o(updateDomSty) {
                  (0, _eventResult.Tn8)(dynamicUpdate);
                  if (applyDivStyCz) {
                    applyDivStyCz.invalidate();
                  }
                  if (updateDomSty) {
                    domStyleUpdta = (0, _eventResult.CUz)(
                      __counter,
                      eventResult95._J,
                      {
                        x: 150,
                        duration: 500,
                      },
                    );
                  }
                  styleUpdater = false;
                },
                d(hasEventHandl) {
                  if (hasEventHandl) {
                    (0, _eventResult.YoD)(__counter);
                  }
                  domStateStore.d(hasEventHandl);
                  domElementUpd[c].d();
                  if (hasEventHandl && domStyleUpdta) {
                    domStyleUpdta.end();
                  }
                },
              };
            },
            _eventResult.jXN,
            {},
          );
        }
      }
      let onEvent49053 = EventResult;
    },
    60743(createS, eventHandlers, ____initializeAnd) {
      ____initializeAnd.d(eventHandlers, {
        A: () => __________________eventHandler,
      });
      var ________________eventHandler = ____initializeAnd(83839);
      ____initializeAnd(60821);
      class _EventHandler extends ________________eventHandler.r7T {
        constructor(_________________eventHandler) {
          super();
          (0, ________________eventHandler.TsN)(
            this,
            _________________eventHandler,
            null,
            function doc(eventInfo) {
              let onDivClicked;
              return {
                c() {
                  (onDivClicked = (0, ________________eventHandler.ND4)(
                    "div",
                  )).textContent = "palyer leaderboards.";
                },
                m(elementClick, clickEvent) {
                  (0, ________________eventHandler.Yry)(
                    elementClick,
                    onDivClicked,
                    clickEvent,
                  );
                },
                p: ________________eventHandler.lQ1,
                i: ________________eventHandler.lQ1,
                o: ________________eventHandler.lQ1,
                d(verifyObject) {
                  if (verifyObject) {
                    (0, ________________eventHandler.YoD)(onDivClicked);
                  }
                },
              };
            },
            ________________eventHandler.jXN,
            {},
          );
        }
      }
      let __________________eventHandler = _EventHandler;
    },
    22808(setupAnon, eKeyValuePair, e83) {
      e83.d(eKeyValuePair, {
        A: () => minifyCode,
      });
      var eightThirtyNr = e83(83839);
      e83(60821);
      var eKeyValuePair = e83(78465);
      var updateValue = e83.n(eKeyValuePair);
      var ___counter = e83(41949);
      var n = e83(54603);
      var getOrSetValue = e83(15481);
      var o = e83(19680);
      var keyValuePairs = e83(33656);
      var l = e83(15308);
      var eKeyValuePair = e83(83529);
      var c = e83(78225);
      var keyValuePair = e83(95195);
      function setSliceValue(__initializeOrP, initializeE, timerConfig) {
        (__initializeOrP = __initializeOrP.slice())[20] =
          initializeE[timerConfig];
        __initializeOrP[22] = timerConfig;
        return __initializeOrP;
      }
      function calculateCFu(___initializer) {
        let encodedValue;
        let actionToAddSk;
        return {
          c() {
            encodedValue = (0, eightThirtyNr.ND4)("i");
            actionToAddSk = (0, eightThirtyNr.Qq7)(" Add Skin");
            (0, eightThirtyNr.CFu)(
              encodedValue,
              "class",
              "button-icon fal fa-plus s-15tzznm",
            );
          },
          m(_anonymousFn, dataHandlerId) {
            (0, eightThirtyNr.Yry)(_anonymousFn, encodedValue, dataHandlerId);
            (0, eightThirtyNr.Yry)(_anonymousFn, actionToAddSk, dataHandlerId);
          },
          p: eightThirtyNr.lQ1,
          d(validate) {
            if (validate) {
              (0, eightThirtyNr.YoD)(encodedValue);
              (0, eightThirtyNr.YoD)(actionToAddSk);
            }
          },
        };
      }
      function removeSkinAnd(docJQuery) {
        let textToAdd;
        let textToRemove;
        return {
          c() {
            textToAdd = (0, eightThirtyNr.ND4)("i");
            textToRemove = (0, eightThirtyNr.Qq7)(" Remove Skin");
            (0, eightThirtyNr.CFu)(
              textToAdd,
              "class",
              "button-icon fal fa-times s-15tzznm",
            );
          },
          m(_eightThirtyNr, textBuffer) {
            (0, eightThirtyNr.Yry)(_eightThirtyNr, textToAdd, textBuffer);
            (0, eightThirtyNr.Yry)(_eightThirtyNr, textToRemove, textBuffer);
          },
          p: eightThirtyNr.lQ1,
          d(ensureTextUpd) {
            if (ensureTextUpd) {
              (0, eightThirtyNr.YoD)(textToAdd);
              (0, eightThirtyNr.YoD)(textToRemove);
            }
          },
        };
      }
      function getValueOrSet(_DOMHandler) {
        let getOrSetFetch;
        let _fetchStatus;
        let tempStyle;
        let __________________index;
        (getOrSetFetch = new getOrSetValue.A({
          props: {
            style:
              "display:flex;align-items:center;justify-content:flex-start;",
            $$slots: {
              default: [calculateCFu],
            },
            $$scope: {
              ctx: _DOMHandler,
            },
          },
        })).$on("click", _DOMHandler[13]);
        (tempStyle = new getOrSetValue.A({
          props: {
            style:
              "display:flex;align-items:center;justify-content:flex-start;",
            $$slots: {
              default: [removeSkinAnd],
            },
            $$scope: {
              ctx: _DOMHandler,
            },
          },
        })).$on("click", _DOMHandler[14]);
        return {
          c() {
            (0, eightThirtyNr.N0i)(getOrSetFetch.$$.fragment);
            _fetchStatus = (0, eightThirtyNr.xem)();
            (0, eightThirtyNr.N0i)(tempStyle.$$.fragment);
          },
          m(styleManager, n) {
            (0, eightThirtyNr.wSR)(getOrSetFetch, styleManager, n);
            (0, eightThirtyNr.Yry)(styleManager, _fetchStatus, n);
            (0, eightThirtyNr.wSR)(tempStyle, styleManager, n);
            __________________index = true;
          },
          p(scopedContext, scopeFlags) {
            var scopeCheckAnd = {};
            if (scopeFlags & 8388608) {
              scopeCheckAnd.$$scope = {
                dirty: scopeFlags,
                ctx: scopedContext,
              };
            }
            getOrSetFetch.$set(scopeCheckAnd);
            var scopeCheckAnd = {};
            if (scopeFlags & 8388608) {
              scopeCheckAnd.$$scope = {
                dirty: scopeFlags,
                ctx: scopedContext,
              };
            }
            tempStyle.$set(scopeCheckAnd);
          },
          i(domElementRef) {
            if (!__________________index) {
              (0, eightThirtyNr.c7F)(getOrSetFetch.$$.fragment, domElementRef);
              (0, eightThirtyNr.c7F)(tempStyle.$$.fragment, domElementRef);
              __________________index = true;
            }
          },
          o(fetchTokens) {
            (0, eightThirtyNr.Tn8)(getOrSetFetch.$$.fragment, fetchTokens);
            (0, eightThirtyNr.Tn8)(tempStyle.$$.fragment, fetchTokens);
            __________________index = false;
          },
          d(globalContext) {
            if (globalContext) {
              (0, eightThirtyNr.YoD)(_fetchStatus);
            }
            (0, eightThirtyNr.Hbl)(getOrSetFetch, globalContext);
            (0, eightThirtyNr.Hbl)(tempStyle, globalContext);
          },
        };
      }
      function m(__isAnonymous) {
        let __eightThirtyNr;
        let nextLetter;
        let incrementFifh = __isAnonymous[4] + 1 + "";
        let ____iteration;
        let n;
        let variableWithL = setEventKey.length + "";
        let o;
        return {
          c() {
            __eightThirtyNr = (0, eightThirtyNr.ND4)("span");
            nextLetter = (0, eightThirtyNr.Qq7)("Page ");
            ____iteration = (0, eightThirtyNr.Qq7)(incrementFifh);
            n = (0, eightThirtyNr.Qq7)(" of ");
            o = (0, eightThirtyNr.Qq7)(variableWithL);
            (0, eightThirtyNr.CFu)(__eightThirtyNr, "class", "count s-15tzznm");
          },
          m(stateManager, updateTimeFor) {
            (0, eightThirtyNr.Yry)(
              stateManager,
              __eightThirtyNr,
              updateTimeFor,
            );
            (0, eightThirtyNr.BCw)(__eightThirtyNr, nextLetter);
            (0, eightThirtyNr.BCw)(__eightThirtyNr, ____iteration);
            (0, eightThirtyNr.BCw)(__eightThirtyNr, n);
            (0, eightThirtyNr.BCw)(__eightThirtyNr, o);
          },
          p(_collection, checkFifhAndE) {
            if (
              checkFifhAndE & 16 &&
              incrementFifh !== (incrementFifh = _collection[4] + 1 + "")
            ) {
              (0, eightThirtyNr.iQh)(____iteration, incrementFifh);
            }
          },
          d(checkAndCallY) {
            if (checkAndCallY) {
              (0, eightThirtyNr.YoD)(__eightThirtyNr);
            }
          },
        };
      }
      function initSelection(displayShowCd) {
        let isEmpty;
        let _undefinedVar;
        let selectionCd;
        let forIndex;
        let n;
        let initializedOr;
        let o;
        function l() {
          return displayShowCd[17](displayShowCd[22]);
        }
        return {
          c() {
            isEmpty = (0, eightThirtyNr.ND4)("span");
            _undefinedVar = (0, eightThirtyNr.ND4)("img");
            forIndex = (0, eightThirtyNr.xem)();
            (0, eightThirtyNr.CFu)(
              _undefinedVar,
              "class",
              "selected image s-15tzznm",
            );
            if (
              !(0, eightThirtyNr.mq_)(
                _undefinedVar.src,
                (selectionCd = displayShowCd[20] || keyValuePairs.nG),
              )
            ) {
              (0, eightThirtyNr.CFu)(_undefinedVar, "src", selectionCd);
            }
            (0, eightThirtyNr.goL)(
              _undefinedVar,
              "selected",
              displayShowCd[4] === displayShowCd[5] &&
                displayShowCd[22] === displayShowCd[3],
            );
            (0, eightThirtyNr.CFu)(isEmpty, "class", "skin s-15tzznm");
            (0, eightThirtyNr.CFu)(
              isEmpty,
              "data-index",
              (n = displayShowCd[22]),
            );
          },
          m(EightThirtyNr, _storage) {
            (0, eightThirtyNr.Yry)(EightThirtyNr, isEmpty, _storage);
            (0, eightThirtyNr.BCw)(isEmpty, _undefinedVar);
            (0, eightThirtyNr.BCw)(isEmpty, forIndex);
            if (!initializedOr) {
              o = [
                (0, eightThirtyNr.KTR)(_undefinedVar, "error", _updateValueAt),
                (0, eightThirtyNr.KTR)(isEmpty, "click", l),
              ];
              initializedOr = true;
            }
          },
          p(eStyleContext, optionsMask) {
            displayShowCd = eStyleContext;
            if (
              optionsMask & 16 &&
              !(0, eightThirtyNr.mq_)(
                _undefinedVar.src,
                (selectionCd = displayShowCd[20] || keyValuePairs.nG),
              )
            ) {
              (0, eightThirtyNr.CFu)(_undefinedVar, "src", selectionCd);
            }
            if (optionsMask & 56) {
              (0, eightThirtyNr.goL)(
                _undefinedVar,
                "selected",
                displayShowCd[4] === displayShowCd[5] &&
                  displayShowCd[22] === displayShowCd[3],
              );
            }
          },
          d(hasAndExec) {
            if (hasAndExec) {
              (0, eightThirtyNr.YoD)(isEmpty);
            }
            ((initializedOr = false), eightThirtyNr.oOW)(o);
          },
        };
      }
      function initializeSea(intervalInMin) {
        let thirdElement = intervalInMin[2];
        let minutesCalcul;
        let initialSelec = initSelection(intervalInMin);
        return {
          c() {
            initialSelec.c();
            minutesCalcul = (0, eightThirtyNr.Iex)();
          },
          m(initMain, initOrTimerHl) {
            initialSelec.m(initMain, initOrTimerHl);
            (0, eightThirtyNr.Yry)(initMain, minutesCalcul, initOrTimerHl);
          },
          p(_data, actionIndex) {
            if (
              actionIndex & 4 &&
              (0, eightThirtyNr.jXN)(thirdElement, (thirdElement = _data[2]))
            ) {
              initialSelec.d(1);
              (initialSelec = initSelection(_data)).c();
              initialSelec.m(minutesCalcul.parentNode, minutesCalcul);
            } else {
              initialSelec.p(_data, actionIndex);
            }
          },
          d(initializeDot) {
            if (initializeDot) {
              (0, eightThirtyNr.YoD)(minutesCalcul);
            }
            initialSelec.d(initializeDot);
          },
        };
      }
      function f(formatTime) {
        let eHelper;
        let _processedTime = (0, eightThirtyNr.rv_)(setEventKey[formatTime[4]]);
        let _initializeSea = [];
        for (
          let processSeaTem = 0;
          processSeaTem < _processedTime.length;
          processSeaTem += 1
        ) {
          _initializeSea[processSeaTem] = initializeSea(
            setSliceValue(formatTime, _processedTime, processSeaTem),
          );
        }
        return {
          c() {
            for (
              let seaInitIndex = 0;
              seaInitIndex < _initializeSea.length;
              seaInitIndex += 1
            ) {
              _initializeSea[seaInitIndex].c();
            }
            eHelper = (0, eightThirtyNr.Iex)();
          },
          m(methodApplier, seaInitialize) {
            for (
              let ______loopCounter = 0;
              ______loopCounter < _initializeSea.length;
              ______loopCounter += 1
            ) {
              if (_initializeSea[______loopCounter]) {
                _initializeSea[______loopCounter].m(
                  methodApplier,
                  seaInitialize,
                );
              }
            }
            (0, eightThirtyNr.Yry)(methodApplier, eHelper, seaInitialize);
          },
          p(anonTypeCheck, elementToVerf) {
            if (elementToVerf & 1084) {
              _processedTime = (0, eightThirtyNr.rv_)(
                setEventKey[anonTypeCheck[4]],
              );
              let n;
              for (n = 0; n < _processedTime.length; n += 1) {
                var __processedTime = setSliceValue(
                  anonTypeCheck,
                  _processedTime,
                  n,
                );
                if (_initializeSea[n]) {
                  _initializeSea[n].p(__processedTime, elementToVerf);
                } else {
                  _initializeSea[n] = initializeSea(__processedTime);
                  _initializeSea[n].c();
                  _initializeSea[n].m(eHelper.parentNode, eHelper);
                }
              }
              for (; n < _initializeSea.length; n += 1) {
                _initializeSea[n].d(1);
              }
              _initializeSea.length = _processedTime.length;
            }
          },
          d(executeIfElig) {
            if (executeIfElig) {
              (0, eightThirtyNr.YoD)(eHelper);
            }
            (0, eightThirtyNr.ppq)(_initializeSea, executeIfElig);
          },
        };
      }
      function PasswordSecre(createProfile) {
        let _userProfile = createProfile[2];
        let passwordStren;
        let createSecureU = f(createProfile);
        return {
          c() {
            createSecureU.c();
            passwordStren = (0, eightThirtyNr.Iex)();
          },
          m(initAnonObj, _______event) {
            createSecureU.m(initAnonObj, _______event);
            (0, eightThirtyNr.Yry)(initAnonObj, passwordStren, _______event);
          },
          p(getById, ____userId) {
            if (
              ____userId & 4 &&
              (0, eightThirtyNr.jXN)(_userProfile, (_userProfile = getById[2]))
            ) {
              createSecureU.d(1);
              (createSecureU = f(getById)).c();
              createSecureU.m(passwordStren.parentNode, passwordStren);
            } else {
              createSecureU.p(getById, ____userId);
            }
          },
          d(callExternalE) {
            if (callExternalE) {
              (0, eightThirtyNr.YoD)(passwordStren);
            }
            createSecureU.d(callExternalE);
          },
        };
      }
      let window = [];
      let setEventKey = [[]];
      let initializeE83;
      let modifyObject = () => {
        localStorage.setItem("skinPages", JSON.stringify(setEventKey));
      };
      let updateAndSelf = () => {
        localStorage.setItem("skinData", JSON.stringify(initializeE83));
      };
      (() => {
        if (
          !(() => {
            let cachedSkinPag;
            if ("skinPages" in localStorage) {
              (0, l.$s)(0, "Loading skin pages from cache");
              try {
                cachedSkinPag = JSON.parse(localStorage.getItem("skinPages"));
              } catch (_errorInfo) {}
            }
            if (!Array.isArray(cachedSkinPag) || cachedSkinPag.length < 1) {
              if ("skins" in localStorage) {
                return false;
              }
              cachedSkinPag = [[]];
            }
            if (cachedSkinPag.length === 1) {
              var generateSkinP = cachedSkinPag[0];
              for (
                let counterLoop = generateSkinP.length;
                counterLoop < 2;
                counterLoop++
              ) {
                generateSkinP.push(keyValuePairs.nG);
              }
            }
            setEventKey = cachedSkinPag;
            modifyObject();
            return true;
          })()
        ) {
          (0, l.$s)(0, "Loading skin pages from skins cache");
          let localSkinPage = [];
          if ("skins" in localStorage) {
            try {
              localSkinPage = JSON.parse(localStorage.getItem("skins"));
            } catch (tryCatchError) {
              return;
            }
            if (!Array.isArray(localSkinPage)) {
              return;
            }
            for (
              let duplicatePage = localSkinPage.length;
              duplicatePage < 2;
              duplicatePage++
            ) {
              localSkinPage.push(keyValuePairs.nG);
            }
          }
          let loadAndInitSk = 0;
          let logSkinLoad = 0;
          for (
            var loopIteration = (window = localSkinPage).length;
            logSkinLoad < loopIteration;

          ) {
            setEventKey[loadAndInitSk++] = window.slice(
              logSkinLoad,
              (logSkinLoad += 9),
            );
          }
          modifyObject();
        }
      })();
      (() => {
        if ("skinData" in localStorage) {
          try {
            return (initializeE83 = JSON.parse(
              localStorage.getItem("skinData"),
            ));
          } catch (jqueryObject) {}
        }
        initializeE83 = {
          skins: [0, 0],
          pages: [0, 0],
          selectedPages: [0, 0],
        };
        updateAndSelf();
      })();
      let createAnon = (0, n.T5)(c.A.yNT);
      let updateValueAt = (0, n.T5)(
        Math.min(
          initializeE83.pages[(0, n.Jt)(createAnon)],
          setEventKey.length,
        ),
      );
      let updateEvent = (0, n.T5)(initializeE83.skins[(0, n.Jt)(createAnon)]);
      let mutateValue = (0, n.T5)(
        initializeE83.selectedPages[(0, n.Jt)(createAnon)],
      );
      eKeyValuePair.A.on("zrVIMz", (eTrigger, activeTabData) => {
        if (eTrigger === "activeTabContext") {
          createAnon.set(activeTabData);
        }
      });
      updateValueAt.subscribe((e83InitialAnn) => {
        initializeE83.pages[(0, n.Jt)(createAnon)] = e83InitialAnn;
        updateAndSelf();
      });
      updateEvent.subscribe((skinInitializ) => {
        initializeE83.skins[(0, n.Jt)(createAnon)] = skinInitializ;
        updateAndSelf();
      });
      mutateValue.subscribe((initialPage) => {
        initializeE83.selectedPages[(0, n.Jt)(createAnon)] = initialPage;
        updateAndSelf();
      });
      createAnon.subscribe((configurator) => {
        updateValueAt.set(initializeE83.pages[configurator]);
        updateEvent.set(initializeE83.skins[configurator]);
        mutateValue.set(initializeE83.selectedPages[configurator]);
      });
      keyValuePair.A.on("fzvxek", (eventUpdate) => {
        var currentKey = setEventKey[(0, n.Jt)(updateValueAt)];
        if ((0, n.Jt)(updateEvent) > currentKey.length) {
          updateEvent.set(0);
        }
        currentKey[(0, n.Jt)(updateEvent)] = eventUpdate;
        modifyObject();
      });
      let _updateValueAt = async (getAsyncUser) => {
        getAsyncUser.currentTarget.src = keyValuePairs.nG;
      };
      class ThreeFortyTwo extends eightThirtyNr.r7T {
        constructor(____________anonymousData) {
          super();
          (0, eightThirtyNr.TsN)(
            this,
            ____________anonymousData,
            function __anonymousFn(__getAnonymous, domElementSty, n) {
              let eventDataWith;
              let o;
              let l;
              (0, eightThirtyNr.j0C)(
                __getAnonymous,
                updateEvent,
                (currentEvent) => n(3, (eventDataWith = currentEvent)),
              );
              (0, eightThirtyNr.j0C)(
                __getAnonymous,
                updateValueAt,
                (calculateX) => n(4, (o = calculateX)),
              );
              (0, eightThirtyNr.j0C)(
                __getAnonymous,
                mutateValue,
                (naturalStartF) => n(5, (l = naturalStartF)),
              );
              let c;
              let applyAnonFunc = false;
              let incrementByFo = false;
              let incrementAndE = (_____eventData) => {
                var ______eventData = setEventKey[o];
                if (eventDataWith > ______eventData.length) {
                  updateEvent.set(0);
                }
                ______eventData[eventDataWith] = _____eventData;
                n(2, (incrementByFo = !incrementByFo));
                modifyObject();
              };
              (0, ___counter.Rc)(() => {
                keyValuePair.A.on("fzvxek", incrementAndE);
              });
              (0, ___counter.sA)(() => {
                keyValuePair.A.off("fzvxek", incrementAndE);
              });
              let _updateEvent = (eventKeyIndex) => {
                (0, eightThirtyNr.vu6)(
                  updateEvent,
                  (eventDataWith = eventKeyIndex),
                  eventDataWith,
                );
                (0, eightThirtyNr.vu6)(mutateValue, (l = o), l);
                var oKey = setEventKey[o];
                if (eventKeyIndex > oKey.length) {
                  eventKeyIndex = 0;
                }
                keyValuePair.A.emit("fzvxek", oKey[eventKeyIndex]);
              };
              let m;
              return [
                c,
                applyAnonFunc,
                incrementByFo,
                eventDataWith,
                o,
                l,
                () => {
                  (0, eightThirtyNr.vu6)(updateValueAt, (o = 0), o);
                },
                () => {
                  (0, eightThirtyNr.vu6)(
                    updateValueAt,
                    (o = setEventKey.length - 1),
                    o,
                  );
                },
                () => {
                  (0, eightThirtyNr.vu6)(
                    updateValueAt,
                    (o = Math.max(o - 1, 0)),
                    o,
                  );
                },
                () => {
                  (0, eightThirtyNr.vu6)(
                    updateValueAt,
                    (o = Math.min(o + 1, setEventKey.length - 1)),
                    o,
                  );
                },
                _updateEvent,
                (_______eventData) => {
                  _______eventData.preventDefault();
                  m = -1;
                  let triggeredDomE = _______eventData.target;
                  let userEventInfo = 3;
                  while (triggeredDomE != null && userEventInfo--) {
                    if (triggeredDomE.hasAttribute("data-index")) {
                      m = +triggeredDomE.getAttribute("data-index");
                    }
                    triggeredDomE = triggeredDomE.parentElement;
                  }
                  if (c && applyAnonFunc) {
                    c.update();
                  }
                  n(1, (applyAnonFunc = true));
                },
                (setupSingleOn) => {
                  n(1, (applyAnonFunc = false));
                },
                () => {
                  n(1, (applyAnonFunc = false));
                  let filteredItem = setEventKey[setEventKey.length - 1];
                  if (filteredItem.length === 9) {
                    setEventKey.push((filteredItem = []));
                  }
                  filteredItem.push(keyValuePairs.nG);
                  (0, eightThirtyNr.vu6)(
                    updateValueAt,
                    (o = setEventKey.length - 1),
                    o,
                  );
                  modifyObject();
                  n(2, (incrementByFo = !incrementByFo));
                },
                async () => {
                  var _jQueryWrapper;
                  n(1, (applyAnonFunc = false));
                  if (m !== -1) {
                    if (
                      (
                        await updateValue().fire({
                          text: "Are you sure you would like to remove this skin?",
                          confirmButtonText: "Yes",
                          cancelButtonText: "No",
                          showCancelButton: true,
                        })
                      ).isConfirmed
                    ) {
                      let eventKeyUpd = setEventKey[o];
                      if (setEventKey.length === 1 && eventKeyUpd.length <= 1) {
                        m = -1;
                      } else {
                        if (eventKeyUpd.length <= 1) {
                          setEventKey.splice(o, 1);
                          (0, eightThirtyNr.vu6)(updateValueAt, --o, o);
                          eventKeyUpd = setEventKey[o];
                        } else {
                          setEventKey[o].splice(m, 1);
                        }
                        if (
                          eventDataWith >
                          (_jQueryWrapper = eventKeyUpd.length - 1)
                        ) {
                          (0, eightThirtyNr.vu6)(
                            updateEvent,
                            (eventDataWith = _jQueryWrapper),
                            eventDataWith,
                          );
                        }
                        modifyObject();
                        m = -1;
                        n(2, (incrementByFo = !incrementByFo));
                      }
                    } else {
                      m = -1;
                    }
                  }
                },
                function (userAPI) {
                  n(1, (applyAnonFunc = userAPI));
                },
                function (__________________________anonymousUser) {
                  eightThirtyNr.Dnk[
                    __________________________anonymousUser ? "unshift" : "push"
                  ](() => {
                    n(0, (c = __________________________anonymousUser));
                  });
                },
                (__________anonymousFunc) =>
                  _updateEvent(__________anonymousFunc),
              ];
            },
            function GlobalContext(__getUserData) {
              let _undefined;
              let sessionData;
              let ___________________index;
              let n;
              let ____counter;
              let ____________________index;
              let l;
              let c;
              let _dataIndex;
              let _____________________index = __getUserData[4];
              let sessionUser;
              let _currentIndex;
              let _actionIndex;
              let _userIdIndex;
              let f;
              let eventCount;
              let userDataCount;
              let __eventCounter;
              let sessionCount = __getUserData[3];
              let _arrayLength;
              let __currentIndex;
              let dataItems;
              function getUserDataBy(___getUserData) {
                __getUserData[15](___getUserData);
              }
              var sequence = {
                $$slots: {
                  default: [getValueOrSet],
                },
                $$scope: {
                  ctx: __getUserData,
                },
              };
              if (__getUserData[1] !== undefined) {
                sequence.show = __getUserData[1];
              }
              _undefined = new o.A({
                props: sequence,
              });
              eightThirtyNr.Dnk.push(() =>
                (0, eightThirtyNr.oIE)(_undefined, "show", getUserDataBy),
              );
              __getUserData[16](_undefined);
              let sessionDataNd = m(__getUserData);
              let ______________________index = PasswordSecre(__getUserData);
              return {
                c() {
                  (0, eightThirtyNr.N0i)(_undefined.$$.fragment);
                  ___________________index = (0, eightThirtyNr.xem)();
                  n = (0, eightThirtyNr.ND4)("div");
                  ____counter = (0, eightThirtyNr.ND4)("div");
                  ____________________index = (0, eightThirtyNr.ND4)("i");
                  l = (0, eightThirtyNr.xem)();
                  c = (0, eightThirtyNr.ND4)("i");
                  _dataIndex = (0, eightThirtyNr.xem)();
                  sessionDataNd.c();
                  sessionUser = (0, eightThirtyNr.xem)();
                  _currentIndex = (0, eightThirtyNr.ND4)("i");
                  _actionIndex = (0, eightThirtyNr.xem)();
                  _userIdIndex = (0, eightThirtyNr.ND4)("i");
                  f = (0, eightThirtyNr.xem)();
                  eventCount = (0, eightThirtyNr.ND4)("i");
                  userDataCount = (0, eightThirtyNr.xem)();
                  __eventCounter = (0, eightThirtyNr.ND4)("div");
                  ______________________index.c();
                  (0, eightThirtyNr.CFu)(
                    ____________________index,
                    "class",
                    "selector fas fa-arrow-left s-15tzznm",
                  );
                  (0, eightThirtyNr.CFu)(
                    ____________________index,
                    "data-tip",
                    "Seek to the previous skin page",
                  );
                  (0, eightThirtyNr.CFu)(
                    c,
                    "class",
                    "selector fas fa-fast-backward s-15tzznm",
                  );
                  (0, eightThirtyNr.CFu)(
                    c,
                    "data-tip",
                    "Seek to the first skin page",
                  );
                  (0, eightThirtyNr.CFu)(
                    _currentIndex,
                    "class",
                    "selector fas fa-plus s-15tzznm",
                  );
                  (0, eightThirtyNr.CFu)(
                    _currentIndex,
                    "data-tip",
                    "Add a new skin",
                  );
                  (0, eightThirtyNr.CFu)(
                    _userIdIndex,
                    "class",
                    "selector fas fa-fast-forward s-15tzznm",
                  );
                  (0, eightThirtyNr.CFu)(
                    _userIdIndex,
                    "data-tip",
                    "Seek to the last skin page",
                  );
                  (0, eightThirtyNr.CFu)(
                    eventCount,
                    "class",
                    "selector fas fa-arrow-right s-15tzznm",
                  );
                  (0, eightThirtyNr.CFu)(
                    eventCount,
                    "data-tip",
                    "Seek to the next skin page",
                  );
                  (0, eightThirtyNr.CFu)(
                    ____counter,
                    "class",
                    "selectors s-15tzznm",
                  );
                  (0, eightThirtyNr.CFu)(
                    __eventCounter,
                    "class",
                    "skins s-15tzznm",
                  );
                  (0, eightThirtyNr.CFu)(
                    n,
                    "class",
                    "skin-container s-15tzznm",
                  );
                },
                m(currencyPlace, currencyData) {
                  (0, eightThirtyNr.wSR)(
                    _undefined,
                    currencyPlace,
                    currencyData,
                  );
                  (0, eightThirtyNr.Yry)(
                    currencyPlace,
                    ___________________index,
                    currencyData,
                  );
                  (0, eightThirtyNr.Yry)(currencyPlace, n, currencyData);
                  (0, eightThirtyNr.BCw)(n, ____counter);
                  (0, eightThirtyNr.BCw)(
                    ____counter,
                    ____________________index,
                  );
                  (0, eightThirtyNr.BCw)(____counter, l);
                  (0, eightThirtyNr.BCw)(____counter, c);
                  (0, eightThirtyNr.BCw)(____counter, _dataIndex);
                  sessionDataNd.m(____counter, null);
                  (0, eightThirtyNr.BCw)(____counter, sessionUser);
                  (0, eightThirtyNr.BCw)(____counter, _currentIndex);
                  (0, eightThirtyNr.BCw)(____counter, _actionIndex);
                  (0, eightThirtyNr.BCw)(____counter, _userIdIndex);
                  (0, eightThirtyNr.BCw)(____counter, f);
                  (0, eightThirtyNr.BCw)(____counter, eventCount);
                  (0, eightThirtyNr.BCw)(n, userDataCount);
                  (0, eightThirtyNr.BCw)(n, __eventCounter);
                  ______________________index.m(__eventCounter, null);
                  _arrayLength = true;
                  if (!__currentIndex) {
                    dataItems = [
                      (0, eightThirtyNr.KTR)(
                        ____________________index,
                        "click",
                        __getUserData[8],
                      ),
                      (0, eightThirtyNr.KTR)(c, "click", __getUserData[6]),
                      (0, eightThirtyNr.KTR)(
                        _currentIndex,
                        "click",
                        __getUserData[13],
                      ),
                      (0, eightThirtyNr.KTR)(
                        _userIdIndex,
                        "click",
                        __getUserData[7],
                      ),
                      (0, eightThirtyNr.KTR)(
                        eventCount,
                        "click",
                        __getUserData[9],
                      ),
                      (0, eightThirtyNr.KTR)(
                        __eventCounter,
                        "contextmenu",
                        __getUserData[11],
                      ),
                      (0, eightThirtyNr.KTR)(
                        __eventCounter,
                        "click",
                        __getUserData[12],
                      ),
                    ];
                    __currentIndex = true;
                  }
                },
                p(sessionStore, [NaturalLogE]) {
                  var bitContext = {};
                  if (NaturalLogE & 8388608) {
                    bitContext.$$scope = {
                      dirty: NaturalLogE,
                      ctx: sessionStore,
                    };
                  }
                  if (!sessionData && NaturalLogE & 2) {
                    sessionData = true;
                    bitContext.show = sessionStore[1];
                    (0, eightThirtyNr.Jk$)(() => (sessionData = false));
                  }
                  _undefined.$set(bitContext);
                  if (
                    NaturalLogE & 16 &&
                    (0, eightThirtyNr.jXN)(
                      _____________________index,
                      (_____________________index = sessionStore[4]),
                    )
                  ) {
                    sessionDataNd.d(1);
                    (sessionDataNd = m(sessionStore)).c();
                    sessionDataNd.m(____counter, sessionUser);
                  } else {
                    sessionDataNd.p(sessionStore, NaturalLogE);
                  }
                  if (
                    NaturalLogE & 8 &&
                    (0, eightThirtyNr.jXN)(
                      sessionCount,
                      (sessionCount = sessionStore[3]),
                    )
                  ) {
                    ______________________index.d(1);
                    (______________________index =
                      PasswordSecre(sessionStore)).c();
                    ______________________index.m(__eventCounter, null);
                  } else {
                    ______________________index.p(sessionStore, NaturalLogE);
                  }
                },
                i(initEvent) {
                  if (!_arrayLength) {
                    (0, eightThirtyNr.c7F)(_undefined.$$.fragment, initEvent);
                    _arrayLength = true;
                  }
                },
                o(calculateSums) {
                  (0, eightThirtyNr.Tn8)(_undefined.$$.fragment, calculateSums);
                  _arrayLength = false;
                },
                d(__dataHandler) {
                  if (__dataHandler) {
                    (0, eightThirtyNr.YoD)(___________________index);
                    (0, eightThirtyNr.YoD)(n);
                  }
                  __getUserData[16](null);
                  (0, eightThirtyNr.Hbl)(_undefined, __dataHandler);
                  sessionDataNd.d(__dataHandler);
                  ______________________index.d(__dataHandler);
                  ((__currentIndex = false), eightThirtyNr.oOW)(dataItems);
                },
              };
            },
            eightThirtyNr.jXN,
            {},
          );
        }
      }
      let minifyCode = ThreeFortyTwo;
    },
    87399(_transformData, handleAnonymy, transformWith) {
      transformWith.d(handleAnonymy, {
        A: () => c,
      });
      var numericValue = transformWith(83839);
      transformWith(60821);
      var transformed60 = transformWith(43228);
      var _anonymizeData = transformWith(48481);
      var n = transformWith(49053);
      var executeAnonCB = transformWith(8167);
      var o = transformWith(64127);
      function r() {
        let unusedPlaceHo;
        let ___processUser;
        let anonUserArray;
        let o;
        let _createAnonObj;
        let l;
        let c;
        let initializedAn;
        let _uninitialized;
        let userDataOut;
        let ___________________________anonymousUser;
        o = new transformed60.A({});
        l = new _anonymizeData.A({});
        initializedAn = new executeAnonCB.A({});
        userDataOut = new n.A({});
        return {
          c() {
            unusedPlaceHo = (0, numericValue.ND4)("div");
            ___processUser = (0, numericValue.ND4)("div");
            anonUserArray = (0, numericValue.xem)();
            (0, numericValue.N0i)(o.$$.fragment);
            _createAnonObj = (0, numericValue.xem)();
            (0, numericValue.N0i)(l.$$.fragment);
            c = (0, numericValue.xem)();
            (0, numericValue.N0i)(initializedAn.$$.fragment);
            _uninitialized = (0, numericValue.xem)();
            (0, numericValue.N0i)(userDataOut.$$.fragment);
            (0, numericValue.CFu)(___processUser, "class", "bar s-wwp2cq");
            (0, numericValue.CFu)(
              unusedPlaceHo,
              "class",
              "main-container s-wwp2cq",
            );
          },
          m(eventManager, _______________________index) {
            (0, numericValue.Yry)(
              eventManager,
              unusedPlaceHo,
              _______________________index,
            );
            (0, numericValue.BCw)(unusedPlaceHo, ___processUser);
            (0, numericValue.BCw)(unusedPlaceHo, anonUserArray);
            (0, numericValue.wSR)(o, unusedPlaceHo, null);
            (0, numericValue.BCw)(unusedPlaceHo, _createAnonObj);
            (0, numericValue.wSR)(l, unusedPlaceHo, null);
            (0, numericValue.BCw)(unusedPlaceHo, c);
            (0, numericValue.wSR)(initializedAn, unusedPlaceHo, null);
            (0, numericValue.BCw)(unusedPlaceHo, _uninitialized);
            (0, numericValue.wSR)(userDataOut, unusedPlaceHo, null);
            ___________________________anonymousUser = true;
          },
          i(matchAndAnaly) {
            if (!___________________________anonymousUser) {
              (0, numericValue.c7F)(o.$$.fragment, matchAndAnaly);
              (0, numericValue.c7F)(l.$$.fragment, matchAndAnaly);
              (0, numericValue.c7F)(initializedAn.$$.fragment, matchAndAnaly);
              (0, numericValue.c7F)(userDataOut.$$.fragment, matchAndAnaly);
              ___________________________anonymousUser = true;
            }
          },
          o(_numericValue) {
            (0, numericValue.Tn8)(o.$$.fragment, _numericValue);
            (0, numericValue.Tn8)(l.$$.fragment, _numericValue);
            (0, numericValue.Tn8)(initializedAn.$$.fragment, _numericValue);
            (0, numericValue.Tn8)(userDataOut.$$.fragment, _numericValue);
            ___________________________anonymousUser = false;
          },
          d(isEvenNumber) {
            if (isEvenNumber) {
              (0, numericValue.YoD)(unusedPlaceHo);
            }
            (0, numericValue.Hbl)(o);
            (0, numericValue.Hbl)(l);
            (0, numericValue.Hbl)(initializedAn);
            (0, numericValue.Hbl)(userDataOut);
          },
        };
      }
      class l extends numericValue.r7T {
        constructor(__numericValue) {
          super();
          (0, numericValue.TsN)(
            this,
            __numericValue,
            function handleError(
              ____________________________anonymousUser,
              ___isAnonymous,
              ____isAnonymous,
            ) {
              let _____counter;
              (0, numericValue.j0C)(
                ____________________________anonymousUser,
                o.z,
                (closure) => ____isAnonymous(0, (_____counter = closure)),
              );
              return [_____counter];
            },
            function anonymousDash(________eventData) {
              let numComparison;
              let eventDataItem;
              let eventItem = ________eventData[0] && r();
              return {
                c() {
                  if (eventItem) {
                    eventItem.c();
                  }
                  numComparison = (0, numericValue.Iex)();
                },
                m(____handleEvent, interaction) {
                  if (eventItem) {
                    eventItem.m(____handleEvent, interaction);
                  }
                  (0, numericValue.Yry)(
                    ____handleEvent,
                    numComparison,
                    interaction,
                  );
                  eventDataItem = true;
                },
                p(___dataHandler, [eConstant]) {
                  if (___dataHandler[0]) {
                    if (eventItem) {
                      if (eConstant & 1) {
                        (0, numericValue.c7F)(eventItem, 1);
                      }
                    } else {
                      (eventItem = r()).c();
                      (0, numericValue.c7F)(eventItem, 1);
                      eventItem.m(numComparison.parentNode, numComparison);
                    }
                  } else if (eventItem) {
                    (0, numericValue.V44)();
                    (0, numericValue.Tn8)(eventItem, 1, 1, () => {
                      eventItem = null;
                    });
                    (0, numericValue.GYV)();
                  }
                },
                i(isEventItemIn) {
                  if (!eventDataItem) {
                    (0, numericValue.c7F)(eventItem);
                    eventDataItem = true;
                  }
                },
                o(_transformAndF) {
                  (0, numericValue.Tn8)(eventItem);
                  eventDataItem = false;
                },
                d(callbackOrNmr) {
                  if (callbackOrNmr) {
                    (0, numericValue.YoD)(numComparison);
                  }
                  if (eventItem) {
                    eventItem.d(callbackOrNmr);
                  }
                },
              };
            },
            numericValue.jXN,
            {},
          );
        }
      }
      let c = l;
    },
    48481(processAnonym, actionable, tally) {
      tally.d(actionable, {
        A: () => aHandler,
      });
      var tallyCount = tally(83839);
      tally(60821);
      var totalCount = tally(95669);
      var actionCount = tally(54603);
      var n = tally(7009);
      var _actionCounter = tally(92854);
      var o = tally(59745);
      var r = tally(97486);
      var l = tally(20990);
      var c = tally(36742);
      var countMatching = tally(33656);
      var addToTallying = tally(78225);
      var eventCountTra = tally(83529);
      var countTallies = tally(95195);
      var callCounter = tally(8125);
      function m(___________anonymousFunc) {
        let tallyCounts;
        let totalElements;
        let tempCount;
        let forLoopIndex;
        let n;
        let elementCount;
        let o;
        let r;
        return {
          c() {
            tallyCounts = (0, tallyCount.ND4)("button");
            totalElements = (0, tallyCount.ND4)("i");
            tempCount = (0, tallyCount.xem)();
            forLoopIndex = (0, tallyCount.Qq7)(___________anonymousFunc[4]);
            (0, tallyCount.CFu)(
              totalElements,
              "class",
              "fas fa-play play-icon s-1l4aaom",
            );
            (0, tallyCount.CFu)(tallyCounts, "class", "play button s-1l4aaom");
            tallyCounts.disabled = n = !___________anonymousFunc[3];
            (0, tallyCount.CFu)(
              tallyCounts,
              "data-tip",
              (elementCount =
                "Spawn as your " +
                (___________anonymousFunc[1] == 0 ? "first" : "second") +
                " tab"),
            );
          },
          m(_____initializeAnd, n) {
            (0, tallyCount.Yry)(_____initializeAnd, tallyCounts, n);
            (0, tallyCount.BCw)(tallyCounts, totalElements);
            (0, tallyCount.BCw)(tallyCounts, tempCount);
            (0, tallyCount.BCw)(tallyCounts, forLoopIndex);
            if (!o) {
              r = (0, tallyCount.KTR)(tallyCounts, "click", _accumulator);
              o = true;
            }
          },
          p(frameCounter, shouldUpdateT) {
            if (shouldUpdateT & 16) {
              (0, tallyCount.iQh)(forLoopIndex, frameCounter[4]);
            }
            if (shouldUpdateT & 8 && n !== (n = !frameCounter[3])) {
              tallyCounts.disabled = n;
            }
            if (
              shouldUpdateT & 2 &&
              elementCount !==
                (elementCount =
                  "Spawn as your " +
                  (frameCounter[1] == 0 ? "first" : "second") +
                  " tab")
            ) {
              (0, tallyCount.CFu)(tallyCounts, "data-tip", elementCount);
            }
          },
          d(countIfExists) {
            if (countIfExists) {
              (0, tallyCount.YoD)(tallyCounts);
            }
            o = false;
            r();
          },
        };
      }
      function clickTally(AnonymousUser) {
        let buttonCount;
        let classNameOccu;
        let strHelper;
        let buttonIndex;
        let n;
        let countButtonCl;
        return {
          c() {
            buttonCount = (0, tallyCount.ND4)("button");
            classNameOccu = (0, tallyCount.ND4)("i");
            (0, tallyCount.CFu)(classNameOccu, "class", "fas fa-search");
            (0, tallyCount.CFu)(
              buttonCount,
              "class",
              "spectate button s-1l4aaom",
            );
            buttonCount.disabled = strHelper = !AnonymousUser[5];
            (0, tallyCount.CFu)(
              buttonCount,
              "data-tip",
              (buttonIndex =
                "Spectate as your " +
                (AnonymousUser[1] == 0 ? "first" : "second") +
                " tab"),
            );
          },
          m(querySelector, applyClicksTo) {
            (0, tallyCount.Yry)(querySelector, buttonCount, applyClicksTo);
            (0, tallyCount.BCw)(buttonCount, classNameOccu);
            if (!n) {
              countButtonCl = (0, tallyCount.KTR)(
                buttonCount,
                "click",
                countOccurr,
              );
              n = true;
            }
          },
          p(gameSettings, SpectatingAnd) {
            if (
              SpectatingAnd & 32 &&
              strHelper !== (strHelper = !gameSettings[5])
            ) {
              buttonCount.disabled = strHelper;
            }
            if (
              SpectatingAnd & 2 &&
              buttonIndex !==
                (buttonIndex =
                  "Spectate as your " +
                  (gameSettings[1] == 0 ? "first" : "second") +
                  " tab")
            ) {
              (0, tallyCount.CFu)(buttonCount, "data-tip", buttonIndex);
            }
          },
          d(checkButtonTt) {
            if (checkButtonTt) {
              (0, tallyCount.YoD)(buttonCount);
            }
            n = false;
            countButtonCl();
          },
        };
      }
      function p(_____isAnonymous) {
        let _________________placeholder;
        let appInitialIsS;
        let _______loopCounter;
        let iterationCtrl;
        let n;
        let ______counter;
        let o;
        let r;
        let l;
        let c;
        let ________loopCounter;
        let _____iteration;
        let loopInitial;
        let _____initializeApp;
        let f;
        let ______isAnonymous;
        let elementLoop;
        let assignAnonym;
        let _iterationTrak;
        let __anonymousId;
        let _________loopCounter;
        let _fetchData;
        let initCounter;
        let temperature = _____isAnonymous[3];
        let __________loopCounter;
        let isFirstRun = _____isAnonymous[5];
        let ___________loopCounter;
        let productTotal;
        let __result = m(_____isAnonymous);
        let _______isAnonymous = clickTally(_____isAnonymous);
        return {
          c() {
            _________________placeholder = (0, tallyCount.ND4)("div");
            appInitialIsS = (0, tallyCount.ND4)("i");
            _______loopCounter = (0, tallyCount.xem)();
            iterationCtrl = (0, tallyCount.ND4)("div");
            n = (0, tallyCount.ND4)("img");
            o = (0, tallyCount.xem)();
            r = (0, tallyCount.ND4)("div");
            l = (0, tallyCount.xem)();
            c = (0, tallyCount.ND4)("i");
            ________loopCounter = (0, tallyCount.xem)();
            _____iteration = (0, tallyCount.ND4)("div");
            loopInitial = (0, tallyCount.ND4)("div");
            _____initializeApp = (0, tallyCount.ND4)("input");
            ______isAnonymous = (0, tallyCount.xem)();
            elementLoop = (0, tallyCount.ND4)("input");
            _iterationTrak = (0, tallyCount.xem)();
            __anonymousId = (0, tallyCount.ND4)("input");
            _fetchData = (0, tallyCount.xem)();
            initCounter = (0, tallyCount.ND4)("div");
            __result.c();
            __________loopCounter = (0, tallyCount.xem)();
            _______isAnonymous.c();
            (0, tallyCount.CFu)(
              appInitialIsS,
              "class",
              "selector fas fa-caret-left s-1l4aaom",
            );
            (0, tallyCount.CFu)(
              appInitialIsS,
              "data-tip",
              "Seek to your previous tab",
            );
            (0, tallyCount.CFu)(n, "alt", "Skin preview");
            if (
              !(0, tallyCount.mq_)(
                n.src,
                (______counter =
                  _____isAnonymous[2].skins[
                    eventCountTra.A.dlo("linkTabSkins")
                      ? 0
                      : _____isAnonymous[1]
                  ] || countMatching.nG),
              )
            ) {
              (0, tallyCount.CFu)(n, "src", ______counter);
            }
            (0, tallyCount.CFu)(n, "class", "skin s-1l4aaom");
            (0, tallyCount.CFu)(r, "class", "skin background s-1l4aaom");
            (0, tallyCount.CFu)(iterationCtrl, "class", "preview s-1l4aaom");
            (0, tallyCount.CFu)(
              c,
              "class",
              "selector fas fa-caret-right s-1l4aaom",
            );
            (0, tallyCount.CFu)(c, "data-tip", "Seek to your next tab");
            (0, tallyCount.CFu)(
              _________________placeholder,
              "class",
              "preview-wrapper s-1l4aaom",
            );
            (0, tallyCount.CFu)(
              _____initializeApp,
              "class",
              "name-input s-1l4aaom",
            );
            (0, tallyCount.CFu)(_____initializeApp, "type", "text");
            (0, tallyCount.CFu)(_____initializeApp, "spellcheck", "false");
            (0, tallyCount.CFu)(_____initializeApp, "placeholder", "Nickname");
            (0, tallyCount.CFu)(_____initializeApp, "maxlength", "15");
            _____initializeApp.value = f =
              _____isAnonymous[2].names[
                eventCountTra.A.dlo("linkTabNames") ? 0 : _____isAnonymous[1]
              ];
            (0, tallyCount.CFu)(elementLoop, "class", "tag-input s-1l4aaom");
            (0, tallyCount.CFu)(elementLoop, "type", "text");
            (0, tallyCount.CFu)(elementLoop, "spellcheck", "false");
            (0, tallyCount.CFu)(elementLoop, "placeholder", "Tag");
            (0, tallyCount.CFu)(elementLoop, "maxlength", "15");
            (0, tallyCount.CFu)(
              elementLoop,
              "data-tip",
              "You only see and chat with players in same tag",
            );
            elementLoop.value = assignAnonym =
              _____isAnonymous[2].tags[
                eventCountTra.A.dlo("linkTabTags") ? 0 : _____isAnonymous[1]
              ];
            (0, tallyCount.CFu)(loopInitial, "class", "inputs s-1l4aaom");
            (0, tallyCount.CFu)(__anonymousId, "class", "skin-input");
            (0, tallyCount.CFu)(__anonymousId, "type", "text");
            (0, tallyCount.CFu)(__anonymousId, "spellcheck", "false");
            (0, tallyCount.CFu)(
              __anonymousId,
              "placeholder",
              "https://skins.vanis.io/s/",
            );
            (0, tallyCount.CFu)(__anonymousId, "maxlength", "31");
            __anonymousId.value = _________loopCounter =
              _____isAnonymous[2].skins[
                eventCountTra.A.dlo("linkTabSkins") ? 0 : _____isAnonymous[1]
              ];
            (0, tallyCount.CFu)(initCounter, "class", "buttons s-1l4aaom");
            (0, tallyCount.CFu)(
              _____iteration,
              "class",
              "player-data s-1l4aaom",
            );
          },
          m(executeWithTh, formatItem) {
            (0, tallyCount.Yry)(
              executeWithTh,
              _________________placeholder,
              formatItem,
            );
            (0, tallyCount.BCw)(_________________placeholder, appInitialIsS);
            (0, tallyCount.BCw)(
              _________________placeholder,
              _______loopCounter,
            );
            (0, tallyCount.BCw)(_________________placeholder, iterationCtrl);
            (0, tallyCount.BCw)(iterationCtrl, n);
            (0, tallyCount.BCw)(iterationCtrl, o);
            (0, tallyCount.BCw)(iterationCtrl, r);
            (0, tallyCount.BCw)(_________________placeholder, l);
            (0, tallyCount.BCw)(_________________placeholder, c);
            (0, tallyCount.Yry)(executeWithTh, ________loopCounter, formatItem);
            (0, tallyCount.Yry)(executeWithTh, _____iteration, formatItem);
            (0, tallyCount.BCw)(_____iteration, loopInitial);
            (0, tallyCount.BCw)(loopInitial, _____initializeApp);
            (0, tallyCount.BCw)(loopInitial, ______isAnonymous);
            (0, tallyCount.BCw)(loopInitial, elementLoop);
            (0, tallyCount.BCw)(_____iteration, _iterationTrak);
            (0, tallyCount.BCw)(_____iteration, __anonymousId);
            (0, tallyCount.BCw)(_____iteration, _fetchData);
            (0, tallyCount.BCw)(_____iteration, initCounter);
            __result.m(initCounter, null);
            (0, tallyCount.BCw)(initCounter, __________loopCounter);
            _______isAnonymous.m(initCounter, null);
            if (!___________loopCounter) {
              productTotal = [
                (0, tallyCount.KTR)(
                  appInitialIsS,
                  "click",
                  _____isAnonymous[11],
                ),
                (0, tallyCount.KTR)(n, "error", processAction),
                (0, tallyCount.KTR)(c, "click", _____isAnonymous[12]),
                (0, tallyCount.KTR)(
                  _____initializeApp,
                  "change",
                  processUserAn,
                ),
                (0, tallyCount.KTR)(elementLoop, "change", sumTally),
                (0, tallyCount.KTR)(__anonymousId, "change", _countOccurr),
              ];
              ___________loopCounter = true;
            }
          },
          p(_____________anonymousData, applySkinBonj) {
            if (
              applySkinBonj & 6 &&
              !(0, tallyCount.mq_)(
                n.src,
                (______counter =
                  _____________anonymousData[2].skins[
                    eventCountTra.A.dlo("linkTabSkins")
                      ? 0
                      : _____________anonymousData[1]
                  ] || countMatching.nG),
              )
            ) {
              (0, tallyCount.CFu)(n, "src", ______counter);
            }
            if (
              applySkinBonj & 6 &&
              f !==
                (f =
                  _____________anonymousData[2].names[
                    eventCountTra.A.dlo("linkTabNames")
                      ? 0
                      : _____________anonymousData[1]
                  ]) &&
              _____initializeApp.value !== f
            ) {
              _____initializeApp.value = f;
            }
            if (
              applySkinBonj & 6 &&
              assignAnonym !==
                (assignAnonym =
                  _____________anonymousData[2].tags[
                    eventCountTra.A.dlo("linkTabTags")
                      ? 0
                      : _____________anonymousData[1]
                  ]) &&
              elementLoop.value !== assignAnonym
            ) {
              elementLoop.value = assignAnonym;
            }
            if (
              applySkinBonj & 6 &&
              _________loopCounter !==
                (_________loopCounter =
                  _____________anonymousData[2].skins[
                    eventCountTra.A.dlo("linkTabSkins")
                      ? 0
                      : _____________anonymousData[1]
                  ]) &&
              __anonymousId.value !== _________loopCounter
            ) {
              __anonymousId.value = _________loopCounter;
            }
            if (
              applySkinBonj & 8 &&
              (0, tallyCount.jXN)(
                temperature,
                (temperature = _____________anonymousData[3]),
              )
            ) {
              __result.d(1);
              (__result = m(_____________anonymousData)).c();
              __result.m(initCounter, __________loopCounter);
            } else {
              __result.p(_____________anonymousData, applySkinBonj);
            }
            if (
              applySkinBonj & 32 &&
              (0, tallyCount.jXN)(
                isFirstRun,
                (isFirstRun = _____________anonymousData[5]),
              )
            ) {
              _______isAnonymous.d(1);
              (_______isAnonymous = clickTally(_____________anonymousData)).c();
              _______isAnonymous.m(initCounter, null);
            } else {
              _______isAnonymous.p(_____________anonymousData, applySkinBonj);
            }
          },
          d(trackProgress) {
            if (trackProgress) {
              (0, tallyCount.YoD)(_________________placeholder);
              (0, tallyCount.YoD)(________loopCounter);
              (0, tallyCount.YoD)(_____iteration);
            }
            __result.d(trackProgress);
            _______isAnonymous.d(trackProgress);
            ((___________loopCounter = false), tallyCount.oOW)(productTotal);
          },
        };
      }
      let f = (0, actionCount.T5)(eventCountTra.A.inputs);
      f.subscribe(() => eventCountTra.A.buj());
      callCounter.pB.set(
        "Play as tab " + (1 + (0, actionCount.Jt)(callCounter.xR)),
      );
      eventCountTra.A.on("zrVIMz", (__currentItem, tabCount) => {
        if (__currentItem === "activeTabContext") {
          callCounter.xR.set(tabCount);
          tabCount = (0, countMatching.Rr)(
            1 + (0, actionCount.Jt)(callCounter.xR),
          );
          if ((0, actionCount.Jt)(callCounter.pB) != tabCount) {
            callCounter.pB.set(tabCount);
          }
        } else if (
          __currentItem === "linkTabNames" ||
          __currentItem === "linkTabSkins" ||
          __currentItem === "linkTabTags"
        ) {
          f.set((0, actionCount.Jt)(f));
        }
      });
      let _processAnonym = () => {
        callCounter.xR.set((0, actionCount.Jt)(callCounter.xR) == 0 ? 1 : 0);
        eventCountTra.A.set(
          "activeTabContext",
          (0, actionCount.Jt)(callCounter.xR),
        );
      };
      let _accumulator = () => {
        var safeUnbind;
        if ((0, actionCount.Jt)(callCounter.qC) && !countTallies.A.FLt.Fcz) {
          if (countTallies.A.running && countTallies.A.FLt.connected) {
            if (!countTallies.A.ycZ(addToTallying.A.yNT)) {
              countTallies.A.kmM.Rhi();
            }
            countTallies.A.FQe(false);
          } else if (addToTallying.A.selectedServer) {
            countTallies.A.emit("tPqeFj", (safeUnbind = {}));
            if (!safeUnbind.wait) {
              countTallies.A.FLt.Fcz = true;
            }
          }
        }
      };
      let countOccurr = () => {
        var _document;
        if ((0, actionCount.Jt)(callCounter.m7) && !countTallies.A.FLt.zGd) {
          if (countTallies.A.running && countTallies.A.FLt.connected) {
            countTallies.A.kmM.Xiy();
            countTallies.A.FQe(false);
          } else if (addToTallying.A.selectedServer) {
            countTallies.A.emit("tPqeFj", (_document = {}));
            if (!_document.wait) {
              countTallies.A.FLt.zGd = true;
            }
          }
        }
      };
      countTallies.A.on("fzvxek", (skinUpdate) => {
        f.update((updateSkinOnH) => {
          updateSkinOnH.skins[
            eventCountTra.A.get("linkTabSkins")
              ? 0
              : (0, actionCount.Jt)(callCounter.xR)
          ] = skinUpdate;
          return updateSkinOnH;
        });
      });
      let processUserAn = (__dataSource) => {
        let targetValue = __dataSource.target;
        f.update((getNameById) => {
          getNameById.names[
            eventCountTra.A.get("linkTabNames")
              ? 0
              : (0, actionCount.Jt)(callCounter.xR)
          ] = targetValue.value;
          return getNameById;
        });
      };
      let _countOccurr = (updateCountTa) => {
        updateCountTa = updateCountTa.target;
        countTallies.A.emit("fzvxek", updateCountTa.value);
        eventCountTra.A.buj();
      };
      let sumTally = (___self) => {
        let tagValue = ___self.target;
        f.update((coinToss) => {
          coinToss.tags[
            eventCountTra.A.get("linkTabTags")
              ? 0
              : (0, actionCount.Jt)(callCounter.xR)
          ] = tagValue.value;
          return coinToss;
        });
      };
      let processAction = (setSrc) => {
        setSrc.currentTarget.src = countMatching.nG;
      };
      class TallyCounter extends tallyCount.r7T {
        constructor(selfReferring) {
          super();
          (0, tallyCount.TsN)(
            this,
            selfReferring,
            function _isEmpty(
              ________isAnonymous,
              readUserData,
              checkHasUsers,
            ) {
              let __userCount;
              let n;
              let activeUsers;
              let o;
              let r;
              let l;
              (0, tallyCount.j0C)(________isAnonymous, c.E, (___userCount) =>
                checkHasUsers(0, (__userCount = ___userCount)),
              );
              (0, tallyCount.j0C)(
                ________isAnonymous,
                callCounter.xR,
                (____userCount) => checkHasUsers(1, (n = ____userCount)),
              );
              (0, tallyCount.j0C)(________isAnonymous, f, (hasAtLeastTwo) =>
                checkHasUsers(2, (activeUsers = hasAtLeastTwo)),
              );
              (0, tallyCount.j0C)(
                ________isAnonymous,
                callCounter.qC,
                (usersPlaceh) => checkHasUsers(3, (o = usersPlaceh)),
              );
              (0, tallyCount.j0C)(
                ________isAnonymous,
                callCounter.pB,
                (hasFourUsers) => checkHasUsers(4, (r = hasFourUsers)),
              );
              (0, tallyCount.j0C)(
                ________isAnonymous,
                callCounter.m7,
                (_____userCount) => checkHasUsers(5, (l = _____userCount)),
              );
              return [
                __userCount,
                n,
                activeUsers,
                o,
                r,
                l,
                () =>
                  (0, tallyCount.vu6)(
                    c.E,
                    (__userCount = c.b.Settings),
                    __userCount,
                  ),
                () =>
                  (0, tallyCount.vu6)(
                    c.E,
                    (__userCount = c.b.Themes),
                    __userCount,
                  ),
                () =>
                  (0, tallyCount.vu6)(
                    c.E,
                    (__userCount = c.b.Inputs),
                    __userCount,
                  ),
                () =>
                  (0, tallyCount.vu6)(
                    c.E,
                    (__userCount = c.b.Replays),
                    __userCount,
                  ),
                () =>
                  (0, tallyCount.vu6)(
                    c.E,
                    (__userCount = c.b.Leaderboard),
                    __userCount,
                  ),
                () => _processAnonym(),
                () => _processAnonym(),
              ];
            },
            function anonymousCall(getUserInfo) {
              let tempVariable;
              let _______counter;
              let c;
              let ____________anonymousFunc;
              let _______________userData;
              let ________________userData;
              let _________________userData;
              let onFetchUser;
              let m;
              let callCount;
              let f;
              let _mapObjectKeys;
              let _anonymousCall;
              let _callCount;
              let __iterationTrak;
              let executionTrak;
              let invocationTra;
              let userInfoFetch;
              let iterationTrav;
              let ___iterationTrak;
              let _callCounter;
              let ____________________fetchUserData;
              let __________________placeholder;
              let wrapGetUser = getUserInfo[1];
              let __________________userData;
              let invokeGetUser;
              let __callCounter;
              let _filteredData;
              let __updateUser;
              _anonymousCall = new l.A({});
              __iterationTrak = new r.A({});
              invocationTra = new o.A({});
              iterationTrav = new _actionCounter.A({});
              _callCounter = new n.A({});
              let countCalls = p(getUserInfo);
              return {
                c() {
                  tempVariable = (0, tallyCount.ND4)("div");
                  _______counter = (0, tallyCount.ND4)("div");
                  c = (0, tallyCount.ND4)("i");
                  ____________anonymousFunc = (0, tallyCount.xem)();
                  _______________userData = (0, tallyCount.ND4)("i");
                  ________________userData = (0, tallyCount.xem)();
                  _________________userData = (0, tallyCount.ND4)("i");
                  onFetchUser = (0, tallyCount.xem)();
                  m = (0, tallyCount.ND4)("i");
                  callCount = (0, tallyCount.xem)();
                  f = (0, tallyCount.ND4)("i");
                  _mapObjectKeys = (0, tallyCount.xem)();
                  (0, tallyCount.N0i)(_anonymousCall.$$.fragment);
                  _callCount = (0, tallyCount.xem)();
                  (0, tallyCount.N0i)(__iterationTrak.$$.fragment);
                  executionTrak = (0, tallyCount.xem)();
                  (0, tallyCount.N0i)(invocationTra.$$.fragment);
                  userInfoFetch = (0, tallyCount.xem)();
                  (0, tallyCount.N0i)(iterationTrav.$$.fragment);
                  ___iterationTrak = (0, tallyCount.xem)();
                  (0, tallyCount.N0i)(_callCounter.$$.fragment);
                  ____________________fetchUserData = (0, tallyCount.xem)();
                  __________________placeholder = (0, tallyCount.ND4)("div");
                  countCalls.c();
                  (0, tallyCount.CFu)(c, "data-tip", "Settings");
                  (0, tallyCount.CFu)(c, "class", "tab fal fa-cog");
                  (0, tallyCount.CFu)(
                    _______________userData,
                    "data-tip",
                    "Theming",
                  );
                  (0, tallyCount.CFu)(
                    _______________userData,
                    "class",
                    "tab fal fa-palette",
                  );
                  (0, tallyCount.CFu)(
                    _________________userData,
                    "data-tip",
                    "Hotkeys",
                  );
                  (0, tallyCount.CFu)(
                    _________________userData,
                    "class",
                    "tab fal fa-keyboard",
                  );
                  (0, tallyCount.CFu)(m, "data-tip", "Replays");
                  (0, tallyCount.CFu)(m, "class", "tab fal fa-video");
                  (0, tallyCount.CFu)(f, "data-tip", "Player leaderboards");
                  (0, tallyCount.CFu)(f, "class", "tab fal fa-clipboard-list");
                  (0, tallyCount.CFu)(_______counter, "class", "tabs");
                  (0, tallyCount.CFu)(
                    __________________placeholder,
                    "class",
                    "inner-container s-1l4aaom",
                  );
                  (0, tallyCount.CFu)(
                    tempVariable,
                    "class",
                    "player-container container menu-tab s-1l4aaom",
                  );
                },
                m(__accumulator, argumentTrail) {
                  (0, tallyCount.Yry)(
                    __accumulator,
                    tempVariable,
                    argumentTrail,
                  );
                  (0, tallyCount.BCw)(tempVariable, _______counter);
                  (0, tallyCount.BCw)(_______counter, c);
                  (0, tallyCount.BCw)(
                    _______counter,
                    ____________anonymousFunc,
                  );
                  (0, tallyCount.BCw)(_______counter, _______________userData);
                  (0, tallyCount.BCw)(_______counter, ________________userData);
                  (0, tallyCount.BCw)(
                    _______counter,
                    _________________userData,
                  );
                  (0, tallyCount.BCw)(_______counter, onFetchUser);
                  (0, tallyCount.BCw)(_______counter, m);
                  (0, tallyCount.BCw)(_______counter, callCount);
                  (0, tallyCount.BCw)(_______counter, f);
                  (0, tallyCount.BCw)(tempVariable, _mapObjectKeys);
                  (0, tallyCount.wSR)(_anonymousCall, tempVariable, null);
                  (0, tallyCount.BCw)(tempVariable, _callCount);
                  (0, tallyCount.wSR)(__iterationTrak, tempVariable, null);
                  (0, tallyCount.BCw)(tempVariable, executionTrak);
                  (0, tallyCount.wSR)(invocationTra, tempVariable, null);
                  (0, tallyCount.BCw)(tempVariable, userInfoFetch);
                  (0, tallyCount.wSR)(iterationTrav, tempVariable, null);
                  (0, tallyCount.BCw)(tempVariable, ___iterationTrak);
                  (0, tallyCount.wSR)(_callCounter, tempVariable, null);
                  (0, tallyCount.BCw)(
                    tempVariable,
                    ____________________fetchUserData,
                  );
                  (0, tallyCount.BCw)(
                    tempVariable,
                    __________________placeholder,
                  );
                  countCalls.m(__________________placeholder, null);
                  __callCounter = true;
                  if (!_filteredData) {
                    __updateUser = [
                      (0, tallyCount.KTR)(c, "click", getUserInfo[6]),
                      (0, tallyCount.KTR)(
                        _______________userData,
                        "click",
                        getUserInfo[7],
                      ),
                      (0, tallyCount.KTR)(
                        _________________userData,
                        "click",
                        getUserInfo[8],
                      ),
                      (0, tallyCount.KTR)(m, "click", getUserInfo[9]),
                      (0, tallyCount.KTR)(f, "click", getUserInfo[10]),
                    ];
                    _filteredData = true;
                  }
                },
                p(____getUserData, [MathE]) {
                  if (
                    MathE & 2 &&
                    (0, tallyCount.jXN)(
                      wrapGetUser,
                      (wrapGetUser = ____getUserData[1]),
                    )
                  ) {
                    countCalls.d(1);
                    (countCalls = p(____getUserData)).c();
                    countCalls.m(__________________placeholder, null);
                  } else {
                    countCalls.p(____getUserData, MathE);
                  }
                },
                i(_____________anonymousFunc) {
                  if (!__callCounter) {
                    (0, tallyCount.c7F)(
                      _anonymousCall.$$.fragment,
                      _____________anonymousFunc,
                    );
                    (0, tallyCount.c7F)(
                      __iterationTrak.$$.fragment,
                      _____________anonymousFunc,
                    );
                    (0, tallyCount.c7F)(
                      invocationTra.$$.fragment,
                      _____________anonymousFunc,
                    );
                    (0, tallyCount.c7F)(
                      iterationTrav.$$.fragment,
                      _____________anonymousFunc,
                    );
                    (0, tallyCount.c7F)(
                      _callCounter.$$.fragment,
                      _____________anonymousFunc,
                    );
                    if (_____________anonymousFunc) {
                      (0, tallyCount.Dti)(() => {
                        if (__callCounter) {
                          if (invokeGetUser) {
                            invokeGetUser.end(1);
                          }
                          (__________________userData = (0, tallyCount.b7f)(
                            tempVariable,
                            totalCount._J,
                            {
                              y: -150,
                              duration: 500,
                            },
                          )).start();
                        }
                      });
                    }
                    __callCounter = true;
                  }
                },
                o(_validateEmail) {
                  (0, tallyCount.Tn8)(
                    _anonymousCall.$$.fragment,
                    _validateEmail,
                  );
                  (0, tallyCount.Tn8)(
                    __iterationTrak.$$.fragment,
                    _validateEmail,
                  );
                  (0, tallyCount.Tn8)(
                    invocationTra.$$.fragment,
                    _validateEmail,
                  );
                  (0, tallyCount.Tn8)(
                    iterationTrav.$$.fragment,
                    _validateEmail,
                  );
                  (0, tallyCount.Tn8)(_callCounter.$$.fragment, _validateEmail);
                  if (__________________userData) {
                    __________________userData.invalidate();
                  }
                  if (_validateEmail) {
                    invokeGetUser = (0, tallyCount.CUz)(
                      tempVariable,
                      totalCount._J,
                      {
                        y: -150,
                        duration: 500,
                      },
                    );
                  }
                  __callCounter = false;
                },
                d(isEmptyArg) {
                  if (isEmptyArg) {
                    (0, tallyCount.YoD)(tempVariable);
                  }
                  (0, tallyCount.Hbl)(_anonymousCall);
                  (0, tallyCount.Hbl)(__iterationTrak);
                  (0, tallyCount.Hbl)(invocationTra);
                  (0, tallyCount.Hbl)(iterationTrav);
                  (0, tallyCount.Hbl)(_callCounter);
                  countCalls.d(isEmptyArg);
                  if (isEmptyArg && invokeGetUser) {
                    invokeGetUser.end();
                  }
                  ((_filteredData = false), tallyCount.oOW)(__updateUser);
                },
              };
            },
            tallyCount.jXN,
            {},
          );
        }
      }
      let aHandler = TallyCounter;
    },
    43228(_modifyObject, associateF, associateWith) {
      associateWith.d(associateF, {
        A: () => _associateWith,
      });
      var calculateOrDo = associateWith(83839);
      associateWith(60821);
      var resultFrom956 = associateWith(95669);
      var ____processData = associateWith(61416);
      function n(
        _____userId,
        sessionFetchE,
        _____________________fetchUserData,
      ) {
        (_____userId = _____userId.slice())[10] =
          sessionFetchE[_____________________fetchUserData];
        _____userId[11] = sessionFetchE;
        _____userId[12] = _____________________fetchUserData;
        return _____userId;
      }
      function copyAndSwap(minifiedAnonV, userResult, ___fetchedUser) {
        (minifiedAnonV = minifiedAnonV.slice())[13] =
          userResult[___fetchedUser];
        minifiedAnonV[15] = ___fetchedUser;
        return minifiedAnonV;
      }
      function o(customRequest, tempUserData, remoteServer) {
        (customRequest = customRequest.slice())[13] =
          tempUserData[remoteServer];
        customRequest[15] = remoteServer;
        return customRequest;
      }
      function r(FetchManager, moduleEvent, _useTabBoth) {
        (FetchManager = FetchManager.slice())[17] = moduleEvent[_useTabBoth];
        return FetchManager;
      }
      function l(_____getUserData) {
        let divisionCreer;
        let total;
        let fetchUserInfo;
        function getSpecificPB() {
          return _____getUserData[5](_____getUserData[17]);
        }
        return {
          c() {
            (divisionCreer = (0, calculateOrDo.ND4)("div")).textContent =
              _____getUserData[17] + " ";
            (0, calculateOrDo.CFu)(divisionCreer, "class", "tab");
            (0, calculateOrDo.goL)(
              divisionCreer,
              "active",
              _____getUserData[17] === _____getUserData[0],
            );
          },
          m(_____processData, n) {
            (0, calculateOrDo.Yry)(_____processData, divisionCreer, n);
            if (!total) {
              fetchUserInfo = (0, calculateOrDo.KTR)(
                divisionCreer,
                "click",
                getSpecificPB,
              );
              total = true;
            }
          },
          p(___________________userData, compareUserPs) {
            _____getUserData = ___________________userData;
            if (compareUserPs & 1) {
              (0, calculateOrDo.goL)(
                divisionCreer,
                "active",
                _____getUserData[17] === _____getUserData[0],
              );
            }
          },
          d(__shouldExecute) {
            if (__shouldExecute) {
              (0, calculateOrDo.YoD)(divisionCreer);
            }
            total = false;
            fetchUserInfo();
          },
        };
      }
      function c(______getUserData) {
        let unusedInitial;
        let __temporaryData;
        let ____fetchedUser;
        let isUserVisible = ______getUserData[1].visible;
        let n;
        let userIdCount;
        let o;
        let r;
        let l = determineAndC(______getUserData);
        let c = ______getUserData[1].visible && rangeCalcul(______getUserData);
        return {
          c() {
            unusedInitial = (0, calculateOrDo.ND4)("div");
            (__temporaryData = (0, calculateOrDo.ND4)("div")).innerHTML =
              '<i class="fal fa-trophy"></i> <span style="padding-left:5px;">Tournaments</span>';
            ____fetchedUser = (0, calculateOrDo.xem)();
            l.c();
            n = (0, calculateOrDo.xem)();
            if (c) {
              c.c();
            }
            userIdCount = (0, calculateOrDo.Iex)();
            (0, calculateOrDo.CFu)(
              __temporaryData,
              "class",
              "server-name s-1oys449",
            );
            (0, calculateOrDo.CFu)(
              unusedInitial,
              "class",
              "server-item s-1oys449",
            );
          },
          m(operand, __handler) {
            (0, calculateOrDo.Yry)(operand, unusedInitial, __handler);
            (0, calculateOrDo.BCw)(unusedInitial, __temporaryData);
            (0, calculateOrDo.BCw)(unusedInitial, ____fetchedUser);
            l.m(unusedInitial, null);
            (0, calculateOrDo.Yry)(operand, n, __handler);
            if (c) {
              c.m(operand, __handler);
            }
            (0, calculateOrDo.Yry)(operand, userIdCount, __handler);
            if (!o) {
              r = (0, calculateOrDo.KTR)(
                unusedInitial,
                "click",
                ______getUserData[6],
              );
              o = true;
            }
          },
          p(validateAndRe, __userProfile) {
            if (
              __userProfile & 2 &&
              (0, calculateOrDo.jXN)(
                isUserVisible,
                (isUserVisible = validateAndRe[1].visible),
              )
            ) {
              l.d(1);
              (l = determineAndC(validateAndRe)).c();
              l.m(unusedInitial, null);
            } else {
              l.p(validateAndRe, __userProfile);
            }
            if (validateAndRe[1].visible) {
              if (c) {
                c.p(validateAndRe, __userProfile);
              } else {
                (c = rangeCalcul(validateAndRe)).c();
                c.m(userIdCount.parentNode, userIdCount);
              }
            } else if (c) {
              c.d(1);
              c = null;
            }
          },
          d(evaluateAndCb) {
            if (evaluateAndCb) {
              (0, calculateOrDo.YoD)(unusedInitial);
              (0, calculateOrDo.YoD)(n);
              (0, calculateOrDo.YoD)(userIdCount);
            }
            l.d(evaluateAndCb);
            if (c) {
              c.d(evaluateAndCb);
            }
            o = false;
            r();
          },
        };
      }
      function determineAndC(__processInput) {
        let ___processInput;
        let calculationOr;
        return {
          c() {
            ___processInput = (0, calculateOrDo.ND4)("i");
            (0, calculateOrDo.CFu)(
              ___processInput,
              "class",
              (calculationOr =
                "fal fa-chevron-" +
                (__processInput[1].visible ? "up" : "down")),
            );
          },
          m(processor, __inputData) {
            (0, calculateOrDo.Yry)(processor, ___processInput, __inputData);
          },
          p(toggleCalculO, toggleIconAnd) {
            if (
              toggleIconAnd & 2 &&
              calculationOr !==
                (calculationOr =
                  "fal fa-chevron-" +
                  (toggleCalculO[1].visible ? "up" : "down"))
            ) {
              (0, calculateOrDo.CFu)(___processInput, "class", calculationOr);
            }
          },
          d(__isEmpty) {
            if (__isEmpty) {
              (0, calculateOrDo.YoD)(___processInput);
            }
          },
        };
      }
      function rangeCalcul(______________________fetchUserData) {
        let _______________________fetchUserData;
        let _userResult = (0, calculateOrDo.rv_)(
          ______________________fetchUserData[1].wPu,
        );
        let executeUserOp = [];
        for (
          let userResultCn = 0;
          userResultCn < _userResult.length;
          userResultCn += 1
        ) {
          executeUserOp[userResultCn] = checkLiveUpdT(
            o(______________________fetchUserData, _userResult, userResultCn),
          );
        }
        return {
          c() {
            for (
              let executeLoop = 0;
              executeLoop < executeUserOp.length;
              executeLoop += 1
            ) {
              executeUserOp[executeLoop].c();
            }
            _______________________fetchUserData = (0, calculateOrDo.Iex)();
          },
          m(
            _____________________________anonymousUser,
            ______________________________anonymousUser,
          ) {
            for (
              let executableOp = 0;
              executableOp < executeUserOp.length;
              executableOp += 1
            ) {
              if (executeUserOp[executableOp]) {
                executeUserOp[executableOp].m(
                  _____________________________anonymousUser,
                  ______________________________anonymousUser,
                );
              }
            }
            (0, calculateOrDo.Yry)(
              _____________________________anonymousUser,
              _______________________fetchUserData,
              ______________________________anonymousUser,
            );
          },
          p(__getContextual, _iterationIdx) {
            if (_iterationIdx & 6) {
              _userResult = (0, calculateOrDo.rv_)(__getContextual[1].wPu);
              let n;
              for (n = 0; n < _userResult.length; n += 1) {
                var calculated = o(__getContextual, _userResult, n);
                if (executeUserOp[n]) {
                  executeUserOp[n].p(calculated, _iterationIdx);
                } else {
                  executeUserOp[n] = checkLiveUpdT(calculated);
                  executeUserOp[n].c();
                  executeUserOp[n].m(
                    _______________________fetchUserData.parentNode,
                    _______________________fetchUserData,
                  );
                }
              }
              for (; n < executeUserOp.length; n += 1) {
                executeUserOp[n].d(1);
              }
              executeUserOp.length = _userResult.length;
            }
          },
          d(fetchUserOrDo) {
            if (fetchUserOrDo) {
              (0, calculateOrDo.YoD)(_______________________fetchUserData);
            }
            (0, calculateOrDo.ppq)(executeUserOp, fetchUserOrDo);
          },
        };
      }
      function updateLiveDiv() {
        let __fetchData;
        return {
          c() {
            (__fetchData = (0, calculateOrDo.ND4)("div")).innerHTML =
              '<span class="live-marker">LIVE</span>';
            (0, calculateOrDo.CFu)(__fetchData, "class", "live-marker-wrapper");
          },
          m(_______getUserData, UserData) {
            (0, calculateOrDo.Yry)(_______getUserData, __fetchData, UserData);
          },
          d(triggerDataOr) {
            if (triggerDataOr) {
              (0, calculateOrDo.YoD)(__fetchData);
            }
          },
        };
      }
      function checkLiveUpdT(renderArray) {
        let _errorFlag;
        let iterationTime;
        let __updateElement;
        let _renderArray;
        let n;
        let _errorObject;
        let o;
        let r = renderArray[13].live && updateLiveDiv();
        function l() {
          return renderArray[7](renderArray[13]);
        }
        return {
          c() {
            _errorFlag = (0, calculateOrDo.ND4)("div");
            (iterationTime = (0, calculateOrDo.ND4)("div")).textContent =
              "" + renderArray[13].name;
            __updateElement = (0, calculateOrDo.xem)();
            if (r) {
              r.c();
            }
            _renderArray = (0, calculateOrDo.xem)();
            (0, calculateOrDo.CFu)(
              iterationTime,
              "class",
              "server-name s-1oys449",
            );
            (0, calculateOrDo.CFu)(
              _errorFlag,
              "data-key",
              (n = renderArray[15]),
            );
            (0, calculateOrDo.CFu)(
              _errorFlag,
              "class",
              "server-item s-1oys449",
            );
            (0, calculateOrDo.goL)(
              _errorFlag,
              "active",
              renderArray[13].url === renderArray[2],
            );
          },
          m(nData, n) {
            (0, calculateOrDo.Yry)(nData, _errorFlag, n);
            (0, calculateOrDo.BCw)(_errorFlag, iterationTime);
            (0, calculateOrDo.BCw)(_errorFlag, __updateElement);
            if (r) {
              r.m(_errorFlag, null);
            }
            (0, calculateOrDo.BCw)(_errorFlag, _renderArray);
            if (!_errorObject) {
              o = (0, calculateOrDo.KTR)(_errorFlag, "click", l);
              _errorObject = true;
            }
          },
          p(updateQueue, _updateQueue) {
            if ((renderArray = updateQueue)[13].live) {
              if (!r) {
                (r = updateLiveDiv()).c();
                r.m(_errorFlag, _renderArray);
              }
            } else if (r) {
              r.d(1);
              r = null;
            }
            if (_updateQueue & 6) {
              (0, calculateOrDo.goL)(
                _errorFlag,
                "active",
                renderArray[13].url === renderArray[2],
              );
            }
          },
          d(checkVariable) {
            if (checkVariable) {
              (0, calculateOrDo.YoD)(_errorFlag);
            }
            if (r) {
              r.d();
            }
            _errorObject = false;
            o();
          },
        };
      }
      function checkAndRetr(_asyncUserData) {
        let _eventFlag;
        let __asyncUserData;
        let isTenthItemTr;
        let hasTenthItemM = _asyncUserData[10].visible;
        let n;
        let isTenthItemIn =
          _asyncUserData[10].visible ||
          _asyncUserData[10].wPu.some(_asyncUserData[4]);
        let o;
        let r;
        let l;
        let c = m(_asyncUserData);
        function userDataToFul() {
          return _asyncUserData[8](
            _asyncUserData[10],
            _asyncUserData[11],
            _asyncUserData[12],
          );
        }
        let checkUserData = isTenthItemIn && getWPuFromObj(_asyncUserData);
        return {
          c() {
            _eventFlag = (0, calculateOrDo.ND4)("div");
            (__asyncUserData = (0, calculateOrDo.ND4)("div")).textContent =
              "" + _asyncUserData[10].name;
            isTenthItemTr = (0, calculateOrDo.xem)();
            c.c();
            n = (0, calculateOrDo.xem)();
            if (checkUserData) {
              checkUserData.c();
            }
            o = (0, calculateOrDo.Iex)();
            (0, calculateOrDo.CFu)(
              __asyncUserData,
              "class",
              "server-name s-1oys449",
            );
            (0, calculateOrDo.CFu)(
              _eventFlag,
              "class",
              "server-item s-1oys449",
            );
          },
          m(___anonymousId, ________________________index) {
            (0, calculateOrDo.Yry)(
              ___anonymousId,
              _eventFlag,
              ________________________index,
            );
            (0, calculateOrDo.BCw)(_eventFlag, __asyncUserData);
            (0, calculateOrDo.BCw)(_eventFlag, isTenthItemTr);
            c.m(_eventFlag, null);
            (0, calculateOrDo.Yry)(
              ___anonymousId,
              n,
              ________________________index,
            );
            if (checkUserData) {
              checkUserData.m(___anonymousId, ________________________index);
            }
            (0, calculateOrDo.Yry)(
              ___anonymousId,
              o,
              ________________________index,
            );
            if (!r) {
              l = (0, calculateOrDo.KTR)(_eventFlag, "click", userDataToFul);
              r = true;
            }
          },
          p(asyncData, processTenth) {
            _asyncUserData = asyncData;
            if (
              processTenth & 8 &&
              (0, calculateOrDo.jXN)(
                hasTenthItemM,
                (hasTenthItemM = _asyncUserData[10].visible),
              )
            ) {
              c.d(1);
              (c = m(_asyncUserData)).c();
              c.m(_eventFlag, null);
            } else {
              c.p(_asyncUserData, processTenth);
            }
            if (
              (isTenthItemIn =
                processTenth & 12
                  ? _asyncUserData[10].visible ||
                    _asyncUserData[10].wPu.some(_asyncUserData[4])
                  : isTenthItemIn)
            ) {
              if (checkUserData) {
                checkUserData.p(_asyncUserData, processTenth);
              } else {
                (checkUserData = getWPuFromObj(_asyncUserData)).c();
                checkUserData.m(o.parentNode, o);
              }
            } else if (checkUserData) {
              checkUserData.d(1);
              checkUserData = null;
            }
          },
          d(_conditionally) {
            if (_conditionally) {
              (0, calculateOrDo.YoD)(_eventFlag);
              (0, calculateOrDo.YoD)(n);
              (0, calculateOrDo.YoD)(o);
            }
            c.d(_conditionally);
            if (checkUserData) {
              checkUserData.d(_conditionally);
            }
            r = false;
            l();
          },
        };
      }
      function m(createEventBt) {
        let ___result;
        let prefix;
        return {
          c() {
            ___result = (0, calculateOrDo.ND4)("i");
            (0, calculateOrDo.CFu)(
              ___result,
              "class",
              (prefix =
                "fal fa-chevron-" +
                (createEventBt[10].visible ? "up" : "down")),
            );
          },
          m(externalCall, ___________________placeholder) {
            (0, calculateOrDo.Yry)(
              externalCall,
              ___result,
              ___________________placeholder,
            );
          },
          p(cachedElement, shouldApplySt) {
            if (
              shouldApplySt & 8 &&
              prefix !==
                (prefix =
                  "fal fa-chevron-" +
                  (cachedElement[10].visible ? "up" : "down"))
            ) {
              (0, calculateOrDo.CFu)(___result, "class", prefix);
            }
          },
          d(hasValue) {
            if (hasValue) {
              (0, calculateOrDo.YoD)(___result);
            }
          },
        };
      }
      function getWPuFromObj(settingsTogg) {
        let _error;
        let settingsValue = (0, calculateOrDo.rv_)(settingsTogg[10].wPu);
        let calculationEt = [];
        for (
          let ________counter = 0;
          ________counter < settingsValue.length;
          ________counter += 1
        ) {
          calculationEt[________counter] = checkEventAvl(
            copyAndSwap(settingsTogg, settingsValue, ________counter),
          );
        }
        return {
          c() {
            for (
              let _________________________index = 0;
              _________________________index < calculationEt.length;
              _________________________index += 1
            ) {
              calculationEt[_________________________index].c();
            }
            _error = (0, calculateOrDo.Iex)();
          },
          m(applyMethodTo, target) {
            for (
              let _arrayIndex = 0;
              _arrayIndex < calculationEt.length;
              _arrayIndex += 1
            ) {
              if (calculationEt[_arrayIndex]) {
                calculationEt[_arrayIndex].m(applyMethodTo, target);
              }
            }
            (0, calculateOrDo.Yry)(applyMethodTo, _error, target);
          },
          p(processItem, _________counter) {
            if (_________counter & 12) {
              settingsValue = (0, calculateOrDo.rv_)(processItem[10].wPu);
              let n;
              for (n = 0; n < settingsValue.length; n += 1) {
                var o = copyAndSwap(processItem, settingsValue, n);
                if (calculationEt[n]) {
                  calculationEt[n].p(o, _________counter);
                } else {
                  calculationEt[n] = checkEventAvl(o);
                  calculationEt[n].c();
                  calculationEt[n].m(_error.parentNode, _error);
                }
              }
              for (; n < calculationEt.length; n += 1) {
                calculationEt[n].d(1);
              }
              calculationEt.length = settingsValue.length;
            }
          },
          d(_calculateOrDo) {
            if (_calculateOrDo) {
              (0, calculateOrDo.YoD)(_error);
            }
            (0, calculateOrDo.ppq)(calculationEt, _calculateOrDo);
          },
        };
      }
      function p(________________________fetchUserData) {
        let getPlayerData;
        return {
          c() {
            (getPlayerData = (0, calculateOrDo.ND4)("div")).textContent =
              ________________________fetchUserData[13].players +
              " / " +
              ________________________fetchUserData[13].slots;
            (0, calculateOrDo.CFu)(
              getPlayerData,
              "class",
              "slot-badge s-1oys449",
            );
          },
          m(_selector, playerData) {
            (0, calculateOrDo.Yry)(_selector, getPlayerData, playerData);
          },
          p: calculateOrDo.lQ1,
          d(handleAction) {
            if (handleAction) {
              (0, calculateOrDo.YoD)(getPlayerData);
            }
          },
        };
      }
      function f(currencyDollR) {
        let nd4Calculated;
        return {
          c() {
            (nd4Calculated = (0, calculateOrDo.ND4)("div")).innerHTML =
              '<span class="live-marker">LIVE</span>';
            (0, calculateOrDo.CFu)(
              nd4Calculated,
              "class",
              "live-marker-wrapper",
            );
          },
          m(Globals, _transformer) {
            (0, calculateOrDo.Yry)(Globals, nd4Calculated, _transformer);
          },
          p: calculateOrDo.lQ1,
          d(checkTruthy) {
            if (checkTruthy) {
              (0, calculateOrDo.YoD)(nd4Calculated);
            }
          },
        };
      }
      function checkEventAvl(____userDataFetch) {
        let __eventEmitter;
        let _eventTime;
        let _shouldTrigger;
        let ___currentIndex;
        let n;
        let ____currentIndex;
        let o;
        function r(ConfigManager) {
          if (ConfigManager[13].live) {
            return f;
          } else {
            return p;
          }
        }
        let l = r(____userDataFetch);
        let c = l(____userDataFetch);
        function fetchSpecific() {
          return ____userDataFetch[9](____userDataFetch[13]);
        }
        return {
          c() {
            __eventEmitter = (0, calculateOrDo.ND4)("div");
            (_eventTime = (0, calculateOrDo.ND4)("div")).textContent =
              "" + ____userDataFetch[13].name;
            _shouldTrigger = (0, calculateOrDo.xem)();
            c.c();
            ___currentIndex = (0, calculateOrDo.xem)();
            (0, calculateOrDo.CFu)(
              _eventTime,
              "class",
              "server-name s-1oys449",
            );
            (0, calculateOrDo.CFu)(
              __eventEmitter,
              "data-key",
              (n = ____userDataFetch[15]),
            );
            (0, calculateOrDo.CFu)(
              __eventEmitter,
              "class",
              "server-item s-1oys449",
            );
            (0, calculateOrDo.goL)(
              __eventEmitter,
              "active",
              ____userDataFetch[13].url === ____userDataFetch[2],
            );
          },
          m(contextObject, n) {
            (0, calculateOrDo.Yry)(contextObject, __eventEmitter, n);
            (0, calculateOrDo.BCw)(__eventEmitter, _eventTime);
            (0, calculateOrDo.BCw)(__eventEmitter, _shouldTrigger);
            c.m(__eventEmitter, null);
            (0, calculateOrDo.BCw)(__eventEmitter, ___currentIndex);
            if (!____currentIndex) {
              o = (0, calculateOrDo.KTR)(
                __eventEmitter,
                "click",
                fetchSpecific,
              );
              ____currentIndex = true;
            }
          },
          p(_________________________fetchUserData, userDetails) {
            if (
              l ===
                (l = r(
                  (____userDataFetch = _________________________fetchUserData),
                )) &&
              c
            ) {
              c.p(____userDataFetch, userDetails);
            } else {
              c.d(1);
              if ((c = l(____userDataFetch))) {
                c.c();
                c.m(__eventEmitter, ___currentIndex);
              }
            }
            if (userDetails & 12) {
              (0, calculateOrDo.goL)(
                __eventEmitter,
                "active",
                ____userDataFetch[13].url === ____userDataFetch[2],
              );
            }
          },
          d(executeCalcul) {
            if (executeCalcul) {
              (0, calculateOrDo.YoD)(__eventEmitter);
            }
            c.d();
            ____currentIndex = false;
            o();
          },
        };
      }
      function _documentReady(__________________________fetchUserData) {
        let __error;
        let dataAtIndex10 =
          __________________________fetchUserData[10].wPu.length > 0 &&
          checkAndRetr(__________________________fetchUserData);
        return {
          c() {
            if (dataAtIndex10) {
              dataAtIndex10.c();
            }
            __error = (0, calculateOrDo.Iex)();
          },
          m(_processTenth, processDataFn) {
            if (dataAtIndex10) {
              dataAtIndex10.m(_processTenth, processDataFn);
            }
            (0, calculateOrDo.Yry)(_processTenth, __error, processDataFn);
          },
          p(jQueryObject, processDataAt) {
            if (jQueryObject[10].wPu.length > 0) {
              if (dataAtIndex10) {
                dataAtIndex10.p(jQueryObject, processDataAt);
              } else {
                (dataAtIndex10 = checkAndRetr(jQueryObject)).c();
                dataAtIndex10.m(__error.parentNode, __error);
              }
            } else if (dataAtIndex10) {
              dataAtIndex10.d(1);
              dataAtIndex10 = null;
            }
          },
          d(hasValueAndIn) {
            if (hasValueAndIn) {
              (0, calculateOrDo.YoD)(__error);
            }
            if (dataAtIndex10) {
              dataAtIndex10.d(hasValueAndIn);
            }
          },
        };
      }
      function processByIndx(enableAntiAli) {
        let evt;
        let index3Result = (0, calculateOrDo.rv_)(enableAntiAli[3]);
        let processedDocP = [];
        for (
          let _indexCounter = 0;
          _indexCounter < index3Result.length;
          _indexCounter += 1
        ) {
          processedDocP[_indexCounter] = _documentReady(
            n(enableAntiAli, index3Result, _indexCounter),
          );
        }
        return {
          c() {
            for (
              let __________counter = 0;
              __________counter < processedDocP.length;
              __________counter += 1
            ) {
              processedDocP[__________counter].c();
            }
            evt = (0, calculateOrDo.Iex)();
          },
          m(_currencyCode, updateCurrenc) {
            for (
              let currencyCodeC = 0;
              currencyCodeC < processedDocP.length;
              currencyCodeC += 1
            ) {
              if (processedDocP[currencyCodeC]) {
                processedDocP[currencyCodeC].m(_currencyCode, updateCurrenc);
              }
            }
            (0, calculateOrDo.Yry)(_currencyCode, evt, updateCurrenc);
          },
          p(processDocPs, documentPart) {
            if (documentPart & 12) {
              index3Result = (0, calculateOrDo.rv_)(processDocPs[3]);
              let __indexCounter;
              for (
                __indexCounter = 0;
                __indexCounter < index3Result.length;
                __indexCounter += 1
              ) {
                var o = n(processDocPs, index3Result, __indexCounter);
                if (processedDocP[__indexCounter]) {
                  processedDocP[__indexCounter].p(o, documentPart);
                } else {
                  processedDocP[__indexCounter] = _documentReady(o);
                  processedDocP[__indexCounter].c();
                  processedDocP[__indexCounter].m(evt.parentNode, evt);
                }
              }
              for (
                ;
                __indexCounter < processedDocP.length;
                __indexCounter += 1
              ) {
                processedDocP[__indexCounter].d(1);
              }
              processedDocP.length = index3Result.length;
            }
          },
          d(checkExistsOr) {
            if (checkExistsOr) {
              (0, calculateOrDo.YoD)(evt);
            }
            (0, calculateOrDo.ppq)(processedDocP, checkExistsOr);
          },
        };
      }
      function processSecond(___________________________fetchUserData) {
        let userInfoArray;
        let secondElement;
        let secondUser;
        let _userCounter;
        let n;
        let ___________counter;
        let o;
        let r = ___________________________fetchUserData[2];
        let l;
        let _____userDataFetch;
        let extractSecond =
          ___________________________fetchUserData[1] != null &&
          ___________________________fetchUserData[1].wPu.length > 0 &&
          c(___________________________fetchUserData);
        let ____________________userData = processByIndx(
          ___________________________fetchUserData,
        );
        return {
          c() {
            userInfoArray = (0, calculateOrDo.ND4)("div");
            secondElement = (0, calculateOrDo.ND4)("div");
            (secondUser = (0, calculateOrDo.ND4)("div")).innerHTML =
              '<i class="fal fa-user"></i> <span style="padding-left:5px;">Lobbies</span>';
            _userCounter = (0, calculateOrDo.xem)();
            n = (0, calculateOrDo.ND4)("i");
            ___________counter = (0, calculateOrDo.xem)();
            if (extractSecond) {
              extractSecond.c();
            }
            o = (0, calculateOrDo.xem)();
            ____________________userData.c();
            (0, calculateOrDo.CFu)(
              secondUser,
              "class",
              "server-name s-1oys449",
            );
            (0, calculateOrDo.CFu)(n, "class", "fal fa-chevron-down");
            (0, calculateOrDo.CFu)(
              secondElement,
              "class",
              "server-item s-1oys449",
            );
            (0, calculateOrDo.CFu)(
              userInfoArray,
              "class",
              "server-list s-1oys449",
            );
          },
          m(_userInfo, r) {
            (0, calculateOrDo.Yry)(_userInfo, userInfoArray, r);
            (0, calculateOrDo.BCw)(userInfoArray, secondElement);
            (0, calculateOrDo.BCw)(secondElement, secondUser);
            (0, calculateOrDo.BCw)(secondElement, _userCounter);
            (0, calculateOrDo.BCw)(secondElement, n);
            (0, calculateOrDo.BCw)(userInfoArray, ___________counter);
            if (extractSecond) {
              extractSecond.m(userInfoArray, null);
            }
            (0, calculateOrDo.BCw)(userInfoArray, o);
            ____________________userData.m(userInfoArray, null);
            if (!l) {
              _____userDataFetch = (0, calculateOrDo.KTR)(
                secondElement,
                "click",
                _actionHandler,
              );
              l = true;
            }
          },
          p(textNodeAnaly, performPostOp) {
            if (textNodeAnaly[1] != null && textNodeAnaly[1].wPu.length > 0) {
              if (extractSecond) {
                extractSecond.p(textNodeAnaly, performPostOp);
              } else {
                (extractSecond = c(textNodeAnaly)).c();
                extractSecond.m(userInfoArray, o);
              }
            } else if (extractSecond) {
              extractSecond.d(1);
              extractSecond = null;
            }
            if (
              performPostOp & 4 &&
              (0, calculateOrDo.jXN)(r, (r = textNodeAnaly[2]))
            ) {
              ____________________userData.d(1);
              (____________________userData = processByIndx(textNodeAnaly)).c();
              ____________________userData.m(userInfoArray, null);
            } else {
              ____________________userData.p(textNodeAnaly, performPostOp);
            }
          },
          d(shouldProcess) {
            if (shouldProcess) {
              (0, calculateOrDo.YoD)(userInfoArray);
            }
            if (extractSecond) {
              extractSecond.d();
            }
            ____________________userData.d(shouldProcess);
            l = false;
            _____userDataFetch();
          },
        };
      }
      let _actionHandler = () => {};
      class externalCalc extends calculateOrDo.r7T {
        constructor(dataProcessor) {
          super();
          (0, calculateOrDo.TsN)(
            this,
            dataProcessor,
            function hasPermission(
              ____________________________fetchUserData,
              ______userDataFetch,
              _____________________________fetchUserData,
            ) {
              let n;
              let isUserDataFul;
              let o;
              let r;
              (0, calculateOrDo.j0C)(
                ____________________________fetchUserData,
                ____processData.aK,
                (______userId) =>
                  _____________________________fetchUserData(
                    0,
                    (n = ______userId),
                  ),
              );
              (0, calculateOrDo.j0C)(
                ____________________________fetchUserData,
                ____processData.AQ,
                (______________________________fetchUserData) =>
                  _____________________________fetchUserData(
                    1,
                    (isUserDataFul =
                      ______________________________fetchUserData),
                  ),
              );
              (0, calculateOrDo.j0C)(
                ____________________________fetchUserData,
                ____processData.BA,
                (_____________________userData) =>
                  _____________________________fetchUserData(
                    2,
                    (o = _____________________userData),
                  ),
              );
              (0, calculateOrDo.j0C)(
                ____________________________fetchUserData,
                ____processData.oo,
                (userDataArg) =>
                  _____________________________fetchUserData(
                    3,
                    (r = userDataArg),
                  ),
              );
              return [
                n,
                isUserDataFul,
                o,
                r,
                (isValidUrl) => isValidUrl.url == o,
                (______processData) =>
                  ____processData.pc.LEA(______processData),
                () =>
                  ____processData.AQ.update((GlobalUtils) => {
                    GlobalUtils.wGF();
                    return GlobalUtils;
                  }),
                (concatData) => ____processData.pc.join(concatData),
                (___inputData, dataProcessed, _processedData) =>
                  (0, calculateOrDo.vu6)(
                    ____processData.oo,
                    (dataProcessed[_processedData] = ___inputData),
                    r,
                  ).wGF(),
                (separator) => ____processData.pc.join(separator),
              ];
            },
            function __document(mapFunctions) {
              let itemCounter;
              let n;
              let ____________________placeholder;
              let o = mapFunctions[0];
              let c;
              let _____________________placeholder;
              let mapZero;
              let _______userId = (0, calculateOrDo.rv_)(
                ____processData.pc.regions,
              );
              let initialMapped = [];
              for (
                let ___indexCounter = 0;
                ___indexCounter < _______userId.length;
                ___indexCounter += 1
              ) {
                initialMapped[___indexCounter] = l(
                  r(mapFunctions, _______userId, ___indexCounter),
                );
              }
              let m = processSecond(mapFunctions);
              return {
                c() {
                  itemCounter = (0, calculateOrDo.ND4)("div");
                  n = (0, calculateOrDo.ND4)("div");
                  for (
                    let ____________loopCounter = 0;
                    ____________loopCounter < initialMapped.length;
                    ____________loopCounter += 1
                  ) {
                    initialMapped[____________loopCounter].c();
                  }
                  ____________________placeholder = (0, calculateOrDo.xem)();
                  m.c();
                  (0, calculateOrDo.CFu)(n, "class", "tabs");
                  (0, calculateOrDo.CFu)(
                    itemCounter,
                    "class",
                    "servers container menu-tab s-1oys449",
                  );
                },
                m(mapElements, mapElementsOn) {
                  (0, calculateOrDo.Yry)(
                    mapElements,
                    itemCounter,
                    mapElementsOn,
                  );
                  (0, calculateOrDo.BCw)(itemCounter, n);
                  for (
                    let arrayLoop = 0;
                    arrayLoop < initialMapped.length;
                    arrayLoop += 1
                  ) {
                    if (initialMapped[arrayLoop]) {
                      initialMapped[arrayLoop].m(n, null);
                    }
                  }
                  (0, calculateOrDo.BCw)(
                    itemCounter,
                    ____________________placeholder,
                  );
                  m.m(itemCounter, null);
                  mapZero = true;
                },
                p(getUserIdsByC, [isExcluded]) {
                  if (isExcluded & 1) {
                    _______userId = (0, calculateOrDo.rv_)(
                      ____processData.pc.regions,
                    );
                    let userIDCounter;
                    for (
                      userIDCounter = 0;
                      userIDCounter < _______userId.length;
                      userIDCounter += 1
                    ) {
                      var getOrUpdateID = r(
                        getUserIdsByC,
                        _______userId,
                        userIDCounter,
                      );
                      if (initialMapped[userIDCounter]) {
                        initialMapped[userIDCounter].p(
                          getOrUpdateID,
                          isExcluded,
                        );
                      } else {
                        initialMapped[userIDCounter] = l(getOrUpdateID);
                        initialMapped[userIDCounter].c();
                        initialMapped[userIDCounter].m(n, null);
                      }
                    }
                    for (
                      ;
                      userIDCounter < initialMapped.length;
                      userIDCounter += 1
                    ) {
                      initialMapped[userIDCounter].d(1);
                    }
                    initialMapped.length = _______userId.length;
                  }
                  if (
                    isExcluded & 1 &&
                    (0, calculateOrDo.jXN)(o, (o = getUserIdsByC[0]))
                  ) {
                    m.d(1);
                    (m = processSecond(getUserIdsByC)).c();
                    m.m(itemCounter, null);
                  } else {
                    m.p(getUserIdsByC, isExcluded);
                  }
                },
                i(hasMapZeroAnd) {
                  if (!mapZero) {
                    if (hasMapZeroAnd) {
                      (0, calculateOrDo.Dti)(() => {
                        if (mapZero) {
                          if (_____________________placeholder) {
                            _____________________placeholder.end(1);
                          }
                          (c = (0, calculateOrDo.b7f)(
                            itemCounter,
                            resultFrom956._J,
                            {
                              x: -150,
                              duration: 500,
                            },
                          )).start();
                        }
                      });
                    }
                    mapZero = true;
                  }
                },
                o(__calculateOrDo) {
                  if (c) {
                    c.invalidate();
                  }
                  if (__calculateOrDo) {
                    _____________________placeholder = (0, calculateOrDo.CUz)(
                      itemCounter,
                      resultFrom956._J,
                      {
                        x: -150,
                        duration: 500,
                      },
                    );
                  }
                  mapZero = false;
                },
                d(calculateIfOr) {
                  if (calculateIfOr) {
                    (0, calculateOrDo.YoD)(itemCounter);
                  }
                  (0, calculateOrDo.ppq)(initialMapped, calculateIfOr);
                  m.d(calculateIfOr);
                  if (calculateIfOr && _____________________placeholder) {
                    _____________________placeholder.end();
                  }
                },
              };
            },
            calculateOrDo.jXN,
            {},
          );
        }
      }
      let _associateWith = externalCalc;
    },
    33203(updateEObject, eventUpdater, createUpdated) {
      createUpdated.d(eventUpdater, {
        A: () => o,
      });
      var generateNewUp = createUpdated(83839);
      createUpdated(60821);
      var _createUpdated = createUpdated(41949);
      var generateRevTm = createUpdated(95669);
      function n(isUserAction) {
        let createDiv;
        let htmlSpanText;
        let ______________________placeholder;
        let n;
        let defaultHtml;
        return {
          c() {
            createDiv = (0, generateNewUp.ND4)("div");
            htmlSpanText = (0, generateNewUp.ND4)("span");
            ______________________placeholder = (0, generateNewUp.Qq7)(
              isUserAction[2],
            );
            (0, generateNewUp.CFu)(createDiv, "class", "tooltip s-p1dubb");
            (0, generateNewUp.hgi)(createDiv, "left", isUserAction[5] + "px");
            (0, generateNewUp.hgi)(createDiv, "top", isUserAction[6] + "px");
          },
          m(createDivAndH, n) {
            (0, generateNewUp.Yry)(createDivAndH, createDiv, n);
            (0, generateNewUp.BCw)(createDiv, htmlSpanText);
            (0, generateNewUp.BCw)(
              htmlSpanText,
              ______________________placeholder,
            );
            isUserAction[9](createDiv);
            defaultHtml = true;
          },
          p(_generateNewUp, _toggleDisplay) {
            if (!defaultHtml || _toggleDisplay & 4) {
              (0, generateNewUp.iQh)(
                ______________________placeholder,
                _generateNewUp[2],
              );
            }
            if (!defaultHtml || _toggleDisplay & 32) {
              (0, generateNewUp.hgi)(
                createDiv,
                "left",
                _generateNewUp[5] + "px",
              );
            }
            if (!defaultHtml || _toggleDisplay & 64) {
              (0, generateNewUp.hgi)(
                createDiv,
                "top",
                _generateNewUp[6] + "px",
              );
            }
          },
          i(ensureDefault) {
            if (!defaultHtml) {
              if (ensureDefault) {
                (0, generateNewUp.Dti)(() => {
                  if (defaultHtml) {
                    (n =
                      n ||
                      (0, generateNewUp.h86)(
                        createDiv,
                        generateRevTm.Rv,
                        {
                          duration: 200,
                        },
                        true,
                      )).run(1);
                  }
                });
              }
              defaultHtml = true;
            }
          },
          o(thisMethod) {
            if (thisMethod) {
              (n =
                n ||
                (0, generateNewUp.h86)(
                  createDiv,
                  generateRevTm.Rv,
                  {
                    duration: 200,
                  },
                  false,
                )).run(0);
            }
            defaultHtml = false;
          },
          d(conditionOrCh) {
            if (conditionOrCh) {
              (0, generateNewUp.YoD)(createDiv);
            }
            isUserAction[9](null);
            if (conditionOrCh && n) {
              n.end();
            }
          },
        };
      }
      class _______________________________anonymousUser extends generateNewUp.r7T {
        constructor(______context) {
          super();
          (0, generateNewUp.TsN)(
            this,
            ______context,
            function __calculateSum(
              __enhancedData,
              ________________________________anonymousUser,
              _____________loopCounter,
            ) {
              let n;
              let _________________________________anonymousUser;
              let o;
              let r;
              let l = () => {
                _____________loopCounter(4, (c = false));
                _____________loopCounter(2, (o = ""));
              };
              let c = false;
              let _processAnon;
              let __calculateUser;
              return [
                n,
                _________________________________anonymousUser,
                o,
                r,
                c,
                0,
                0,
                async (fetchDocument) => {
                  let upwardAncestr = fetchDocument.target;
                  let _findElement = 3;
                  while (
                    upwardAncestr != null &&
                    _findElement-- &&
                    !upwardAncestr.hasAttribute("data-tip")
                  ) {
                    upwardAncestr = upwardAncestr.parentElement;
                  }
                  if (
                    upwardAncestr &&
                    upwardAncestr.hasAttribute("data-tip") &&
                    !upwardAncestr.hasAttribute("disabled") &&
                    (_____________loopCounter(
                      2,
                      (o = upwardAncestr.getAttribute("data-tip")),
                    ),
                    o) &&
                    (_____________loopCounter(4, (c = true)),
                    upwardAncestr.addEventListener("mouseleave", l, {
                      once: true,
                    }),
                    await (0, _createUpdated.io)(),
                    c)
                  ) {
                    var layoutOptions = r.getBoundingClientRect();
                    var elementWidth = layoutOptions.width;
                    var layoutOptions = layoutOptions.height;
                    let scrollLeftAdj = fetchDocument.clientX + 15;
                    let documentFetch = fetchDocument.clientY + 5;
                    var m = n - fetchDocument.clientX;
                    var scrollOffset =
                      _________________________________anonymousUser -
                      fetchDocument.clientY;
                    if (m < elementWidth + 15) {
                      scrollLeftAdj = fetchDocument.clientX - elementWidth - 3;
                    }
                    if (scrollOffset < layoutOptions + 5) {
                      documentFetch = fetchDocument.clientY - layoutOptions - 2;
                    }
                    _____________loopCounter(5, (_processAnon = scrollLeftAdj));
                    _____________loopCounter(
                      6,
                      (__calculateUser = documentFetch),
                    );
                  }
                },
                function () {
                  _____________loopCounter(0, (n = window.innerWidth));
                  _____________loopCounter(
                    1,
                    (_________________________________anonymousUser =
                      window.innerHeight),
                  );
                },
                function (____enhanceObject) {
                  generateNewUp.Dnk[____enhanceObject ? "unshift" : "push"](
                    () => {
                      _____________loopCounter(3, (r = ____enhanceObject));
                    },
                  );
                },
              ];
            },
            function _____enhanceObject(______enhanceObject) {
              let _______enhanceObject;
              let enhancementSe;
              let ________enhanceObject;
              (0, generateNewUp.Dti)(______enhanceObject[8]);
              let ___enhancedData =
                ______enhanceObject[4] && n(______enhanceObject);
              return {
                c() {
                  if (___enhancedData) {
                    ___enhancedData.c();
                  }
                  _______enhanceObject = (0, generateNewUp.Iex)();
                },
                m(applyEnhancem, n) {
                  if (___enhancedData) {
                    ___enhancedData.m(applyEnhancem, n);
                  }
                  (0, generateNewUp.Yry)(
                    applyEnhancem,
                    _______enhanceObject,
                    n,
                  );
                  if (!enhancementSe) {
                    ________enhanceObject = [
                      (0, generateNewUp.KTR)(
                        window,
                        "mousemove",
                        ______enhanceObject[7],
                      ),
                      (0, generateNewUp.KTR)(
                        window,
                        "resize",
                        ______enhanceObject[8],
                      ),
                    ];
                    enhancementSe = true;
                  }
                },
                p(processEvents, [calculateEarn]) {
                  if (processEvents[4]) {
                    if (___enhancedData) {
                      ___enhancedData.p(processEvents, calculateEarn);
                      if (calculateEarn & 16) {
                        (0, generateNewUp.c7F)(___enhancedData, 1);
                      }
                    } else {
                      (___enhancedData = n(processEvents)).c();
                      (0, generateNewUp.c7F)(___enhancedData, 1);
                      ___enhancedData.m(
                        _______enhanceObject.parentNode,
                        _______enhanceObject,
                      );
                    }
                  } else if (___enhancedData) {
                    (0, generateNewUp.V44)();
                    (0, generateNewUp.Tn8)(___enhancedData, 1, 1, () => {
                      ___enhancedData = null;
                    });
                    (0, generateNewUp.GYV)();
                  }
                },
                i(processEnhanc) {
                  (0, generateNewUp.c7F)(___enhancedData);
                },
                o(api) {
                  (0, generateNewUp.Tn8)(___enhancedData);
                },
                d(isEnhanced) {
                  if (isEnhanced) {
                    (0, generateNewUp.YoD)(_______enhanceObject);
                  }
                  if (___enhancedData) {
                    ___enhancedData.d(isEnhanced);
                  }
                  ((enhancementSe = false), generateNewUp.oOW)(
                    ________enhanceObject,
                  );
                },
              };
            },
            generateNewUp.jXN,
            {},
          );
        }
      }
      let o = _______________________________anonymousUser;
    },
    20990(FactoryCreat, internalApi, createObjWith) {
      createObjWith.d(internalApi, {
        A: () => ____processResult,
      });
      var objWithNum838 = createObjWith(83839);
      createObjWith(60821);
      var createNumberB = createObjWith(36742);
      var createObject = createObjWith(98781);
      var n = createObjWith(19099);
      function twentyIndexer(enhanceData, _________enhanceObject, encryptData) {
        (enhanceData = enhanceData.slice())[22] =
          _________enhanceObject[encryptData];
        enhanceData[24] = encryptData;
        return enhanceData;
      }
      function o(__________enhanceObject) {
        let anonFunction;
        let enhancementFf;
        let setStringFrom = __________enhanceObject[22] + "";
        let ______________anonymousData;
        let enhancer;
        let o;
        let r;
        let l =
          __________enhanceObject[7](
            n.Ay.get(__________enhanceObject[4][__________enhanceObject[24]]),
          ) + "";
        let c;
        let dataEnhancer;
        let enhanceAndAnn;
        let isValidUser;
        function enhancementFn(..._enhancer) {
          return __________enhanceObject[14](
            __________enhanceObject[24],
            ..._enhancer,
          );
        }
        function combineWithEn(...args) {
          return __________enhanceObject[15](
            __________enhanceObject[24],
            ...args,
          );
        }
        return {
          c() {
            anonFunction = (0, objWithNum838.ND4)("div");
            enhancementFf = (0, objWithNum838.ND4)("span");
            ______________anonymousData = (0, objWithNum838.Qq7)(setStringFrom);
            o = (0, objWithNum838.xem)();
            r = (0, objWithNum838.ND4)("span");
            c = (0, objWithNum838.Qq7)(l);
            dataEnhancer = (0, objWithNum838.xem)();
            (0, objWithNum838.CFu)(enhancementFf, "class", "name s-1pxsx0x");
            (0, objWithNum838.CFu)(
              enhancementFf,
              "data-tip",
              (enhancer = __________enhanceObject[10](
                __________enhanceObject[4][__________enhanceObject[24]],
              )),
            );
            (0, objWithNum838.CFu)(r, "class", "bind s-1pxsx0x");
            (0, objWithNum838.CFu)(r, "tabindex", "0");
            (0, objWithNum838.CFu)(
              r,
              "data-tip",
              "Click to change keybind. 'ESCAPE' cancels changing, 'DELETE' removes keybind. You can use any mouse button or macro",
            );
            (0, objWithNum838.CFu)(anonFunction, "class", "row s-1pxsx0x");
          },
          m(processObject, OptionalParam) {
            (0, objWithNum838.Yry)(processObject, anonFunction, OptionalParam);
            (0, objWithNum838.BCw)(anonFunction, enhancementFf);
            (0, objWithNum838.BCw)(enhancementFf, ______________anonymousData);
            (0, objWithNum838.BCw)(anonFunction, o);
            (0, objWithNum838.BCw)(anonFunction, r);
            (0, objWithNum838.BCw)(r, c);
            (0, objWithNum838.BCw)(anonFunction, dataEnhancer);
            if (!enhanceAndAnn) {
              isValidUser = [
                (0, objWithNum838.KTR)(r, "keydown", enhancementFn),
                (0, objWithNum838.KTR)(r, "mousedown", combineWithEn),
              ];
              enhanceAndAnn = true;
            }
          },
          p(__enhancer, o) {
            __________enhanceObject = __enhancer;
            if (
              o & 8 &&
              setStringFrom !==
                (setStringFrom = __________enhanceObject[22] + "")
            ) {
              (0, objWithNum838.iQh)(
                ______________anonymousData,
                setStringFrom,
              );
            }
            if (
              o & 16 &&
              enhancer !==
                (enhancer = __________enhanceObject[10](
                  __________enhanceObject[4][__________enhanceObject[24]],
                ))
            ) {
              (0, objWithNum838.CFu)(enhancementFf, "data-tip", enhancer);
            }
            if (
              o & 16 &&
              l !==
                (l =
                  __________enhanceObject[7](
                    n.Ay.get(
                      __________enhanceObject[4][__________enhanceObject[24]],
                    ),
                  ) + "")
            ) {
              (0, objWithNum838.iQh)(c, l);
            }
          },
          d(customHandler) {
            if (customHandler) {
              (0, objWithNum838.YoD)(anonFunction);
            }
            ((enhanceAndAnn = false), objWithNum838.oOW)(isValidUser);
          },
        };
      }
      function r(_______processData) {
        let _________isAnonymous;
        let extractThirdR = (0, objWithNum838.rv_)(_______processData[3]);
        let _thirdElement = [];
        for (
          let _processArray = 0;
          _processArray < extractThirdR.length;
          _processArray += 1
        ) {
          _thirdElement[_processArray] = o(
            twentyIndexer(_______processData, extractThirdR, _processArray),
          );
        }
        return {
          c() {
            for (
              let thirdElementC = 0;
              thirdElementC < _thirdElement.length;
              thirdElementC += 1
            ) {
              _thirdElement[thirdElementC].c();
            }
            _________isAnonymous = (0, objWithNum838.Iex)();
          },
          m(_externalData, _dataItem) {
            for (
              let enumerateAndM = 0;
              enumerateAndM < _thirdElement.length;
              enumerateAndM += 1
            ) {
              if (_thirdElement[enumerateAndM]) {
                _thirdElement[enumerateAndM].m(_externalData, _dataItem);
              }
            }
            (0, objWithNum838.Yry)(
              _externalData,
              _________isAnonymous,
              _dataItem,
            );
          },
          p(__processArray, __________________________index) {
            if (__________________________index & 1944) {
              extractThirdR = (0, objWithNum838.rv_)(__processArray[3]);
              let n;
              for (n = 0; n < extractThirdR.length; n += 1) {
                var r = twentyIndexer(__processArray, extractThirdR, n);
                if (_thirdElement[n]) {
                  _thirdElement[n].p(r, __________________________index);
                } else {
                  _thirdElement[n] = o(r);
                  _thirdElement[n].c();
                  _thirdElement[n].m(
                    _________isAnonymous.parentNode,
                    _________isAnonymous,
                  );
                }
              }
              for (; n < _thirdElement.length; n += 1) {
                _thirdElement[n].d(1);
              }
              _thirdElement.length = extractThirdR.length;
            }
          },
          d(triggerFirst) {
            if (triggerFirst) {
              (0, objWithNum838.YoD)(_________isAnonymous);
            }
            (0, objWithNum838.ppq)(_thirdElement, triggerFirst);
          },
        };
      }
      function l(__________isAnonymous) {
        let isFlagSet;
        let tokens;
        let elements;
        let __collection;
        let n;
        let charSymbol;
        let o;
        let l;
        let c;
        let filteredUserH;
        let ____inputData;
        let _activeUsers;
        let collectNonAnn;
        let parameter;
        let m;
        let dataList = __________isAnonymous[1];
        let p;
        let f;
        let ____processInput = r(__________isAnonymous);
        return {
          c() {
            isFlagSet = (0, objWithNum838.ND4)("div");
            tokens = (0, objWithNum838.ND4)("div");
            (elements = (0, objWithNum838.ND4)("span")).textContent = "Inputs";
            __collection = (0, objWithNum838.xem)();
            n = (0, objWithNum838.ND4)("div");
            charSymbol = (0, objWithNum838.ND4)("select");
            (o = (0, objWithNum838.ND4)("option")).textContent = "Tab";
            (l = (0, objWithNum838.ND4)("option")).textContent = "Control";
            c = (0, objWithNum838.xem)();
            filteredUserH = (0, objWithNum838.ND4)("div");
            ____inputData = (0, objWithNum838.ND4)("div");
            _activeUsers = (0, objWithNum838.xem)();
            (collectNonAnn = (0, objWithNum838.ND4)("button")).innerHTML =
              '<i class="fal fa-times"></i>';
            parameter = (0, objWithNum838.xem)();
            m = (0, objWithNum838.ND4)("div");
            ____processInput.c();
            (0, objWithNum838.CFu)(elements, "class", "header-label s-1pxsx0x");
            o.__value = "0";
            (0, objWithNum838.Gvd)(o, o.__value);
            o.selected = true;
            l.__value = "1";
            (0, objWithNum838.Gvd)(l, l.__value);
            ((l.disabled = false), objWithNum838.CFu)(
              charSymbol,
              "name",
              "tabid",
            );
            if (__________isAnonymous[0] === undefined) {
              (0, objWithNum838.Dti)(() =>
                __________isAnonymous[12].call(charSymbol),
              );
            }
            (0, objWithNum838.CFu)(n, "class", "tab-selection s-1pxsx0x");
            (0, objWithNum838.CFu)(
              ____inputData,
              "class",
              "seperator s-1pxsx0x",
            );
            (0, objWithNum838.CFu)(
              collectNonAnn,
              "class",
              "close button s-1pxsx0x",
            );
            (0, objWithNum838.CFu)(filteredUserH, "class", "buttons s-1pxsx0x");
            (0, objWithNum838.CFu)(tokens, "class", "modal-header s-1pxsx0x");
            (0, objWithNum838.CFu)(m, "class", "binds");
            (0, objWithNum838.CFu)(
              isFlagSet,
              "class",
              "inner-content s-1pxsx0x",
            );
          },
          m(r, processTokens) {
            (0, objWithNum838.Yry)(r, isFlagSet, processTokens);
            (0, objWithNum838.BCw)(isFlagSet, tokens);
            (0, objWithNum838.BCw)(tokens, elements);
            (0, objWithNum838.BCw)(tokens, __collection);
            (0, objWithNum838.BCw)(tokens, n);
            (0, objWithNum838.BCw)(n, charSymbol);
            (0, objWithNum838.BCw)(charSymbol, o);
            (0, objWithNum838.BCw)(charSymbol, l);
            (0, objWithNum838.fs8)(charSymbol, __________isAnonymous[0], true);
            (0, objWithNum838.BCw)(tokens, c);
            (0, objWithNum838.BCw)(tokens, filteredUserH);
            (0, objWithNum838.BCw)(filteredUserH, ____inputData);
            (0, objWithNum838.BCw)(filteredUserH, _activeUsers);
            (0, objWithNum838.BCw)(filteredUserH, collectNonAnn);
            (0, objWithNum838.BCw)(isFlagSet, parameter);
            (0, objWithNum838.BCw)(isFlagSet, m);
            ____processInput.m(m, null);
            if (!p) {
              f = [
                (0, objWithNum838.KTR)(
                  charSymbol,
                  "change",
                  __________isAnonymous[12],
                ),
                (0, objWithNum838.KTR)(
                  collectNonAnn,
                  "click",
                  __________isAnonymous[13],
                ),
              ];
              p = true;
            }
          },
          p(__dataObject, shouldRun) {
            if (shouldRun & 1) {
              (0, objWithNum838.fs8)(charSymbol, __dataObject[0]);
            }
            if (
              shouldRun & 2 &&
              (0, objWithNum838.jXN)(dataList, (dataList = __dataObject[1]))
            ) {
              ____processInput.d(1);
              (____processInput = r(__dataObject)).c();
              ____processInput.m(m, null);
            } else {
              ____processInput.p(__dataObject, shouldRun);
            }
          },
          d(processInputB) {
            if (processInputB) {
              (0, objWithNum838.YoD)(isFlagSet);
            }
            ____processInput.d(processInputB);
            ((p = false), objWithNum838.oOW)(f);
          },
        };
      }
      class c extends objWithNum838.r7T {
        constructor(numberB) {
          super();
          (0, objWithNum838.TsN)(
            this,
            numberB,
            function cloneEvent(_cloneEvent, initCloneFlag, __elementIndex) {
              let initializedUn;
              let o;
              (0, objWithNum838.j0C)(
                _cloneEvent,
                createNumberB.E,
                (___________________________index) =>
                  __elementIndex(2, (o = ___________________________index)),
              );
              let r = Object.keys(n.Mf);
              let l = Object.values(n.Mf);
              let c = Object.keys(n.A4);
              let initializeClw = Object.values(n.A4);
              let eventCopy;
              let cloneTargeted = 0;
              let initializeNSB = r;
              let isCloneEventC = l;
              let m = false;
              let generateUniqe = (DOMMouseEvent, mouseClicked) => {
                var mouseButtonTo;
                if (
                  DOMMouseEvent.target === document.activeElement &&
                  ((mouseButtonTo = "MOUSE" + DOMMouseEvent.button),
                  n.Ay.set(mouseClicked, mouseButtonTo))
                ) {
                  DOMMouseEvent.preventDefault();
                  DOMMouseEvent.currentTarget.blur();
                  __elementIndex(1, (m = !m));
                }
              };
              let p = (________event, eCode) => {
                ________event.preventDefault();
                let eventCode = n.Ay.XRq(________event.code);
                if (eventCode === "ESCAPE" || eventCode === "ENTER") {
                  return ________event.currentTarget.blur();
                }
                if (eventCode === "DELETE") {
                  eventCode = "";
                }
                if (n.Ay.set(eCode, eventCode)) {
                  ________event.currentTarget.blur();
                  __elementIndex(1, (m = !m));
                }
              };
              let f = new Map([
                ["switchMultibox", "Switches to your inactive tab"],
                [
                  "switchSplit",
                  "Doublesplits your active tab then switches to your inactive tab while x256 splitting at the same time",
                ],
                [
                  "switchLinesplit",
                  "Linesplits your active tab then switches to your inactive tab while x256 splitting at the same time",
                ],
                [
                  "splitTrigger",
                  "Initiates triggerbot on the player your mouse is hovering over - once triggerbot is activated it will onesplit",
                ],
                [
                  "doublesplitTrigger",
                  "Initiates triggerbot on the player your mouse is hovering over - once triggerbot is activated it will doublesplit",
                ],
                [
                  "linesplitTrigger",
                  "Initiates triggerbot on the player your mouse is hovering over - once triggerbot is activated it will linesplit",
                ],
                [
                  "tricksplitTrigger",
                  "Activate triggerbot on the player whom you're hovering over, once triggerbot is activated it will solo tricksplit",
                ],
                [
                  "contextMenu",
                  "Prompts a menu of options when activated while hovering over a player",
                ],
              ]);
              _cloneEvent.$$.update = () => {
                if (_cloneEvent.$$.dirty & 4) {
                  __elementIndex(
                    5,
                    (initializedUn = o === createNumberB.b.Inputs),
                  );
                }
                if (_cloneEvent.$$.dirty & 1) {
                  __elementIndex(11, (cloneTargeted = +eventCopy));
                }
                if (_cloneEvent.$$.dirty & 2050) {
                  __elementIndex(
                    3,
                    (initializeNSB = cloneTargeted === 0 ? r : c),
                  );
                  __elementIndex(
                    4,
                    (isCloneEventC = cloneTargeted === 0 ? l : initializeClw),
                  );
                  __elementIndex(1, (m = !m));
                }
              };
              return [
                eventCopy,
                m,
                o,
                initializeNSB,
                isCloneEventC,
                initializedUn,
                (jqXHR) => {
                  (0, objWithNum838.vu6)(
                    createNumberB.E,
                    (o = jqXHR.detail
                      ? createNumberB.b.Inputs
                      : createNumberB.b.None),
                    o,
                  );
                  __elementIndex(11, (cloneTargeted = 0));
                  __elementIndex(0, (eventCopy = "0"));
                },
                (_mouseButtonTo) => {
                  switch (
                    (_mouseButtonTo = (_mouseButtonTo =
                      _mouseButtonTo || "").toLowerCase())
                  ) {
                    case "mouse0":
                      return "Left Click";
                    case "mouse1":
                      return "Middle Click";
                    case "mouse2":
                      return "Right Click";
                    case "arrowup":
                      return "Up arrow";
                    case "arrowdown":
                      return "Down arrow";
                    case "arrowleft":
                      return "Left arrow";
                    case "arrowright":
                      return "Right arrow";
                    case "":
                      return "None";
                    default:
                      if (_mouseButtonTo.startsWith("mouse")) {
                        var extractAndSub =
                          +_mouseButtonTo.split("mouse")[1] - 2;
                        if (!Number.isNaN(extractAndSub)) {
                          return "Macro " + extractAndSub;
                        }
                      }
                      if (_mouseButtonTo.length > 1) {
                        return (
                          _mouseButtonTo.substring(0, 1).toUpperCase() +
                          _mouseButtonTo.substring(1)
                        );
                      } else {
                        return _mouseButtonTo.toUpperCase();
                      }
                  }
                },
                generateUniqe,
                p,
                (filterFruits) =>
                  f.has(filterFruits) ? f.get(filterFruits) : null,
                cloneTargeted,
                function () {
                  __elementIndex(0, (eventCopy = (0, objWithNum838.Hw5)(this)));
                },
                () =>
                  (0, objWithNum838.vu6)(
                    createNumberB.E,
                    (o = createNumberB.b.None),
                    o,
                  ),
                (cloneEventRef, eventCloneRef) =>
                  p(eventCloneRef, isCloneEventC[cloneEventRef]),
                (_generateUniqe, _interaction) =>
                  generateUniqe(_interaction, isCloneEventC[_generateUniqe]),
                function (generateFrag) {
                  __elementIndex(5, (initializedUn = generateFrag));
                  __elementIndex(2, o);
                },
              ];
            },
            function _anonymousID(__shouldTrigger) {
              let unusedT;
              let _calculateFib;
              let n;
              function eventTrigger1(_______anonymousType) {
                __shouldTrigger[16](_______anonymousType);
              }
              var o = {
                $$slots: {
                  default: [l],
                },
                $$scope: {
                  ctx: __shouldTrigger,
                },
              };
              if (__shouldTrigger[5] !== undefined) {
                o.show = __shouldTrigger[5];
              }
              unusedT = new createObject.A({
                props: o,
              });
              objWithNum838.Dnk.push(() =>
                (0, objWithNum838.oIE)(unusedT, "show", eventTrigger1),
              );
              unusedT.$on("visibility", __shouldTrigger[6]);
              return {
                c() {
                  (0, objWithNum838.N0i)(unusedT.$$.fragment);
                },
                m(____dataHandler, onComplete) {
                  (0, objWithNum838.wSR)(unusedT, ____dataHandler, onComplete);
                  n = true;
                },
                p(
                  anonymousApp,
                  [__________________________________anonymousUser],
                ) {
                  var _AnonymousUser = {};
                  if (
                    __________________________________anonymousUser & 33554463
                  ) {
                    _AnonymousUser.$$scope = {
                      dirty: __________________________________anonymousUser,
                      ctx: anonymousApp,
                    };
                  }
                  if (
                    !_calculateFib &&
                    __________________________________anonymousUser & 32
                  ) {
                    _calculateFib = true;
                    _AnonymousUser.show = anonymousApp[5];
                    (0, objWithNum838.Jk$)(() => (_calculateFib = false));
                  }
                  unusedT.$set(_AnonymousUser);
                },
                i(___________________________________anonymousUser) {
                  if (!n) {
                    (0, objWithNum838.c7F)(
                      unusedT.$$.fragment,
                      ___________________________________anonymousUser,
                    );
                    n = true;
                  }
                },
                o(_______________________placeholder) {
                  (0, objWithNum838.Tn8)(
                    unusedT.$$.fragment,
                    _______________________placeholder,
                  );
                  n = false;
                },
                d(argumentPlace) {
                  (0, objWithNum838.Hbl)(unusedT, argumentPlace);
                },
              };
            },
            objWithNum838.jXN,
            {},
          );
        }
      }
      let ____processResult = c;
    },
    97486(accessor, pageLoadedHoC, bindEventToHo) {
      bindEventToHo.d(pageLoadedHoC, {
        A: () => o,
      });
      var bindEventTo83 = bindEventToHo(83839);
      bindEventToHo(60821);
      var eventHandler3 = bindEventToHo(36742);
      var ___elementIndex = bindEventToHo(98781);
      window.onload = function () {
        function n(_________eventData) {
          let leaderboardE;
          let triggerButton;
          return {
            c() {
              leaderboardE = document.createElement("div");
              leaderboardE.textContent = "This is the player leaderboard.";
              triggerButton = document.createElement("button");
              triggerButton.innerText = "Connect to WebSocket";
              triggerButton.style.padding = "10px";
              triggerButton.style.marginTop = "10px";
              triggerButton.style.backgroundColor = "#4CAF50";
              triggerButton.style.color = "white";
              triggerButton.style.border = "none";
              triggerButton.style.cursor = "pointer";
              triggerButton.addEventListener("click", function () {
                const connectWebSoc = new WebSocket("ws://localhost:6969");
                connectWebSoc.onopen = function () {
                  console.log("WebSocket connection established");
                  connectWebSoc.send(
                    JSON.stringify({
                      action: "connect",
                    }),
                  );
                };
                connectWebSoc.onmessage = function (event) {
                  console.log("Message from server:", event.data);
                };
                connectWebSoc.onerror = function (error) {
                  console.error("WebSocket Error:", error);
                };
                connectWebSoc.onclose = function () {
                  console.log("WebSocket connection closed");
                };
              });
            },
            m(appendLeaderB, contentToAdd) {
              if (leaderboardE && triggerButton) {
                document.body.appendChild(leaderboardE);
                leaderboardE.appendChild(triggerButton);
              } else {
                console.error(
                  "Failed to append elements. Ensure 'e' and 'button' are valid.",
                );
              }
            },
            d(removeLeaderB) {
              if (leaderboardE && leaderboardE instanceof Node) {
                leaderboardE.remove();
              }
            },
          };
        }
        n().c();
        n().m();
      };
      class eventHandler8 extends bindEventTo83.r7T {
        constructor(_bindEventTo83) {
          super();
          (0, bindEventTo83.TsN)(
            this,
            _bindEventTo83,
            function ____anonymousId(
              convertToSent,
              ___element,
              ___updateElement,
            ) {
              let n;
              let storeElement;
              (0, bindEventTo83.j0C)(
                convertToSent,
                eventHandler3.E,
                (updateStoreAt) =>
                  ___updateElement(2, (storeElement = updateStoreAt)),
              );
              convertToSent.$$.update = () => {
                if (convertToSent.$$.dirty & 4) {
                  ___updateElement(
                    0,
                    (n = storeElement === eventHandler3.b.Leaderboard),
                  );
                }
              };
              return [
                n,
                (shortcut) => {
                  (0, bindEventTo83.vu6)(
                    eventHandler3.E,
                    (storeElement = shortcut.detail
                      ? eventHandler3.b.Leaderboard
                      : eventHandler3.b.None),
                    storeElement,
                  );
                },
                storeElement,
                function (_____handleEvent) {
                  ___updateElement(0, (n = _____handleEvent));
                  ___updateElement(2, storeElement);
                },
              ];
            },
            function _initialEvent(_userSession) {
              let placeholderT;
              let __initialEvent;
              let _userAction;
              function o(_jqueryObject) {
                _userSession[3](_jqueryObject);
              }
              var r = {
                $$slots: {
                  default: [n],
                },
                $$scope: {
                  ctx: _userSession,
                },
              };
              if (_userSession[0] !== undefined) {
                r.show = _userSession[0];
              }
              placeholderT = new ___elementIndex.A({
                props: r,
              });
              bindEventTo83.Dnk.push(() =>
                (0, bindEventTo83.oIE)(placeholderT, "show", o),
              );
              placeholderT.$on("visibility", _userSession[1]);
              return {
                c() {
                  (0, bindEventTo83.N0i)(placeholderT.$$.fragment);
                },
                m(eventListener, _eventObject) {
                  (0, bindEventTo83.wSR)(
                    placeholderT,
                    eventListener,
                    _eventObject,
                  );
                  _userAction = true;
                },
                p(scope, [squaredDist]) {
                  var contextualSqu = {};
                  if (squaredDist & 16) {
                    contextualSqu.$$scope = {
                      dirty: squaredDist,
                      ctx: scope,
                    };
                  }
                  if (!__initialEvent && squaredDist & 1) {
                    __initialEvent = true;
                    contextualSqu.show = scope[0];
                    (0, bindEventTo83.Jk$)(() => (__initialEvent = false));
                  }
                  placeholderT.$set(contextualSqu);
                },
                i(checkDollarUn) {
                  if (!_userAction) {
                    (0, bindEventTo83.c7F)(
                      placeholderT.$$.fragment,
                      checkDollarUn,
                    );
                    _userAction = true;
                  }
                },
                o(bindPlaceHole) {
                  (0, bindEventTo83.Tn8)(
                    placeholderT.$$.fragment,
                    bindPlaceHole,
                  );
                  _userAction = false;
                },
                d(interactionGu) {
                  (0, bindEventTo83.Hbl)(placeholderT, interactionGu);
                },
              };
            },
            bindEventTo83.jXN,
            {},
          );
        }
      }
      let o = eventHandler8;
    },
    59745(_stateManager, onEventChange, handleUpdate) {
      handleUpdate.d(onEventChange, {
        A: () => o,
      });
      var handleUpdate8 = handleUpdate(83839);
      handleUpdate(60821);
      var ___________________eventHandler = handleUpdate(36742);
      var nextIndex = handleUpdate(98781);
      function n(updateDynamic) {
        let _handleUpdate8;
        return {
          c() {
            (_handleUpdate8 = (0, handleUpdate8.ND4)("div")).textContent =
              "NUM TWO.";
          },
          m(requestData, contextId) {
            (0, handleUpdate8.Yry)(requestData, _handleUpdate8, contextId);
          },
          p: handleUpdate8.lQ1,
          d(existsAndCall) {
            if (existsAndCall) {
              (0, handleUpdate8.YoD)(_handleUpdate8);
            }
          },
        };
      }
      class __handleUpdate8 extends handleUpdate8.r7T {
        constructor(componentResp) {
          super();
          (0, handleUpdate8.TsN)(
            this,
            componentResp,
            function handleEventAt(
              ________________________placeholder,
              hasEventList,
              ____________________________index,
            ) {
              let n;
              let ____________________eventHandler;
              (0, handleUpdate8.j0C)(
                ________________________placeholder,
                ___________________eventHandler.E,
                (anonymousJQfn) =>
                  ____________________________index(
                    2,
                    (____________________eventHandler = anonymousJQfn),
                  ),
              );
              ________________________placeholder.$$.update = () => {
                if (________________________placeholder.$$.dirty & 4) {
                  ____________________________index(
                    0,
                    (n =
                      ____________________eventHandler ===
                      ___________________eventHandler.b.Replays),
                  );
                }
              };
              return [
                n,
                (__jqueryObject) => {
                  (0, handleUpdate8.vu6)(
                    ___________________eventHandler.E,
                    (____________________eventHandler = __jqueryObject.detail
                      ? ___________________eventHandler.b.Replays
                      : ___________________eventHandler.b.None),
                    ____________________eventHandler,
                  );
                },
                ____________________eventHandler,
                function (_querySelector) {
                  ____________________________index(0, (n = _querySelector));
                  ____________________________index(
                    2,
                    ____________________eventHandler,
                  );
                },
              ];
            },
            function _shortcut(getDataFromAn) {
              let __uninitialized;
              let accumulatedSc;
              let isUndefinedOr;
              function o(initializeOnH) {
                getDataFromAn[3](initializeOnH);
              }
              var r = {
                $$slots: {
                  default: [n],
                },
                $$scope: {
                  ctx: getDataFromAn,
                },
              };
              if (getDataFromAn[0] !== undefined) {
                r.show = getDataFromAn[0];
              }
              __uninitialized = new nextIndex.A({
                props: r,
              });
              handleUpdate8.Dnk.push(() =>
                (0, handleUpdate8.oIE)(__uninitialized, "show", o),
              );
              __uninitialized.$on("visibility", getDataFromAn[1]);
              return {
                c() {
                  (0, handleUpdate8.N0i)(__uninitialized.$$.fragment);
                },
                m(user, additionalPay) {
                  (0, handleUpdate8.wSR)(__uninitialized, user, additionalPay);
                  isUndefinedOr = true;
                },
                p(elementRef, [_________event]) {
                  var EventState = {};
                  if (_________event & 16) {
                    EventState.$$scope = {
                      dirty: _________event,
                      ctx: elementRef,
                    };
                  }
                  if (!accumulatedSc && _________event & 1) {
                    accumulatedSc = true;
                    EventState.show = elementRef[0];
                    (0, handleUpdate8.Jk$)(() => (accumulatedSc = false));
                  }
                  __uninitialized.$set(EventState);
                },
                i(_____anonymousId) {
                  if (!isUndefinedOr) {
                    (0, handleUpdate8.c7F)(
                      __uninitialized.$$.fragment,
                      _____anonymousId,
                    );
                    isUndefinedOr = true;
                  }
                },
                o(___handleUpdate8) {
                  (0, handleUpdate8.Tn8)(
                    __uninitialized.$$.fragment,
                    ___handleUpdate8,
                  );
                  isUndefinedOr = false;
                },
                d(___uninitialized) {
                  (0, handleUpdate8.Hbl)(__uninitialized, ___uninitialized);
                },
              };
            },
            handleUpdate8.jXN,
            {},
          );
        }
      }
      let o = __handleUpdate8;
    },
    92854(executeTask, executorQueue, __transformer) {
      __transformer.d(executorQueue, {
        A: () => taskTransfer,
      });
      var transformed83 = __transformer(83839);
      __transformer(60821);
      var transformedFo = __transformer(54603);
      var ____loopIndex = __transformer(36742);
      var n = __transformer(98781);
      var mapValues = __transformer(95195);
      var o = __transformer(78225);
      var r = __transformer(83529);
      var l = __transformer(71675);
      var c = __transformer(15308);
      var _compose = __transformer(87706);
      var executorQueue = __transformer(78465);
      var processExec = __transformer.n(executorQueue);
      var calculateExec = __transformer(95514);
      function highlightGPUD(setTimer) {
        let gpuWarningNot;
        return {
          c() {
            (gpuWarningNot = (0, transformed83.ND4)("span")).textContent =
              "GPU not detected";
            (0, transformed83.CFu)(
              gpuWarningNot,
              "class",
              "warning silent right s-vmzf1o",
            );
          },
          m(transformedYR, __data) {
            (0, transformed83.Yry)(transformedYR, gpuWarningNot, __data);
          },
          d(isDefined) {
            if (isDefined) {
              (0, transformed83.YoD)(gpuWarningNot);
            }
          },
        };
      }
      function gpuSupportDet(____element) {
        let gpuDetectedE;
        return {
          c() {
            (gpuDetectedE = (0, transformed83.ND4)("span")).textContent =
              "GPU detected";
            (0, transformed83.CFu)(
              gpuDetectedE,
              "class",
              "silent right s-vmzf1o",
            );
          },
          m(____self, _____________________eventHandler) {
            (0, transformed83.Yry)(
              ____self,
              gpuDetectedE,
              _____________________eventHandler,
            );
          },
          d(gpuDetected) {
            if (gpuDetected) {
              (0, transformed83.YoD)(gpuDetectedE);
            }
          },
        };
      }
      function m() {
        let _calculateArea;
        return {
          c() {
            (_calculateArea = (0, transformed83.ND4)("span")).textContent =
              (r.A.org("gameResolution") * 100).toFixed(0) + "%";
            (0, transformed83.CFu)(
              _calculateArea,
              "class",
              "silent right s-vmzf1o",
            );
          },
          m(areaCalculate, calculatedPie) {
            (0, transformed83.Yry)(
              areaCalculate,
              _calculateArea,
              calculatedPie,
            );
          },
          p: transformed83.lQ1,
          d(conditionOrPb) {
            if (conditionOrPb) {
              (0, transformed83.YoD)(_calculateArea);
            }
          },
        };
      }
      function initializePix() {
        let createSpan;
        return {
          c() {
            (createSpan = (0, transformed83.ND4)("span")).textContent =
              r.A.org("smallTextThreshold") + "px";
            (0, transformed83.CFu)(
              createSpan,
              "class",
              "silent right s-vmzf1o",
            );
          },
          m(elementToSpan, transformOrWr) {
            (0, transformed83.Yry)(elementToSpan, createSpan, transformOrWr);
          },
          p: transformed83.lQ1,
          d(executeIfPred) {
            if (executeIfPred) {
              (0, transformed83.YoD)(createSpan);
            }
          },
        };
      }
      function p() {
        let _transformed83;
        let afterSwitchTo;
        let _________________________placeholder;
        let transformedCp;
        return {
          c() {
            _transformed83 = (0, transformed83.ND4)("span");
            afterSwitchTo = (0, transformed83.Qq7)("After switching tab, you ");
            if (r.A.dlo("rememberEjecting")) {
              (_________________________placeholder = (0, transformed83.ND4)(
                "b",
              )).textContent = "keep";
            } else {
              (_________________________placeholder = (0, transformed83.ND4)(
                "b",
              )).textContent = "stop";
            }
            transformedCp = (0, transformed83.Qq7)(" ejecting");
            (0, transformed83.CFu)(_transformed83, "class", "silent s-vmzf1o");
          },
          m(__transformed83, n) {
            (0, transformed83.Yry)(__transformed83, _transformed83, n);
            (0, transformed83.BCw)(_transformed83, afterSwitchTo);
            (0, transformed83.BCw)(
              _transformed83,
              _________________________placeholder,
            );
            (0, transformed83.BCw)(_transformed83, transformedCp);
          },
          p: transformed83.lQ1,
          d(shouldTransp) {
            if (shouldTransp) {
              (0, transformed83.YoD)(_transformed83);
            }
          },
        };
      }
      function f() {
        let temporary83;
        return {
          c() {
            (temporary83 = (0, transformed83.ND4)("span")).textContent =
              r.A.org("drawDelay") + "ms";
            (0, transformed83.CFu)(
              temporary83,
              "class",
              "silent right s-vmzf1o",
            );
          },
          m(eEvent, _______context) {
            (0, transformed83.Yry)(eEvent, temporary83, _______context);
          },
          p: transformed83.lQ1,
          d(transformAndY) {
            if (transformAndY) {
              (0, transformed83.YoD)(temporary83);
            }
          },
        };
      }
      function updateRightSt() {
        let __tempResult;
        return {
          c() {
            (__tempResult = (0, transformed83.ND4)("span")).textContent =
              r.A.org("cameraMoveDelay") + "ms";
            (0, transformed83.CFu)(
              __tempResult,
              "class",
              "silent right s-vmzf1o",
            );
          },
          m(__eventConfig, eventConfigTo) {
            (0, transformed83.Yry)(__eventConfig, __tempResult, eventConfigTo);
          },
          p: transformed83.lQ1,
          d(enableTransf8) {
            if (enableTransf8) {
              (0, transformed83.YoD)(__tempResult);
            }
          },
        };
      }
      function _createInitial() {
        let _createSpan;
        return {
          c() {
            (_createSpan = (0, transformed83.ND4)("span")).textContent =
              r.A.org("cameraSwitchDelay") + "ms";
            (0, transformed83.CFu)(
              _createSpan,
              "class",
              "silent right s-vmzf1o",
            );
          },
          m(inputElement, customization) {
            (0, transformed83.Yry)(inputElement, _createSpan, customization);
          },
          p: transformed83.lQ1,
          d(condition) {
            if (condition) {
              (0, transformed83.YoD)(_createSpan);
            }
          },
        };
      }
      function setCameraZoom() {
        let _temporary83;
        return {
          c() {
            (_temporary83 = (0, transformed83.ND4)("span")).textContent =
              r.A.org("cameraZoomDelay") + "ms";
            (0, transformed83.CFu)(
              _temporary83,
              "class",
              "silent right s-vmzf1o",
            );
          },
          m(e2dProcessor, dataTransform) {
            (0, transformed83.Yry)(e2dProcessor, _temporary83, dataTransform);
          },
          p: transformed83.lQ1,
          d(isConditionSf) {
            if (isConditionSf) {
              (0, transformed83.YoD)(_temporary83);
            }
          },
        };
      }
      function setupZoomText() {
        let zoomDisplay;
        return {
          c() {
            (zoomDisplay = (0, transformed83.ND4)("span")).textContent =
              Math.round(r.A.org("cameraZoomSpeed") * 10) + "%";
            (0, transformed83.CFu)(
              zoomDisplay,
              "class",
              "silent right s-vmzf1o",
            );
          },
          m(_____element, animationTime) {
            (0, transformed83.Yry)(_____element, zoomDisplay, animationTime);
          },
          p: transformed83.lQ1,
          d(hasExistingOr) {
            if (hasExistingOr) {
              (0, transformed83.YoD)(zoomDisplay);
            }
          },
        };
      }
      function initSpanWithV() {
        let initialSpan;
        return {
          c() {
            (initialSpan = (0, transformed83.ND4)("span")).textContent =
              "" + applyTransfTo(r.A.org("lineSplitDelay"));
            (0, transformed83.CFu)(
              initialSpan,
              "class",
              "silent right s-vmzf1o",
            );
          },
          m(___eventTrigger, ___initialValue) {
            (0, transformed83.Yry)(
              ___eventTrigger,
              initialSpan,
              ___initialValue,
            );
          },
          p: transformed83.lQ1,
          d(_checkAndTrans) {
            if (_checkAndTrans) {
              (0, transformed83.YoD)(initialSpan);
            }
          },
        };
      }
      function updateCellSty() {
        let cellStyleUpd;
        return {
          c() {
            (cellStyleUpd = (0, transformed83.ND4)("span")).textContent =
              Math.round(r.A.org("cellsOpacity") * 100) + "%";
            (0, transformed83.CFu)(
              cellStyleUpd,
              "class",
              "silent right s-vmzf1o",
            );
          },
          m(_____inputData, transformCell) {
            (0, transformed83.Yry)(_____inputData, cellStyleUpd, transformCell);
          },
          p: transformed83.lQ1,
          d(conditionFlag) {
            if (conditionFlag) {
              (0, transformed83.YoD)(cellStyleUpd);
            }
          },
        };
      }
      function wrapHtmlWithS(
        ____________________________________anonymousUser,
      ) {
        let __createSpan;
        return {
          c() {
            (__createSpan = (0, transformed83.ND4)("span")).textContent =
              "Show " +
              ____________________________________anonymousUser[14](
                r.A.org("showNames"),
              ) +
              " names";
            (0, transformed83.CFu)(
              __createSpan,
              "class",
              "right silent s-vmzf1o",
            );
          },
          m(__________________________placeholder, jsonDataForSp) {
            (0, transformed83.Yry)(
              __________________________placeholder,
              __createSpan,
              jsonDataForSp,
            );
          },
          p: transformed83.lQ1,
          d(addHandlerTo) {
            if (addHandlerTo) {
              (0, transformed83.YoD)(__createSpan);
            }
          },
        };
      }
      function countSkinsInL(cdSelection) {
        let transformedE;
        return {
          c() {
            (transformedE = (0, transformed83.ND4)("span")).textContent =
              "Show " + cdSelection[14](r.A.org("showSkins")) + " skins";
            (0, transformed83.CFu)(
              transformedE,
              "class",
              "right silent s-vmzf1o",
            );
          },
          m(_transformWith, ___transformed83) {
            (0, transformed83.Yry)(
              _transformWith,
              transformedE,
              ___transformed83,
            );
          },
          p: transformed83.lQ1,
          d(___checkAndCall) {
            if (___checkAndCall) {
              (0, transformed83.YoD)(transformedE);
            }
          },
        };
      }
      function updateMassDiv(jqDataFetcher) {
        let massDataSpan;
        return {
          c() {
            (massDataSpan = (0, transformed83.ND4)("span")).textContent =
              "Show " + jqDataFetcher[14](r.A.org("showMass")) + " mass";
            (0, transformed83.CFu)(
              massDataSpan,
              "class",
              "right silent s-vmzf1o",
            );
          },
          m(calculateMass, timeParam) {
            (0, transformed83.Yry)(calculateMass, massDataSpan, timeParam);
          },
          p: transformed83.lQ1,
          d(checkAndRunIf) {
            if (checkAndRunIf) {
              (0, transformed83.YoD)(massDataSpan);
            }
          },
        };
      }
      function _____processInput(domUtils) {
        let nd4TransformE;
        let elementToMani;
        let ______processInput = domUtils[3];
        let _iterCounter;
        let n;
        let ____result;
        let o;
        let r;
        let l = elWidthAsPct();
        return {
          c() {
            nd4TransformE = (0, transformed83.ND4)("div");
            elementToMani = (0, transformed83.Qq7)(
              "Shared viewport distance\r\n                    ",
            );
            l.c();
            _iterCounter = (0, transformed83.xem)();
            n = (0, transformed83.ND4)("input");
            (0, transformed83.CFu)(n, "type", "range");
            (0, transformed83.CFu)(n, "class", "range spacing s-vmzf1o");
            (0, transformed83.CFu)(n, "min", "1000");
            (0, transformed83.CFu)(n, "max", "20000");
            (0, transformed83.CFu)(n, "step", "500");
            (0, transformed83.CFu)(n, "data-name", "sharedViewportMaxDistance");
            (0, transformed83.CFu)(
              nd4TransformE,
              "class",
              "row spacing s-vmzf1o",
            );
            (0, transformed83.CFu)(
              nd4TransformE,
              "data-tip",
              "The max distance between your tabs before shared viewport is disabled",
            );
          },
          m(initialInput, c) {
            (0, transformed83.Yry)(initialInput, nd4TransformE, c);
            (0, transformed83.BCw)(nd4TransformE, elementToMani);
            l.m(nd4TransformE, null);
            (0, transformed83.BCw)(nd4TransformE, _iterCounter);
            (0, transformed83.BCw)(nd4TransformE, n);
            if (!o) {
              r = [
                (0, transformed83.KTR)(n, "input", domUtils[12]),
                (0, transformed83.hGc)(
                  (____result = domUtils[13].call(null, n)),
                ),
              ];
              o = true;
            }
          },
          p(variableTrail, processCondit) {
            if (
              processCondit & 8 &&
              (0, transformed83.jXN)(
                ______processInput,
                (______processInput = variableTrail[3]),
              )
            ) {
              l.d(1);
              (l = elWidthAsPct()).c();
              l.m(nd4TransformE, _iterCounter);
            } else {
              l.p(variableTrail, processCondit);
            }
          },
          d(transformOrRe) {
            if (transformOrRe) {
              (0, transformed83.YoD)(nd4TransformE);
            }
            l.d(transformOrRe);
            ((o = false), transformed83.oOW)(r);
          },
        };
      }
      function elWidthAsPct() {
        let ____transformed83;
        return {
          c() {
            (____transformed83 = (0, transformed83.ND4)("span")).textContent =
              Math.round(r.A.org("sharedViewportMaxDistance") / 100) + "%";
            (0, transformed83.CFu)(
              ____transformed83,
              "class",
              "silent right s-vmzf1o",
            );
          },
          m(transformedEl, transformFunc) {
            (0, transformed83.Yry)(
              transformedEl,
              ____transformed83,
              transformFunc,
            );
          },
          p: transformed83.lQ1,
          d(shouldInvokeD) {
            if (shouldInvokeD) {
              (0, transformed83.YoD)(____transformed83);
            }
          },
        };
      }
      function __toggleDisplay(initialSelect) {
        let toggleSpan;
        return {
          c() {
            (toggleSpan = (0, transformed83.ND4)("span")).textContent =
              "Show " + initialSelect[15](r.A.org("tabStatusMode"));
            (0, transformed83.CFu)(
              toggleSpan,
              "class",
              "right silent s-vmzf1o",
            );
          },
          m(transformAndH, _toggleSpan) {
            (0, transformed83.Yry)(transformAndH, toggleSpan, _toggleSpan);
          },
          p: transformed83.lQ1,
          d(rootScopeIsEx) {
            if (rootScopeIsEx) {
              (0, transformed83.YoD)(toggleSpan);
            }
          },
        };
      }
      function _transformAnon(timeFormatter) {
        let transientData;
        let daylightHours =
          timeFormatter[1].Hdd(
            timeFormatter[16](r.A.org("triggerIgnoreSizeBelow")),
          ) + "";
        let calculationFb;
        let iterationKey;
        return {
          c() {
            transientData = (0, transformed83.Qq7)("Ignore cells below ");
            calculationFb = (0, transformed83.Qq7)(daylightHours);
            iterationKey = (0, transformed83.Qq7)(" mass");
          },
          m(___handler, ________processData) {
            (0, transformed83.Yry)(
              ___handler,
              transientData,
              ________processData,
            );
            (0, transformed83.Yry)(
              ___handler,
              calculationFb,
              ________processData,
            );
            (0, transformed83.Yry)(
              ___handler,
              iterationKey,
              ________processData,
            );
          },
          p(_____________________________________anonymousUser, timeBasedUser) {
            if (
              timeBasedUser & 2 &&
              daylightHours !==
                (daylightHours =
                  _____________________________________anonymousUser[1].Hdd(
                    _____________________________________anonymousUser[16](
                      r.A.org("triggerIgnoreSizeBelow"),
                    ),
                  ) + "")
            ) {
              (0, transformed83.iQh)(calculationFb, daylightHours);
            }
          },
          d(checkExist) {
            if (checkExist) {
              (0, transformed83.YoD)(transientData);
              (0, transformed83.YoD)(calculationFb);
              (0, transformed83.YoD)(iterationKey);
            }
          },
        };
      }
      function createInterac(
        ______________________________________anonymousUser,
      ) {
        let _____transformed83;
        let taskId;
        let taskData;
        let iterationId;
        let n;
        return {
          c() {
            _____transformed83 = (0, transformed83.ND4)("div");
            taskId = (0, transformed83.ND4)("input");
            (0, transformed83.CFu)(taskId, "type", "range");
            (0, transformed83.CFu)(taskId, "class", "range spacing s-vmzf1o");
            (0, transformed83.CFu)(taskId, "min", "10");
            (0, transformed83.CFu)(taskId, "max", "500");
            (0, transformed83.CFu)(taskId, "step", "1");
            (0, transformed83.CFu)(
              taskId,
              "data-name",
              "triggerIgnoreSizeBelow",
            );
            (0, transformed83.CFu)(
              _____transformed83,
              "class",
              "row spacing s-vmzf1o",
            );
            (0, transformed83.CFu)(
              _____transformed83,
              "data-tip",
              "The minimum amount of mass for the targets new cells before being ignored by the triggerbot",
            );
          },
          m(chainableData, o) {
            (0, transformed83.Yry)(chainableData, _____transformed83, o);
            (0, transformed83.BCw)(_____transformed83, taskId);
            if (!iterationId) {
              n = [
                (0, transformed83.KTR)(
                  taskId,
                  "input",
                  ______________________________________anonymousUser[12],
                ),
                (0, transformed83.hGc)(
                  (taskData =
                    ______________________________________anonymousUser[13].call(
                      null,
                      taskId,
                    )),
                ),
              ];
              iterationId = true;
            }
          },
          p: transformed83.lQ1,
          d(_settings) {
            if (_settings) {
              (0, transformed83.YoD)(_____transformed83);
            }
            ((iterationId = false), transformed83.oOW)(n);
          },
        };
      }
      function initContentSp() {
        let createText;
        return {
          c() {
            (createText = (0, transformed83.ND4)("span")).textContent =
              "" + r.A.org("triggerAtCells");
            (0, transformed83.CFu)(
              createText,
              "class",
              "silent right s-vmzf1o",
            );
          },
          m(__________eventData, eventTransl2) {
            (0, transformed83.Yry)(
              __________eventData,
              createText,
              eventTransl2,
            );
          },
          p: transformed83.lQ1,
          d(checkAndApply) {
            if (checkAndApply) {
              (0, transformed83.YoD)(createText);
            }
          },
        };
      }
      function Y(initUserData) {
        let initializedE;
        let unusedTempor;
        let _tempUserData;
        let ___userIndex = initUserData[3];
        let n;
        let incrementalTm;
        let o;
        let r;
        let l;
        let c;
        let __userIdIndex;
        let __processAnonym;
        let currentUserId;
        let ____userIndex;
        let ______initializeAnd;
        let m;
        let untestedPlace = initUserData[3];
        let p;
        let f;
        let temporaryUser;
        let __tempUserData;
        let _______________________________________anonymousUser;
        let _____userIndex;
        let ___initialize;
        let userIndex4;
        let getUserIndex;
        let ___tempUserData;
        let ____tempUserData;
        let nextUserIndex;
        let _initializedE;
        let queryFetcher;
        let mapIterableTo;
        let intermediate;
        let isValidInput;
        let getThirdUserP;
        let initializeByF;
        let extractAndMan;
        let ______userIndex;
        let ____________counter;
        let FunctionW;
        let _______userIndex;
        let ________userIndex;
        let _________userIndex;
        let manipulateOrC;
        let __________userIndex;
        let ___________userIndex;
        let unusedItem;
        let formatMessage;
        let __stateManager;
        let ______________________userData;
        let userDataSlice;
        let prepareUserVi;
        let ___userIdIndex;
        let iterationCoun;
        let ____________userIndex;
        let userIdData;
        let initializeRed;
        let ____userIdIndex;
        let iter;
        let containsUser;
        let _____________userIndex;
        let ______________userIndex = updateHud();
        let _____userIdIndex = createSpanAnd();
        let _______________userIndex =
          initUserData[7] && initializeDOM(initUserData);
        let computeTotal = initUserData[8] && Processor(initUserData);
        let ________________userIndex =
          initUserData[9] && initPageOrJS(initUserData);
        return {
          c() {
            initializedE = (0, transformed83.ND4)("div");
            unusedTempor = (0, transformed83.ND4)("div");
            _tempUserData = (0, transformed83.Qq7)(
              "Scale\r\n                    ",
            );
            ______________userIndex.c();
            n = (0, transformed83.xem)();
            incrementalTm = (0, transformed83.ND4)("input");
            r = (0, transformed83.xem)();
            l = (0, transformed83.ND4)("div");
            c = (0, transformed83.ND4)("input");
            __processAnonym = (0, transformed83.xem)();
            (currentUserId = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Show chat';
            ____userIndex = (0, transformed83.xem)();
            ______initializeAnd = (0, transformed83.ND4)("div");
            m = (0, transformed83.Qq7)(
              "Chat: Message list size\r\n                    ",
            );
            _____userIdIndex.c();
            p = (0, transformed83.xem)();
            f = (0, transformed83.ND4)("input");
            __tempUserData = (0, transformed83.xem)();
            _______________________________________anonymousUser = (0,
            transformed83.ND4)("div");
            _____userIndex = (0, transformed83.ND4)("input");
            userIndex4 = (0, transformed83.xem)();
            (getUserIndex = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Show leaderboard';
            ___tempUserData = (0, transformed83.xem)();
            ____tempUserData = (0, transformed83.ND4)("div");
            nextUserIndex = (0, transformed83.ND4)("input");
            queryFetcher = (0, transformed83.xem)();
            (mapIterableTo = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Leaderboard: Server name';
            intermediate = (0, transformed83.xem)();
            isValidInput = (0, transformed83.ND4)("div");
            getThirdUserP = (0, transformed83.ND4)("input");
            extractAndMan = (0, transformed83.xem)();
            (______userIndex = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Leaderboard: Exclude bots';
            ____________counter = (0, transformed83.xem)();
            FunctionW = (0, transformed83.ND4)("div");
            _______userIndex = (0, transformed83.ND4)("input");
            _________userIndex = (0, transformed83.xem)();
            (manipulateOrC = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Show stats';
            __________userIndex = (0, transformed83.xem)();
            if (_______________userIndex) {
              _______________userIndex.c();
            }
            ___________userIndex = (0, transformed83.xem)();
            unusedItem = (0, transformed83.ND4)("div");
            formatMessage = (0, transformed83.ND4)("input");
            ______________________userData = (0, transformed83.xem)();
            (userDataSlice = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Show minimap';
            prepareUserVi = (0, transformed83.xem)();
            if (computeTotal) {
              computeTotal.c();
            }
            ___userIdIndex = (0, transformed83.xem)();
            iterationCoun = (0, transformed83.ND4)("div");
            ____________userIndex = (0, transformed83.ND4)("input");
            initializeRed = (0, transformed83.xem)();
            (____userIdIndex = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Show minimap stats';
            iter = (0, transformed83.xem)();
            if (________________userIndex) {
              ________________userIndex.c();
            }
            (0, transformed83.CFu)(incrementalTm, "type", "range");
            (0, transformed83.CFu)(
              incrementalTm,
              "class",
              "range spacing s-vmzf1o",
            );
            (0, transformed83.CFu)(incrementalTm, "min", "0.5");
            (0, transformed83.CFu)(incrementalTm, "max", "2");
            (0, transformed83.CFu)(incrementalTm, "step", "0.05");
            (0, transformed83.CFu)(incrementalTm, "data-name", "hudScale");
            (0, transformed83.CFu)(
              unusedTempor,
              "class",
              "option spacing s-vmzf1o",
            );
            (0, transformed83.CFu)(c, "type", "checkbox");
            (0, transformed83.CFu)(c, "id", "show-chat");
            (0, transformed83.CFu)(c, "data-name", "showChat");
            (0, transformed83.CFu)(c, "class", "s-vmzf1o");
            (0, transformed83.CFu)(currentUserId, "for", "show-chat");
            (0, transformed83.CFu)(currentUserId, "class", "s-vmzf1o");
            (0, transformed83.CFu)(l, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(f, "type", "range");
            (0, transformed83.CFu)(f, "class", "range spacing s-vmzf1o");
            (0, transformed83.CFu)(f, "min", "200");
            (0, transformed83.CFu)(f, "max", "500");
            (0, transformed83.CFu)(f, "step", "50");
            (0, transformed83.CFu)(f, "data-name", "chatHeight");
            (0, transformed83.CFu)(
              ______initializeAnd,
              "class",
              "option spacing s-vmzf1o",
            );
            (0, transformed83.CFu)(_____userIndex, "type", "checkbox");
            (0, transformed83.CFu)(_____userIndex, "id", "show-leaderboard");
            (0, transformed83.CFu)(
              _____userIndex,
              "data-name",
              "showLeaderboard",
            );
            (0, transformed83.CFu)(_____userIndex, "class", "s-vmzf1o");
            (0, transformed83.CFu)(getUserIndex, "for", "show-leaderboard");
            (0, transformed83.CFu)(getUserIndex, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              _______________________________________anonymousUser,
              "class",
              "option s-vmzf1o",
            );
            (0, transformed83.CFu)(nextUserIndex, "type", "checkbox");
            (0, transformed83.CFu)(nextUserIndex, "id", "show-server-name");
            (0, transformed83.CFu)(
              nextUserIndex,
              "data-name",
              "showServerName",
            );
            (0, transformed83.CFu)(nextUserIndex, "class", "s-vmzf1o");
            (0, transformed83.CFu)(mapIterableTo, "for", "show-server-name");
            (0, transformed83.CFu)(mapIterableTo, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              ____tempUserData,
              "class",
              "option s-vmzf1o",
            );
            (0, transformed83.CFu)(getThirdUserP, "type", "checkbox");
            (0, transformed83.CFu)(
              getThirdUserP,
              "id",
              "exclude-bots-on-leaderboard",
            );
            (0, transformed83.CFu)(
              getThirdUserP,
              "data-name",
              "excludeBotsOnLeaderboard",
            );
            (0, transformed83.CFu)(getThirdUserP, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              ______userIndex,
              "for",
              "exclude-bots-on-leaderboard",
            );
            (0, transformed83.CFu)(______userIndex, "class", "s-vmzf1o");
            (0, transformed83.CFu)(isValidInput, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(_______userIndex, "type", "checkbox");
            (0, transformed83.CFu)(_______userIndex, "id", "show-stats");
            (0, transformed83.CFu)(_______userIndex, "data-name", "showStats");
            (0, transformed83.CFu)(_______userIndex, "class", "s-vmzf1o");
            (0, transformed83.CFu)(manipulateOrC, "for", "show-stats");
            (0, transformed83.CFu)(manipulateOrC, "class", "s-vmzf1o");
            (0, transformed83.CFu)(FunctionW, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(formatMessage, "type", "checkbox");
            (0, transformed83.CFu)(formatMessage, "id", "show-minimap");
            (0, transformed83.CFu)(
              formatMessage,
              "data-name",
              "minimapEnabled",
            );
            (0, transformed83.CFu)(formatMessage, "class", "s-vmzf1o");
            (0, transformed83.CFu)(userDataSlice, "for", "show-minimap");
            (0, transformed83.CFu)(userDataSlice, "class", "s-vmzf1o");
            (0, transformed83.CFu)(unusedItem, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(____________userIndex, "type", "checkbox");
            (0, transformed83.CFu)(
              ____________userIndex,
              "id",
              "show-minimap-stats",
            );
            (0, transformed83.CFu)(
              ____________userIndex,
              "data-name",
              "showMinimapStats",
            );
            (0, transformed83.CFu)(____________userIndex, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              ____userIdIndex,
              "for",
              "show-minimap-stats",
            );
            (0, transformed83.CFu)(____userIdIndex, "class", "s-vmzf1o");
            (0, transformed83.CFu)(iterationCoun, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(initializedE, "class", "content s-vmzf1o");
          },
          m(____elementIndex, _dataPreparer) {
            (0, transformed83.Yry)(
              ____elementIndex,
              initializedE,
              _dataPreparer,
            );
            (0, transformed83.BCw)(initializedE, unusedTempor);
            (0, transformed83.BCw)(unusedTempor, _tempUserData);
            ______________userIndex.m(unusedTempor, null);
            (0, transformed83.BCw)(unusedTempor, n);
            (0, transformed83.BCw)(unusedTempor, incrementalTm);
            (0, transformed83.BCw)(initializedE, r);
            (0, transformed83.BCw)(initializedE, l);
            (0, transformed83.BCw)(l, c);
            (0, transformed83.BCw)(l, __processAnonym);
            (0, transformed83.BCw)(l, currentUserId);
            (0, transformed83.BCw)(initializedE, ____userIndex);
            (0, transformed83.BCw)(initializedE, ______initializeAnd);
            (0, transformed83.BCw)(______initializeAnd, m);
            _____userIdIndex.m(______initializeAnd, null);
            (0, transformed83.BCw)(______initializeAnd, p);
            (0, transformed83.BCw)(______initializeAnd, f);
            (0, transformed83.BCw)(initializedE, __tempUserData);
            (0, transformed83.BCw)(
              initializedE,
              _______________________________________anonymousUser,
            );
            (0, transformed83.BCw)(
              _______________________________________anonymousUser,
              _____userIndex,
            );
            (0, transformed83.BCw)(
              _______________________________________anonymousUser,
              userIndex4,
            );
            (0, transformed83.BCw)(
              _______________________________________anonymousUser,
              getUserIndex,
            );
            (0, transformed83.BCw)(initializedE, ___tempUserData);
            (0, transformed83.BCw)(initializedE, ____tempUserData);
            (0, transformed83.BCw)(____tempUserData, nextUserIndex);
            (0, transformed83.BCw)(____tempUserData, queryFetcher);
            (0, transformed83.BCw)(____tempUserData, mapIterableTo);
            (0, transformed83.BCw)(initializedE, intermediate);
            (0, transformed83.BCw)(initializedE, isValidInput);
            (0, transformed83.BCw)(isValidInput, getThirdUserP);
            (0, transformed83.BCw)(isValidInput, extractAndMan);
            (0, transformed83.BCw)(isValidInput, ______userIndex);
            (0, transformed83.BCw)(initializedE, ____________counter);
            (0, transformed83.BCw)(initializedE, FunctionW);
            (0, transformed83.BCw)(FunctionW, _______userIndex);
            (0, transformed83.BCw)(FunctionW, _________userIndex);
            (0, transformed83.BCw)(FunctionW, manipulateOrC);
            (0, transformed83.BCw)(initializedE, __________userIndex);
            if (_______________userIndex) {
              _______________userIndex.m(initializedE, null);
            }
            (0, transformed83.BCw)(initializedE, ___________userIndex);
            (0, transformed83.BCw)(initializedE, unusedItem);
            (0, transformed83.BCw)(unusedItem, formatMessage);
            (0, transformed83.BCw)(unusedItem, ______________________userData);
            (0, transformed83.BCw)(unusedItem, userDataSlice);
            (0, transformed83.BCw)(initializedE, prepareUserVi);
            if (computeTotal) {
              computeTotal.m(initializedE, null);
            }
            (0, transformed83.BCw)(initializedE, ___userIdIndex);
            (0, transformed83.BCw)(initializedE, iterationCoun);
            (0, transformed83.BCw)(iterationCoun, ____________userIndex);
            (0, transformed83.BCw)(iterationCoun, initializeRed);
            (0, transformed83.BCw)(iterationCoun, ____userIdIndex);
            (0, transformed83.BCw)(initializedE, iter);
            if (________________userIndex) {
              ________________userIndex.m(initializedE, null);
            }
            if (!containsUser) {
              _____________userIndex = [
                (0, transformed83.KTR)(
                  incrementalTm,
                  "input",
                  initUserData[12],
                ),
                (0, transformed83.hGc)(
                  (o = initUserData[13].call(null, incrementalTm)),
                ),
                (0, transformed83.KTR)(c, "change", initUserData[12]),
                (0, transformed83.hGc)(
                  (__userIdIndex = initUserData[13].call(null, c)),
                ),
                (0, transformed83.KTR)(f, "input", initUserData[12]),
                (0, transformed83.hGc)(
                  (temporaryUser = initUserData[13].call(null, f)),
                ),
                (0, transformed83.KTR)(
                  _____userIndex,
                  "change",
                  initUserData[12],
                ),
                (0, transformed83.hGc)(
                  (___initialize = initUserData[13].call(null, _____userIndex)),
                ),
                (0, transformed83.KTR)(
                  nextUserIndex,
                  "change",
                  initUserData[12],
                ),
                (0, transformed83.hGc)(
                  (_initializedE = initUserData[13].call(null, nextUserIndex)),
                ),
                (0, transformed83.KTR)(
                  getThirdUserP,
                  "change",
                  initUserData[12],
                ),
                (0, transformed83.hGc)(
                  (initializeByF = initUserData[13].call(null, getThirdUserP)),
                ),
                (0, transformed83.KTR)(
                  _______userIndex,
                  "change",
                  initUserData[12],
                ),
                (0, transformed83.hGc)(
                  (________userIndex = initUserData[13].call(
                    null,
                    _______userIndex,
                  )),
                ),
                (0, transformed83.KTR)(
                  formatMessage,
                  "change",
                  initUserData[12],
                ),
                (0, transformed83.hGc)(
                  (__stateManager = initUserData[13].call(null, formatMessage)),
                ),
                (0, transformed83.KTR)(
                  ____________userIndex,
                  "change",
                  initUserData[12],
                ),
                (0, transformed83.hGc)(
                  (userIdData = initUserData[13].call(
                    null,
                    ____________userIndex,
                  )),
                ),
              ];
              containsUser = true;
            }
          },
          p(_____elementIndex, mask83) {
            if (
              mask83 & 8 &&
              (0, transformed83.jXN)(
                ___userIndex,
                (___userIndex = _____elementIndex[3]),
              )
            ) {
              ______________userIndex.d(1);
              (______________userIndex = updateHud()).c();
              ______________userIndex.m(unusedTempor, n);
            } else {
              ______________userIndex.p(_____elementIndex, mask83);
            }
            if (
              mask83 & 8 &&
              (0, transformed83.jXN)(
                untestedPlace,
                (untestedPlace = _____elementIndex[3]),
              )
            ) {
              _____userIdIndex.d(1);
              (_____userIdIndex = createSpanAnd()).c();
              _____userIdIndex.m(______initializeAnd, p);
            } else {
              _____userIdIndex.p(_____elementIndex, mask83);
            }
            if (_____elementIndex[7]) {
              if (_______________userIndex) {
                _______________userIndex.p(_____elementIndex, mask83);
              } else {
                (_______________userIndex =
                  initializeDOM(_____elementIndex)).c();
                _______________userIndex.m(initializedE, ___________userIndex);
              }
            } else if (_______________userIndex) {
              _______________userIndex.d(1);
              _______________userIndex = null;
            }
            if (_____elementIndex[8]) {
              if (computeTotal) {
                computeTotal.p(_____elementIndex, mask83);
              } else {
                (computeTotal = Processor(_____elementIndex)).c();
                computeTotal.m(initializedE, ___userIdIndex);
              }
            } else if (computeTotal) {
              computeTotal.d(1);
              computeTotal = null;
            }
            if (_____elementIndex[9]) {
              if (________________userIndex) {
                ________________userIndex.p(_____elementIndex, mask83);
              } else {
                (________________userIndex =
                  initPageOrJS(_____elementIndex)).c();
                ________________userIndex.m(initializedE, null);
              }
            } else if (________________userIndex) {
              ________________userIndex.d(1);
              ________________userIndex = null;
            }
          },
          d(____checkAndCall) {
            if (____checkAndCall) {
              (0, transformed83.YoD)(initializedE);
            }
            ______________userIndex.d(____checkAndCall);
            _____userIdIndex.d(____checkAndCall);
            if (_______________userIndex) {
              _______________userIndex.d();
            }
            if (computeTotal) {
              computeTotal.d();
            }
            if (________________userIndex) {
              ________________userIndex.d();
            }
            ((containsUser = false), transformed83.oOW)(_____________userIndex);
          },
        };
      }
      function updateHud() {
        let tempElement;
        return {
          c() {
            (tempElement = (0, transformed83.ND4)("span")).textContent =
              Math.round(r.A.org("hudScale") * 100) + "%";
            (0, transformed83.CFu)(
              tempElement,
              "class",
              "silent right s-vmzf1o",
            );
          },
          m(______inputData, transCount) {
            (0, transformed83.Yry)(______inputData, tempElement, transCount);
          },
          p: transformed83.lQ1,
          d(_conditionFlag) {
            if (_conditionFlag) {
              (0, transformed83.YoD)(tempElement);
            }
          },
        };
      }
      function createSpanAnd() {
        let chatUIConfig;
        return {
          c() {
            (chatUIConfig = (0, transformed83.ND4)("span")).textContent =
              r.A.org("chatHeight") + "px";
            (0, transformed83.CFu)(
              chatUIConfig,
              "class",
              "silent right s-vmzf1o",
            );
          },
          m(inputParams, ______transformed83) {
            (0, transformed83.Yry)(
              inputParams,
              chatUIConfig,
              ______transformed83,
            );
          },
          p: transformed83.lQ1,
          d(isUserActive) {
            if (isUserActive) {
              (0, transformed83.YoD)(chatUIConfig);
            }
          },
        };
      }
      function initializeDOM(getOrSetItem) {
        let ___________________________placeholder;
        let toggler;
        let alreadyExists;
        let _____________________________index;
        let n;
        let elementIter;
        let o;
        let r;
        let l;
        let c;
        let _initializeDOM;
        let ____________________________placeholder;
        let _convertToAnon;
        let _________processData;
        let fetchOrCreate;
        let m;
        let conditionDOM;
        let p;
        let f;
        let tempDomRef;
        let cacheItem;
        let _elementRef;
        let __initializeDOM;
        let domElementTra;
        let domIndex;
        let ___initializeDOM;
        let getDOMElement;
        let _elementIter;
        let setIterationC;
        let createOrInit;
        let _targetElement;
        let createOrRetrP;
        let indexKey;
        let _getValueOrSet;
        let Y;
        let placeholderID;
        let randomElement;
        return {
          c() {
            ___________________________placeholder = (0, transformed83.ND4)(
              "div",
            );
            toggler = (0, transformed83.ND4)("input");
            _____________________________index = (0, transformed83.xem)();
            (n = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Stats: FPS';
            elementIter = (0, transformed83.xem)();
            o = (0, transformed83.ND4)("div");
            r = (0, transformed83.ND4)("input");
            c = (0, transformed83.xem)();
            (_initializeDOM = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Stats: Ping';
            ____________________________placeholder = (0, transformed83.xem)();
            _convertToAnon = (0, transformed83.ND4)("div");
            _________processData = (0, transformed83.ND4)("input");
            m = (0, transformed83.xem)();
            (conditionDOM = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Stats: Total Mass';
            p = (0, transformed83.xem)();
            f = (0, transformed83.ND4)("div");
            tempDomRef = (0, transformed83.ND4)("input");
            _elementRef = (0, transformed83.xem)();
            (__initializeDOM = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Stats: Mass';
            domElementTra = (0, transformed83.xem)();
            domIndex = (0, transformed83.ND4)("div");
            ___initializeDOM = (0, transformed83.ND4)("input");
            _elementIter = (0, transformed83.xem)();
            (setIterationC = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Stats: Score';
            createOrInit = (0, transformed83.xem)();
            _targetElement = (0, transformed83.ND4)("div");
            createOrRetrP = (0, transformed83.ND4)("input");
            _getValueOrSet = (0, transformed83.xem)();
            (Y = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Stats: Cell count';
            (0, transformed83.CFu)(toggler, "type", "checkbox");
            (0, transformed83.CFu)(toggler, "id", "show-fps");
            (0, transformed83.CFu)(toggler, "data-name", "showFPS");
            (0, transformed83.CFu)(toggler, "class", "s-vmzf1o");
            (0, transformed83.CFu)(n, "for", "show-fps");
            (0, transformed83.CFu)(n, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              ___________________________placeholder,
              "class",
              "option s-vmzf1o",
            );
            (0, transformed83.CFu)(r, "type", "checkbox");
            (0, transformed83.CFu)(r, "id", "show-ping");
            (0, transformed83.CFu)(r, "data-name", "showPing");
            (0, transformed83.CFu)(r, "class", "s-vmzf1o");
            (0, transformed83.CFu)(_initializeDOM, "for", "show-ping");
            (0, transformed83.CFu)(_initializeDOM, "class", "s-vmzf1o");
            (0, transformed83.CFu)(o, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(o, "data-tip", "Ping of the active tab");
            (0, transformed83.CFu)(_________processData, "type", "checkbox");
            (0, transformed83.CFu)(_________processData, "id", "show-mass");
            (0, transformed83.CFu)(
              _________processData,
              "data-name",
              "showPlayerMass",
            );
            (0, transformed83.CFu)(_________processData, "class", "s-vmzf1o");
            (0, transformed83.CFu)(conditionDOM, "for", "show-mass");
            (0, transformed83.CFu)(conditionDOM, "class", "s-vmzf1o");
            (0, transformed83.CFu)(_convertToAnon, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(
              _convertToAnon,
              "data-tip",
              "Current mass of the active tab",
            );
            (0, transformed83.CFu)(tempDomRef, "type", "checkbox");
            (0, transformed83.CFu)(tempDomRef, "id", "show-total-mass");
            (0, transformed83.CFu)(
              tempDomRef,
              "data-name",
              "showTotalPlayerMass",
            );
            (0, transformed83.CFu)(tempDomRef, "class", "s-vmzf1o");
            (0, transformed83.CFu)(__initializeDOM, "for", "show-total-mass");
            (0, transformed83.CFu)(__initializeDOM, "class", "s-vmzf1o");
            (0, transformed83.CFu)(f, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(f, "data-tip", "Total mass of both tabs");
            (0, transformed83.CFu)(___initializeDOM, "type", "checkbox");
            (0, transformed83.CFu)(
              ___initializeDOM,
              "id",
              "show-highest-score",
            );
            (0, transformed83.CFu)(
              ___initializeDOM,
              "data-name",
              "showPlayerScore",
            );
            (0, transformed83.CFu)(___initializeDOM, "class", "s-vmzf1o");
            (0, transformed83.CFu)(setIterationC, "for", "show-highest-score");
            (0, transformed83.CFu)(setIterationC, "class", "s-vmzf1o");
            (0, transformed83.CFu)(domIndex, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(
              domIndex,
              "data-tip",
              "Highest score of the active tab",
            );
            (0, transformed83.CFu)(createOrRetrP, "type", "checkbox");
            (0, transformed83.CFu)(createOrRetrP, "id", "show-cell-count");
            (0, transformed83.CFu)(createOrRetrP, "data-name", "showCellCount");
            (0, transformed83.CFu)(createOrRetrP, "class", "s-vmzf1o");
            (0, transformed83.CFu)(Y, "for", "show-cell-count");
            (0, transformed83.CFu)(Y, "class", "s-vmzf1o");
            (0, transformed83.CFu)(_targetElement, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(
              _targetElement,
              "data-tip",
              "Cell count of the active tab",
            );
          },
          m(transformByAs, transformingC) {
            (0, transformed83.Yry)(
              transformByAs,
              ___________________________placeholder,
              transformingC,
            );
            (0, transformed83.BCw)(
              ___________________________placeholder,
              toggler,
            );
            (0, transformed83.BCw)(
              ___________________________placeholder,
              _____________________________index,
            );
            (0, transformed83.BCw)(___________________________placeholder, n);
            (0, transformed83.Yry)(transformByAs, elementIter, transformingC);
            (0, transformed83.Yry)(transformByAs, o, transformingC);
            (0, transformed83.BCw)(o, r);
            (0, transformed83.BCw)(o, c);
            (0, transformed83.BCw)(o, _initializeDOM);
            (0, transformed83.Yry)(
              transformByAs,
              ____________________________placeholder,
              transformingC,
            );
            (0, transformed83.Yry)(
              transformByAs,
              _convertToAnon,
              transformingC,
            );
            (0, transformed83.BCw)(_convertToAnon, _________processData);
            (0, transformed83.BCw)(_convertToAnon, m);
            (0, transformed83.BCw)(_convertToAnon, conditionDOM);
            (0, transformed83.Yry)(transformByAs, p, transformingC);
            (0, transformed83.Yry)(transformByAs, f, transformingC);
            (0, transformed83.BCw)(f, tempDomRef);
            (0, transformed83.BCw)(f, _elementRef);
            (0, transformed83.BCw)(f, __initializeDOM);
            (0, transformed83.Yry)(transformByAs, domElementTra, transformingC);
            (0, transformed83.Yry)(transformByAs, domIndex, transformingC);
            (0, transformed83.BCw)(domIndex, ___initializeDOM);
            (0, transformed83.BCw)(domIndex, _elementIter);
            (0, transformed83.BCw)(domIndex, setIterationC);
            (0, transformed83.Yry)(transformByAs, createOrInit, transformingC);
            (0, transformed83.Yry)(
              transformByAs,
              _targetElement,
              transformingC,
            );
            (0, transformed83.BCw)(_targetElement, createOrRetrP);
            (0, transformed83.BCw)(_targetElement, _getValueOrSet);
            (0, transformed83.BCw)(_targetElement, Y);
            if (!placeholderID) {
              randomElement = [
                (0, transformed83.KTR)(toggler, "change", getOrSetItem[12]),
                (0, transformed83.hGc)(
                  (alreadyExists = getOrSetItem[13].call(null, toggler)),
                ),
                (0, transformed83.KTR)(r, "change", getOrSetItem[12]),
                (0, transformed83.hGc)((l = getOrSetItem[13].call(null, r))),
                (0, transformed83.KTR)(
                  _________processData,
                  "change",
                  getOrSetItem[12],
                ),
                (0, transformed83.hGc)(
                  (fetchOrCreate = getOrSetItem[13].call(
                    null,
                    _________processData,
                  )),
                ),
                (0, transformed83.KTR)(tempDomRef, "change", getOrSetItem[12]),
                (0, transformed83.hGc)(
                  (cacheItem = getOrSetItem[13].call(null, tempDomRef)),
                ),
                (0, transformed83.KTR)(
                  ___initializeDOM,
                  "change",
                  getOrSetItem[12],
                ),
                (0, transformed83.hGc)(
                  (getDOMElement = getOrSetItem[13].call(
                    null,
                    ___initializeDOM,
                  )),
                ),
                (0, transformed83.KTR)(
                  createOrRetrP,
                  "change",
                  getOrSetItem[12],
                ),
                (0, transformed83.hGc)(
                  (indexKey = getOrSetItem[13].call(null, createOrRetrP)),
                ),
              ];
              placeholderID = true;
            }
          },
          p: transformed83.lQ1,
          d(__selector) {
            if (__selector) {
              (0, transformed83.YoD)(___________________________placeholder);
              (0, transformed83.YoD)(elementIter);
              (0, transformed83.YoD)(o);
              (0, transformed83.YoD)(____________________________placeholder);
              (0, transformed83.YoD)(_convertToAnon);
              (0, transformed83.YoD)(p);
              (0, transformed83.YoD)(f);
              (0, transformed83.YoD)(domElementTra);
              (0, transformed83.YoD)(domIndex);
              (0, transformed83.YoD)(createOrInit);
              (0, transformed83.YoD)(_targetElement);
            }
            ((placeholderID = false), transformed83.oOW)(randomElement);
          },
        };
      }
      function Processor(sionDataNdMan) {
        let ___anonymousFn;
        let __thirdElement;
        let startIndex;
        let dataIterator;
        let n;
        let processThirdN;
        let o;
        let r;
        let l = sionDataNdMan[3];
        let c;
        let __isEven;
        let sionDataNDMan;
        let DatasetReduc;
        let _____________________________placeholder;
        let processThirdE = calculateAndS();
        return {
          c() {
            ___anonymousFn = (0, transformed83.ND4)("div");
            __thirdElement = (0, transformed83.ND4)("input");
            dataIterator = (0, transformed83.xem)();
            (n = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Minimap: Show locations';
            processThirdN = (0, transformed83.xem)();
            o = (0, transformed83.ND4)("div");
            r = (0, transformed83.Qq7)(
              "Minimap: Resolution\r\n                    ",
            );
            processThirdE.c();
            c = (0, transformed83.xem)();
            __isEven = (0, transformed83.ND4)("input");
            (0, transformed83.CFu)(__thirdElement, "type", "checkbox");
            (0, transformed83.CFu)(__thirdElement, "id", "show-locations");
            (0, transformed83.CFu)(
              __thirdElement,
              "data-name",
              "minimapLocations",
            );
            (0, transformed83.CFu)(__thirdElement, "class", "s-vmzf1o");
            (0, transformed83.CFu)(n, "for", "show-locations");
            (0, transformed83.CFu)(n, "class", "s-vmzf1o");
            (0, transformed83.CFu)(___anonymousFn, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(
              ___anonymousFn,
              "data-tip",
              "Show informal grid codes on the player map",
            );
            (0, transformed83.CFu)(__isEven, "type", "range");
            (0, transformed83.CFu)(__isEven, "class", "range spacing s-vmzf1o");
            (0, transformed83.CFu)(__isEven, "min", "0.5");
            (0, transformed83.CFu)(__isEven, "max", "2");
            (0, transformed83.CFu)(__isEven, "step", "0.05");
            (0, transformed83.CFu)(__isEven, "data-name", "minimapResolution");
            (0, transformed83.CFu)(o, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(
              o,
              "data-tip",
              "Lower for performance, higher for sharpness",
            );
          },
          m(l, m) {
            (0, transformed83.Yry)(l, ___anonymousFn, m);
            (0, transformed83.BCw)(___anonymousFn, __thirdElement);
            (0, transformed83.BCw)(___anonymousFn, dataIterator);
            (0, transformed83.BCw)(___anonymousFn, n);
            (0, transformed83.Yry)(l, processThirdN, m);
            (0, transformed83.Yry)(l, o, m);
            (0, transformed83.BCw)(o, r);
            processThirdE.m(o, null);
            (0, transformed83.BCw)(o, c);
            (0, transformed83.BCw)(o, __isEven);
            if (!DatasetReduc) {
              _____________________________placeholder = [
                (0, transformed83.KTR)(
                  __thirdElement,
                  "change",
                  sionDataNdMan[12],
                ),
                (0, transformed83.hGc)(
                  (startIndex = sionDataNdMan[13].call(null, __thirdElement)),
                ),
                (0, transformed83.KTR)(__isEven, "input", sionDataNdMan[12]),
                (0, transformed83.KTR)(__isEven, "change", sionDataNdMan[19]),
                (0, transformed83.hGc)(
                  (sionDataNDMan = sionDataNdMan[13].call(null, __isEven)),
                ),
              ];
              DatasetReduc = true;
            }
          },
          p(_processThirdE, hasCondition) {
            if (
              hasCondition & 8 &&
              (0, transformed83.jXN)(l, (l = _processThirdE[3]))
            ) {
              processThirdE.d(1);
              (processThirdE = calculateAndS()).c();
              processThirdE.m(o, c);
            } else {
              processThirdE.p(_processThirdE, hasCondition);
            }
          },
          d(checkAndCall8) {
            if (checkAndCall8) {
              (0, transformed83.YoD)(___anonymousFn);
              (0, transformed83.YoD)(processThirdN);
              (0, transformed83.YoD)(o);
            }
            processThirdE.d(checkAndCall8);
            ((DatasetReduc = false), transformed83.oOW)(
              _____________________________placeholder,
            );
          },
        };
      }
      function calculateAndS() {
        let ______tempStorage;
        return {
          c() {
            (______tempStorage = (0, transformed83.ND4)("span")).textContent =
              (r.A.org("minimapResolution") * 100).toFixed(0) + "%";
            (0, transformed83.CFu)(
              ______tempStorage,
              "class",
              "silent right s-vmzf1o",
            );
          },
          m(transData, __additionalArg) {
            (0, transformed83.Yry)(
              transData,
              ______tempStorage,
              __additionalArg,
            );
          },
          p: transformed83.lQ1,
          d(____eventTrigger) {
            if (____eventTrigger) {
              (0, transformed83.YoD)(______tempStorage);
            }
          },
        };
      }
      function initPageOrJS(___________isAnonymous) {
        let initError;
        let startPageLoad;
        let pageLoadDefer;
        let ___iterator;
        let n;
        let ______elementIndex;
        let o;
        let r;
        let l;
        let c;
        let _initCounter;
        let _initPageOrJS;
        let initErrorInfo;
        let initScript;
        let _initializeWeb;
        let m;
        let __initPageOrJS;
        let p;
        let f;
        let ___currentItem;
        let _itemCounter;
        let ____________isAnonymous;
        let currentIter;
        let __elementIter;
        let _initialized;
        let PageInitAndJS;
        let ___initPageOrJS;
        let _____currentIndex;
        let pageLoadIter;
        let ______initializeApp;
        let AnonymousQ;
        let _dataIterator;
        let ____initPageOrJS;
        let isAnonymousIn;
        let Y;
        let ______________________________index;
        let renderElement;
        return {
          c() {
            initError = (0, transformed83.ND4)("div");
            startPageLoad = (0, transformed83.ND4)("input");
            ___iterator = (0, transformed83.xem)();
            (n = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Minimap: System time';
            ______elementIndex = (0, transformed83.xem)();
            o = (0, transformed83.ND4)("div");
            r = (0, transformed83.ND4)("input");
            c = (0, transformed83.xem)();
            (_initCounter = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Minimap: Session time';
            _initPageOrJS = (0, transformed83.xem)();
            initErrorInfo = (0, transformed83.ND4)("div");
            initScript = (0, transformed83.ND4)("input");
            m = (0, transformed83.xem)();
            (__initPageOrJS = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Minimap: Players in server';
            p = (0, transformed83.xem)();
            f = (0, transformed83.ND4)("div");
            ___currentItem = (0, transformed83.ND4)("input");
            ____________isAnonymous = (0, transformed83.xem)();
            (currentIter = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Minimap: Spectators';
            __elementIter = (0, transformed83.xem)();
            _initialized = (0, transformed83.ND4)("div");
            PageInitAndJS = (0, transformed83.ND4)("input");
            _____currentIndex = (0, transformed83.xem)();
            (pageLoadIter = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Minimap: Tag&#39;s total mass';
            ______initializeApp = (0, transformed83.xem)();
            AnonymousQ = (0, transformed83.ND4)("div");
            _dataIterator = (0, transformed83.ND4)("input");
            isAnonymousIn = (0, transformed83.xem)();
            (Y = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Minimap: Server restart time';
            (0, transformed83.CFu)(startPageLoad, "type", "checkbox");
            (0, transformed83.CFu)(startPageLoad, "id", "show-system-time");
            (0, transformed83.CFu)(startPageLoad, "data-name", "showClock");
            (0, transformed83.CFu)(startPageLoad, "class", "s-vmzf1o");
            (0, transformed83.CFu)(n, "for", "show-system-time");
            (0, transformed83.CFu)(n, "class", "s-vmzf1o");
            (0, transformed83.CFu)(initError, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(r, "type", "checkbox");
            (0, transformed83.CFu)(r, "id", "show-session-time");
            (0, transformed83.CFu)(r, "data-name", "showSessionTime");
            (0, transformed83.CFu)(r, "class", "s-vmzf1o");
            (0, transformed83.CFu)(_initCounter, "for", "show-session-time");
            (0, transformed83.CFu)(_initCounter, "class", "s-vmzf1o");
            (0, transformed83.CFu)(o, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(initScript, "type", "checkbox");
            (0, transformed83.CFu)(initScript, "id", "show-player-count");
            (0, transformed83.CFu)(initScript, "data-name", "showPlayerCount");
            (0, transformed83.CFu)(initScript, "class", "s-vmzf1o");
            (0, transformed83.CFu)(__initPageOrJS, "for", "show-player-count");
            (0, transformed83.CFu)(__initPageOrJS, "class", "s-vmzf1o");
            (0, transformed83.CFu)(initErrorInfo, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(___currentItem, "type", "checkbox");
            (0, transformed83.CFu)(___currentItem, "id", "show-spectators");
            (0, transformed83.CFu)(
              ___currentItem,
              "data-name",
              "showSpectators",
            );
            (0, transformed83.CFu)(___currentItem, "class", "s-vmzf1o");
            (0, transformed83.CFu)(currentIter, "for", "show-spectators");
            (0, transformed83.CFu)(currentIter, "class", "s-vmzf1o");
            (0, transformed83.CFu)(f, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(PageInitAndJS, "type", "checkbox");
            (0, transformed83.CFu)(PageInitAndJS, "id", "show-tag-total-score");
            (0, transformed83.CFu)(
              PageInitAndJS,
              "data-name",
              "showTagTotalMass",
            );
            (0, transformed83.CFu)(
              PageInitAndJS,
              "data-tip",
              "The total mass of your active tab's tag, this does not work for global tag",
            );
            (0, transformed83.CFu)(PageInitAndJS, "class", "s-vmzf1o");
            (0, transformed83.CFu)(pageLoadIter, "for", "show-tag-total-score");
            (0, transformed83.CFu)(pageLoadIter, "class", "s-vmzf1o");
            (0, transformed83.CFu)(_initialized, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(_dataIterator, "type", "checkbox");
            (0, transformed83.CFu)(_dataIterator, "id", "show-restart-time");
            (0, transformed83.CFu)(
              _dataIterator,
              "data-name",
              "showRestartTiming",
            );
            (0, transformed83.CFu)(_dataIterator, "class", "s-vmzf1o");
            (0, transformed83.CFu)(Y, "for", "show-restart-time");
            (0, transformed83.CFu)(Y, "class", "s-vmzf1o");
            (0, transformed83.CFu)(AnonymousQ, "class", "option s-vmzf1o");
          },
          m(__calculateArea, areaCalc) {
            (0, transformed83.Yry)(__calculateArea, initError, areaCalc);
            (0, transformed83.BCw)(initError, startPageLoad);
            (0, transformed83.BCw)(initError, ___iterator);
            (0, transformed83.BCw)(initError, n);
            (0, transformed83.Yry)(
              __calculateArea,
              ______elementIndex,
              areaCalc,
            );
            (0, transformed83.Yry)(__calculateArea, o, areaCalc);
            (0, transformed83.BCw)(o, r);
            (0, transformed83.BCw)(o, c);
            (0, transformed83.BCw)(o, _initCounter);
            (0, transformed83.Yry)(__calculateArea, _initPageOrJS, areaCalc);
            (0, transformed83.Yry)(__calculateArea, initErrorInfo, areaCalc);
            (0, transformed83.BCw)(initErrorInfo, initScript);
            (0, transformed83.BCw)(initErrorInfo, m);
            (0, transformed83.BCw)(initErrorInfo, __initPageOrJS);
            (0, transformed83.Yry)(__calculateArea, p, areaCalc);
            (0, transformed83.Yry)(__calculateArea, f, areaCalc);
            (0, transformed83.BCw)(f, ___currentItem);
            (0, transformed83.BCw)(f, ____________isAnonymous);
            (0, transformed83.BCw)(f, currentIter);
            (0, transformed83.Yry)(__calculateArea, __elementIter, areaCalc);
            (0, transformed83.Yry)(__calculateArea, _initialized, areaCalc);
            (0, transformed83.BCw)(_initialized, PageInitAndJS);
            (0, transformed83.BCw)(_initialized, _____currentIndex);
            (0, transformed83.BCw)(_initialized, pageLoadIter);
            (0, transformed83.Yry)(
              __calculateArea,
              ______initializeApp,
              areaCalc,
            );
            (0, transformed83.Yry)(__calculateArea, AnonymousQ, areaCalc);
            (0, transformed83.BCw)(AnonymousQ, _dataIterator);
            (0, transformed83.BCw)(AnonymousQ, isAnonymousIn);
            (0, transformed83.BCw)(AnonymousQ, Y);
            if (!______________________________index) {
              renderElement = [
                (0, transformed83.KTR)(
                  startPageLoad,
                  "change",
                  ___________isAnonymous[12],
                ),
                (0, transformed83.hGc)(
                  (pageLoadDefer = ___________isAnonymous[13].call(
                    null,
                    startPageLoad,
                  )),
                ),
                (0, transformed83.KTR)(r, "change", ___________isAnonymous[12]),
                (0, transformed83.hGc)(
                  (l = ___________isAnonymous[13].call(null, r)),
                ),
                (0, transformed83.KTR)(
                  initScript,
                  "change",
                  ___________isAnonymous[12],
                ),
                (0, transformed83.hGc)(
                  (_initializeWeb = ___________isAnonymous[13].call(
                    null,
                    initScript,
                  )),
                ),
                (0, transformed83.KTR)(
                  ___currentItem,
                  "change",
                  ___________isAnonymous[12],
                ),
                (0, transformed83.hGc)(
                  (_itemCounter = ___________isAnonymous[13].call(
                    null,
                    ___currentItem,
                  )),
                ),
                (0, transformed83.KTR)(
                  PageInitAndJS,
                  "change",
                  ___________isAnonymous[12],
                ),
                (0, transformed83.hGc)(
                  (___initPageOrJS = ___________isAnonymous[13].call(
                    null,
                    PageInitAndJS,
                  )),
                ),
                (0, transformed83.KTR)(
                  _dataIterator,
                  "change",
                  ___________isAnonymous[12],
                ),
                (0, transformed83.hGc)(
                  (____initPageOrJS = ___________isAnonymous[13].call(
                    null,
                    _dataIterator,
                  )),
                ),
              ];
              ______________________________index = true;
            }
          },
          p: transformed83.lQ1,
          d(Placeholder) {
            if (Placeholder) {
              (0, transformed83.YoD)(initError);
              (0, transformed83.YoD)(______elementIndex);
              (0, transformed83.YoD)(o);
              (0, transformed83.YoD)(_initPageOrJS);
              (0, transformed83.YoD)(initErrorInfo);
              (0, transformed83.YoD)(p);
              (0, transformed83.YoD)(f);
              (0, transformed83.YoD)(__elementIter);
              (0, transformed83.YoD)(_initialized);
              (0, transformed83.YoD)(______initializeApp);
              (0, transformed83.YoD)(AnonymousQ);
            }
            ((______________________________index = false), transformed83.oOW)(
              renderElement,
            );
          },
        };
      }
      function H(classCounts) {
        var _iterationCoun;
        let _____________counter;
        let ______currentIndex;
        let classIndex;
        let n;
        let ____initialValue;
        let o;
        let r;
        let c;
        let classCountSum;
        let calculateSumV;
        let _iterationTrav;
        let ______iteration;
        let accumulatedR;
        let calculateMode;
        let __iterationCoun;
        let fetchAnonymBs;
        let __iterationTrav;
        let iterationCnt;
        let ___iterationTrav;
        let classDistro;
        let initLoopIndic = _compose.utils.isWebGLSupported();
        let totalClassSki;
        let ___iterationCoun;
        let ____iterationTrav;
        let currentClass;
        let ____initialize;
        let iterationTrax;
        let _totalCount;
        let classCountInc;
        let ___calculateSum;
        let classCounter = classCounts[3];
        let _____iterationTrav;
        let startValue;
        let iterationIter;
        let totalClassSum;
        let totalClassOcc;
        let classSum;
        let _____result = classCounts[3];
        let calculateLimn;
        let _classCountSum;
        let _______iteration;
        let updateClassCt;
        let updateUI;
        let iterateClass;
        let initialIterCt;
        let __initCounter;
        let _____loopIndex;
        let _currentIter;
        let hiddenState;
        let _progressTrail;
        let ______________loopCounter;
        let traverseCount;
        let ____currentItem;
        let isArray;
        let __iterCounter;
        let classCount;
        let ____calculateSum;
        let processClassC;
        let classLabelFre;
        let _iterationTrax;
        let ________iteration;
        let _totalClassOcc = classCounts[3];
        let visitCount;
        let ____indexCounter;
        let classFrequecy;
        let iterationNum;
        let ___iterCounter;
        let __loopCount;
        let classCountTra;
        let ____iterationCoun;
        let loopedClassCt;
        let _____initialValue;
        let ____iterationTrak;
        let _____iterationCoun;
        let classIndexFre;
        let isEqual;
        let uniqueNumberC;
        let defaultValue;
        let ______iterationCoun;
        let _classFrequecy;
        let HCalculatePer;
        let checkCount;
        let angularPromis;
        let indexedData = classCounts[3];
        let ______________counter;
        let _classCounts;
        let __classCounts;
        let ___classCounts;
        let _iterationId;
        let _______________loopCounter;
        let incremental = classCounts[3];
        let _______iterationCoun;
        let __isActive;
        let __iterationTrax;
        let ________iterationCoun;
        let filterAndSum;
        let createPerson;
        let ___iterationTrax = classCounts[3];
        let weightedClass;
        let _________iteration;
        let addToCart;
        let trackClassPro;
        let elem;
        let _______currentIndex;
        let reduceClassSn = classCounts[3];
        let classCountMap;
        let meanClassSums;
        let edIndex;
        let ___errorHandler;
        let totalClassFre;
        let _____iterationTrak;
        let ________currentIndex = classCounts[3];
        let terminationCx;
        let initializeFre;
        let cumulativeFre;
        let calculateWeig;
        let ____eventDetails;
        let processAnonRe;
        let _iterationCnt = classCounts[3];
        let currentElem;
        let addItemToIng;
        let isValidEmail;
        let __totalClassOcc;
        let ______iterationTrak;
        let _elementCount;
        let initialCount;
        let _isEqual;
        let count;
        let eventType;
        let ______________________eventHandler = classCounts[3];
        let calculateStat;
        let _count;
        let ____classCounts;
        let __classCountSum;
        let counterStart;
        let initialClassC;
        let _classSum;
        let __classFrequecy;
        let removeDupes = classCounts[3];
        let classFrequenc;
        let ______loopIndex;
        let _______iterationTrak;
        let _userDetails;
        let calculateFreq;
        let iterateClassC = classCounts[3];
        let ________iterationTrak;
        let calculateEqui;
        let generateImage;
        let ___accumulator;
        let ______iterationTrav;
        let _______________________userData = classCounts[3];
        let classNameAt;
        let unusedEvent;
        let ________________loopCounter;
        let _initValue;
        let classCountsTo;
        let ______initialValue;
        let _______iterationTrav;
        let __itemCounter;
        let transaction;
        let classOccurrer;
        let iterateH;
        let unused;
        let iterationTraK;
        let _________iterationCoun;
        let _________iterationTrak;
        let __________iterationCoun;
        let typeCounter;
        let _______________________________index;
        let temporaryIter;
        let ____iterCounter;
        let positionalIdx;
        let accumulatedSn;
        let ___itemCounter;
        let ________________________________index;
        let ___minifiedAnon;
        let tokenPool;
        let classInstance;
        let _classCounter;
        let ___classCountSum;
        let ___________iterationCoun;
        let tbox;
        let _____calculateSum;
        let classCountCtr;
        let _calculateFreq;
        let totalIterated;
        let _____classCounts;
        let _________currentIndex;
        let ______classCounts;
        let getClassDistR;
        let allClassCount;
        let iterationTraj;
        let ____classCountSum;
        let _classCount;
        let ___totalClassOcc;
        let __________iteration;
        let transformToF;
        let calculateAccu;
        let _______classCounts;
        let ___eventCounter;
        let maxIterations;
        let countItems;
        let iterateAndSum;
        let _classIndex;
        let _classFrequenc;
        let ____________iterationCoun;
        let ________________________________________anonymousUser;
        let ______calculateSum;
        let countClassOcc;
        let ________iterationTrav;
        let iterateData;
        let _____classCountSum;
        let tKCounter;
        let __classIndex;
        let _iterationTraK;
        let _isEvenNumber;
        let transpose;
        let ____totalClassOcc;
        let ___getAnonymous;
        let _totalClassSum;
        let _________iterationTrav;
        let ____iterationTrax;
        let iterationAcc;
        let ______classCountSum;
        let __anonymizeData;
        let classCountAcc;
        let elementFrequ;
        let classDistSum;
        let ________classCounts;
        let __________currentIndex;
        let _____indexCounter;
        let _____totalClassOcc;
        let customerData;
        let _______classCountSum;
        let classDistrib;
        let ____uninitialized;
        let classOccurren;
        let _____________iterationCoun;
        let weightedMean;
        let ___classFrequecy;
        let _________________________________index;
        let sumClassCount;
        let calculateAvg;
        let _______________________eventHandler;
        let _____iterCounter;
        let sumOfFrequenC = classCounts[3];
        let xyzCounter;
        let ___________currentIndex;
        let _sumClassCount;
        let occurrenceTra;
        let calculateBias;
        let nestedIterCtr;
        let ___classIndex;
        let ____classFrequecy;
        let ______________iterationCoun;
        let cumulativeSum;
        let _______calculateSum;
        let _processCount;
        let ____classIndex = classCounts[3];
        let _totalClassFre;
        let repCounts;
        let ______totalClassOcc;
        let __anonymousCall;
        let __________iterationTrak = classCounts[3];
        let itemCount;
        let _________________loopCounter;
        let indexCountSum;
        let ________classCountSum;
        let matrixMultipy;
        let computeTotalC;
        let _________classCounts;
        let __calculateFreq;
        let ____accumulator;
        let ________calculateSum;
        let __classFrequenc;
        let totalFrequenc;
        let ___dataSource;
        let ___________iterationTrak = (
          _compose.utils.isWebGLSupported() ? gpuSupportDet : highlightGPUD
        )(classCounts);
        let _____classFrequecy =
          initLoopIndic &&
          ((_iterationCoun = classCounts),
          {
            c() {
              _____________counter = (0, transformed83.ND4)("div");
              ______currentIndex = (0, transformed83.ND4)("input");
              n = (0, transformed83.xem)();
              (____initialValue = (0, transformed83.ND4)("label")).innerHTML =
                '<span class="s-vmzf1o"></span> Use GPU rendering';
              (0, transformed83.CFu)(______currentIndex, "type", "checkbox");
              (0, transformed83.CFu)(______currentIndex, "id", "web-gl");
              (0, transformed83.CFu)(
                ______currentIndex,
                "data-name",
                "useWebGL",
              );
              (0, transformed83.CFu)(______currentIndex, "class", "s-vmzf1o");
              (0, transformed83.CFu)(____initialValue, "for", "web-gl");
              (0, transformed83.CFu)(____initialValue, "class", "s-vmzf1o");
              (0, transformed83.CFu)(
                _____________counter,
                "class",
                "option s-vmzf1o",
              );
              (0, transformed83.CFu)(
                _____________counter,
                "data-tip",
                "Detrimental to performance, heavy performance loss is encountered without a GPU",
              );
            },
            m(________context, l) {
              (0, transformed83.Yry)(________context, _____________counter, l);
              (0, transformed83.BCw)(_____________counter, ______currentIndex);
              (0, transformed83.BCw)(_____________counter, n);
              (0, transformed83.BCw)(_____________counter, ____initialValue);
              if (!o) {
                r = [
                  (0, transformed83.KTR)(
                    ______currentIndex,
                    "change",
                    _iterationCoun[12],
                  ),
                  (0, transformed83.hGc)(
                    (classIndex = _iterationCoun[13].call(
                      null,
                      ______currentIndex,
                    )),
                  ),
                ];
                o = true;
              }
            },
            p: transformed83.lQ1,
            d(_____________isAnonymous) {
              if (_____________isAnonymous) {
                (0, transformed83.YoD)(_____________counter);
              }
              ((o = false), transformed83.oOW)(r);
            },
          });
        let classCumSum = m();
        let _______________counter = initializePix();
        let ________getUserData = p();
        let totalClassIns = f();
        let ____iterator = updateRightSt();
        let _______________anonymousData = _createInitial();
        let categorySum = setCameraZoom();
        let groupCount = setupZoomText();
        let _____accumulator = initSpanWithV();
        let countIterator = updateCellSty();
        let initializeSum = wrapHtmlWithS(classCounts);
        let iterativeSum = countSkinsInL(classCounts);
        let initializeToZ = updateMassDiv(classCounts);
        let ___classFrequenc = classCounts[4] && _____processInput(classCounts);
        let classWeighted = __toggleDisplay(classCounts);
        let ____________iterationTrak = _transformAnon(classCounts);
        let __currentIter = classCounts[5] && createInterac(classCounts);
        let __________iterationTrav = initContentSp();
        let _encryptData = classCounts[6] && Y(classCounts);
        return {
          c() {
            c = (0, transformed83.ND4)("div");
            classCountSum = (0, transformed83.ND4)("div");
            (calculateSumV = (0, transformed83.ND4)("span")).textContent =
              "Settings";
            _iterationTrav = (0, transformed83.xem)();
            (______iteration = (0, transformed83.ND4)("button")).innerHTML =
              '<i class="fal fa-times"></i>';
            accumulatedR = (0, transformed83.xem)();
            calculateMode = (0, transformed83.ND4)("div");
            __iterationCoun = (0, transformed83.ND4)("div");
            fetchAnonymBs = (0, transformed83.ND4)("div");
            (__iterationTrav = (0, transformed83.ND4)("span")).textContent =
              "Renderer";
            iterationCnt = (0, transformed83.xem)();
            ___________iterationTrak.c();
            ___iterationTrav = (0, transformed83.xem)();
            classDistro = (0, transformed83.ND4)("div");
            if (_____classFrequecy) {
              _____classFrequecy.c();
            }
            totalClassSki = (0, transformed83.xem)();
            ___iterationCoun = (0, transformed83.ND4)("div");
            ____iterationTrav = (0, transformed83.ND4)("input");
            ____initialize = (0, transformed83.xem)();
            (iterationTrax = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Use anti-aliasing';
            _totalCount = (0, transformed83.xem)();
            classCountInc = (0, transformed83.ND4)("div");
            ___calculateSum = (0, transformed83.Qq7)(
              "Renderer resolution\r\n                    ",
            );
            classCumSum.c();
            _____iterationTrav = (0, transformed83.xem)();
            startValue = (0, transformed83.ND4)("input");
            totalClassSum = (0, transformed83.xem)();
            totalClassOcc = (0, transformed83.ND4)("div");
            classSum = (0, transformed83.Qq7)(
              "Text hiding threshold\r\n                    ",
            );
            _______________counter.c();
            calculateLimn = (0, transformed83.xem)();
            _classCountSum = (0, transformed83.ND4)("input");
            updateClassCt = (0, transformed83.xem)();
            updateUI = (0, transformed83.ND4)("div");
            iterateClass = (0, transformed83.ND4)("div");
            (initialIterCt = (0, transformed83.ND4)("span")).textContent =
              "Game";
            __initCounter = (0, transformed83.xem)();
            (_____loopIndex = (0, transformed83.ND4)("span")).textContent =
              "v" + l.rE;
            _currentIter = (0, transformed83.xem)();
            hiddenState = (0, transformed83.ND4)("div");
            _progressTrail = (0, transformed83.ND4)("div");
            ______________loopCounter = (0, transformed83.ND4)("input");
            ____currentItem = (0, transformed83.xem)();
            (isArray = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Auto zoom';
            __iterCounter = (0, transformed83.xem)();
            classCount = (0, transformed83.ND4)("div");
            ____calculateSum = (0, transformed83.ND4)("input");
            classLabelFre = (0, transformed83.xem)();
            (_iterationTrax = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Remember ejecting';
            ________iteration = (0, transformed83.xem)();
            ________getUserData.c();
            visitCount = (0, transformed83.xem)();
            ____indexCounter = (0, transformed83.ND4)("div");
            classFrequecy = (0, transformed83.ND4)("input");
            ___iterCounter = (0, transformed83.xem)();
            (__loopCount = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Auto respawn';
            classCountTra = (0, transformed83.xem)();
            ____iterationCoun = (0, transformed83.ND4)("div");
            loopedClassCt = (0, transformed83.ND4)("input");
            ____iterationTrak = (0, transformed83.xem)();
            (_____iterationCoun = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Soft mouse freeze';
            classIndexFre = (0, transformed83.xem)();
            isEqual = (0, transformed83.ND4)("div");
            uniqueNumberC = (0, transformed83.ND4)("input");
            ______iterationCoun = (0, transformed83.xem)();
            (_classFrequecy = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Delayed doublesplit hotkey';
            HCalculatePer = (0, transformed83.xem)();
            checkCount = (0, transformed83.ND4)("div");
            angularPromis = (0, transformed83.Qq7)(
              "Draw delay\r\n                    ",
            );
            totalClassIns.c();
            ______________counter = (0, transformed83.xem)();
            _classCounts = (0, transformed83.ND4)("input");
            ___classCounts = (0, transformed83.xem)();
            _iterationId = (0, transformed83.ND4)("div");
            _______________loopCounter = (0, transformed83.Qq7)(
              "Camera panning delay\r\n                    ",
            );
            ____iterator.c();
            _______iterationCoun = (0, transformed83.xem)();
            __isActive = (0, transformed83.ND4)("input");
            ________iterationCoun = (0, transformed83.xem)();
            filterAndSum = (0, transformed83.ND4)("div");
            createPerson = (0, transformed83.Qq7)(
              "Camera switch delay\r\n                    ",
            );
            _______________anonymousData.c();
            weightedClass = (0, transformed83.xem)();
            _________iteration = (0, transformed83.ND4)("input");
            trackClassPro = (0, transformed83.xem)();
            elem = (0, transformed83.ND4)("div");
            _______currentIndex = (0, transformed83.Qq7)(
              "Camera zooming delay\r\n                    ",
            );
            categorySum.c();
            classCountMap = (0, transformed83.xem)();
            meanClassSums = (0, transformed83.ND4)("input");
            ___errorHandler = (0, transformed83.xem)();
            totalClassFre = (0, transformed83.ND4)("div");
            _____iterationTrak = (0, transformed83.Qq7)(
              "Scroll zoom rate\r\n                    ",
            );
            groupCount.c();
            terminationCx = (0, transformed83.xem)();
            initializeFre = (0, transformed83.ND4)("input");
            calculateWeig = (0, transformed83.xem)();
            ____eventDetails = (0, transformed83.ND4)("div");
            processAnonRe = (0, transformed83.Qq7)(
              "Linesplit auto unlock delay\r\n                    ",
            );
            _____accumulator.c();
            currentElem = (0, transformed83.xem)();
            addItemToIng = (0, transformed83.ND4)("input");
            __totalClassOcc = (0, transformed83.xem)();
            ______iterationTrak = (0, transformed83.ND4)("div");
            (_elementCount = (0, transformed83.ND4)("div")).innerHTML =
              '<span class="label s-vmzf1o">Cells</span>';
            initialCount = (0, transformed83.xem)();
            _isEqual = (0, transformed83.ND4)("div");
            count = (0, transformed83.ND4)("div");
            eventType = (0, transformed83.Qq7)(
              "Cells opacity\r\n                    ",
            );
            countIterator.c();
            calculateStat = (0, transformed83.xem)();
            _count = (0, transformed83.ND4)("input");
            __classCountSum = (0, transformed83.xem)();
            counterStart = (0, transformed83.ND4)("div");
            initialClassC = (0, transformed83.ND4)("input");
            __classFrequecy = (0, transformed83.xem)();
            initializeSum.c();
            classFrequenc = (0, transformed83.xem)();
            ______loopIndex = (0, transformed83.ND4)("div");
            _______iterationTrak = (0, transformed83.ND4)("input");
            calculateFreq = (0, transformed83.xem)();
            iterativeSum.c();
            ________iterationTrak = (0, transformed83.xem)();
            calculateEqui = (0, transformed83.ND4)("div");
            generateImage = (0, transformed83.ND4)("input");
            ______iterationTrav = (0, transformed83.xem)();
            initializeToZ.c();
            classNameAt = (0, transformed83.xem)();
            unusedEvent = (0, transformed83.ND4)("div");
            ________________loopCounter = (0, transformed83.ND4)("input");
            classCountsTo = (0, transformed83.xem)();
            (______initialValue = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Show my own name';
            _______iterationTrav = (0, transformed83.xem)();
            __itemCounter = (0, transformed83.ND4)("div");
            transaction = (0, transformed83.ND4)("input");
            iterateH = (0, transformed83.xem)();
            (unused = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Show my own skin';
            iterationTraK = (0, transformed83.xem)();
            _________iterationCoun = (0, transformed83.ND4)("div");
            _________iterationTrak = (0, transformed83.ND4)("input");
            typeCounter = (0, transformed83.xem)();
            (_______________________________index = (0, transformed83.ND4)(
              "label",
            )).innerHTML = '<span class="s-vmzf1o"></span> Show my own mass';
            temporaryIter = (0, transformed83.xem)();
            ____iterCounter = (0, transformed83.ND4)("div");
            positionalIdx = (0, transformed83.ND4)("input");
            ___itemCounter = (0, transformed83.xem)();
            (________________________________index = (0, transformed83.ND4)(
              "label",
            )).innerHTML = '<span class="s-vmzf1o"></span> Show crown';
            ___minifiedAnon = (0, transformed83.xem)();
            tokenPool = (0, transformed83.ND4)("div");
            classInstance = (0, transformed83.ND4)("input");
            ___classCountSum = (0, transformed83.xem)();
            (___________iterationCoun = (0, transformed83.ND4)(
              "label",
            )).innerHTML = '<span class="s-vmzf1o"></span> Show food';
            tbox = (0, transformed83.xem)();
            _____calculateSum = (0, transformed83.ND4)("div");
            classCountCtr = (0, transformed83.ND4)("input");
            totalIterated = (0, transformed83.xem)();
            (_____classCounts = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Show player animation';
            _________currentIndex = (0, transformed83.xem)();
            ______classCounts = (0, transformed83.ND4)("div");
            getClassDistR = (0, transformed83.ND4)("input");
            iterationTraj = (0, transformed83.xem)();
            (____classCountSum = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Show ejected mass animation';
            _classCount = (0, transformed83.xem)();
            ___totalClassOcc = (0, transformed83.ND4)("div");
            __________iteration = (0, transformed83.ND4)("input");
            calculateAccu = (0, transformed83.xem)();
            (_______classCounts = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Show player eaten animation';
            ___eventCounter = (0, transformed83.xem)();
            maxIterations = (0, transformed83.ND4)("div");
            (countItems = (0, transformed83.ND4)("div")).innerHTML =
              '<span class="label s-vmzf1o">Tabs</span>';
            iterateAndSum = (0, transformed83.xem)();
            _classIndex = (0, transformed83.ND4)("div");
            _classFrequenc = (0, transformed83.ND4)("div");
            ____________iterationCoun = (0, transformed83.ND4)("input");
            ______calculateSum = (0, transformed83.xem)();
            (countClassOcc = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Use shared viewport';
            ________iterationTrav = (0, transformed83.xem)();
            if (___classFrequenc) {
              ___classFrequenc.c();
            }
            iterateData = (0, transformed83.xem)();
            _____classCountSum = (0, transformed83.ND4)("div");
            tKCounter = (0, transformed83.ND4)("input");
            _iterationTraK = (0, transformed83.xem)();
            (_isEvenNumber = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Link tab names';
            transpose = (0, transformed83.xem)();
            ____totalClassOcc = (0, transformed83.ND4)("div");
            ___getAnonymous = (0, transformed83.ND4)("input");
            _________iterationTrav = (0, transformed83.xem)();
            (____iterationTrax = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Link tab skins';
            iterationAcc = (0, transformed83.xem)();
            ______classCountSum = (0, transformed83.ND4)("div");
            __anonymizeData = (0, transformed83.ND4)("input");
            elementFrequ = (0, transformed83.xem)();
            (classDistSum = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Link tab tags';
            ________classCounts = (0, transformed83.xem)();
            __________currentIndex = (0, transformed83.ND4)("div");
            _____indexCounter = (0, transformed83.ND4)("input");
            customerData = (0, transformed83.xem)();
            (_______classCountSum = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Tab control mode';
            classDistrib = (0, transformed83.xem)();
            ____uninitialized = (0, transformed83.ND4)("div");
            classOccurren = (0, transformed83.ND4)("input");
            weightedMean = (0, transformed83.xem)();
            (___classFrequecy = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> Connect both tabs at once';
            _________________________________index = (0, transformed83.xem)();
            sumClassCount = (0, transformed83.ND4)("div");
            calculateAvg = (0, transformed83.ND4)("input");
            _____iterCounter = (0, transformed83.xem)();
            classWeighted.c();
            xyzCounter = (0, transformed83.xem)();
            ___________currentIndex = (0, transformed83.ND4)("div");
            (_sumClassCount = (0, transformed83.ND4)("div")).innerHTML =
              '<span class="label s-vmzf1o">Triggerbot</span>';
            occurrenceTra = (0, transformed83.xem)();
            calculateBias = (0, transformed83.ND4)("div");
            nestedIterCtr = (0, transformed83.ND4)("div");
            ___classIndex = (0, transformed83.ND4)("input");
            ______________iterationCoun = (0, transformed83.xem)();
            cumulativeSum = (0, transformed83.ND4)("label");
            _______calculateSum = (0, transformed83.ND4)("span");
            _processCount = (0, transformed83.xem)();
            ____________iterationTrak.c();
            _totalClassFre = (0, transformed83.xem)();
            if (__currentIter) {
              __currentIter.c();
            }
            repCounts = (0, transformed83.xem)();
            ______totalClassOcc = (0, transformed83.ND4)("div");
            __anonymousCall = (0, transformed83.Qq7)(
              "Cells expected\r\n                    ",
            );
            __________iterationTrav.c();
            itemCount = (0, transformed83.xem)();
            _________________loopCounter = (0, transformed83.ND4)("input");
            ________classCountSum = (0, transformed83.xem)();
            matrixMultipy = (0, transformed83.ND4)("div");
            computeTotalC = (0, transformed83.ND4)("div");
            _________classCounts = (0, transformed83.ND4)("input");
            ____accumulator = (0, transformed83.xem)();
            (________calculateSum = (0, transformed83.ND4)("label")).innerHTML =
              '<span class="s-vmzf1o"></span> HUD';
            __classFrequenc = (0, transformed83.xem)();
            if (_encryptData) {
              _encryptData.c();
            }
            (0, transformed83.CFu)(calculateSumV, "class", "label s-vmzf1o");
            (0, transformed83.CFu)(
              ______iteration,
              "class",
              "close button s-vmzf1o",
            );
            (0, transformed83.CFu)(
              classCountSum,
              "class",
              "main-header s-vmzf1o",
            );
            (0, transformed83.CFu)(__iterationTrav, "class", "label s-vmzf1o");
            (0, transformed83.CFu)(fetchAnonymBs, "class", "header s-vmzf1o");
            (0, transformed83.CFu)(____iterationTrav, "type", "checkbox");
            (0, transformed83.CFu)(
              ____iterationTrav,
              "id",
              "use-anti-aliasing",
            );
            (0, transformed83.CFu)(
              ____iterationTrav,
              "data-name",
              "useAntialiasing",
            );
            (0, transformed83.CFu)(____iterationTrav, "class", "s-vmzf1o");
            (0, transformed83.CFu)(iterationTrax, "for", "use-anti-aliasing");
            (0, transformed83.CFu)(iterationTrax, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              ___iterationCoun,
              "class",
              "option s-vmzf1o",
            );
            (0, transformed83.CFu)(
              ___iterationCoun,
              "data-tip",
              "Enable for sharpness, performance is heavily impacted",
            );
            (0, transformed83.CFu)(startValue, "type", "range");
            (0, transformed83.CFu)(
              startValue,
              "class",
              "range spacing s-vmzf1o",
            );
            (0, transformed83.CFu)(startValue, "min", "0.5");
            (0, transformed83.CFu)(startValue, "max", "3");
            (0, transformed83.CFu)(startValue, "step", "0.05");
            (0, transformed83.CFu)(startValue, "data-name", "gameResolution");
            (0, transformed83.CFu)(classCountInc, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(
              classCountInc,
              "data-tip",
              "Lower for performance, higher for sharpness",
            );
            (0, transformed83.CFu)(_classCountSum, "type", "range");
            (0, transformed83.CFu)(
              _classCountSum,
              "class",
              "range spacing s-vmzf1o",
            );
            (0, transformed83.CFu)(_classCountSum, "min", "10");
            (0, transformed83.CFu)(_classCountSum, "max", "60");
            (0, transformed83.CFu)(_classCountSum, "step", "5");
            (0, transformed83.CFu)(
              _classCountSum,
              "data-name",
              "smallTextThreshold",
            );
            (0, transformed83.CFu)(totalClassOcc, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(
              totalClassOcc,
              "data-tip",
              "Text on smaller cells will be hidden for performance",
            );
            (0, transformed83.CFu)(classDistro, "class", "content s-vmzf1o");
            (0, transformed83.CFu)(
              __iterationCoun,
              "class",
              "section s-vmzf1o",
            );
            (0, transformed83.CFu)(initialIterCt, "class", "label s-vmzf1o");
            (0, transformed83.CFu)(
              _____loopIndex,
              "class",
              "silent right s-vmzf1o",
            );
            (0, transformed83.CFu)(iterateClass, "class", "header s-vmzf1o");
            (0, transformed83.CFu)(
              ______________loopCounter,
              "type",
              "checkbox",
            );
            (0, transformed83.CFu)(
              ______________loopCounter,
              "id",
              "auto-zoom",
            );
            (0, transformed83.CFu)(
              ______________loopCounter,
              "data-name",
              "autoZoom",
            );
            (0, transformed83.CFu)(
              ______________loopCounter,
              "class",
              "s-vmzf1o",
            );
            (0, transformed83.CFu)(isArray, "for", "auto-zoom");
            (0, transformed83.CFu)(isArray, "class", "s-vmzf1o");
            (0, transformed83.CFu)(_progressTrail, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(
              _progressTrail,
              "data-tip",
              "Zooms out automatically as you gain mass",
            );
            (0, transformed83.CFu)(____calculateSum, "type", "checkbox");
            (0, transformed83.CFu)(____calculateSum, "id", "remember-ejecting");
            (0, transformed83.CFu)(
              ____calculateSum,
              "data-name",
              "rememberEjecting",
            );
            (0, transformed83.CFu)(____calculateSum, "class", "s-vmzf1o");
            (0, transformed83.CFu)(_iterationTrax, "for", "remember-ejecting");
            (0, transformed83.hgi)(_iterationTrax, "margin-bottom", "3px");
            (0, transformed83.CFu)(_iterationTrax, "class", "s-vmzf1o");
            (0, transformed83.CFu)(classCount, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(classFrequecy, "type", "checkbox");
            (0, transformed83.CFu)(classFrequecy, "id", "auto-respawn");
            (0, transformed83.CFu)(classFrequecy, "data-name", "autoRespawn");
            (0, transformed83.CFu)(classFrequecy, "class", "s-vmzf1o");
            (0, transformed83.CFu)(__loopCount, "for", "auto-respawn");
            (0, transformed83.CFu)(__loopCount, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              ____indexCounter,
              "class",
              "option s-vmzf1o",
            );
            (0, transformed83.CFu)(
              ____indexCounter,
              "data-tip",
              "Automatically spawn each tabs upon death if the main menu isn't open",
            );
            (0, transformed83.CFu)(loopedClassCt, "type", "checkbox");
            (0, transformed83.CFu)(loopedClassCt, "id", "soft-mouse-freeze");
            (0, transformed83.CFu)(
              loopedClassCt,
              "data-name",
              "mouseFreezeSoft",
            );
            (0, transformed83.CFu)(loopedClassCt, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              _____iterationCoun,
              "for",
              "soft-mouse-freeze",
            );
            (0, transformed83.CFu)(_____iterationCoun, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              ____iterationCoun,
              "class",
              "option s-vmzf1o",
            );
            (0, transformed83.CFu)(
              ____iterationCoun,
              "data-tip",
              'Moving your mouse cancels the "Freeze mouse" hotkey on the active tab if enabled',
            );
            (0, transformed83.CFu)(uniqueNumberC, "type", "checkbox");
            (0, transformed83.CFu)(uniqueNumberC, "id", "delay-doublesplit");
            (0, transformed83.CFu)(
              uniqueNumberC,
              "data-name",
              "delayDoublesplit",
            );
            (0, transformed83.CFu)(uniqueNumberC, "class", "s-vmzf1o");
            (0, transformed83.CFu)(_classFrequecy, "for", "delay-doublesplit");
            (0, transformed83.CFu)(_classFrequecy, "class", "s-vmzf1o");
            (0, transformed83.CFu)(isEqual, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(
              isEqual,
              "data-tip",
              "Flicking may be more accurate if enabled",
            );
            (0, transformed83.CFu)(_classCounts, "type", "range");
            (0, transformed83.CFu)(
              _classCounts,
              "class",
              "range spacing s-vmzf1o",
            );
            (0, transformed83.CFu)(_classCounts, "min", "10");
            (0, transformed83.CFu)(_classCounts, "max", "300");
            (0, transformed83.CFu)(_classCounts, "step", "5");
            (0, transformed83.CFu)(_classCounts, "data-name", "drawDelay");
            (0, transformed83.CFu)(checkCount, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(
              checkCount,
              "data-tip",
              "Lower is more responsive, higher is smoother",
            );
            (0, transformed83.CFu)(__isActive, "type", "range");
            (0, transformed83.CFu)(
              __isActive,
              "class",
              "range spacing s-vmzf1o",
            );
            (0, transformed83.CFu)(__isActive, "min", "10");
            (0, transformed83.CFu)(__isActive, "max", "1000");
            (0, transformed83.CFu)(__isActive, "step", "10");
            (0, transformed83.CFu)(__isActive, "data-name", "cameraMoveDelay");
            (0, transformed83.CFu)(_iterationId, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(
              _iterationId,
              "data-tip",
              "How fast the camera follows your tab(s) while moving",
            );
            (0, transformed83.CFu)(_________iteration, "type", "range");
            (0, transformed83.CFu)(
              _________iteration,
              "class",
              "range spacing s-vmzf1o",
            );
            (0, transformed83.CFu)(_________iteration, "min", "10");
            (0, transformed83.CFu)(_________iteration, "max", "1000");
            (0, transformed83.CFu)(_________iteration, "step", "10");
            (0, transformed83.CFu)(
              _________iteration,
              "data-name",
              "cameraSwitchDelay",
            );
            (0, transformed83.CFu)(filterAndSum, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(
              filterAndSum,
              "data-tip",
              "How fast the camera moves to your active tab upon tab switching",
            );
            (0, transformed83.CFu)(meanClassSums, "type", "range");
            (0, transformed83.CFu)(
              meanClassSums,
              "class",
              "range spacing s-vmzf1o",
            );
            (0, transformed83.CFu)(meanClassSums, "min", "10");
            (0, transformed83.CFu)(meanClassSums, "max", "1000");
            (0, transformed83.CFu)(meanClassSums, "step", "10");
            (0, transformed83.CFu)(
              meanClassSums,
              "data-name",
              "cameraZoomDelay",
            );
            (0, transformed83.CFu)(elem, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(
              elem,
              "data-tip",
              "How fast the camera is zoomed in/out upon user input",
            );
            (0, transformed83.CFu)(initializeFre, "type", "range");
            (0, transformed83.CFu)(
              initializeFre,
              "class",
              "range spacing s-vmzf1o",
            );
            (0, transformed83.CFu)(initializeFre, "min", "1");
            (0, transformed83.CFu)(initializeFre, "max", "20");
            (0, transformed83.CFu)(initializeFre, "step", "1");
            (0, transformed83.CFu)(
              initializeFre,
              "data-name",
              "cameraZoomSpeed",
            );
            (0, transformed83.CFu)(totalClassFre, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(
              totalClassFre,
              "data-tip",
              "Responsiveness for zooming with scroll-wheel",
            );
            (0, transformed83.CFu)(addItemToIng, "type", "range");
            (0, transformed83.CFu)(
              addItemToIng,
              "class",
              "range spacing s-vmzf1o",
            );
            (0, transformed83.CFu)(addItemToIng, "min", "300");
            (0, transformed83.CFu)(addItemToIng, "max", "5000");
            (0, transformed83.CFu)(addItemToIng, "step", "50");
            (0, transformed83.CFu)(addItemToIng, "data-name", "lineSplitDelay");
            (0, transformed83.CFu)(
              ____eventDetails,
              "class",
              "option s-vmzf1o",
            );
            (0, transformed83.CFu)(
              ____eventDetails,
              "data-tip",
              'Delay for automatically disabling "Freeze mouse" after line-splitting',
            );
            (0, transformed83.CFu)(hiddenState, "class", "content s-vmzf1o");
            (0, transformed83.CFu)(updateUI, "class", "section s-vmzf1o");
            (0, transformed83.CFu)(_elementCount, "class", "header s-vmzf1o");
            (0, transformed83.CFu)(_count, "type", "range");
            (0, transformed83.CFu)(_count, "class", "range spacing s-vmzf1o");
            (0, transformed83.CFu)(_count, "min", "0.1");
            (0, transformed83.CFu)(_count, "max", "1");
            (0, transformed83.CFu)(_count, "step", "0.05");
            (0, transformed83.CFu)(_count, "data-name", "cellsOpacity");
            (0, transformed83.CFu)(count, "class", "row spacing s-vmzf1o");
            (0, transformed83.CFu)(
              count,
              "data-tip",
              "How opaque cells in-game are",
            );
            (0, transformed83.CFu)(initialClassC, "type", "range");
            (0, transformed83.CFu)(
              initialClassC,
              "class",
              "left range s-vmzf1o",
            );
            (0, transformed83.CFu)(initialClassC, "min", "0");
            (0, transformed83.CFu)(initialClassC, "max", "2");
            (0, transformed83.CFu)(initialClassC, "step", "1");
            (0, transformed83.CFu)(initialClassC, "data-name", "showNames");
            (0, transformed83.CFu)(
              counterStart,
              "class",
              "inline-row s-vmzf1o",
            );
            (0, transformed83.CFu)(_______iterationTrak, "type", "range");
            (0, transformed83.CFu)(
              _______iterationTrak,
              "class",
              "left range s-vmzf1o",
            );
            (0, transformed83.CFu)(_______iterationTrak, "min", "0");
            (0, transformed83.CFu)(_______iterationTrak, "max", "2");
            (0, transformed83.CFu)(_______iterationTrak, "step", "1");
            (0, transformed83.CFu)(
              _______iterationTrak,
              "data-name",
              "showSkins",
            );
            (0, transformed83.CFu)(
              ______loopIndex,
              "class",
              "inline-row s-vmzf1o",
            );
            (0, transformed83.CFu)(generateImage, "type", "range");
            (0, transformed83.CFu)(
              generateImage,
              "class",
              "left range s-vmzf1o",
            );
            (0, transformed83.CFu)(generateImage, "min", "0");
            (0, transformed83.CFu)(generateImage, "max", "2");
            (0, transformed83.CFu)(generateImage, "step", "1");
            (0, transformed83.CFu)(generateImage, "data-name", "showMass");
            (0, transformed83.CFu)(
              calculateEqui,
              "class",
              "inline-row s-vmzf1o",
            );
            (0, transformed83.CFu)(
              ________________loopCounter,
              "type",
              "checkbox",
            );
            (0, transformed83.CFu)(
              ________________loopCounter,
              "id",
              "show-own-name",
            );
            (0, transformed83.CFu)(
              ________________loopCounter,
              "data-name",
              "showOwnName",
            );
            (0, transformed83.CFu)(
              ________________loopCounter,
              "class",
              "s-vmzf1o",
            );
            (0, transformed83.CFu)(______initialValue, "for", "show-own-name");
            (0, transformed83.CFu)(______initialValue, "class", "s-vmzf1o");
            (0, transformed83.CFu)(unusedEvent, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(transaction, "type", "checkbox");
            (0, transformed83.CFu)(transaction, "id", "show-own-skin");
            (0, transformed83.CFu)(transaction, "data-name", "showOwnSkin");
            (0, transformed83.CFu)(transaction, "class", "s-vmzf1o");
            (0, transformed83.CFu)(unused, "for", "show-own-skin");
            (0, transformed83.CFu)(unused, "class", "s-vmzf1o");
            (0, transformed83.CFu)(__itemCounter, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(_________iterationTrak, "type", "checkbox");
            (0, transformed83.CFu)(
              _________iterationTrak,
              "id",
              "show-own-mass",
            );
            (0, transformed83.CFu)(
              _________iterationTrak,
              "data-name",
              "showOwnMass",
            );
            (0, transformed83.CFu)(_________iterationTrak, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              _______________________________index,
              "for",
              "show-own-mass",
            );
            (0, transformed83.CFu)(
              _______________________________index,
              "class",
              "s-vmzf1o",
            );
            (0, transformed83.CFu)(
              _________iterationCoun,
              "class",
              "option s-vmzf1o",
            );
            (0, transformed83.CFu)(positionalIdx, "type", "checkbox");
            (0, transformed83.CFu)(positionalIdx, "id", "show-crown");
            (0, transformed83.CFu)(positionalIdx, "data-name", "showCrown");
            (0, transformed83.CFu)(positionalIdx, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              ________________________________index,
              "for",
              "show-crown",
            );
            (0, transformed83.CFu)(
              ________________________________index,
              "class",
              "s-vmzf1o",
            );
            (0, transformed83.CFu)(____iterCounter, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(classInstance, "type", "checkbox");
            (0, transformed83.CFu)(classInstance, "id", "show-food");
            (0, transformed83.CFu)(classInstance, "data-name", "foodVisible");
            (0, transformed83.CFu)(classInstance, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              ___________iterationCoun,
              "for",
              "show-food",
            );
            (0, transformed83.CFu)(
              ___________iterationCoun,
              "class",
              "s-vmzf1o",
            );
            (0, transformed83.CFu)(tokenPool, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(classCountCtr, "type", "checkbox");
            (0, transformed83.CFu)(
              classCountCtr,
              "id",
              "show-player-animation",
            );
            (0, transformed83.CFu)(
              classCountCtr,
              "data-name",
              "animatePlayerCells",
            );
            (0, transformed83.CFu)(classCountCtr, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              _____classCounts,
              "for",
              "show-player-animation",
            );
            (0, transformed83.CFu)(_____classCounts, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              _____calculateSum,
              "class",
              "option s-vmzf1o",
            );
            (0, transformed83.CFu)(getClassDistR, "type", "checkbox");
            (0, transformed83.CFu)(
              getClassDistR,
              "id",
              "show-ejected-animation",
            );
            (0, transformed83.CFu)(
              getClassDistR,
              "data-name",
              "animateEjectedCells",
            );
            (0, transformed83.CFu)(getClassDistR, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              ____classCountSum,
              "for",
              "show-ejected-animation",
            );
            (0, transformed83.CFu)(____classCountSum, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              ______classCounts,
              "class",
              "option s-vmzf1o",
            );
            (0, transformed83.CFu)(__________iteration, "type", "checkbox");
            (0, transformed83.CFu)(
              __________iteration,
              "id",
              "show-eat-animation",
            );
            (0, transformed83.CFu)(
              __________iteration,
              "data-name",
              "eatAnimation",
            );
            (0, transformed83.CFu)(__________iteration, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              _______classCounts,
              "for",
              "show-eat-animation",
            );
            (0, transformed83.CFu)(_______classCounts, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              ___totalClassOcc,
              "class",
              "option s-vmzf1o",
            );
            (0, transformed83.CFu)(_isEqual, "class", "content s-vmzf1o");
            (0, transformed83.CFu)(
              ______iterationTrak,
              "class",
              "section s-vmzf1o",
            );
            (0, transformed83.CFu)(countItems, "class", "header s-vmzf1o");
            (0, transformed83.CFu)(
              ____________iterationCoun,
              "type",
              "checkbox",
            );
            (0, transformed83.CFu)(
              ____________iterationCoun,
              "id",
              "use-shared-viewport",
            );
            (0, transformed83.CFu)(
              ____________iterationCoun,
              "data-name",
              "useSharedViewport",
            );
            (0, transformed83.CFu)(
              ____________iterationCoun,
              "class",
              "s-vmzf1o",
            );
            (0, transformed83.CFu)(countClassOcc, "for", "use-shared-viewport");
            (0, transformed83.CFu)(countClassOcc, "class", "s-vmzf1o");
            (0, transformed83.CFu)(_classFrequenc, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(
              _classFrequenc,
              "data-tip",
              "When in range, tabs will share the same viewport",
            );
            (0, transformed83.CFu)(tKCounter, "type", "checkbox");
            (0, transformed83.CFu)(tKCounter, "id", "link-tab-names");
            (0, transformed83.CFu)(tKCounter, "data-name", "linkTabNames");
            (0, transformed83.CFu)(tKCounter, "class", "s-vmzf1o");
            (0, transformed83.CFu)(_isEvenNumber, "for", "link-tab-names");
            (0, transformed83.CFu)(_isEvenNumber, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              _____classCountSum,
              "class",
              "option s-vmzf1o",
            );
            (0, transformed83.CFu)(
              _____classCountSum,
              "data-tip",
              "When enabled, tabs will share the same name",
            );
            (0, transformed83.CFu)(___getAnonymous, "type", "checkbox");
            (0, transformed83.CFu)(___getAnonymous, "id", "link-tab-skins");
            (0, transformed83.CFu)(
              ___getAnonymous,
              "data-name",
              "linkTabSkins",
            );
            (0, transformed83.CFu)(___getAnonymous, "class", "s-vmzf1o");
            (0, transformed83.CFu)(____iterationTrax, "for", "link-tab-skins");
            (0, transformed83.CFu)(____iterationTrax, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              ____totalClassOcc,
              "class",
              "option s-vmzf1o",
            );
            (0, transformed83.CFu)(
              ____totalClassOcc,
              "data-tip",
              "When enabled, tabs will share the same skin",
            );
            (0, transformed83.CFu)(__anonymizeData, "type", "checkbox");
            (0, transformed83.CFu)(__anonymizeData, "id", "link-tab-tags");
            (0, transformed83.CFu)(__anonymizeData, "data-name", "linkTabTags");
            (0, transformed83.CFu)(__anonymizeData, "class", "s-vmzf1o");
            (0, transformed83.CFu)(classDistSum, "for", "link-tab-tags");
            (0, transformed83.CFu)(classDistSum, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              ______classCountSum,
              "class",
              "option s-vmzf1o",
            );
            (0, transformed83.CFu)(
              ______classCountSum,
              "data-tip",
              "When enabled, tabs will share the same tag",
            );
            (0, transformed83.CFu)(_____indexCounter, "type", "checkbox");
            (0, transformed83.CFu)(
              _____indexCounter,
              "id",
              "switch-control-mode",
            );
            (0, transformed83.CFu)(
              _____indexCounter,
              "data-name",
              "switchControlMode",
            );
            (0, transformed83.CFu)(_____indexCounter, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              _______classCountSum,
              "for",
              "switch-control-mode",
            );
            (0, transformed83.CFu)(_______classCountSum, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              __________currentIndex,
              "class",
              "option s-vmzf1o",
            );
            (0, transformed83.CFu)(
              __________currentIndex,
              "data-tip",
              "When enabled, your inactive tab will always follow your mouse with its own set of hotkeys",
            );
            (0, transformed83.CFu)(classOccurren, "type", "checkbox");
            (0, transformed83.CFu)(classOccurren, "id", "join-tabs-together");
            (0, transformed83.CFu)(
              classOccurren,
              "data-name",
              "joinTabsTogether",
            );
            (0, transformed83.CFu)(classOccurren, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              ___classFrequecy,
              "for",
              "join-tabs-together",
            );
            (0, transformed83.CFu)(___classFrequecy, "class", "s-vmzf1o");
            (0, transformed83.CFu)(
              ____uninitialized,
              "class",
              "option s-vmzf1o",
            );
            (0, transformed83.CFu)(
              ____uninitialized,
              "data-tip",
              "Both of your tabs will join the server at the same time whenever you join a server",
            );
            (0, transformed83.CFu)(calculateAvg, "type", "range");
            (0, transformed83.CFu)(
              calculateAvg,
              "class",
              "left range s-vmzf1o",
            );
            (0, transformed83.CFu)(calculateAvg, "min", "0");
            (0, transformed83.CFu)(calculateAvg, "max", "2");
            (0, transformed83.CFu)(calculateAvg, "step", "1");
            (0, transformed83.CFu)(calculateAvg, "data-name", "tabStatusMode");
            (0, transformed83.CFu)(
              sumClassCount,
              "class",
              "inline-row spacing s-vmzf1o",
            );
            (0, transformed83.CFu)(
              sumClassCount,
              "data-tip",
              "What mode to show whether or not your tab is focused or not",
            );
            (0, transformed83.CFu)(_classIndex, "class", "content s-vmzf1o");
            (0, transformed83.CFu)(maxIterations, "class", "section s-vmzf1o");
            (0, transformed83.CFu)(_sumClassCount, "class", "header s-vmzf1o");
            (0, transformed83.CFu)(___classIndex, "type", "checkbox");
            (0, transformed83.CFu)(___classIndex, "id", "ignore-size-enabled");
            (0, transformed83.CFu)(
              ___classIndex,
              "data-name",
              "triggerIgnoreSizeEnabled",
            );
            (0, transformed83.CFu)(___classIndex, "class", "s-vmzf1o");
            (0, transformed83.CFu)(_______calculateSum, "class", "s-vmzf1o");
            (0, transformed83.CFu)(cumulativeSum, "for", "ignore-size-enabled");
            (0, transformed83.CFu)(cumulativeSum, "class", "s-vmzf1o");
            (0, transformed83.CFu)(nestedIterCtr, "class", "option s-vmzf1o");
            (0, transformed83.CFu)(
              nestedIterCtr,
              "data-tip",
              "Whether or not to ignore new cells when their mass is below the specified threshold",
            );
            (0, transformed83.CFu)(
              _________________loopCounter,
              "type",
              "range",
            );
            (0, transformed83.CFu)(
              _________________loopCounter,
              "class",
              "range spacing s-vmzf1o",
            );
            (0, transformed83.CFu)(_________________loopCounter, "min", "1");
            (0, transformed83.CFu)(_________________loopCounter, "max", "256");
            (0, transformed83.CFu)(_________________loopCounter, "step", "1");
            (0, transformed83.CFu)(
              _________________loopCounter,
              "data-name",
              "triggerAtCells",
            );
            (0, transformed83.CFu)(
              ______totalClassOcc,
              "class",
              "option spacing s-vmzf1o",
            );
            (0, transformed83.CFu)(
              ______totalClassOcc,
              "data-tip",
              "The number of cells the targeted player needs to produce for the triggerbot to trigger",
            );
            (0, transformed83.CFu)(calculateBias, "class", "content s-vmzf1o");
            (0, transformed83.CFu)(
              ___________currentIndex,
              "class",
              "section s-vmzf1o",
            );
            (0, transformed83.CFu)(_________classCounts, "type", "checkbox");
            (0, transformed83.CFu)(_________classCounts, "id", "show-hud");
            (0, transformed83.CFu)(
              _________classCounts,
              "data-name",
              "showHud",
            );
            (0, transformed83.CFu)(_________classCounts, "class", "s-vmzf1o");
            (0, transformed83.CFu)(________calculateSum, "for", "show-hud");
            (0, transformed83.hgi)(________calculateSum, "flex", "1");
            (0, transformed83.CFu)(________calculateSum, "class", "s-vmzf1o");
            (0, transformed83.CFu)(computeTotalC, "class", "header s-vmzf1o");
            (0, transformed83.goL)(computeTotalC, "disabled", !classCounts[6]);
            (0, transformed83.CFu)(matrixMultipy, "class", "section s-vmzf1o");
            (0, transformed83.CFu)(calculateMode, "class", "sections s-vmzf1o");
            (0, transformed83.CFu)(c, "class", "inner-content s-vmzf1o");
          },
          m(inputSequence, timeConstant) {
            (0, transformed83.Yry)(inputSequence, c, timeConstant);
            (0, transformed83.BCw)(c, classCountSum);
            (0, transformed83.BCw)(classCountSum, calculateSumV);
            (0, transformed83.BCw)(classCountSum, _iterationTrav);
            (0, transformed83.BCw)(classCountSum, ______iteration);
            (0, transformed83.BCw)(c, accumulatedR);
            (0, transformed83.BCw)(c, calculateMode);
            (0, transformed83.BCw)(calculateMode, __iterationCoun);
            (0, transformed83.BCw)(__iterationCoun, fetchAnonymBs);
            (0, transformed83.BCw)(fetchAnonymBs, __iterationTrav);
            (0, transformed83.BCw)(fetchAnonymBs, iterationCnt);
            ___________iterationTrak.m(fetchAnonymBs, null);
            (0, transformed83.BCw)(__iterationCoun, ___iterationTrav);
            (0, transformed83.BCw)(__iterationCoun, classDistro);
            if (_____classFrequecy) {
              _____classFrequecy.m(classDistro, null);
            }
            (0, transformed83.BCw)(classDistro, totalClassSki);
            (0, transformed83.BCw)(classDistro, ___iterationCoun);
            (0, transformed83.BCw)(___iterationCoun, ____iterationTrav);
            (0, transformed83.BCw)(___iterationCoun, ____initialize);
            (0, transformed83.BCw)(___iterationCoun, iterationTrax);
            (0, transformed83.BCw)(classDistro, _totalCount);
            (0, transformed83.BCw)(classDistro, classCountInc);
            (0, transformed83.BCw)(classCountInc, ___calculateSum);
            classCumSum.m(classCountInc, null);
            (0, transformed83.BCw)(classCountInc, _____iterationTrav);
            (0, transformed83.BCw)(classCountInc, startValue);
            (0, transformed83.BCw)(classDistro, totalClassSum);
            (0, transformed83.BCw)(classDistro, totalClassOcc);
            (0, transformed83.BCw)(totalClassOcc, classSum);
            _______________counter.m(totalClassOcc, null);
            (0, transformed83.BCw)(totalClassOcc, calculateLimn);
            (0, transformed83.BCw)(totalClassOcc, _classCountSum);
            (0, transformed83.BCw)(calculateMode, updateClassCt);
            (0, transformed83.BCw)(calculateMode, updateUI);
            (0, transformed83.BCw)(updateUI, iterateClass);
            (0, transformed83.BCw)(iterateClass, initialIterCt);
            (0, transformed83.BCw)(iterateClass, __initCounter);
            (0, transformed83.BCw)(iterateClass, _____loopIndex);
            (0, transformed83.BCw)(updateUI, _currentIter);
            (0, transformed83.BCw)(updateUI, hiddenState);
            (0, transformed83.BCw)(hiddenState, _progressTrail);
            (0, transformed83.BCw)(_progressTrail, ______________loopCounter);
            (0, transformed83.BCw)(_progressTrail, ____currentItem);
            (0, transformed83.BCw)(_progressTrail, isArray);
            (0, transformed83.BCw)(hiddenState, __iterCounter);
            (0, transformed83.BCw)(hiddenState, classCount);
            (0, transformed83.BCw)(classCount, ____calculateSum);
            (0, transformed83.BCw)(classCount, classLabelFre);
            (0, transformed83.BCw)(classCount, _iterationTrax);
            (0, transformed83.BCw)(classCount, ________iteration);
            ________getUserData.m(classCount, null);
            (0, transformed83.BCw)(hiddenState, visitCount);
            (0, transformed83.BCw)(hiddenState, ____indexCounter);
            (0, transformed83.BCw)(____indexCounter, classFrequecy);
            (0, transformed83.BCw)(____indexCounter, ___iterCounter);
            (0, transformed83.BCw)(____indexCounter, __loopCount);
            (0, transformed83.BCw)(hiddenState, classCountTra);
            (0, transformed83.BCw)(hiddenState, ____iterationCoun);
            (0, transformed83.BCw)(____iterationCoun, loopedClassCt);
            (0, transformed83.BCw)(____iterationCoun, ____iterationTrak);
            (0, transformed83.BCw)(____iterationCoun, _____iterationCoun);
            (0, transformed83.BCw)(hiddenState, classIndexFre);
            (0, transformed83.BCw)(hiddenState, isEqual);
            (0, transformed83.BCw)(isEqual, uniqueNumberC);
            (0, transformed83.BCw)(isEqual, ______iterationCoun);
            (0, transformed83.BCw)(isEqual, _classFrequecy);
            (0, transformed83.BCw)(hiddenState, HCalculatePer);
            (0, transformed83.BCw)(hiddenState, checkCount);
            (0, transformed83.BCw)(checkCount, angularPromis);
            totalClassIns.m(checkCount, null);
            (0, transformed83.BCw)(checkCount, ______________counter);
            (0, transformed83.BCw)(checkCount, _classCounts);
            (0, transformed83.BCw)(hiddenState, ___classCounts);
            (0, transformed83.BCw)(hiddenState, _iterationId);
            (0, transformed83.BCw)(_iterationId, _______________loopCounter);
            ____iterator.m(_iterationId, null);
            (0, transformed83.BCw)(_iterationId, _______iterationCoun);
            (0, transformed83.BCw)(_iterationId, __isActive);
            (0, transformed83.BCw)(hiddenState, ________iterationCoun);
            (0, transformed83.BCw)(hiddenState, filterAndSum);
            (0, transformed83.BCw)(filterAndSum, createPerson);
            _______________anonymousData.m(filterAndSum, null);
            (0, transformed83.BCw)(filterAndSum, weightedClass);
            (0, transformed83.BCw)(filterAndSum, _________iteration);
            (0, transformed83.BCw)(hiddenState, trackClassPro);
            (0, transformed83.BCw)(hiddenState, elem);
            (0, transformed83.BCw)(elem, _______currentIndex);
            categorySum.m(elem, null);
            (0, transformed83.BCw)(elem, classCountMap);
            (0, transformed83.BCw)(elem, meanClassSums);
            (0, transformed83.BCw)(hiddenState, ___errorHandler);
            (0, transformed83.BCw)(hiddenState, totalClassFre);
            (0, transformed83.BCw)(totalClassFre, _____iterationTrak);
            groupCount.m(totalClassFre, null);
            (0, transformed83.BCw)(totalClassFre, terminationCx);
            (0, transformed83.BCw)(totalClassFre, initializeFre);
            (0, transformed83.BCw)(hiddenState, calculateWeig);
            (0, transformed83.BCw)(hiddenState, ____eventDetails);
            (0, transformed83.BCw)(____eventDetails, processAnonRe);
            _____accumulator.m(____eventDetails, null);
            (0, transformed83.BCw)(____eventDetails, currentElem);
            (0, transformed83.BCw)(____eventDetails, addItemToIng);
            (0, transformed83.BCw)(calculateMode, __totalClassOcc);
            (0, transformed83.BCw)(calculateMode, ______iterationTrak);
            (0, transformed83.BCw)(______iterationTrak, _elementCount);
            (0, transformed83.BCw)(______iterationTrak, initialCount);
            (0, transformed83.BCw)(______iterationTrak, _isEqual);
            (0, transformed83.BCw)(_isEqual, count);
            (0, transformed83.BCw)(count, eventType);
            countIterator.m(count, null);
            (0, transformed83.BCw)(count, calculateStat);
            (0, transformed83.BCw)(count, _count);
            (0, transformed83.BCw)(_isEqual, __classCountSum);
            (0, transformed83.BCw)(_isEqual, counterStart);
            (0, transformed83.BCw)(counterStart, initialClassC);
            (0, transformed83.BCw)(counterStart, __classFrequecy);
            initializeSum.m(counterStart, null);
            (0, transformed83.BCw)(_isEqual, classFrequenc);
            (0, transformed83.BCw)(_isEqual, ______loopIndex);
            (0, transformed83.BCw)(______loopIndex, _______iterationTrak);
            (0, transformed83.BCw)(______loopIndex, calculateFreq);
            iterativeSum.m(______loopIndex, null);
            (0, transformed83.BCw)(_isEqual, ________iterationTrak);
            (0, transformed83.BCw)(_isEqual, calculateEqui);
            (0, transformed83.BCw)(calculateEqui, generateImage);
            (0, transformed83.BCw)(calculateEqui, ______iterationTrav);
            initializeToZ.m(calculateEqui, null);
            (0, transformed83.BCw)(_isEqual, classNameAt);
            (0, transformed83.BCw)(_isEqual, unusedEvent);
            (0, transformed83.BCw)(unusedEvent, ________________loopCounter);
            (0, transformed83.BCw)(unusedEvent, classCountsTo);
            (0, transformed83.BCw)(unusedEvent, ______initialValue);
            (0, transformed83.BCw)(_isEqual, _______iterationTrav);
            (0, transformed83.BCw)(_isEqual, __itemCounter);
            (0, transformed83.BCw)(__itemCounter, transaction);
            (0, transformed83.BCw)(__itemCounter, iterateH);
            (0, transformed83.BCw)(__itemCounter, unused);
            (0, transformed83.BCw)(_isEqual, iterationTraK);
            (0, transformed83.BCw)(_isEqual, _________iterationCoun);
            (0, transformed83.BCw)(
              _________iterationCoun,
              _________iterationTrak,
            );
            (0, transformed83.BCw)(_________iterationCoun, typeCounter);
            (0, transformed83.BCw)(
              _________iterationCoun,
              _______________________________index,
            );
            (0, transformed83.BCw)(_isEqual, temporaryIter);
            (0, transformed83.BCw)(_isEqual, ____iterCounter);
            (0, transformed83.BCw)(____iterCounter, positionalIdx);
            (0, transformed83.BCw)(____iterCounter, ___itemCounter);
            (0, transformed83.BCw)(
              ____iterCounter,
              ________________________________index,
            );
            (0, transformed83.BCw)(_isEqual, ___minifiedAnon);
            (0, transformed83.BCw)(_isEqual, tokenPool);
            (0, transformed83.BCw)(tokenPool, classInstance);
            (0, transformed83.BCw)(tokenPool, ___classCountSum);
            (0, transformed83.BCw)(tokenPool, ___________iterationCoun);
            (0, transformed83.BCw)(_isEqual, tbox);
            (0, transformed83.BCw)(_isEqual, _____calculateSum);
            (0, transformed83.BCw)(_____calculateSum, classCountCtr);
            (0, transformed83.BCw)(_____calculateSum, totalIterated);
            (0, transformed83.BCw)(_____calculateSum, _____classCounts);
            (0, transformed83.BCw)(_isEqual, _________currentIndex);
            (0, transformed83.BCw)(_isEqual, ______classCounts);
            (0, transformed83.BCw)(______classCounts, getClassDistR);
            (0, transformed83.BCw)(______classCounts, iterationTraj);
            (0, transformed83.BCw)(______classCounts, ____classCountSum);
            (0, transformed83.BCw)(_isEqual, _classCount);
            (0, transformed83.BCw)(_isEqual, ___totalClassOcc);
            (0, transformed83.BCw)(___totalClassOcc, __________iteration);
            (0, transformed83.BCw)(___totalClassOcc, calculateAccu);
            (0, transformed83.BCw)(___totalClassOcc, _______classCounts);
            (0, transformed83.BCw)(calculateMode, ___eventCounter);
            (0, transformed83.BCw)(calculateMode, maxIterations);
            (0, transformed83.BCw)(maxIterations, countItems);
            (0, transformed83.BCw)(maxIterations, iterateAndSum);
            (0, transformed83.BCw)(maxIterations, _classIndex);
            (0, transformed83.BCw)(_classIndex, _classFrequenc);
            (0, transformed83.BCw)(_classFrequenc, ____________iterationCoun);
            (0, transformed83.BCw)(_classFrequenc, ______calculateSum);
            (0, transformed83.BCw)(_classFrequenc, countClassOcc);
            (0, transformed83.BCw)(_classIndex, ________iterationTrav);
            if (___classFrequenc) {
              ___classFrequenc.m(_classIndex, null);
            }
            (0, transformed83.BCw)(_classIndex, iterateData);
            (0, transformed83.BCw)(_classIndex, _____classCountSum);
            (0, transformed83.BCw)(_____classCountSum, tKCounter);
            (0, transformed83.BCw)(_____classCountSum, _iterationTraK);
            (0, transformed83.BCw)(_____classCountSum, _isEvenNumber);
            (0, transformed83.BCw)(_classIndex, transpose);
            (0, transformed83.BCw)(_classIndex, ____totalClassOcc);
            (0, transformed83.BCw)(____totalClassOcc, ___getAnonymous);
            (0, transformed83.BCw)(____totalClassOcc, _________iterationTrav);
            (0, transformed83.BCw)(____totalClassOcc, ____iterationTrax);
            (0, transformed83.BCw)(_classIndex, iterationAcc);
            (0, transformed83.BCw)(_classIndex, ______classCountSum);
            (0, transformed83.BCw)(______classCountSum, __anonymizeData);
            (0, transformed83.BCw)(______classCountSum, elementFrequ);
            (0, transformed83.BCw)(______classCountSum, classDistSum);
            (0, transformed83.BCw)(_classIndex, ________classCounts);
            (0, transformed83.BCw)(_classIndex, __________currentIndex);
            (0, transformed83.BCw)(__________currentIndex, _____indexCounter);
            (0, transformed83.BCw)(__________currentIndex, customerData);
            (0, transformed83.BCw)(
              __________currentIndex,
              _______classCountSum,
            );
            (0, transformed83.BCw)(_classIndex, classDistrib);
            (0, transformed83.BCw)(_classIndex, ____uninitialized);
            (0, transformed83.BCw)(____uninitialized, classOccurren);
            (0, transformed83.BCw)(____uninitialized, weightedMean);
            (0, transformed83.BCw)(____uninitialized, ___classFrequecy);
            (0, transformed83.BCw)(
              _classIndex,
              _________________________________index,
            );
            (0, transformed83.BCw)(_classIndex, sumClassCount);
            (0, transformed83.BCw)(sumClassCount, calculateAvg);
            (0, transformed83.BCw)(sumClassCount, _____iterCounter);
            classWeighted.m(sumClassCount, null);
            (0, transformed83.BCw)(calculateMode, xyzCounter);
            (0, transformed83.BCw)(calculateMode, ___________currentIndex);
            (0, transformed83.BCw)(___________currentIndex, _sumClassCount);
            (0, transformed83.BCw)(___________currentIndex, occurrenceTra);
            (0, transformed83.BCw)(___________currentIndex, calculateBias);
            (0, transformed83.BCw)(calculateBias, nestedIterCtr);
            (0, transformed83.BCw)(nestedIterCtr, ___classIndex);
            (0, transformed83.BCw)(nestedIterCtr, ______________iterationCoun);
            (0, transformed83.BCw)(nestedIterCtr, cumulativeSum);
            (0, transformed83.BCw)(cumulativeSum, _______calculateSum);
            (0, transformed83.BCw)(cumulativeSum, _processCount);
            ____________iterationTrak.m(cumulativeSum, null);
            (0, transformed83.BCw)(calculateBias, _totalClassFre);
            if (__currentIter) {
              __currentIter.m(calculateBias, null);
            }
            (0, transformed83.BCw)(calculateBias, repCounts);
            (0, transformed83.BCw)(calculateBias, ______totalClassOcc);
            (0, transformed83.BCw)(______totalClassOcc, __anonymousCall);
            __________iterationTrav.m(______totalClassOcc, null);
            (0, transformed83.BCw)(______totalClassOcc, itemCount);
            (0, transformed83.BCw)(
              ______totalClassOcc,
              _________________loopCounter,
            );
            (0, transformed83.BCw)(calculateMode, ________classCountSum);
            (0, transformed83.BCw)(calculateMode, matrixMultipy);
            (0, transformed83.BCw)(matrixMultipy, computeTotalC);
            (0, transformed83.BCw)(computeTotalC, _________classCounts);
            (0, transformed83.BCw)(computeTotalC, ____accumulator);
            (0, transformed83.BCw)(computeTotalC, ________calculateSum);
            (0, transformed83.BCw)(matrixMultipy, __classFrequenc);
            if (_encryptData) {
              _encryptData.m(matrixMultipy, null);
            }
            if (!totalFrequenc) {
              ___dataSource = [
                (0, transformed83.KTR)(
                  ______iteration,
                  "click",
                  classCounts[17],
                ),
                (0, transformed83.KTR)(
                  ____iterationTrav,
                  "change",
                  classCounts[12],
                ),
                (0, transformed83.hGc)(
                  (currentClass = classCounts[13].call(
                    null,
                    ____iterationTrav,
                  )),
                ),
                (0, transformed83.KTR)(startValue, "input", classCounts[12]),
                (0, transformed83.KTR)(startValue, "change", classCounts[18]),
                (0, transformed83.hGc)(
                  (iterationIter = classCounts[13].call(null, startValue)),
                ),
                (0, transformed83.KTR)(
                  _classCountSum,
                  "input",
                  classCounts[12],
                ),
                (0, transformed83.hGc)(
                  (_______iteration = classCounts[13].call(
                    null,
                    _classCountSum,
                  )),
                ),
                (0, transformed83.KTR)(
                  ______________loopCounter,
                  "change",
                  classCounts[12],
                ),
                (0, transformed83.hGc)(
                  (traverseCount = classCounts[13].call(
                    null,
                    ______________loopCounter,
                  )),
                ),
                (0, transformed83.KTR)(
                  ____calculateSum,
                  "change",
                  classCounts[12],
                ),
                (0, transformed83.hGc)(
                  (processClassC = classCounts[13].call(
                    null,
                    ____calculateSum,
                  )),
                ),
                (0, transformed83.KTR)(
                  classFrequecy,
                  "change",
                  classCounts[12],
                ),
                (0, transformed83.hGc)(
                  (iterationNum = classCounts[13].call(null, classFrequecy)),
                ),
                (0, transformed83.KTR)(
                  loopedClassCt,
                  "change",
                  classCounts[12],
                ),
                (0, transformed83.hGc)(
                  (_____initialValue = classCounts[13].call(
                    null,
                    loopedClassCt,
                  )),
                ),
                (0, transformed83.KTR)(
                  uniqueNumberC,
                  "change",
                  classCounts[12],
                ),
                (0, transformed83.hGc)(
                  (defaultValue = classCounts[13].call(null, uniqueNumberC)),
                ),
                (0, transformed83.KTR)(_classCounts, "input", classCounts[12]),
                (0, transformed83.hGc)(
                  (__classCounts = classCounts[13].call(null, _classCounts)),
                ),
                (0, transformed83.KTR)(__isActive, "input", classCounts[12]),
                (0, transformed83.hGc)(
                  (__iterationTrax = classCounts[13].call(null, __isActive)),
                ),
                (0, transformed83.KTR)(
                  _________iteration,
                  "input",
                  classCounts[12],
                ),
                (0, transformed83.hGc)(
                  (addToCart = classCounts[13].call(null, _________iteration)),
                ),
                (0, transformed83.KTR)(meanClassSums, "input", classCounts[12]),
                (0, transformed83.hGc)(
                  (edIndex = classCounts[13].call(null, meanClassSums)),
                ),
                (0, transformed83.KTR)(initializeFre, "input", classCounts[12]),
                (0, transformed83.hGc)(
                  (cumulativeFre = classCounts[13].call(null, initializeFre)),
                ),
                (0, transformed83.KTR)(addItemToIng, "input", classCounts[12]),
                (0, transformed83.hGc)(
                  (isValidEmail = classCounts[13].call(null, addItemToIng)),
                ),
                (0, transformed83.KTR)(_count, "input", classCounts[12]),
                (0, transformed83.hGc)(
                  (____classCounts = classCounts[13].call(null, _count)),
                ),
                (0, transformed83.KTR)(initialClassC, "input", classCounts[12]),
                (0, transformed83.hGc)(
                  (_classSum = classCounts[13].call(null, initialClassC)),
                ),
                (0, transformed83.KTR)(
                  _______iterationTrak,
                  "input",
                  classCounts[12],
                ),
                (0, transformed83.hGc)(
                  (_userDetails = classCounts[13].call(
                    null,
                    _______iterationTrak,
                  )),
                ),
                (0, transformed83.KTR)(generateImage, "input", classCounts[12]),
                (0, transformed83.hGc)(
                  (___accumulator = classCounts[13].call(null, generateImage)),
                ),
                (0, transformed83.KTR)(
                  ________________loopCounter,
                  "change",
                  classCounts[12],
                ),
                (0, transformed83.hGc)(
                  (_initValue = classCounts[13].call(
                    null,
                    ________________loopCounter,
                  )),
                ),
                (0, transformed83.KTR)(transaction, "change", classCounts[12]),
                (0, transformed83.hGc)(
                  (classOccurrer = classCounts[13].call(null, transaction)),
                ),
                (0, transformed83.KTR)(
                  _________iterationTrak,
                  "change",
                  classCounts[12],
                ),
                (0, transformed83.hGc)(
                  (__________iterationCoun = classCounts[13].call(
                    null,
                    _________iterationTrak,
                  )),
                ),
                (0, transformed83.KTR)(
                  positionalIdx,
                  "change",
                  classCounts[12],
                ),
                (0, transformed83.hGc)(
                  (accumulatedSn = classCounts[13].call(null, positionalIdx)),
                ),
                (0, transformed83.KTR)(
                  classInstance,
                  "change",
                  classCounts[12],
                ),
                (0, transformed83.hGc)(
                  (_classCounter = classCounts[13].call(null, classInstance)),
                ),
                (0, transformed83.KTR)(
                  classCountCtr,
                  "change",
                  classCounts[12],
                ),
                (0, transformed83.hGc)(
                  (_calculateFreq = classCounts[13].call(null, classCountCtr)),
                ),
                (0, transformed83.KTR)(
                  getClassDistR,
                  "change",
                  classCounts[12],
                ),
                (0, transformed83.hGc)(
                  (allClassCount = classCounts[13].call(null, getClassDistR)),
                ),
                (0, transformed83.KTR)(
                  __________iteration,
                  "change",
                  classCounts[12],
                ),
                (0, transformed83.hGc)(
                  (transformToF = classCounts[13].call(
                    null,
                    __________iteration,
                  )),
                ),
                (0, transformed83.KTR)(
                  ____________iterationCoun,
                  "change",
                  classCounts[12],
                ),
                (0, transformed83.hGc)(
                  (________________________________________anonymousUser =
                    classCounts[13].call(null, ____________iterationCoun)),
                ),
                (0, transformed83.KTR)(tKCounter, "change", classCounts[12]),
                (0, transformed83.hGc)(
                  (__classIndex = classCounts[13].call(null, tKCounter)),
                ),
                (0, transformed83.KTR)(
                  ___getAnonymous,
                  "change",
                  classCounts[12],
                ),
                (0, transformed83.hGc)(
                  (_totalClassSum = classCounts[13].call(
                    null,
                    ___getAnonymous,
                  )),
                ),
                (0, transformed83.KTR)(
                  __anonymizeData,
                  "change",
                  classCounts[12],
                ),
                (0, transformed83.hGc)(
                  (classCountAcc = classCounts[13].call(null, __anonymizeData)),
                ),
                (0, transformed83.KTR)(
                  _____indexCounter,
                  "change",
                  classCounts[12],
                ),
                (0, transformed83.hGc)(
                  (_____totalClassOcc = classCounts[13].call(
                    null,
                    _____indexCounter,
                  )),
                ),
                (0, transformed83.KTR)(
                  classOccurren,
                  "change",
                  classCounts[12],
                ),
                (0, transformed83.hGc)(
                  (_____________iterationCoun = classCounts[13].call(
                    null,
                    classOccurren,
                  )),
                ),
                (0, transformed83.KTR)(calculateAvg, "input", classCounts[12]),
                (0, transformed83.hGc)(
                  (_______________________eventHandler = classCounts[13].call(
                    null,
                    calculateAvg,
                  )),
                ),
                (0, transformed83.KTR)(
                  ___classIndex,
                  "change",
                  classCounts[12],
                ),
                (0, transformed83.hGc)(
                  (____classFrequecy = classCounts[13].call(
                    null,
                    ___classIndex,
                  )),
                ),
                (0, transformed83.KTR)(
                  _________________loopCounter,
                  "input",
                  classCounts[12],
                ),
                (0, transformed83.hGc)(
                  (indexCountSum = classCounts[13].call(
                    null,
                    _________________loopCounter,
                  )),
                ),
                (0, transformed83.KTR)(
                  _________classCounts,
                  "change",
                  classCounts[12],
                ),
                (0, transformed83.hGc)(
                  (__calculateFreq = classCounts[13].call(
                    null,
                    _________classCounts,
                  )),
                ),
              ];
              totalFrequenc = true;
            }
          },
          p(_classOccurren, __classCounter) {
            if (initLoopIndic) {
              _____classFrequecy.p(_classOccurren, __classCounter);
            }
            if (
              __classCounter & 8 &&
              (0, transformed83.jXN)(
                classCounter,
                (classCounter = _classOccurren[3]),
              )
            ) {
              classCumSum.d(1);
              (classCumSum = m()).c();
              classCumSum.m(classCountInc, _____iterationTrav);
            } else {
              classCumSum.p(_classOccurren, __classCounter);
            }
            if (
              __classCounter & 8 &&
              (0, transformed83.jXN)(
                _____result,
                (_____result = _classOccurren[3]),
              )
            ) {
              _______________counter.d(1);
              (_______________counter = initializePix()).c();
              _______________counter.m(totalClassOcc, calculateLimn);
            } else {
              _______________counter.p(_classOccurren, __classCounter);
            }
            if (
              __classCounter & 8 &&
              (0, transformed83.jXN)(
                _totalClassOcc,
                (_totalClassOcc = _classOccurren[3]),
              )
            ) {
              ________getUserData.d(1);
              (________getUserData = p()).c();
              ________getUserData.m(classCount, null);
            } else {
              ________getUserData.p(_classOccurren, __classCounter);
            }
            if (
              __classCounter & 8 &&
              (0, transformed83.jXN)(
                indexedData,
                (indexedData = _classOccurren[3]),
              )
            ) {
              totalClassIns.d(1);
              (totalClassIns = f()).c();
              totalClassIns.m(checkCount, ______________counter);
            } else {
              totalClassIns.p(_classOccurren, __classCounter);
            }
            if (
              __classCounter & 8 &&
              (0, transformed83.jXN)(
                incremental,
                (incremental = _classOccurren[3]),
              )
            ) {
              ____iterator.d(1);
              (____iterator = updateRightSt()).c();
              ____iterator.m(_iterationId, _______iterationCoun);
            } else {
              ____iterator.p(_classOccurren, __classCounter);
            }
            if (
              __classCounter & 8 &&
              (0, transformed83.jXN)(
                ___iterationTrax,
                (___iterationTrax = _classOccurren[3]),
              )
            ) {
              _______________anonymousData.d(1);
              (_______________anonymousData = _createInitial()).c();
              _______________anonymousData.m(filterAndSum, weightedClass);
            } else {
              _______________anonymousData.p(_classOccurren, __classCounter);
            }
            if (
              __classCounter & 8 &&
              (0, transformed83.jXN)(
                reduceClassSn,
                (reduceClassSn = _classOccurren[3]),
              )
            ) {
              categorySum.d(1);
              (categorySum = setCameraZoom()).c();
              categorySum.m(elem, classCountMap);
            } else {
              categorySum.p(_classOccurren, __classCounter);
            }
            if (
              __classCounter & 8 &&
              (0, transformed83.jXN)(
                ________currentIndex,
                (________currentIndex = _classOccurren[3]),
              )
            ) {
              groupCount.d(1);
              (groupCount = setupZoomText()).c();
              groupCount.m(totalClassFre, terminationCx);
            } else {
              groupCount.p(_classOccurren, __classCounter);
            }
            if (
              __classCounter & 8 &&
              (0, transformed83.jXN)(
                _iterationCnt,
                (_iterationCnt = _classOccurren[3]),
              )
            ) {
              _____accumulator.d(1);
              (_____accumulator = initSpanWithV()).c();
              _____accumulator.m(____eventDetails, currentElem);
            } else {
              _____accumulator.p(_classOccurren, __classCounter);
            }
            if (
              __classCounter & 8 &&
              (0, transformed83.jXN)(
                ______________________eventHandler,
                (______________________eventHandler = _classOccurren[3]),
              )
            ) {
              countIterator.d(1);
              (countIterator = updateCellSty()).c();
              countIterator.m(count, calculateStat);
            } else {
              countIterator.p(_classOccurren, __classCounter);
            }
            if (
              __classCounter & 8 &&
              (0, transformed83.jXN)(
                removeDupes,
                (removeDupes = _classOccurren[3]),
              )
            ) {
              initializeSum.d(1);
              (initializeSum = wrapHtmlWithS(_classOccurren)).c();
              initializeSum.m(counterStart, null);
            } else {
              initializeSum.p(_classOccurren, __classCounter);
            }
            if (
              __classCounter & 8 &&
              (0, transformed83.jXN)(
                iterateClassC,
                (iterateClassC = _classOccurren[3]),
              )
            ) {
              iterativeSum.d(1);
              (iterativeSum = countSkinsInL(_classOccurren)).c();
              iterativeSum.m(______loopIndex, null);
            } else {
              iterativeSum.p(_classOccurren, __classCounter);
            }
            if (
              __classCounter & 8 &&
              (0, transformed83.jXN)(
                _______________________userData,
                (_______________________userData = _classOccurren[3]),
              )
            ) {
              initializeToZ.d(1);
              (initializeToZ = updateMassDiv(_classOccurren)).c();
              initializeToZ.m(calculateEqui, null);
            } else {
              initializeToZ.p(_classOccurren, __classCounter);
            }
            if (_classOccurren[4]) {
              if (___classFrequenc) {
                ___classFrequenc.p(_classOccurren, __classCounter);
              } else {
                (___classFrequenc = _____processInput(_classOccurren)).c();
                ___classFrequenc.m(_classIndex, iterateData);
              }
            } else if (___classFrequenc) {
              ___classFrequenc.d(1);
              ___classFrequenc = null;
            }
            if (
              __classCounter & 8 &&
              (0, transformed83.jXN)(
                sumOfFrequenC,
                (sumOfFrequenC = _classOccurren[3]),
              )
            ) {
              classWeighted.d(1);
              (classWeighted = __toggleDisplay(_classOccurren)).c();
              classWeighted.m(sumClassCount, null);
            } else {
              classWeighted.p(_classOccurren, __classCounter);
            }
            if (
              __classCounter & 8 &&
              (0, transformed83.jXN)(
                ____classIndex,
                (____classIndex = _classOccurren[3]),
              )
            ) {
              ____________iterationTrak.d(1);
              (____________iterationTrak = _transformAnon(_classOccurren)).c();
              ____________iterationTrak.m(cumulativeSum, null);
            } else {
              ____________iterationTrak.p(_classOccurren, __classCounter);
            }
            if (_classOccurren[5]) {
              if (__currentIter) {
                __currentIter.p(_classOccurren, __classCounter);
              } else {
                (__currentIter = createInterac(_classOccurren)).c();
                __currentIter.m(calculateBias, repCounts);
              }
            } else if (__currentIter) {
              __currentIter.d(1);
              __currentIter = null;
            }
            if (
              __classCounter & 8 &&
              (0, transformed83.jXN)(
                __________iterationTrak,
                (__________iterationTrak = _classOccurren[3]),
              )
            ) {
              __________iterationTrav.d(1);
              (__________iterationTrav = initContentSp()).c();
              __________iterationTrav.m(______totalClassOcc, itemCount);
            } else {
              __________iterationTrav.p(_classOccurren, __classCounter);
            }
            if (__classCounter & 64) {
              (0, transformed83.goL)(
                computeTotalC,
                "disabled",
                !_classOccurren[6],
              );
            }
            if (_classOccurren[6]) {
              if (_encryptData) {
                _encryptData.p(_classOccurren, __classCounter);
              } else {
                (_encryptData = Y(_classOccurren)).c();
                _encryptData.m(matrixMultipy, null);
              }
            } else if (_encryptData) {
              _encryptData.d(1);
              _encryptData = null;
            }
          },
          d(isNotEmpty) {
            if (isNotEmpty) {
              (0, transformed83.YoD)(c);
            }
            ___________iterationTrak.d();
            if (_____classFrequecy) {
              _____classFrequecy.d();
            }
            classCumSum.d(isNotEmpty);
            _______________counter.d(isNotEmpty);
            ________getUserData.d(isNotEmpty);
            totalClassIns.d(isNotEmpty);
            ____iterator.d(isNotEmpty);
            _______________anonymousData.d(isNotEmpty);
            categorySum.d(isNotEmpty);
            groupCount.d(isNotEmpty);
            _____accumulator.d(isNotEmpty);
            countIterator.d(isNotEmpty);
            initializeSum.d(isNotEmpty);
            iterativeSum.d(isNotEmpty);
            initializeToZ.d(isNotEmpty);
            if (___classFrequenc) {
              ___classFrequenc.d();
            }
            classWeighted.d(isNotEmpty);
            ____________iterationTrak.d(isNotEmpty);
            if (__currentIter) {
              __currentIter.d();
            }
            __________iterationTrav.d(isNotEmpty);
            if (_encryptData) {
              _encryptData.d();
            }
            ((totalFrequenc = false), transformed83.oOW)(___dataSource);
          },
        };
      }
      let __transformData = (0, transformedFo.T5)(false);
      let executeQueue = (0, transformedFo.T5)(r.A.get("showHud"));
      let ___calculateArea = (0, transformedFo.T5)(r.A.get("showStats"));
      let _transformedFo = (0, transformedFo.T5)(r.A.get("showMinimapStats"));
      let numberToStr = (0, transformedFo.T5)(r.A.get("useSharedViewport"));
      let enqueueAndApp = (0, transformedFo.T5)(
        r.A.get("triggerIgnoreSizeEnabled"),
      );
      let applyTransf = (0, transformedFo.T5)(r.A.get("minimapEnabled"));
      r.A.on("zrVIMz", (functionNameT, _executeQueue) => {
        if (functionNameT === "showHud") {
          executeQueue.set(!!_executeQueue);
        } else if (functionNameT === "showStats") {
          ___calculateArea.set(!!_executeQueue);
        } else if (functionNameT === "useSharedViewport") {
          numberToStr.set(!!_executeQueue);
        } else if (functionNameT === "triggerIgnoreSizeEnabled") {
          enqueueAndApp.set(!!_executeQueue);
        } else if (functionNameT === "minimapEnabled") {
          applyTransf.set(!!_executeQueue);
        } else if (functionNameT === "showMinimapStats") {
          _transformedFo.set(!!_executeQueue);
        } else {
          __transformData.set(!(0, transformedFo.Jt)(__transformData));
        }
      });
      let applyTransfTo = (unitSelector) =>
        unitSelector >= 1000
          ? (unitSelector / 1000).toFixed(1) + "s"
          : unitSelector + "ms";
      class handleLogging extends transformed83.r7T {
        constructor(wrapper) {
          super();
          (0, transformed83.TsN)(
            this,
            wrapper,
            function processedItem(
              _processedDocP,
              SequentialDoc,
              paragraphInd,
            ) {
              let n;
              let l;
              let paragraphIter;
              let itemData;
              let _transformed;
              let m;
              let cachedValue;
              let p;
              let f;
              (0, transformed83.j0C)(
                _processedDocP,
                ____loopIndex.E,
                (getParagraph) => paragraphInd(0, (l = getParagraph)),
              );
              (0, transformed83.j0C)(
                _processedDocP,
                __transformData,
                (anonymousCode) =>
                  paragraphInd(3, (paragraphIter = anonymousCode)),
              );
              (0, transformed83.j0C)(
                _processedDocP,
                numberToStr,
                (dataAtIndex4) => paragraphInd(4, (itemData = dataAtIndex4)),
              );
              (0, transformed83.j0C)(
                _processedDocP,
                enqueueAndApp,
                (transformText) =>
                  paragraphInd(5, (_transformed = transformText)),
              );
              (0, transformed83.j0C)(
                _processedDocP,
                executeQueue,
                (paragraphIdx) => paragraphInd(6, (m = paragraphIdx)),
              );
              (0, transformed83.j0C)(
                _processedDocP,
                ___calculateArea,
                (seventhArg) => paragraphInd(7, (cachedValue = seventhArg)),
              );
              (0, transformed83.j0C)(
                _processedDocP,
                applyTransf,
                (getIndexValue) => paragraphInd(8, (p = getIndexValue)),
              );
              (0, transformed83.j0C)(
                _processedDocP,
                _transformedFo,
                (__________________________________index) =>
                  paragraphInd(
                    9,
                    (f = __________________________________index),
                  ),
              );
              let __transformed = (argList) => {
                processExec()
                  .fire({
                    title: "Restart required",
                    text:
                      "Refresh page to " +
                      (argList ? "fully " : "") +
                      "apply changes?",
                    icon: "info",
                    showConfirmButton: true,
                    showCancelButton: true,
                  })
                  .then(
                    (confirmation) =>
                      confirmation.isConfirmed &&
                      setTimeout(() => location.reload(), 300),
                  );
              };
              _processedDocP.$$.update = () => {
                if (_processedDocP.$$.dirty & 1) {
                  paragraphInd(2, (n = l === ____loopIndex.b.Settings));
                }
              };
              return [
                l,
                mapValues.A,
                n,
                paragraphIter,
                itemData,
                _transformed,
                m,
                cachedValue,
                p,
                f,
                (_______transformed83) => {
                  (0, transformed83.vu6)(
                    ____loopIndex.E,
                    (l = _______transformed83.detail
                      ? ____loopIndex.b.Settings
                      : ____loopIndex.b.None),
                    l,
                  );
                },
                __transformed,
                (__elementRef) => {
                  if (
                    (__elementRef = __elementRef.currentTarget).hasAttribute(
                      "data-name",
                    )
                  ) {
                    var elementName = __elementRef.getAttribute("data-name");
                    let checkboxState;
                    if (__elementRef.type === "checkbox") {
                      checkboxState = __elementRef.checked;
                    } else if (__elementRef.type === "text") {
                      checkboxState = __elementRef.value;
                    } else {
                      if (__elementRef.type !== "range") {
                        (0, c.X0)(
                          false,
                          "Invalid input type used:",
                          __elementRef.type,
                        );
                        return;
                      }
                      checkboxState = +__elementRef.value;
                    }
                    if (r.A.get(elementName) !== checkboxState) {
                      r.A.set(elementName, checkboxState);
                      var unusedCheck;
                      var unusedLoopCtr;
                      var n;
                      var l = checkboxState;
                      switch (elementName) {
                        case "tabStatusMode":
                          if (mapValues.A.running) {
                            mapValues.A.HsE.forEach((___data) => {
                              for (unusedCheck of ___data) {
                                if (unusedCheck.VEj) {
                                  unusedCheck.IvE();
                                }
                              }
                            });
                            n = o.A.yNT;
                            unusedLoopCtr = mapValues.A.FCi.ZRd(
                              n === 0 ? 1 : 0,
                            );
                            n = mapValues.A.FCi.ZRd(n);
                            if (unusedLoopCtr) {
                              delete unusedLoopCtr.wFC;
                              unusedLoopCtr.PJd();
                            }
                            if (n) {
                              delete n.wFC;
                              n.PJd();
                            }
                            mapValues.A.jWf(o.A.yNT === 0 ? 1 : 0, o.A.yNT);
                          }
                          return;
                        case "showChat":
                          if (mapValues.A.running) {
                            mapValues.A.emit("uEBHda", !!l);
                          }
                          return;
                        case "useWebGL":
                        case "useAntialiasing":
                          __transformed();
                          return;
                        case "gameResolution":
                          calculateExec.Uk.resolution = l;
                          calculateExec.Uk.resize(
                            window.innerWidth,
                            window.innerHeight,
                          );
                          calculateExec.Uk.view.style.width =
                            window.innerWidth + "px";
                          calculateExec.Uk.view.style.height =
                            window.innerHeight + "px";
                          return;
                        case "showNames":
                        case "showSkins":
                        case "showMass":
                        case "showOwnName":
                        case "showOwnSkin":
                        case "showOwnMass":
                          if (mapValues.A.running) {
                            mapValues.A.FCi.AaG();
                          }
                          return;
                        case "foodVisible":
                          if (mapValues.A.running) {
                            paragraphInd(
                              1,
                              (mapValues.A.scene.food.visible = !!l),
                              mapValues.A,
                            );
                          }
                          return;
                        case "showFPS":
                        case "showPing":
                        case "showPlayerMass":
                        case "showPlayerScore":
                        case "showCellCount":
                          if (mapValues.A.running) {
                            mapValues.A.emit("oiKdMc");
                          }
                          return;
                        case "cellsOpacity":
                          if (mapValues.A.running) {
                            paragraphInd(
                              1,
                              (mapValues.A.scene.foreground.alpha = +l),
                              mapValues.A,
                            );
                          }
                          return;
                        case "minimapLocations":
                          if (mapValues.A.running) {
                            mapValues.A.emit("dHeEDj");
                          }
                          return;
                        case "minimapEnabled":
                          if (mapValues.A.running) {
                            if (l) {
                              mapValues.A.emit("OTySHI");
                              mapValues.A.emit("dHeEDj");
                            } else {
                              mapValues.A.emit("PSbuQD");
                            }
                          }
                          return;
                        case "showClock":
                        case "showSessionTime":
                        case "showPlayerCount":
                        case "showSpectators":
                        case "showRestartTiming":
                        case "showTagTotalMass":
                          mapValues.A.emit("gWdDAg");
                          return;
                        case "showMinimapStats":
                          mapValues.A.emit("omMooP", !!l);
                      }
                    }
                  }
                },
                (getNameFromHT) => {
                  if (!getNameFromHT.hasAttribute("data-name")) {
                    return null;
                  }
                  var checkboxData = getNameFromHT.getAttribute("data-name");
                  if (getNameFromHT.type === "checkbox") {
                    getNameFromHT.checked = r.A.get(checkboxData);
                  } else if (
                    getNameFromHT.type === "text" ||
                    getNameFromHT.type === "range"
                  ) {
                    getNameFromHT.value = r.A.get(checkboxData);
                  } else {
                    (0, c.X0)(
                      false,
                      "Invalid input type used:",
                      getNameFromHT.type,
                    );
                  }
                },
                (ownerDetermin) => {
                  switch (ownerDetermin) {
                    case 0:
                      return "nobody else's";
                    case 1:
                      return "tag players'";
                    case 2:
                      return "everyone's";
                    default:
                      return "?";
                  }
                },
                (activeTabSty) => {
                  switch (activeTabSty) {
                    case 0:
                      return "outline for both tabs";
                    case 1:
                      return "arrow on active tab only";
                    case 2:
                      return "nothing for both tabs";
                    default:
                      return "?";
                  }
                },
                (currencyValue) => currencyValue * currencyValue * 0.01,
                () =>
                  (0, transformed83.vu6)(
                    ____loopIndex.E,
                    (l = ____loopIndex.b.None),
                    l,
                  ),
                () => __transformed(true),
                () => __transformed(),
                function (_processUserAn) {
                  paragraphInd(2, (n = _processUserAn));
                  paragraphInd(0, l);
                },
              ];
            },
            function jqueryWrapper(waitForItem) {
              let ____dataSource;
              let indexTracker;
              let ___________________________________index;
              function waitForItem20(safeDivide) {
                waitForItem[20](safeDivide);
              }
              var o = {
                $$slots: {
                  default: [H],
                },
                $$scope: {
                  ctx: waitForItem,
                },
              };
              if (waitForItem[2] !== undefined) {
                o.show = waitForItem[2];
              }
              ____dataSource = new n.A({
                props: o,
              });
              transformed83.Dnk.push(() =>
                (0, transformed83.oIE)(____dataSource, "show", waitForItem20),
              );
              ____dataSource.$on("visibility", waitForItem[10]);
              return {
                c() {
                  (0, transformed83.N0i)(____dataSource.$$.fragment);
                },
                m(___transformData, __transformWith) {
                  (0, transformed83.wSR)(
                    ____dataSource,
                    ___transformData,
                    __transformWith,
                  );
                  ___________________________________index = true;
                },
                p(
                  _________________________________________anonymousUser,
                  [__anonymousFile],
                ) {
                  var dirtyStatus = {};
                  if (__anonymousFile & 8389627) {
                    dirtyStatus.$$scope = {
                      dirty: __anonymousFile,
                      ctx: _________________________________________anonymousUser,
                    };
                  }
                  if (!indexTracker && __anonymousFile & 4) {
                    indexTracker = true;
                    dirtyStatus.show =
                      _________________________________________anonymousUser[2];
                    (0, transformed83.Jk$)(() => (indexTracker = false));
                  }
                  ____dataSource.$set(dirtyStatus);
                },
                i(hasTransform) {
                  if (!___________________________________index) {
                    (0, transformed83.c7F)(
                      ____dataSource.$$.fragment,
                      hasTransform,
                    );
                    ___________________________________index = true;
                  }
                },
                o(dataSourceRef) {
                  (0, transformed83.Tn8)(
                    ____dataSource.$$.fragment,
                    dataSourceRef,
                  );
                  ___________________________________index = false;
                },
                d(________________anonymousData) {
                  (0, transformed83.Hbl)(
                    ____dataSource,
                    ________________anonymousData,
                  );
                },
              };
            },
            transformed83.jXN,
            {},
          );
        }
      }
      let taskTransfer = handleLogging;
    },
    7009(
      ______________anonymousFunc,
      ________________________eventHandler,
      filterByPred,
    ) {
      filterByPred.d(________________________eventHandler, {
        A: () => o,
      });
      var filteredValue = filterByPred(83839);
      filterByPred(60821);
      var filterByCrit = filterByPred(36742);
      var filterEvents = filterByPred(98781);
      function n(getOrAssignID) {
        let _filteredValue;
        return {
          c() {
            (_filteredValue = (0, filteredValue.ND4)("div")).textContent =
              "NUM 3.";
          },
          m(
            __________________________________________anonymousUser,
            __filteredValue,
          ) {
            (0, filteredValue.Yry)(
              __________________________________________anonymousUser,
              _filteredValue,
              __filteredValue,
            );
          },
          p: filteredValue.lQ1,
          d(validateAndFw) {
            if (validateAndFw) {
              (0, filteredValue.YoD)(_filteredValue);
            }
          },
        };
      }
      class FilteredValue extends filteredValue.r7T {
        constructor(computeIndex) {
          super();
          (0, filteredValue.TsN)(
            this,
            computeIndex,
            function getUserFilter(
              userExclusion,
              calculateOrIm,
              _____iterator,
            ) {
              let n;
              let mapFilter;
              (0, filteredValue.j0C)(
                userExclusion,
                filterByCrit.E,
                (_mapFilter) => _____iterator(2, (mapFilter = _mapFilter)),
              );
              userExclusion.$$.update = () => {
                if (userExclusion.$$.dirty & 4) {
                  _____iterator(0, (n = mapFilter === filterByCrit.b.Themes));
                }
              };
              return [
                n,
                (detailObject) => {
                  (0, filteredValue.vu6)(
                    filterByCrit.E,
                    (mapFilter = detailObject.detail
                      ? filterByCrit.b.Themes
                      : filterByCrit.b.None),
                    mapFilter,
                  );
                },
                mapFilter,
                function (___calculateOrDo) {
                  _____iterator(0, (n = ___calculateOrDo));
                  _____iterator(2, mapFilter);
                },
              ];
            },
            function keyAccessor(edgeCaseCheck) {
              let _isNullOrUndef;
              let _undefinedData;
              let initiateTrans;
              function o(stopAtFirst) {
                edgeCaseCheck[3](stopAtFirst);
              }
              var r = {
                $$slots: {
                  default: [n],
                },
                $$scope: {
                  ctx: edgeCaseCheck,
                },
              };
              if (edgeCaseCheck[0] !== undefined) {
                r.show = edgeCaseCheck[0];
              }
              _isNullOrUndef = new filterEvents.A({
                props: r,
              });
              filteredValue.Dnk.push(() =>
                (0, filteredValue.oIE)(_isNullOrUndef, "show", o),
              );
              _isNullOrUndef.$on("visibility", edgeCaseCheck[1]);
              return {
                c() {
                  (0, filteredValue.N0i)(_isNullOrUndef.$$.fragment);
                },
                m(___filteredValue, callbackEvent) {
                  (0, filteredValue.wSR)(
                    _isNullOrUndef,
                    ___filteredValue,
                    callbackEvent,
                  );
                  initiateTrans = true;
                },
                p(__eventContext, [placeholderSn]) {
                  var __conditionally = {};
                  if (placeholderSn & 16) {
                    __conditionally.$$scope = {
                      dirty: placeholderSn,
                      ctx: __eventContext,
                    };
                  }
                  if (!_undefinedData && placeholderSn & 1) {
                    _undefinedData = true;
                    __conditionally.show = __eventContext[0];
                    (0, filteredValue.Jk$)(() => (_undefinedData = false));
                  }
                  _isNullOrUndef.$set(__conditionally);
                },
                i(anonymousSelf) {
                  if (!initiateTrans) {
                    (0, filteredValue.c7F)(
                      _isNullOrUndef.$$.fragment,
                      anonymousSelf,
                    );
                    initiateTrans = true;
                  }
                },
                o(___elementRef) {
                  (0, filteredValue.Tn8)(
                    _isNullOrUndef.$$.fragment,
                    ___elementRef,
                  );
                  initiateTrans = false;
                },
                d(____filteredValue) {
                  (0, filteredValue.Hbl)(_isNullOrUndef, ____filteredValue);
                },
              };
            },
            filteredValue.jXN,
            {},
          );
        }
      }
      let o = FilteredValue;
    },
    84740(
      _anonymousSelf,
      _________________________eventHandler,
      EventAssociat,
    ) {
      EventAssociat.d(_________________________eventHandler, {
        A: () => c,
      });
      var eventHandler1 = EventAssociat(15308);
      var _________________________eventHandler = EventAssociat(83529);
      var initSelfRefer = EventAssociat(23059);
      var index15308 = EventAssociat(61036);
      var n = EventAssociat(82128);
      var cEventTrigger = EventAssociat(70679);
      var o = EventAssociat(87706);
      var r = EventAssociat(74173);
      let l = _________________________eventHandler.A.get("drawDelay");
      _________________________eventHandler.A.on(
        "zrVIMz",
        (setDrawDelay, drawDelayTime) => {
          if (setDrawDelay === "drawDelay") {
            l = drawDelayTime;
          }
        },
      );
      class c {
        get type() {
          return this.view.getUint8(0);
        }
        set type(setViewFirstG) {
          this.view.setUint8(0, setViewFirstG);
        }
        get flags() {
          return this.view.getUint8(1);
        }
        set flags(secondValue) {
          this.view.setUint8(1, secondValue);
        }
        get id() {
          return this.view.getUint16(2, true);
        }
        set id(setIdPlacehld) {
          this.view.setUint16(2, setIdPlacehld, true);
        }
        get size() {
          return this.view.getUint16(16);
        }
        set size(index16) {
          this.view.setUint16(16, index16);
        }
        get Fwk() {
          return this.view.getUint16(18);
        }
        set Fwk(fwkNum) {
          this.view.setUint16(18, fwkNum);
        }
        get dxt() {
          return this.view.getUint16(20);
        }
        set dxt(setDirectX) {
          this.view.setUint16(20, setDirectX);
        }
        get PnL() {
          return index15308.T9(...this.tQY);
        }
        constructor(
          ___jqueryObject,
          _____eventDetails,
          __dataIndex,
          uniqueIndex,
          ____________________________________index,
          initList,
          l,
          c,
        ) {
          this.buffer = new ArrayBuffer(22);
          this.view = new DataView(this.buffer);
          this.position = r.A.nVI(new Int16Array(this.buffer, 12, 2));
          this.Fql = r.A.nVI(new Int16Array(this.buffer, 4, 2));
          this.ytG = r.A.nVI(new Int16Array(this.buffer, 8, 2));
          this.scale = 1;
          this.tQY = [-1, -1];
          this.EZD = new n.m(this);
          this.type = ___jqueryObject;
          this.id = _____eventDetails || 0;
          this.texture = __dataIndex = __dataIndex || initSelfRefer.WK.get(0);
          (___jqueryObject = this.sprite =
            new o.Sprite(__dataIndex)).anchor.set(0.5);
          (___jqueryObject.gameData = this).position.set(
            uniqueIndex,
            ____________________________________index,
          );
          this.position.copy(this.Fql);
          this.position.copy(this.ytG);
          ___jqueryObject.position.set(
            uniqueIndex,
            ____________________________________index,
          );
          this.dxt = this.Fwk = this.size = initList;
          this.flags = l;
          this.context = c;
        }
        get mass() {
          return (this.dxt * this.dxt) / 100;
        }
        update(___selector) {
          var ___selector = (0, eventHandler1.N)(
            (___selector - this.PnL) / l,
            0,
            1,
          );
          this.position.x = (0, eventHandler1.Cc)(
            this.Fql.x,
            this.ytG.x,
            ___selector * this.scale,
          );
          this.position.y = (0, eventHandler1.Cc)(
            this.Fql.y,
            this.ytG.y,
            ___selector * this.scale,
          );
          var ___selector =
            (this.size = (0, eventHandler1.Cc)(
              this.Fwk,
              this.dxt,
              ___selector,
            )) * 2;
          var performanceTh = this.sprite;
          return (
            performanceTh == null ||
            (!!this.position.equalTo(performanceTh.x, performanceTh.y) &&
              performanceTh.width === ___selector) ||
            ((performanceTh.x = this.position.x),
            (performanceTh.y = this.position.y),
            (performanceTh.width = performanceTh.height = ___selector),
            false)
          );
        }
        destroy(cleanup) {
          if (
            this.EZD.size !== 0 ||
            !(cEventTrigger.Ab.delete(this.id),
            cEventTrigger.DH.delete(this),
            this.destroyed)
          ) {
            cEventTrigger.DH.delete(this);
            this.destroyed = true;
            this.KSg?.();
            if (cleanup) {
              cEventTrigger.nf.add(this);
            } else {
              this.LnE();
            }
          }
        }
        LnE() {
          if (this.sprite) {
            this.sprite.destroy();
            this.sprite = null;
          } else {
            (0, eventHandler1.$s)(
              1,
              'Sprite for cell "' + this.id + '" already destroyed!',
            );
          }
        }
      }
    },
    91461(handleTarget, __________________________eventHandler, NumberEvent) {
      var createNumberE = NumberEvent(84740);
      NumberEvent(19659);
      NumberEvent(87706);
      NumberEvent(49544);
      createNumberE.A;
    },
    91001(calculateDisp, elementConstr, constructorIn) {
      constructorIn.d(elementConstr, {
        A: () => _elementConstr,
      });
      var elementConstr = constructorIn(84740);
      var yearInception = constructorIn(19659);
      var ______element = constructorIn(87706);
      constructorIn(63166);
      class _elementConstr extends elementConstr.A {
        constructor(
          _service,
          idOrData,
          createTerrain,
          __itemIndex,
          n,
          _argumentValue,
        ) {
          super(
            yearInception.QG,
            _service,
            ______element.Texture.from("./img/crown.png"),
            idOrData,
            createTerrain,
            __itemIndex,
            n,
            _argumentValue,
          );
          this.htA = true;
          this.sprite.alpha = 0.7;
        }
      }
    },
    43815(dollarSignify, elementCreat8, ObjectFactory) {
      ObjectFactory.d(elementCreat8, {
        A: () => _elementCreat8,
      });
      var elementCreat8 = ObjectFactory(84740);
      var yearObject = ObjectFactory(19659);
      var YearBasedCreF = ObjectFactory(23059);
      class _elementCreat8 extends elementCreat8.A {
        constructor(
          yearBasedCreF,
          ___eventEmitter,
          initializeTim,
          weekOrYearlyF,
          n,
          daysCount,
          o = true,
          r = 4210752,
        ) {
          super(
            yearObject.rn,
            yearBasedCreF,
            (o = (o ? YearBasedCreF.WK : YearBasedCreF.lw).get(r)),
            ___eventEmitter,
            initializeTim,
            weekOrYearlyF,
            n,
            daysCount,
          );
          this.rDK = true;
          this.sprite.alpha = 0.5;
          this.type = yearObject.rn;
        }
      }
    },
    79287(assignWkFromP, ___transformer, translate) {
      translate.d(___transformer, {
        A: () => l,
      });
      var translatedX = translate(83529);
      var ___transformer = translate(84740);
      var translatedNr = translate(19659);
      var _____________________________________index = translate(23059);
      var n = translate(15308);
      var toNumber = translate(93581);
      let o = () =>
        _____________________________________index.WK.get(
          parseInt(translatedX.A.get("ejectedColor"), 16),
        );
      let r = translatedX.A.get("drawDelay");
      translatedX.A.on("zrVIMz", (assignGlobal, globalDrawDel) => {
        if (assignGlobal === "drawDelay") {
          r = globalDrawDel;
        }
      });
      class l extends ___transformer.A {
        static ROS(animationTrig) {
          let countdown = new toNumber.I(0.4, 1, 300);
          l.animator = countdown;
          animationTrig.on("started", () => countdown.start());
          animationTrig.on("stopped", () => countdown.stop());
        }
        constructor(
          ____jqueryObject,
          draggableEvt,
          draggableItem,
          ______________isAnonymous,
          n,
          DraggableItem,
        ) {
          super(
            translatedNr.do,
            ____jqueryObject,
            o(),
            draggableEvt,
            draggableItem,
            ______________isAnonymous,
            n,
            DraggableItem,
          );
          this.cRV = true;
          if (translatedX.A.get("animateEjectedCells")) {
            l.animator.pjN(this.sprite);
          }
        }
        CHS() {
          this.sprite.texture = this.texture = o();
        }
        update(positionSlice) {
          positionSlice = (0, n.N)((positionSlice - this.PnL) / r, 0, 1);
          this.position.set(
            (0, n.Cc)(this.Fql.x, this.ytG.x, positionSlice),
            (0, n.Cc)(this.Fql.y, this.ytG.y, positionSlice),
          );
          return (
            (positionSlice = this.sprite) == null ||
            !!this.position.equalTo(positionSlice.x, positionSlice.y) ||
            !((positionSlice.x = this.position.x),
            (positionSlice.y = this.position.y),
            1)
          );
        }
        KSg() {
          if (translatedX.A.get("animateEjectedCells") && this.sprite) {
            l.animator.vmV(this.sprite);
          }
        }
      }
    },
    75576(assignData, calculatedVar, mergeAndSum) {
      mergeAndSum.d(calculatedVar, {
        A: () => r,
      });
      var resultMerge23 = mergeAndSum(23059);
      var mergedDataSum = mergeAndSum(92915);
      var calculatedVar = mergeAndSum(84740);
      var _______loopIndex = mergeAndSum(19659);
      var n = mergeAndSum(83529);
      var calculateAndP = mergeAndSum(70679);
      mergeAndSum(15308);
      let o = (_mergedDataSum) =>
        resultMerge23.WK.get(
          n.A.get("useFoodColor")
            ? parseInt(n.A.get("foodColor"), 16)
            : mergedDataSum.pz.at(_mergedDataSum % mergedDataSum.pz.length),
        );
      class r extends calculatedVar.A {
        constructor(
          appendHtml,
          ___________________________eventHandler,
          __anonymousID,
          ____initializer,
          ______________________________________index,
          n,
        ) {
          super(
            _______loopIndex.xV,
            appendHtml,
            o(appendHtml),
            ___________________________eventHandler,
            __anonymousID,
            ____initializer,
            ______________________________________index,
            n,
          );
          this.sxA = true;
        }
        CHS() {
          this.sprite.texture = this.texture = o(this.id);
        }
        update() {
          var ___temporaryData;
          var parentSprite = this.sprite;
          return (
            parentSprite == null ||
            (this.position.set(this.ytG),
            (parentSprite.x === this.position.x &&
              parentSprite.y === this.position.y) ||
              ((___temporaryData = (this.size = this.dxt) * 2),
              (parentSprite.x = this.position.x),
              (parentSprite.y = this.position.y),
              (parentSprite.width = parentSprite.height = ___temporaryData)),
            false)
          );
        }
        destroy() {
          if (
            this.EZD.size !== 0 ||
            !(calculateAndP.Ab.delete(this.id),
            calculateAndP.DH.delete(this),
            this.destroyed)
          ) {
            this.destroyed = true;
            calculateAndP.DH.delete(this);
            this.LnE();
          }
        }
      }
    },
    1786(Configurator, operationKeyP, operationDisp) {
      operationDisp.d(operationKeyP, {
        No: () => n.A,
        Oe: () => o.A,
        hN: () => actionKey.A,
        kF: () => getX.A,
        ub: () => handleUBKey.A,
        xx: () => getOperation.A,
      });
      var getX = operationDisp(88074);
      var handleUBKey = operationDisp(63);
      var getOperation = operationDisp(79287);
      var n = operationDisp(75576);
      var actionKey = operationDisp(43815);
      var o = operationDisp(91001);
      operationDisp(91461);
    },
    88074(functionStore, objectRef, idObjectCreat) {
      idObjectCreat.d(objectRef, {
        A: () => ObjectEnhanci,
      });
      var creationId = idObjectCreat(83529);
      var objectRef = idObjectCreat(84740);
      var identifiedId = idObjectCreat(19659);
      var filteredItems = idObjectCreat(41958);
      var n = idObjectCreat(15308);
      var mergeObject = idObjectCreat(23059);
      var o = idObjectCreat(78225);
      var r = idObjectCreat(93581);
      var l = idObjectCreat(95514);
      var c = idObjectCreat(87706);
      let generateIdAnd = creationId.A.get("drawDelay");
      creationId.A.on("zrVIMz", (checkDrawKey, setDrawIdWith) => {
        if (checkDrawKey === "drawDelay") {
          generateIdAnd = setDrawIdWith;
        }
      });
      let _createObject;
      class ObjectEnhanci extends objectRef.A {
        static ROS(animationCtrl) {
          _createObject = animationCtrl;
          let animationEvt = new r.I(0.3, 1, 500);
          ObjectEnhanci.animator = animationEvt;
          _createObject.on("started", () => animationEvt.start());
          _createObject.on("stopped", () => animationEvt.stop());
        }
        constructor(
          superId,
          ___________________________________________anonymousUser,
          Transactionor,
          transactionId,
          n,
          r,
          l,
        ) {
          super(
            identifiedId.g4,
            superId,
            r.texture || mergeObject.WK.get(0),
            ___________________________________________anonymousUser,
            Transactionor,
            transactionId,
            n,
            l,
          );
          this.exG = true;
          this.player = r;
          this.pid = r.pid;
          if (
            (superId = o.A.pids.indexOf(this.pid)) !== -1 &&
            (_createObject.HsE[superId].add(this),
            creationId.A.get("tabStatusMode") === 1) &&
            superId === o.A.yNT
          ) {
            this.qLx();
          }
          if (r.Rak) {
            this.xtA();
          }
          if (creationId.A.get("animatePlayerCells")) {
            ObjectEnhanci.animator.pjN(this.sprite);
          }
        }
        xtA() {
          var crownSprite;
          if (this.crownSprite != null) {
            return (0, n.$s)(1, "xtA(): crown already exists");
          }
          this.sprite.addChild(
            (this.crownSprite =
              _createObject.eWF.pop() ||
              ((crownSprite = c.Sprite.from("./img/crown.png")).scale.set(0.7),
              crownSprite.pivot.set(0, 643),
              crownSprite.anchor.set(0.5, 0),
              (crownSprite.rotation = -0.5),
              (crownSprite.alpha = 0.7),
              (crownSprite.zIndex = 2),
              crownSprite)),
          );
        }
        DgL() {
          var ___document = this.crownSprite;
          if (___document == null) {
            return (0, n.$s)(1, "DgL(): crown doesnt exist");
          }
          this.sprite.removeChild(___document);
          if (_createObject.eWF.length < 128) {
            _createObject.eWF.push(___document);
          } else {
            ___document.destroy();
          }
          delete this.crownSprite;
        }
        qLx() {
          var sprite;
          if (!this.VEj) {
            sprite = this.VEj =
              ((sprite = new c.Sprite(mergeObject.$P.get())).anchor.set(0.5),
              (sprite.y = -290),
              (sprite.width = sprite.height = 50),
              (sprite.alpha = 0.8),
              (sprite.zIndex = 2),
              sprite);
            this.sprite.addChild(sprite);
          }
        }
        IvE() {
          var renderMarkup = this.VEj;
          if (renderMarkup == null) {
            return (0, n.$s)(1, "IvE(): arrow doesnt exist");
          }
          this.sprite.removeChild(renderMarkup);
          renderMarkup.destroy();
          delete this.VEj;
        }
        update(updatePnLPos) {
          var updatePnLPos = (0, n.N)(
            (updatePnLPos - this.PnL) / generateIdAnd,
            0,
            1,
          );
          this.position.x = (0, n.Cc)(
            this.Fql.x,
            this.ytG.x,
            updatePnLPos * this.scale,
          );
          this.position.y = (0, n.Cc)(
            this.Fql.y,
            this.ytG.y,
            updatePnLPos * this.scale,
          );
          var updatePnLPos =
            (this.size = (0, n.Cc)(this.Fwk, this.dxt, updatePnLPos)) * 2;
          var pos = this.sprite;
          return (
            pos == null ||
            !!this.texture.VqU ||
            (!!this.position.equalTo(pos.x, pos.y) &&
              pos.width === updatePnLPos) ||
            !((pos.x = this.position.x),
            (pos.y = this.position.y),
            (pos.width = pos.height = updatePnLPos),
            this.AfU(),
            1)
          );
        }
        AfU() {
          var sceneScaleFnc;
          var _initializedUn;
          var scaledSceneX =
            _createObject.scene.container.scale.x * this.size * l.Uk.resolution;
          var scaledWidthTh =
            scaledSceneX > creationId.A.get("smallTextThreshold");
          if (this.player.VAP && scaledWidthTh) {
            if (!this.SoH) {
              this.SoH =
                _createObject.UJM.pop() ||
                ((sceneScaleFnc = new c.BitmapText("", {
                  fontName: "mass",
                  align: "right",
                })),
                (_initializedUn = creationId.A.jLt.strokeThickness || 0),
                sceneScaleFnc.position.set(
                  -_initializedUn / 2,
                  -_initializedUn / 2,
                ),
                sceneScaleFnc.anchor.set(0.5, -0.6),
                sceneScaleFnc);
              this.SoH.zIndex = 0;
              this.sprite.addChild(this.SoH);
            }
            this.SoH.text = _createObject.Hdd(this.mass);
            this.SoH.visible = true;
          } else if (this.SoH) {
            this.SoH.visible = false;
          }
          if (this.player.cSM && scaledWidthTh) {
            if (!this.RiW && this.player.RiW) {
              this.RiW = new c.Sprite(this.player.RiW.texture);
              this.RiW.anchor.set(0.5);
              if (!(this.player instanceof filteredItems.A)) {
                this.RiW.anchor.y = 0.6;
                this.RiW.scale.set(1.5, 1.5);
              }
              this.RiW.zIndex = 1;
              this.sprite.addChild(this.RiW);
            }
            if (this.RiW) {
              this.RiW.visible = true;
            }
          } else if (this.RiW) {
            this.RiW.visible = false;
          }
          if (this.crownSprite) {
            this.crownSprite.visible =
              scaledSceneX > 16 && creationId.A.get("showCrown");
          }
          if (this.VEj) {
            this.VEj.visible = scaledSceneX > 16;
          }
        }
        KSg() {
          if (creationId.A.get("animatePlayerCells")) {
            ObjectEnhanci.animator.vmV(this.sprite);
          }
          var pidMatchingId = o.A.pids.indexOf(this.pid);
          if (pidMatchingId !== -1) {
            _createObject.HsE[pidMatchingId].delete(this);
          }
          if (this.SoH) {
            this.sprite.removeChild(this.SoH);
            if (_createObject.UJM.length < 256) {
              _createObject.UJM.push(this.SoH);
            } else {
              this.SoH.destroy(true);
            }
          }
          if (this.crownSprite) {
            this.DgL();
          }
        }
        LnE() {
          if (this.sprite) {
            this.sprite.destroy();
            this.sprite = null;
            if (this.RiW) {
              this.RiW.destroy();
            }
          } else {
            (0, n.$s)(
              1,
              'Sprite for player cell "' + this.id + '" already destroyed!',
            );
          }
        }
      }
    },
    70679(____transformData, eventArg, XConstructor) {
      XConstructor.d(eventArg, {
        Ab: () => translatedSeg,
        DH: () => n,
        nf: () => transformedP4,
      });
      let instance44895 = XConstructor(44895);
      let transformedP4 = new instance44895.A();
      let translatedSeg = new Map();
      let n = new instance44895.A();
    },
    19659(_createAnon, anonymousOper, operationMap) {
      operationMap.d(anonymousOper, {
        QG: () => o,
        Sq: () => _____transformData,
        do: () => operationArgs,
        eL: () => l,
        g4: () => _minifiedAnonV,
        hH: () => r,
        rn: () => transformSqOp,
        xV: () => n,
      });
      let [
        _minifiedAnonV,
        _____transformData,
        operationArgs,
        n,
        transformSqOp,
        o,
        r,
        l,
      ] = [1, 2, 3, 4, 5, 6, 7, 9];
    },
    83842(currentTarget, _eventInfo, processEventT) {
      processEventT.d(_eventInfo, {
        A: () => runningState,
      });
      let eventTicker = processEventT(87706).Ticker.shared;
      class runningState {
        constructor() {
          this.running = false;
          this.TJL = null;
        }
        PNv(currentTime) {
          if (this.running && this.TJL != null) {
            eventTicker.remove(this.TJL);
            this.running = false;
          }
          this.TJL = currentTime;
        }
        start() {
          eventTicker.add(this.TJL);
          this.running = true;
        }
        stop() {
          eventTicker.remove(this.TJL);
          this.running = false;
        }
      }
    },
    92915(setObjectWith, operationsMap, identifierToS) {
      identifierToS.d(operationsMap, {
        O$: () => n,
        cy: () => _______________________________________index,
        ic: () => idIndex,
        oZ: () => o,
        pz: () => keyIdentifier,
      });
      var _operationRef = identifierToS(15308);
      let keyIdentifier = [16776960, 65280, 65535, 16711935];
      let idIndex = [
        16711680, 16744448, 16776960, 8453888, 65280, 65408, 65535, 33023,
        8388863, 16711935, 16711808,
      ];
      let n = idIndex.map((scaleValue) =>
        (0, _operationRef.v2)(scaleValue, 0.8),
      );
      let _______________________________________index = idIndex.map(
        (___fetchData) => (0, _operationRef.v2)(___fetchData, 0.7),
      );
      let o = n.map((operateRef) => (0, _operationRef.v2)(operateRef, 0.8));
    },
    93581(
      __interaction,
      ____________________________eventHandler,
      _____________________________eventHandler,
    ) {
      _____________________________eventHandler.d(
        ____________________________eventHandler,
        {
          I: () => ______________________________eventHandler,
        },
      );
      var ____________________________eventHandler =
        _____________________________eventHandler(83842);
      var _eventListener = _____________________________eventHandler(87706);
      class ______________________________eventHandler extends ____________________________eventHandler.A {
        constructor(
          ____________________________________________anonymousUser,
          animations,
          __eventListener,
        ) {
          super();
          this.animate = (transformItem) => {
            this.naK.forEach((transformable) => {
              var calculateOpac =
                transformItem / _eventListener.settings.TARGET_FPMS;
              var calculateOpac = (transformable.alpha +=
                calculateOpac / this.fadeAmount);
              if (!transformable || !(calculateOpac < this.qCL)) {
                transformable.alpha = this.qCL;
                this.naK.delete(transformable);
              }
            });
          };
          this.mPX = ____________________________________________anonymousUser;
          this.qCL = animations;
          this.naK = new Set();
          this.fadeAmount = __eventListener;
          this.PNv(this.animate.bind(this));
        }
        pjN(jqElement) {
          jqElement.alpha = this.mPX;
          this.naK.add(jqElement);
        }
        vmV(uniqueKey) {
          if (this.naK.has(uniqueKey)) {
            this.naK.delete(uniqueKey);
          }
        }
        stop() {
          super.stop();
          this.naK.clear();
        }
      }
    },
    44895(assignedData, ____enhancedData, ________________________userData) {
      ________________________userData.d(____enhancedData, {
        A: () => List,
      });
      class Node {
        constructor(_______initialValue) {
          this.next = null;
          this.prev = null;
          this.value = _______initialValue;
        }
      }
      class List {
        constructor() {
          this.head = null;
          this.tail = null;
          this.length = 0;
        }
        clear() {
          this.length = 0;
          this.head = this.tail = null;
        }
        values() {
          var collectLinked = [];
          let linkedListTra = this.head;
          while (linkedListTra) {
            collectLinked.push(linkedListTra.value);
            linkedListTra = linkedListTra.next;
          }
          return collectLinked;
        }
        get count() {
          var _linkedListTra = 0;
          let iterateLinked = this.head;
          while (iterateLinked) {
            _linkedListTra++;
            iterateLinked = iterateLinked.next;
          }
          return _linkedListTra;
        }
        add(addOrPrepend) {
          addOrPrepend = new Node(addOrPrepend);
          if (this.head) {
            addOrPrepend.prev = this.tail;
            if (this.tail) {
              this.tail.next = addOrPrepend;
            }
            this.tail = addOrPrepend;
          } else {
            this.head = this.tail = addOrPrepend;
          }
          this.length++;
          return addOrPrepend;
        }
        remove(removeNode) {
          if (removeNode) {
            if (removeNode.prev) {
              removeNode.prev.next = removeNode.next;
            } else {
              this.head = removeNode.next;
            }
            if (removeNode.next) {
              removeNode.next.prev = removeNode.prev;
            } else {
              this.tail = removeNode.prev;
            }
            removeNode.next = removeNode.prev = null;
            this.length--;
          }
        }
        delete(_targetValue) {
          let removeAtValue = this.head;
          while (removeAtValue) {
            if (removeAtValue.value === _targetValue) {
              this.remove(removeAtValue);
              return true;
            }
            removeAtValue = removeAtValue.next;
          }
          return false;
        }
        *[Symbol.iterator]() {
          let getNextItem = this.head;
          while (getNextItem) {
            yield getNextItem.value;
            getNextItem = getNextItem.next;
          }
        }
        get size() {
          return this.length;
        }
      }
    },
    82128(_________context, minifyVariant, _calculator) {
      _calculator.d(minifyVariant, {
        m: () => UserClickTrak,
      });
      class UserClickTrak {
        constructor(anonymousBlob) {
          this.handles = [false, false];
          this.owner = anonymousBlob;
        }
        get size() {
          return (this.handles[0] ? 1 : 0) + (this.handles[1] ? 1 : 0);
        }
        clear() {
          this.handles = [false, false];
        }
        disown(processRef) {
          this.handles[processRef] = false;
        }
        own(setHandles) {
          this.handles[setHandles] = true;
        }
        migrate(MigrationCoin) {
          this.disown(MigrationCoin);
          return (
            this.size !== 0 &&
            ((this.owner.context = MigrationCoin === 0 ? 1 : 0), true)
          );
        }
      }
    },
    63(decimalSign, data84740, DataTransform) {
      DataTransform.d(data84740, {
        A: () => n,
      });
      var data84740 = DataTransform(84740);
      var ___transformed = DataTransform(19659);
      var num19659 = DataTransform(23059);
      var findMatch = DataTransform(87706);
      class n extends data84740.A {
        constructor(
          initializeJQO,
          ______handleEvent,
          validator,
          argIndex,
          n,
          ___additionalArg,
        ) {
          super(
            ___transformed.Sq,
            initializeJQO,
            num19659.Tb.get(),
            ______handleEvent,
            validator,
            argIndex,
            n,
            ___additionalArg,
          );
          this.fnF = true;
          this.disabled = false;
        }
        lBZ() {
          this.LnE();
          this.texture = num19659.Tb.get();
          this.sprite = new findMatch.Sprite(this.texture);
          this.sprite.anchor.set(0.5);
          this.sprite.gameData = this;
        }
      }
    },
    97667(jQueryRoo, jqRooManager, objectFactory) {
      objectFactory.d(jqRooManager, {
        A: () => r,
      });
      var createObject8 = objectFactory(83529);
      var sevenEightTwo = objectFactory(78225);
      var ______indexCounter = objectFactory(15308);
      var n = objectFactory(61036);
      var rValueRetriev = objectFactory(30847);
      var o = objectFactory(33656);
      class r {
        constructor(thisDom) {
          this.game = thisDom;
        }
        Xiy(updateGameUI, onGameAction, argument) {
          if (
            !this.game.pEA(argument || sevenEightTwo.A.yNT) ||
            this.game.ycZ(argument || sevenEightTwo.A.yNT)
          ) {
            return false;
          }
          this.game.fwE(argument || sevenEightTwo.A.yNT, true);
          this.game.FLt.adz(updateGameUI);
          let updateUIWithP = onGameAction ? (0, o.Qv)(onGameAction) : "";
          if (typeof updateGameUI == "number") {
            if (
              (onGameAction = this.game.FCi.get(updateGameUI)) &&
              !updateUIWithP
            ) {
              updateUIWithP = (0, o.Qv)(onGameAction.name || "Unnamed");
            }
          } else {
            updateUIWithP = updateUIWithP || o.g8;
          }
          if (updateUIWithP.length > 0) {
            updateUIWithP +=
              " (tab " +
              (1 +
                (typeof argument == "number"
                  ? argument
                  : sevenEightTwo.A.yNT)) +
              ")";
            (0, ______indexCounter.me)(updateUIWithP);
          }
          return true;
        }
        Rhi() {
          this.game.FLt.NTE();
        }
        TaP() {
          this.game.FLt.DQA();
        }
        feed(feedJjWState) {
          this.game.FLt.jjW(feedJjWState);
        }
        PFX(existsNonFroZ, yearAttribute = sevenEightTwo.A.yNT) {
          var arrayElement;
          var elementMouse;
          var gameInstance = this.game;
          if (gameInstance.running) {
            elementMouse = (arrayElement = gameInstance.eWI[yearAttribute])
              .mouse;
            if (
              (existsNonFroZ =
                existsNonFroZ == null ? !elementMouse.frozen : existsNonFroZ)
            ) {
              this.KHK(false, yearAttribute);
              this.OsW(false, yearAttribute);
              gameInstance.fjG(yearAttribute);
              arrayElement.CiT();
            }
            elementMouse.frozen = existsNonFroZ;
            gameInstance.emit("RAwTus", {
              mouseFrozen: true,
            });
          }
        }
        KHK(mouseSwitch, _sevenEightTwo = sevenEightTwo.A.yNT) {
          var __sevenEightTwo;
          var GameObject = this.game;
          if (GameObject.running) {
            __sevenEightTwo = GameObject.eWI[_sevenEightTwo].mouse;
            if (
              (mouseSwitch =
                mouseSwitch == null ? !__sevenEightTwo.centralize : mouseSwitch)
            ) {
              this.PFX(false, _sevenEightTwo);
              this.OsW(false, _sevenEightTwo);
            }
            __sevenEightTwo.centralize = mouseSwitch;
            GameObject.emit("RAwTus", {
              LZd: true,
            });
          }
        }
        OsW(triggerEighth, ___sevenEightTwo = sevenEightTwo.A.yNT) {
          var mouseRef;
          var mouseRefSeven;
          var GameInstance = this.game;
          if (GameInstance.running) {
            mouseRefSeven = (mouseRef = GameInstance.eWI[___sevenEightTwo])
              .mouse;
            if (
              (triggerEighth =
                triggerEighth == null ? !mouseRefSeven.pause : triggerEighth)
            ) {
              GameInstance.fjG(null, ___sevenEightTwo);
              mouseRef.CiT();
              mouseRef.rHk(15);
              this.PFX(false);
              this.KHK(false);
            }
            mouseRefSeven.pause = triggerEighth;
            GameInstance.emit("RAwTus", {
              lockLinesplit: true,
            });
          }
        }
        lineSplit(weekdayHours = sevenEightTwo.A.yNT) {
          if (this.lZS) {
            (0, rValueRetriev.DJ)(this.lZS);
          }
          this.PFX(true, weekdayHours);
          this.split(3, null, weekdayHours);
          this.lZS = (0, rValueRetriev.wg)(() => {
            delete this.lZS;
            this.PFX(false, weekdayHours);
          }, createObject8.A.get("lineSplitDelay"));
        }
        split(
          thisCallback,
          checkCallback,
          ____sevenEightTwo = sevenEightTwo.A.yNT,
        ) {
          var mousePauseObj = this.game;
          var mousePauseStl = mousePauseObj.eWI[____sevenEightTwo];
          if (!mousePauseStl.mouse.pause) {
            mousePauseStl.CiT();
          }
          if (checkCallback) {
            (0, rValueRetriev.wg)(
              this.split.bind(this, thisCallback, ____sevenEightTwo),
              checkCallback,
            );
          } else {
            mousePauseStl.JOy(thisCallback);
            mousePauseObj.Ifps[____sevenEightTwo] += thisCallback;
            if (mousePauseObj.Ifps[____sevenEightTwo] <= 2) {
              mousePauseObj.Pzrs[____sevenEightTwo] = performance.now() + 300;
            } else {
              mousePauseObj.Pzrs[____sevenEightTwo] = NaN;
              mousePauseObj.Ifps[____sevenEightTwo] = 0;
            }
          }
        }
        zoom(adjustZoomFPS) {
          var ownerGameRef = this.game;
          var smoothZoomFac = 1 - createObject8.A.get("cameraZoomSpeed") / 100;
          let zoomFocusFrac = 0;
          if (adjustZoomFPS.detail) {
            zoomFocusFrac = adjustZoomFPS.detail / 3;
          } else if (adjustZoomFPS.wheelDelta) {
            zoomFocusFrac = -(adjustZoomFPS.wheelDelta / 120);
          }
          adjustZoomFPS = n.n7(smoothZoomFac, zoomFocusFrac);
          ownerGameRef.Cwd = (0, ______indexCounter.N)(
            ownerGameRef.Cwd * adjustZoomFPS,
            ownerGameRef.jeQ,
            1,
          );
        }
        Szi(updateGame) {
          this.game.Cwd = 0.8 / n.n7(2, updateGame - 1);
        }
        RWX() {
          var _gameInstance = this.game;
          var itemStatus = sevenEightTwo.A.yNT;
          var isActivated = itemStatus == 0 ? 1 : 0;
          var n = _gameInstance.eWI[isActivated];
          if (!n.opened) {
            if (sevenEightTwo.A.Xwi) {
              if (this.game.Zaq(itemStatus)) {
                n.zGd = true;
              } else {
                n.Fcz = true;
              }
              n.uTX = true;
              n.open(sevenEightTwo.A.Xwi);
              return;
            } else {
              return (0, ______indexCounter.me)(
                "Connect to a server in the server list.",
                0,
                2000,
              );
            }
          }
          if (n.connected) {
            _gameInstance.MFe = performance.now();
            createObject8.A.set(
              "activeTabContext",
              (sevenEightTwo.A.yNT = isActivated),
            );
            if (
              _gameInstance.Zaq(itemStatus) &&
              !_gameInstance.Zaq(isActivated) &&
              !_gameInstance.ycZ(isActivated)
            ) {
              return this.Xiy();
            }
            if (
              !_gameInstance.Zaq(isActivated) &&
              !_gameInstance.ycZ(isActivated)
            ) {
              n.NTE();
            }
            if (!createObject8.A.get("rememberEjecting")) {
              _gameInstance.eWI[itemStatus].jjW(false);
            }
          } else {
            (0, ______indexCounter.me)(
              "Tab " + (1 + isActivated) + " is still connecting, please wait.",
              0,
              1500,
            );
          }
        }
        jvz(compareItem) {
          let { x: _mousePosition, y: CursorYInterp } = this.game.FLt.mouse;
          let ________________________________________index = 0;
          let sortedIndex = null;
          this.game.VTJ.sort(
            (SizeComparer, compareSizeDc) =>
              SizeComparer.size - compareSizeDc.size,
          ).forEach((clickableItem) => {
            var { x: scaledItemDim, y: o } = clickableItem.position;
            var scaledItemDim = scaledItemDim - _mousePosition;
            var o = o - CursorYInterp;
            var scaledItemDim =
              n.RZ(n.tn(scaledItemDim * scaledItemDim + o * o)) -
              clickableItem.size;
            if (
              compareItem
                ? scaledItemDim < ________________________________________index
                : scaledItemDim <= 0
            ) {
              if (compareItem) {
                ________________________________________index = scaledItemDim;
              } else {
                ________________________________________index =
                  clickableItem.size;
              }
              sortedIndex = clickableItem;
            }
          });
          return sortedIndex;
        }
        toggleSkins(skinState) {
          if (skinState == null) {
            skinState = !createObject8.A.get("skinsEnabled");
          }
          createObject8.A.set("skinsEnabled", skinState);
          this.game.FCi.AaG();
        }
        toggleNames(toggleNameShy) {
          if (toggleNameShy == null) {
            toggleNameShy = !createObject8.A.get("namesEnabled");
          }
          createObject8.A.set("namesEnabled", toggleNameShy);
          this.game.FCi.AaG();
        }
        toggleMass(toggleMass) {
          if (toggleMass == null) {
            toggleMass = !createObject8.A.get("massEnabled");
          }
          createObject8.A.set("massEnabled", toggleMass);
          this.game.FCi.AaG();
        }
        toggleFood(foodVisible) {
          if (foodVisible == null) {
            foodVisible = !createObject8.A.get("foodVisible");
          }
          createObject8.A.set("foodVisible", foodVisible);
          this.game.scene.food.visible = foodVisible;
        }
        toggleHud(hudState) {
          if (hudState == null) {
            hudState = !createObject8.A.get("showHud");
          }
          createObject8.A.set("showHud", hudState);
        }
        toggleChat(toggleChat) {
          if (toggleChat == null) {
            toggleChat = !createObject8.A.get("showChat");
          }
          createObject8.A.set("showChat", toggleChat);
          var currentGame = this.game;
          if (currentGame.running) {
            currentGame.emit("uEBHda", toggleChat);
          }
        }
        toggleChatToast(
          _createObject8 = !createObject8.A.get("showChatToast"),
        ) {
          createObject8.A.set("showChatToast", _createObject8);
          this.game.running;
        }
        selectPlayer() {
          var playerById = this.jvz(true);
          if (playerById?.pid) {
            this.game.Qve = playerById.pid;
          }
        }
      }
    },
    13711(checkAdmin, onEvent, toggleAdmin) {
      var _toggleAdmin = toggleAdmin(95195);
      var toggleAdminB9 = toggleAdmin(95514);
      var adminDisable = toggleAdmin(19099);
      var n = toggleAdmin(83529);
      var __toggleAdmin = toggleAdmin(74173);
      var o = toggleAdmin(78225);
      let r = !!localStorage.getItem("adminMode");
      let l = toggleAdminB9.Uk.view;
      new (class {
        constructor() {
          this.pressed = new Set();
          this.eJy = (hasMessage) => {
            if (!("" + hasMessage.target?.className).includes("message text")) {
              hasMessage.preventDefault();
            }
          };
          this.PaK = (mouseButtonId) => {
            if (!_toggleAdmin.A.Xrx) {
              mouseButtonId = "MOUSE" + mouseButtonId.button;
              adminDisable.Ay.release(mouseButtonId);
            }
          };
          this.OZK = (inputSelector) => {
            if (
              !_toggleAdmin.A.Xrx &&
              !(
                (triggeredId = inputSelector.target) instanceof HTMLInputElement
              ) &&
              !(triggeredId instanceof HTMLSelectElement) &&
              !(triggeredId instanceof HTMLButtonElement) &&
              !("" + triggeredId.className).includes("message")
            ) {
              var triggeredId;
              var trap;
              inputSelector.preventDefault();
              l.focus();
              if (
                r &&
                inputSelector.shiftKey &&
                _toggleAdmin.A.Qve &&
                inputSelector.button === 0
              ) {
                ({ x: triggeredId, y: trap } = _toggleAdmin.A.FLt.mouse);
                _toggleAdmin.A.FLt.uot(
                  "/teleport " +
                    _toggleAdmin.A.Qve +
                    " " +
                    triggeredId +
                    " " +
                    trap,
                );
                return;
              }
              if (_toggleAdmin.A.Zaq(o.A.yNT) && inputSelector.button === 0) {
                if ((trap = _toggleAdmin.A.kmM.jvz())) {
                  _toggleAdmin.A.kmM.Xiy(trap.pid);
                }
              } else {
                trap = "MOUSE" + inputSelector.button;
                adminDisable.Ay.press(trap);
              }
            }
          };
          this.FJz = (calculateNewE) => {
            var clickCoords;
            var _calculateNewE;
            var calculateNewE = __toggleAdmin.A.from(
              calculateNewE.clientX,
              calculateNewE.clientY,
            );
            if (n.A.get("mouseFreezeSoft") && _toggleAdmin.A.FLt.mouse.frozen) {
              ({ x: clickCoords, y: _calculateNewE } = _toggleAdmin.A.WAG);
              if (
                calculateNewE.x !== clickCoords ||
                calculateNewE.y !== _calculateNewE
              ) {
                _toggleAdmin.A.kmM.PFX(false);
              }
            }
            _toggleAdmin.A.WAG.set(calculateNewE);
            _toggleAdmin.A.fjG(
              null,
              n.A.get("switchControlMode") ? null : o.A.yNT,
            );
          };
          this.pqb = (componentRef) => {
            if (r && componentRef.shiftKey) {
              let eAvgValue = 0;
              if (componentRef.detail) {
                eAvgValue = componentRef.detail / 3;
              } else if (componentRef.wheelDelta) {
                eAvgValue = -(componentRef.wheelDelta / 120);
              }
              _toggleAdmin.A.FLt.uot(
                "/mass " +
                  _toggleAdmin.A.Qve +
                  " " +
                  (eAvgValue < 0 ? "+" : "-") +
                  "5000",
              );
            } else {
              _toggleAdmin.A.kmM.zoom(componentRef);
            }
          };
          this.yAI = (ctrlClickDete) => {
            if (
              (ctrlClickDete.target === l ||
                ctrlClickDete.target === document.body) &&
              !(ctrlClickDete.target instanceof HTMLInputElement)
            ) {
              var keyPressCode = adminDisable.Ay.XRq(ctrlClickDete.code);
              if (
                !this.pressed.has(keyPressCode) &&
                (!ctrlClickDete.ctrlKey || keyPressCode !== "TAB")
              ) {
                this.pressed.add(keyPressCode);
                if (r && ctrlClickDete.shiftKey) {
                  this.Wqm(keyPressCode);
                } else {
                  switch (keyPressCode) {
                    case "ESCAPE":
                      this.iqu();
                      return;
                    case "ENTER":
                      _toggleAdmin.A.emit("osKiSw");
                      return;
                    default:
                      if (!_toggleAdmin.A.Xrx) {
                        if (adminDisable.Ay.press(keyPressCode)) {
                          ctrlClickDete.preventDefault();
                        }
                      }
                  }
                }
              }
            }
          };
          this.VbF = (disabledCodeS) => {
            disabledCodeS = adminDisable.Ay.XRq(disabledCodeS.code);
            adminDisable.Ay.release(disabledCodeS);
            this.pressed.delete(disabledCodeS);
          };
          this.yJd = () => {
            _toggleAdmin.A.scene.idx();
          };
          window.addEventListener("blur", () => this.pressed.clear());
          let textMessageGu = (preventExit) => {
            preventExit.preventDefault();
            return (preventExit.returnValue =
              "Are you sure you want to close the page?");
          };
          document.body.addEventListener("contextmenu", this.eJy);
          _toggleAdmin.A.on("stopped", () => {
            window.removeEventListener("beforeunload", textMessageGu, {
              capture: true,
            });
            document.body.removeEventListener("mouseup", this.PaK);
            document.body.removeEventListener("mousedown", this.OZK);
            document.body.removeEventListener("mousemove", this.FJz);
            l.removeEventListener("wheel", this.pqb);
            document.body.removeEventListener("keydown", this.yAI);
            document.body.removeEventListener("keyup", this.VbF);
            window.removeEventListener("resize", this.yJd);
          });
          _toggleAdmin.A.on("started", () => {
            window.addEventListener("beforeunload", textMessageGu, {
              capture: true,
            });
            document.body.addEventListener("mouseup", this.PaK);
            document.body.addEventListener("mousedown", this.OZK);
            document.body.addEventListener("mousemove", this.FJz);
            l.addEventListener("wheel", this.pqb, {
              passive: true,
            });
            document.body.addEventListener("keydown", this.yAI);
            document.body.addEventListener("keyup", this.VbF);
            window.addEventListener("resize", this.yJd);
          });
        }
        iqu() {
          if (_toggleAdmin.A.replaying) {
            this.pressed.clear();
            _toggleAdmin.A.stop();
            _toggleAdmin.A.FQe(true);
          } else {
            let autoRespawnIn = true;
            _toggleAdmin.A.xCd.forEach((triggerRespaN, AdminRespawnS) => {
              _toggleAdmin.A.triggerAutoRespawn(AdminRespawnS);
              autoRespawnIn = false;
            });
            if (autoRespawnIn) {
              _toggleAdmin.A.FQe();
            }
          }
        }
        Wqm(quickActions) {
          var mouseX;
          var toggleAdminY;
          if (quickActions === "V") {
            ({ x: mouseX, y: toggleAdminY } = _toggleAdmin.A.FLt.mouse);
            _toggleAdmin.A.FLt.uot("/virus " + mouseX + " " + toggleAdminY);
          } else if (quickActions === "F") {
            _toggleAdmin.A.FLt.uot("/freeze " + _toggleAdmin.A.Qve);
          } else if (quickActions === "D") {
            _toggleAdmin.A.FLt.uot("/ignoreBorders " + _toggleAdmin.A.Qve);
          }
        }
      })();
    },
    692(setObjectProp, updateObject, _extractData) {
      _extractData.d(updateObject, {
        A: () => DynamicCellUp,
      });
      var extractedKey7 = _extractData(78225);
      var extractedData = _extractData(83529);
      var _extractedData = _extractData(95514);
      var n = _extractData(23059);
      var _getById = _extractData(58514);
      var o = _extractData(82196);
      var r = _extractData(74173);
      var l = _extractData(15308);
      var c = _extractData(24968);
      var updateRecord = _extractData(70679);
      var extractKey7to = _extractData(97667);
      var getDataByID = _extractData(37921);
      var __extractData = _extractData(35827);
      var _extractKeyed = _extractData(1786);
      var m = _extractData(61036);
      var ___extractData = _extractData(30847);
      var p = _extractData(97665);
      var f = _extractData(53967);
      var updateObjectB = _extractData(33656);
      var extractSpecif = _extractData(8125);
      var extractField = _extractData(35963);
      var extractByIds = _extractData(63836);
      var extractedKey = _extractData(44895);
      var updateObject = _extractData(37007);
      var updateObject = _extractData.n(updateObject);
      var extractAndSet = _extractData(54603);
      var extractById = _extractData(77088);
      let extractInfo = 0;
      class DynamicCellUp extends updateObject() {
        get cellCount() {
          return this.TRu[extractedKey7.A.yNT];
        }
        set Ifp(interfaceData) {
          this.Ifps[extractedKey7.A.yNT] = interfaceData;
        }
        set Pzr(valueToStore) {
          this.Pzrs[extractedKey7.A.yNT] = valueToStore;
        }
        constructor() {
          super();
          this.running = false;
          this.YqE = r.A.from(0, 0);
          this.scores = [0, 0];
          this.xmF = [0, 0];
          this.zfx = 30;
          this.renderer = _extractedData.Uk;
          this.kpA = new o.A();
          this.settings = extractedData.A;
          this.fps = new c.A();
          this.state = extractedKey7.A;
          this.eWI = [
            new getDataByID.A(this, extractInfo++),
            new getDataByID.A(this, extractInfo++),
          ];
          this.kmM = new extractKey7to.A(this);
          this.TRu = [0, 0];
          this.HsE = [new extractedKey.A(), new extractedKey.A()];
          this.WAG = r.A.from();
          this.UJM = [];
          this.eWF = [];
          this.FCi = new __extractData.A(this);
          this.Ifps = [0, 0];
          this.Pzrs = [NaN, NaN];
          this.gFX = [0, 0];
          this.xCd = [];
          this.flags = 0;
          this.hYE = [-1, -1];
          this.Xrx = true;
          this.Ypz = extractField.A;
          this.cPi = new f.A();
          this.timing = {
            d: [0, 0],
            u: [0, 0],
            s: [0, 0],
            c: [0, 0],
          };
          this.render = (measureLoopDu) => {
            var startTimeDu = (this.GAB = performance.now());
            for (let numCheck = 0; numCheck < 2; numCheck++) {
              var getPropertyAt = this.Pzrs[numCheck];
              if (isNaN(getPropertyAt) || startTimeDu < getPropertyAt) {
                this.Ifps[numCheck] = 0;
                this.fjG(null, numCheck);
              }
            }
            this.wLz(startTimeDu);
            this.aHs(startTimeDu);
            this.scene.sort();
            this.pWR(false);
            if (extractedKey7.A.rendering) {
              _extractedData.Uk.render(this.scene.container);
            }
            this.fps.update(this.ticker.FPS);
            this.frames++;
            if (this.frames % 10 == 0) {
              this.emit("DEPJkV");
            }
          };
          this.oiz = 0;
          n.Tb.load(extractedData.A.get("virusImageUrl"));
          n.$P.load(extractedData.A.get("arrowImageUrl"));
          var GameMechanics = [];
          GameMechanics.push(
            (0, ___extractData.yb)(() => this.emit("GzmcRb"), 1000),
          );
          GameMechanics.push(
            (0, ___extractData.yb)(() => this.emit("kaczpN"), 60000),
          );
          this.intervals = GameMechanics;
          _extractKeyed.xx.ROS(this);
          _extractKeyed.kF.ROS(this);
          document.addEventListener("visibilitychange", () => {
            var featureFlag;
            if (this.running) {
              featureFlag = document.visibilityState === "visible";
              extractedKey7.A.rendering = featureFlag;
              (0, l.$s)(0, (0, updateObjectB.nC)(featureFlag));
              if (featureFlag) {
                l.oR.close();
              } else {
                (0, l.me)(updateObjectB.U7, 0);
              }
            }
          });
          document.addEventListener("click", () => {
            if (this.running) {
              extractedKey7.A.rendering = true;
            }
          });
          extractedKey7.A.yNT = extractedData.A.get("activeTabContext");
          extractedData.A.on("zrVIMz", (toggleActive, _toggleActive) => {
            if (toggleActive === "activeTabContext") {
              this.jWf(_toggleActive === 0 ? 1 : 0, _toggleActive);
            }
          });
          this.on("tPqeFj", (hasPendingUpd, _extractedKey7) => {
            if (
              (_extractedKey7 = _extractedKey7 || extractedKey7.A.Xwi) == null
            ) {
              (0, l.$s)(1, updateObjectB.C6);
              hasPendingUpd.promise = Promise.resolve(false);
            } else {
              if (this.FAk != null) {
                if (
                  !hasPendingUpd.first ||
                  extractedKey7.A.Xwi === _extractedKey7
                ) {
                  hasPendingUpd.wait = true;
                  hasPendingUpd.promise = Promise.resolve(false);
                  return;
                }
                (0, ___extractData.DJ)(this.FAk);
              }
              this.FAk = (0, ___extractData.wg)(() => {
                delete this.FAk;
              }, 3200);
              l.oR.close();
              let updatePending;
              updatePending =
                (updatePending =
                  hasPendingUpd.first &&
                  (this.eWI.forEach(
                    (closeIfOpened) =>
                      closeIfOpened.opened && closeIfOpened.close(),
                  ),
                  this.running)
                    ? new Promise(
                        (_______________________________eventHandler) => {
                          this.once("stopped", () =>
                            _______________________________eventHandler(),
                          );
                          this.stop();
                        },
                      )
                    : updatePending) ?? Promise.resolve();
              hasPendingUpd.promise = new Promise(async (_updatePending) => {
                await updatePending;
                if (extractedData.A.get("joinTabsTogether")) {
                  this.FLt.Jtp = true;
                  this.FLt.OIw = true;
                }
                _updatePending(await this.FLt.open(_extractedKey7));
              });
            }
          });
          this.txC = DynamicCellUp.OIT.bind(null, this);
        }
        start(configChecker) {
          if (
            !configChecker.protocol ||
            !configChecker.MXg ||
            !configChecker.lrL ||
            !configChecker.border
          ) {
            throw Error(updateObjectB.Ns);
          }
          this.running = true;
          this.protocol = configChecker.protocol;
          this.PHu = configChecker.PHu || 0;
          this.MXg = configChecker.MXg;
          this.replaying = false;
          this.flags = 0;
          this.hYE = [-1, -1];
          extractedKey7.A.tXL = [false, false];
          this.lrL = configChecker.lrL;
          this.tagId = null;
          this.YqE.reset();
          this.scores = [0, 0];
          this.xmF = [0, 0];
          this.KRz = 0;
          this.GAB = 0;
          this.fps.reset();
          updateRecord.Ab.clear();
          updateRecord.DH.clear();
          updateRecord.nf.clear();
          this.HsE.forEach((clearAll) => clearAll.clear());
          this.TRu = [0, 0];
          this.WAG.reset();
          this.Cwd = 0.3;
          this.jeQ = 0.01;
          var _handleError = (this.border = configChecker.border);
          (0, extractByIds.yc)(configChecker.sizes, _handleError);
          this.camera = {
            ohR: 0,
            IFG: [r.A.from(), r.A.from()],
            GqY: [r.A.from(), r.A.from()],
            Fql: r.A.from(_handleError.x, _handleError.y),
            WvL: r.A.from(),
            ytG: r.A.from(_handleError.x, _handleError.y),
            sbB: this.Cwd,
            vaS: this.Cwd,
          };
          this.UJM = [];
          this.eWF = [];
          this.scene = new _getById.A(this, _handleError);
          this.FCi.reset();
          this.ticker = new extractById.Rv();
          this.ticker.add(this.render);
          if (!this.replaying) {
            this.Ifps = [0, 0];
            this.Pzrs = [NaN, NaN];
            if (extractedData.A.get("minimapEnabled")) {
              this.emit("OTySHI");
            }
            if (extractedData.A.get("showMinimapStats")) {
              this.emit("omMooP", true);
            }
            if (extractedData.A.get("showChat")) {
              this.emit("uEBHda", true);
            }
            this.emit("lnBlYR");
            this.emit("uzPfcB", true);
            extractSpecif.pB.set(
              (0, updateObjectB.Rr)(1 + extractedKey7.A.yNT),
            );
            extractSpecif.qC.set(true);
            extractSpecif.m7.set(true);
            this.on("GzmcRb", this.txC);
          }
          this.frames = 0;
          this.ticker.start();
          this.emit("started");
        }
        stop() {
          if (this.running) {
            this.running = false;
            delete this.protocol;
            delete this.PHu;
            delete this.MXg;
            delete this.replaying;
            delete this.lrL;
            delete this.tagId;
            extractedKey7.A.reset();
            extractSpecif.m7.set(true);
            extractSpecif.pB.set(
              (0, updateObjectB.Rr)(1 + extractedKey7.A.yNT),
            );
            extractSpecif.qC.set(true);
            extractedKey7.A.tXL = [false, false];
            this.YqE.reset();
            this.scores = [0, 0];
            this.xmF = [0, 0];
            this.KRz = 0;
            this.GAB = 0;
            this.bLD(0);
            this.bLD(1);
            this.TRu = [0, 0];
            this.WAG.reset();
            delete this.Cwd;
            delete this.jeQ;
            delete this.border;
            delete this.camera;
            this.FCi.reset();
            var startsWith = this.scene;
            if (startsWith) {
              startsWith.BdI(false);
              startsWith.Ahq();
              startsWith.container.destroy({
                children: true,
              });
              delete this.scene;
            }
            this.renderer.clear();
            n.lw.reset();
            n.WK.reset();
            while (this.UJM.length) {
              this.UJM.pop().destroy(true);
            }
            while (this.eWF.length) {
              this.eWF.pop().destroy();
            }
            this.ticker.stop();
            delete this.ticker;
            delete this.frames;
            this.Ifps = [0, 0];
            this.Pzrs = [NaN, NaN];
            this.off("GzmcRb", this.txC);
            this.gFX = [0, 0];
            this.xCd = [];
            this.kpA.hha();
            this.emit("omMooP", false);
            this.emit("uzPfcB", false);
            this.emit("IickcJ");
            this.emit("uEBHda", false);
            this.emit("EnBeEu");
            this.emit("PSbuQD");
            this.emit("dckXze", false);
            this.emit("TNRyrb", 0);
            this.emit("degdLH");
            this.emit("stopped");
          }
        }
        static OIT(dataProvider) {
          var conditionalBt;
          var unusedTemp;
          var _dataProvider;
          for (let _indexTracker = 0; _indexTracker < 2; _indexTracker++) {
            if (dataProvider.pEA(_indexTracker)) {
              (conditionalBt = dataProvider.eWI[_indexTracker]).Iwi =
                conditionalBt.BtR();
            }
          }
          if (dataProvider.pEA(0) && dataProvider.pEA(1)) {
            [unusedTemp, _dataProvider] = dataProvider.hYE;
            dataProvider.emit(
              "GfXwco",
              (_dataProvider < unusedTemp
                ? unusedTemp - _dataProvider
                : _dataProvider - unusedTemp) > 80,
            );
          } else {
            dataProvider.emit("GfXwco", false);
          }
        }
        FQe(_hasCondition = !this.Xrx) {
          if (this.Xrx !== _hasCondition) {
            this.Xrx = _hasCondition;
          }
          this.eWI.forEach((MouseStateEvt) => {
            MouseStateEvt.mouse.centralize = _hasCondition;
          });
          this.emit("RAwTus", {
            LZd: true,
          });
          this.emit("Dcxyoc", _hasCondition);
          if (!_hasCondition) {
            _extractedData.Uk.view.focus();
          }
        }
        bLD(________userId, userIdToBeDe) {
          var userAssociate = updateRecord.Ab;
          let _userAssociate;
          for (_userAssociate of userAssociate.values()) {
            _userAssociate.EZD.disown(________userId);
            if (_userAssociate.EZD.size === 0) {
              _userAssociate.destroy();
              userAssociate.delete(_userAssociate.id);
            }
          }
          for (_userAssociate of updateRecord.nf) {
            _userAssociate.LnE();
          }
          updateRecord.nf.clear();
          if (userIdToBeDe) {
            for (_userAssociate of updateRecord.DH) {
              _userAssociate.EZD.disown(________userId);
            }
          }
        }
        triggerAutoRespawn(handleAsyncCQ) {
          (0, ___extractData.DJ)(this.xCd[handleAsyncCQ]);
          delete this.xCd[handleAsyncCQ];
          extractedKey7.A.zCS[handleAsyncCQ] = false;
          delete this.gFX[handleAsyncCQ];
          if (
            !this.Xrx &&
            !this.Zaq(handleAsyncCQ) &&
            !this.VTJ.some(
              (asyncCQHandle) =>
                asyncCQHandle.pid === extractedKey7.A.pids[handleAsyncCQ],
            )
          ) {
            this.eWI[handleAsyncCQ].NTE();
          }
        }
        AUn(__extractedData) {
          (0, ___extractData.DJ)(this.xCd[__extractedData]);
          delete this.xCd[__extractedData];
          extractedKey7.A.zCS[__extractedData] = false;
        }
        wLz(_updateRecord) {
          for (
            var _updateHandler,
              updateHandles = updateRecord.nf.values(),
              arrayReverseE = updateHandles.length;
            arrayReverseE--;

          ) {
            if (
              (_updateHandler = updateHandles[arrayReverseE]).update(
                _updateRecord,
              )
            ) {
              updateRecord.nf.delete(_updateHandler);
              _updateHandler.LnE();
            }
          }
        }
        aHs(__updateRecord) {
          var multiRecordUp = updateRecord.DH.values();
          for (var _multiRecordUp = multiRecordUp.length; _multiRecordUp--; ) {
            multiRecordUp[_multiRecordUp].update(__updateRecord);
          }
        }
        ZAg(apiClient) {
          var jsonData = r.A.from();
          if (this.ycZ(apiClient)) {
            let totalMass = 0;
            let _calculateMass = 0;
            let _totalMass = 0;
            let ___collection;
            for (___collection of this.HsE[apiClient]) {
              var { x: n, y: massValue } = ___collection.ytG;
              var o = ___collection.mass;
              _calculateMass += n * o;
              _totalMass += massValue * o;
              totalMass += o;
            }
            if (totalMass !== 0) {
              jsonData.set(_calculateMass / totalMass, _totalMass / totalMass);
            }
          }
          return jsonData;
        }
        nFh(objectIsTrue) {
          if (!this.ycZ(objectIsTrue)) {
            return -1;
          }
          var eResult = this.ZAg(objectIsTrue === 0 ? 1 : 0);
          if (!eResult.abB()) {
            return -1;
          }
          let criteriaMatch = Infinity;
          let containsZero;
          for (containsZero of this.HsE[objectIsTrue]) {
            var _containsZero =
              m.RZ(m.tn((0, p.Sl)(containsZero.position, eResult))) -
              containsZero.dxt;
            if (_containsZero < criteriaMatch) {
              criteriaMatch = _containsZero;
            }
          }
          if (criteriaMatch !== Infinity) {
            return m.tn(criteriaMatch);
          } else {
            return -1;
          }
        }
        pWR(shouldChangeC) {
          var camera = this.camera;
          var computeDiff = this.GAB - camera.ohR;
          var delayedCamera =
            this.MFe !== undefined && m.tn(this.GAB - this.MFe) < 200
              ? extractedData.A.get("cameraSwitchDelay")
              : extractedData.A.get("cameraMoveDelay");
          if (
            this.MFe !== undefined &&
            delayedCamera === extractedData.A.get("cameraMoveDelay")
          ) {
            delete this.MFe;
          }
          var n = (0, l.N)(
            computeDiff / extractedData.A.get("cameraZoomDelay"),
            0,
            1,
          );
          var computeDiff = (0, l.N)(computeDiff / delayedCamera, 0, 1);
          var delayedCamera = this.scene.container;
          var computeDiff = camera.WvL.set(camera.Fql).lerp(
            camera.ytG,
            computeDiff,
          );
          delayedCamera.pivot.set(computeDiff.x, computeDiff.y);
          var n = (0, l.Cc)(camera.sbB, camera.vaS, n);
          delayedCamera.scale.set(n);
          var delayedCamera = extractedKey7.A.yNT;
          var [delayedCamera, adjustCameraM] =
            extractedData.A.get("useSharedViewport") && this.oiz === 2
              ? this.Bum(delayedCamera)
              : this.Wgn(delayedCamera);
          if (shouldChangeC) {
            camera.ytG.set(delayedCamera);
            camera.vaS = adjustCameraM;
            camera.Fql.set(computeDiff);
            camera.sbB = n;
            camera.ohR = this.GAB;
          }
        }
        Wgn(_processObject) {
          let parentCwd = this.Cwd;
          if (this.Zaq(_processObject)) {
            return [this.camera.IFG[_processObject], parentCwd];
          }
          var resetStateIfZ = this.YqE.reset();
          var resetWhenNotZ = this.HsE[_processObject];
          if (resetWhenNotZ.size === 0) {
            return [this.camera.GqY[_processObject], parentCwd];
          }
          let idParameter = 0;
          let n = 0;
          let _validateAndRe = 0;
          let o = 0;
          let r;
          for (r of resetWhenNotZ) {
            var l = r.mass;
            n += l;
            var { x: c, y: secondYtGKey } = r.ytG;
            _validateAndRe += c * l;
            o += secondYtGKey * l;
            idParameter += r.dxt;
          }
          if (n !== 0) {
            resetStateIfZ.set(_validateAndRe / n, o / n);
          }
          if (extractedData.A.get("autoZoom")) {
            parentCwd *= m.n7(m.jk(64 / idParameter, 1), 0.22);
          }
          this.camera.GqY[_processObject].set(resetStateIfZ);
          return [resetStateIfZ, parentCwd];
        }
        Bum(cameraDataExt) {
          let currentCamera = this.Cwd;
          if (this.Zaq(cameraDataExt)) {
            return [this.camera.IFG[cameraDataExt], currentCamera];
          }
          var thisResult = this.YqE.reset();
          if (this.HsE[cameraDataExt].size === 0) {
            return [this.camera.GqY[cameraDataExt], currentCamera];
          }
          var getActiveOrUn = this.nFh(cameraDataExt);
          var getActiveOrUn =
            getActiveOrUn <= 0 ||
            getActiveOrUn > extractedData.A.get("sharedViewportMaxDistance");
          if (getActiveOrUn) {
            return this.Wgn(cameraDataExt);
          }
          let ______iterator = 0;
          let n = 0;
          let _____self = 0;
          let o = 0;
          let r;
          for (r of this.HsE.flatMap((domElements) => domElements.values())) {
            var l = r.mass;
            n += l;
            var { x: c, y: positionY } = r.ytG;
            _____self += c * l;
            o += positionY * l;
            ______iterator += r.dxt;
          }
          if (n !== 0) {
            thisResult.set(_____self / n, o / n);
          }
          if (extractedData.A.get("autoZoom")) {
            currentCamera *= m.n7(
              m.jk(64 / ______iterator, 1),
              getActiveOrUn ? 0.22 : 0.17,
            );
          }
          this.camera.GqY[cameraDataExt].set(thisResult);
          return [thisResult, currentCamera];
        }
        fjG(initContext, __extractedKey7 = extractedKey7.A.yNT) {
          var contextSwitch;
          let sceneManager = this.scene.container;
          let { x: n, y: wagValue } = this.WAG;
          if (extractedData.A.get("switchControlMode")) {
            this.eWI.forEach((hasProperty) => {
              if (hasProperty.connected) {
                var _mouseState = hasProperty.mouse;
                if (_mouseState.frozen) {
                  if (
                    initContext == null ||
                    initContext !== hasProperty.context
                  ) {
                    return;
                  }
                } else if (
                  __extractedKey7 != null &&
                  __extractedKey7 !== hasProperty.context
                ) {
                  return;
                }
                _mouseState.set(
                  (0, l.N)(
                    sceneManager.pivot.x +
                      (n - window.innerWidth / 2) / sceneManager.scale.x,
                    -32768,
                    32767,
                  ),
                  (0, l.N)(
                    sceneManager.pivot.y +
                      (wagValue - window.innerHeight / 2) /
                        sceneManager.scale.y,
                    -32768,
                    32767,
                  ),
                );
              }
            });
          } else if (
            !(contextSwitch = this.FLt).mouse.frozen ||
            (initContext != null && initContext === contextSwitch.context)
          ) {
            this.FLt.mouse.set(
              (0, l.N)(
                sceneManager.pivot.x +
                  (n - window.innerWidth / 2) / sceneManager.scale.x,
                -32768,
                32767,
              ),
              (0, l.N)(
                sceneManager.pivot.y +
                  (wagValue - window.innerHeight / 2) / sceneManager.scale.y,
                -32768,
                32767,
              ),
            );
          }
        }
        MOW(mowArgs) {
          return (mowArgs = m.F8(mowArgs) * (10000 + this.MXg)) - m.RI(mowArgs);
        }
        Hdd(storageCap) {
          if (!extractedData.A.get("shortMass") || storageCap < 1000) {
            return storageCap.toFixed(0);
          } else if (storageCap >= 1000000) {
            return +(storageCap / 1000000).toFixed(1) + "m";
          } else {
            return +(storageCap / 1000).toFixed(1) + "k";
          }
        }
        jWf(toggleTab, tabIdentifier) {
          var isActiveTab = extractedData.A.get("tabStatusMode");
          if (isActiveTab === 0) {
            var selectedColor = this.FCi.ZRd(toggleTab);
            var handleTabId = this.FCi.ZRd(tabIdentifier);
            if (handleTabId && selectedColor) {
              selectedColor.rAX(extractedData.A.get("switchUnfocusedColor"));
            }
            if (handleTabId) {
              handleTabId.rAX(extractedData.A.get("switchFocusedColor"));
            }
          } else if (isActiveTab === 1) {
            let n = this.HsE[toggleTab];
            let nItem;
            for (nItem of n) {
              if (nItem.VEj) {
                nItem.IvE();
              }
            }
            for (nItem of (n = this.HsE[tabIdentifier])) {
              if (!nItem.VEj) {
                nItem.qLx();
              }
            }
          }
        }
        ycZ(______________________________placeholder) {
          return Boolean(
            this.flags &
              (______________________________placeholder == 0 ? 2 : 4),
          );
        }
        DMs(___isActive, _toggleFlag) {
          if (
            this.ycZ(___isActive) != _toggleFlag &&
            ((___isActive = ___isActive === 0 ? 2 : 4),
            _toggleFlag
              ? (this.flags |= ___isActive)
              : (this.flags &= ~___isActive),
            (0, extractAndSet.Jt)(extractSpecif.m7) == _toggleFlag)
          ) {
            extractSpecif.m7.set(!_toggleFlag);
          }
        }
        get alive() {
          return Boolean(this.flags & 2) || Boolean(this.flags & 4);
        }
        Zaq(hasFlag) {
          return Boolean(this.flags & (hasFlag == 0 ? 8 : 16));
        }
        fwE(flagManager, toggleFeature) {
          if (this.Zaq(flagManager) != toggleFeature) {
            if (flagManager === 0) {
              flagManager = 8;
            } else {
              flagManager = 16;
            }
            if (toggleFeature) {
              this.flags |= flagManager;
            } else {
              this.flags &= ~flagManager;
            }
          }
        }
        pEA(DOMUtils) {
          return (DOMUtils = this.eWI[DOMUtils]).opened && DOMUtils.connected;
        }
        get connected() {
          return this.eWI.some((isConnected) => isConnected.connected);
        }
        get Xmo() {
          return Boolean(this.flags & 8) || !!(this.flags & 16);
        }
        get SAd() {
          return extractedKey7.A.pids[extractedKey7.A.yNT];
        }
        get FLt() {
          return this.eWI[extractedKey7.A.yNT];
        }
        jMz(getTotalMass) {
          let totalMassAcc = 0;
          let forEach;
          for (forEach of this.HsE[getTotalMass]) {
            totalMassAcc += forEach.mass;
          }
          return totalMassAcc;
        }
        get YIr() {
          var totalMassOfIn;
          let calculateItem = 0;
          this.HsE.forEach((massTotal) => {
            for (totalMassOfIn of massTotal) {
              calculateItem += totalMassOfIn.mass;
            }
          });
          return calculateItem;
        }
        get score() {
          return this.scores[extractedKey7.A.yNT];
        }
        get fIW() {
          return this.xmF[extractedKey7.A.yNT];
        }
        get cells() {
          return Array.from(updateRecord.DH.values());
        }
        get VTJ() {
          return this.cells
            .filter((jqObject) => jqObject.exG)
            .map((____minifiedAnon) => ____minifiedAnon);
        }
        get Jpt() {
          return updateRecord.nf.values();
        }
      }
    },
    95195(createX, NumericCode69, CodeFactory) {
      CodeFactory.d(NumericCode69, {
        A: () => indexPlace,
      });
      var NumericCode69 = CodeFactory(692);
      var codeFactory15 = CodeFactory(15308);
      var codeFactory = CodeFactory(33656);
      var NumericCode69 = new NumericCode69.A();
      (0, codeFactory15.$s)(1, codeFactory.S6);
      CodeFactory.g.gameObject = NumericCode69;
      let indexPlace = (CodeFactory.g.game = NumericCode69);
    },
    19099(_processUserDt, __userAction, transformUser) {
      transformUser.d(__userAction, {
        A4: () => updateContent,
        Ay: () => __actionHandler,
        Mf: () => ____transformer,
      });
      var transformed95 = transformUser(95195);
      var userTransform = transformUser(83529);
      var ____________currentIndex = transformUser(78225);
      var n = transformUser(15308);
      var anonymizedDat = transformUser(8125);
      var o = transformUser(24216);
      var r = transformUser(33656);
      var l = transformUser(54603);
      let c = new Map([
        [
          "toggleAutoRespawn",
          () => {
            var autoRespawnT = userTransform.A.get("autoRespawn");
            userTransform.A.set("autoRespawn", !autoRespawnT);
            if (autoRespawnT) {
              ____________currentIndex.A.zCS.forEach(
                (eventCallback, ______eventDetails) => {
                  if (eventCallback) {
                    transformed95.A.triggerAutoRespawn(______eventDetails);
                  }
                },
              );
            }
            n.oR.fire({
              title: (0, r.Tw)(autoRespawnT),
              icon: "info",
              timer: 1500,
            });
          },
        ],
        [
          "saveReplay",
          () => {
            var request;
            if (transformed95.A.Ypz.running) {
              request = transformed95.A.Ypz.download();
              transformed95.A.Ypz.stop();
              request.then((__compose) => {
                (0, n.me)((0, r.bz)(__compose), 0, 1500);
              });
            } else {
              (0, n.me)(r.w8, 0, 3000);
              transformed95.A.Ypz.start();
            }
          },
        ],
        [
          "respawn",
          () => {
            if (
              (0, l.Jt)(anonymizedDat.qC) &&
              (transformed95.A.kmM.Rhi(), transformed95.A.Xrx)
            ) {
              transformed95.A.FQe(false);
            }
          },
        ],
        ["feed", transformed95.A.kmM.feed.bind(transformed95.A.kmM)],
        ["feedMacro", transformed95.A.kmM.feed.bind(transformed95.A.kmM, true)],
        ["split", transformed95.A.kmM.split.bind(transformed95.A.kmM, 1)],
        [
          "splitx2",
          () =>
            transformed95.A.kmM.split(
              2,
              userTransform.A.get("delayDoublesplit") ? 40 : 0,
            ),
        ],
        ["splitx3", transformed95.A.kmM.split.bind(transformed95.A.kmM, 3)],
        ["splitMax", transformed95.A.kmM.split.bind(transformed95.A.kmM, 4)],
        ["split32", transformed95.A.kmM.split.bind(transformed95.A.kmM, 5)],
        ["split64", transformed95.A.kmM.split.bind(transformed95.A.kmM, 6)],
        ["split128", transformed95.A.kmM.split.bind(transformed95.A.kmM, 7)],
        ["split256", transformed95.A.kmM.split.bind(transformed95.A.kmM, 8)],
        ["linesplit", transformed95.A.kmM.lineSplit.bind(transformed95.A.kmM)],
        ["freezeMouse", transformed95.A.kmM.PFX.bind(transformed95.A.kmM)],
        ["lockLinesplit", transformed95.A.kmM.OsW.bind(transformed95.A.kmM)],
        ["stopMovement", transformed95.A.kmM.KHK.bind(transformed95.A.kmM)],
        [
          "toggleSkins",
          transformed95.A.kmM.toggleSkins.bind(transformed95.A.kmM),
        ],
        [
          "toggleNames",
          transformed95.A.kmM.toggleNames.bind(transformed95.A.kmM),
        ],
        [
          "toggleFood",
          transformed95.A.kmM.toggleFood.bind(transformed95.A.kmM),
        ],
        [
          "toggleMass",
          transformed95.A.kmM.toggleMass.bind(transformed95.A.kmM),
        ],
        [
          "toggleChat",
          transformed95.A.kmM.toggleChat.bind(transformed95.A.kmM),
        ],
        [
          "toggleChatToast",
          transformed95.A.kmM.toggleChatToast.bind(transformed95.A.kmM),
        ],
        ["toggleHud", transformed95.A.kmM.toggleHud.bind(transformed95.A.kmM)],
        ["spectateLock", transformed95.A.kmM.TaP.bind(transformed95.A.kmM)],
        [
          "selectPlayer",
          transformed95.A.kmM.selectPlayer.bind(transformed95.A.kmM),
        ],
        ["zoomLevel1", transformed95.A.kmM.Szi.bind(transformed95.A.kmM, 1)],
        ["zoomLevel2", transformed95.A.kmM.Szi.bind(transformed95.A.kmM, 2)],
        ["zoomLevel3", transformed95.A.kmM.Szi.bind(transformed95.A.kmM, 3)],
        ["zoomLevel4", transformed95.A.kmM.Szi.bind(transformed95.A.kmM, 4)],
        ["zoomLevel5", transformed95.A.kmM.Szi.bind(transformed95.A.kmM, 5)],
        ["switchMultibox", transformed95.A.kmM.RWX.bind(transformed95.A.kmM)],
        [
          "switchSplit",
          () => {
            transformed95.A.kmM.split(2);
            transformed95.A.kmM.RWX();
            transformed95.A.kmM.split(8);
          },
        ],
        [
          "switchLinesplit",
          () => {
            transformed95.A.kmM.lineSplit();
            transformed95.A.kmM.RWX();
            transformed95.A.kmM.split(8);
          },
        ],
        [
          "splitTrigger",
          () => {
            var activeProcess = transformed95.A.kmM.jvz(true);
            if (activeProcess) {
              if (o.h.target && activeProcess.pid === o.h.target.pid) {
                return o.h.reset();
              } else {
                o.h.watch(activeProcess.pid, 0);
                return;
              }
            } else {
              return o.h.target && o.h.reset();
            }
          },
        ],
        [
          "doublesplitTrigger",
          () => {
            var transformedDs = transformed95.A.kmM.jvz(true);
            if (transformedDs) {
              if (o.h.target && transformedDs.pid === o.h.target.pid) {
                return o.h.reset();
              } else {
                o.h.watch(transformedDs.pid, 1);
                return;
              }
            } else {
              return o.h.target && o.h.reset();
            }
          },
        ],
        [
          "linesplitTrigger",
          () => {
            var pidWatcher = transformed95.A.kmM.jvz(true);
            if (pidWatcher) {
              if (o.h.target && pidWatcher.pid === o.h.target.pid) {
                return o.h.reset();
              } else {
                o.h.watch(pidWatcher.pid, 2);
                return;
              }
            } else {
              return o.h.target && o.h.reset();
            }
          },
        ],
        [
          "tricksplitTrigger",
          () => {
            var TransformedPd = transformed95.A.kmM.jvz(true);
            if (TransformedPd) {
              if (o.h.target && TransformedPd.pid === o.h.target.pid) {
                return o.h.reset();
              } else {
                o.h.watch(TransformedPd.pid, 3);
                return;
              }
            } else {
              return o.h.target && o.h.reset();
            }
          },
        ],
        [
          "contextMenu",
          () => {
            var _transformed95 = transformed95.A.kmM.jvz(true);
            transformed95.A.emit(
              "WdtSom",
              _transformed95?.pid ? _transformed95.player : null,
              transformed95.A.WAG.clone(),
            );
          },
        ],
        [
          "lockMouse",
          () => {
            if (!transformed95.A.Xmo) {
              var _domElements;
              var eventElem;
              var targetItem;
              var indexOfItemIn = ____________currentIndex.A.yNT;
              var n = ____________currentIndex.A.pids[indexOfItemIn];
              var extractedEwip =
                transformed95.A.eWI[____________currentIndex.A.yNT];
              var o = extractedEwip.mouse;
              var r = !o.pause;
              if (r) {
                let l = 0;
                let c;
                let calcDistance;
                let item;
                for (item of transformed95.A.HsE[indexOfItemIn]) {
                  if (
                    item.pid === n &&
                    ((eventElem = item.position),
                    (targetItem = Math.hypot(
                      (_domElements = o.x - eventElem.x),
                      (eventElem = o.y - eventElem.y),
                    )),
                    (targetItem = item.mass / targetItem) > l)
                  ) {
                    l = targetItem;
                    c = _domElements;
                    calcDistance = eventElem;
                  }
                }
                if (l !== 0) {
                  indexOfItemIn = Math.atan2(calcDistance, c);
                  o.x = o.x + Math.cos(indexOfItemIn) * 10000;
                  o.y = o.y + Math.sin(indexOfItemIn) * 10000;
                  extractedEwip.CiT();
                }
              }
              o.pause = r;
              transformed95.A.emit("RAwTus", {
                mouseFrozen: true,
              });
            }
          },
        ],
        [
          "m-feed",
          () => {
            transformed95.A.eWI[
              ____________currentIndex.A.yNT === 0 ? 1 : 0
            ].jjW();
          },
        ],
        [
          "m-feedMacro",
          () => {
            transformed95.A.eWI[
              ____________currentIndex.A.yNT === 0 ? 1 : 0
            ].jjW(true);
          },
        ],
        [
          "m-split",
          () => {
            transformed95.A.kmM.split(
              1,
              null,
              ____________currentIndex.A.yNT === 0 ? 1 : 0,
            );
          },
        ],
        [
          "m-splitx2",
          () => {
            transformed95.A.kmM.split(
              2,
              null,
              ____________currentIndex.A.yNT === 0 ? 1 : 0,
            );
          },
        ],
        [
          "m-splitx3",
          () => {
            transformed95.A.kmM.split(
              3,
              null,
              ____________currentIndex.A.yNT === 0 ? 1 : 0,
            );
          },
        ],
        [
          "m-splitMax",
          () => {
            transformed95.A.kmM.split(
              4,
              null,
              ____________currentIndex.A.yNT === 0 ? 1 : 0,
            );
          },
        ],
        [
          "m-split32",
          () => {
            transformed95.A.kmM.split(
              5,
              null,
              ____________currentIndex.A.yNT === 0 ? 1 : 0,
            );
          },
        ],
        [
          "m-split64",
          () => {
            transformed95.A.kmM.split(
              6,
              null,
              ____________currentIndex.A.yNT === 0 ? 1 : 0,
            );
          },
        ],
        [
          "m-split128",
          () => {
            transformed95.A.kmM.split(
              7,
              null,
              ____________currentIndex.A.yNT === 0 ? 1 : 0,
            );
          },
        ],
        [
          "m-split256",
          () => {
            transformed95.A.kmM.split(
              8,
              null,
              ____________currentIndex.A.yNT === 0 ? 1 : 0,
            );
          },
        ],
        [
          "m-linesplit",
          () => {
            transformed95.A.kmM.lineSplit(
              ____________currentIndex.A.yNT === 0 ? 1 : 0,
            );
          },
        ],
        [
          "m-freezeMouse",
          () => {
            transformed95.A.kmM.PFX(
              null,
              ____________currentIndex.A.yNT === 0 ? 1 : 0,
            );
          },
        ],
        [
          "m-lockLinesplit",
          () => {
            transformed95.A.kmM.OsW(
              null,
              ____________currentIndex.A.yNT === 0 ? 1 : 0,
            );
          },
        ],
        [
          "m-respawn",
          () => {
            transformed95.A.eWI[
              ____________currentIndex.A.yNT === 0 ? 1 : 0
            ].NTE();
          },
        ],
        [
          "m-stopMovement",
          () => {
            transformed95.A.kmM.KHK(
              null,
              ____________currentIndex.A.yNT === 0 ? 1 : 0,
            );
          },
        ],
      ]);
      let _______________anonymousFunc = {
        feed: "W",
        feedMacro: "MOUSE0",
        split: "SPACE",
        splitx2: "G",
        splitx3: "H",
        splitMax: "T",
        split32: "",
        split64: "",
        linesplit: "Z",
        freezeMouse: "",
        lockLinesplit: "",
        lockMouse: "",
        respawn: "",
        toggleAutoRespawn: "",
        stopMovement: "",
        toggleSkins: "",
        toggleNames: "",
        toggleMass: "",
        spectateLock: "Q",
        selectPlayer: "E",
        saveReplay: "R",
        toggleChat: "",
        toggleChatToast: "",
        toggleHud: "",
        zoomLevel1: "1",
        zoomLevel2: "2",
        zoomLevel3: "3",
        zoomLevel4: "4",
        zoomLevel5: "5",
        switchMultibox: "",
        switchSplit: "",
        switchLinesplit: "",
        doublesplitTrigger: "",
        linesplitTrigger: "",
        tricksplitTrigger: "",
        contextMenu: "MOUSE1",
        "m-split": "",
        "m-splitx2": "",
        "m-splitx3": "",
        "m-splitMax": "",
        "m-split32": "",
        "m-split64": "",
        "m-split128": "",
        "m-split256": "",
        "m-linesplit": "",
        "m-freezeMouse": "",
        "m-lockLinesplit": "",
        "m-respawn": "",
        "m-stopMovement": "",
        "m-feed": "",
        "m-feedMacro": "",
      };
      let ____transformer = {
        "Switch Tab": "switchMultibox",
        Feed: "feed",
        "Macro Feed": "feedMacro",
        Split: "split",
        "Double Split": "splitx2",
        "Triple Split": "splitx3",
        "Quad Split": "splitMax",
        "32 Split": "split32",
        "64 Split": "split64",
        "128 Split": "split128",
        "256 Split": "split256",
        "Diagonal Linesplit": "linesplit",
        "Freeze Mouse": "freezeMouse",
        "Lock Linesplit": "lockLinesplit",
        "Lock Mouse Direction": "lockMouse",
        Respawn: "respawn",
        "Toggle Auto Respawn": "toggleAutoRespawn",
        "Stop Movement": "stopMovement",
        "Toggle Skins": "toggleSkins",
        "Toggle Names": "toggleNames",
        "Toggle Mass": "toggleMass",
        "Toggle Spectate Lock": "spectateLock",
        "Select Player": "selectPlayer",
        "Start/Stop Recording": "saveReplay",
        "Toggle Chat": "toggleChat",
        "Toggle Toast Chat": "toggleChatToast",
        "Toggle HUD": "toggleHud",
        "Zoom: Level 1": "zoomLevel1",
        "Zoom: Level 2": "zoomLevel2",
        "Zoom: Level 3": "zoomLevel3",
        "Zoom: Level 4": "zoomLevel4",
        "Zoom: Level 5": "zoomLevel5",
        "Double Split Macro": "switchSplit",
        "Linesplit Trick Macro": "switchLinesplit",
        "One Split Trigger": "splitTrigger",
        "Double Split Trigger": "doublesplitTrigger",
        "Linesplit Trigger": "linesplitTrigger",
        "Context Menu": "contextMenu",
      };
      let updateContent = {
        Feed: "m-feed",
        "Feed Macro": "m-feedMacro",
        Split: "m-split",
        "Double Split": "m-splitx2",
        "Triple Split": "m-splitx3",
        "Quad Split": "m-splitMax",
        "32 Split": "m-split32",
        "64 Split": "m-split64",
        "128 Split": "m-split128",
        "256 Split": "m-split256",
        "Diagonal Linesplit": "m-linesplit",
        "Freeze Mouse": "m-freezeMouse",
        "Lock Linesplit": "m-lockLinesplit",
        Respawn: "m-respawn",
        "Stop Movement": "m-stopMovement",
      };
      let __actionHandler = (transformUser.g.input = new (class {
        constructor() {
          this.version = 2;
          this.released = new Map();
          this.pressed = new Map();
          this.load();
        }
        hFn() {
          if (
            +localStorage.getItem("hotkeysVersion") !== this.version &&
            (localStorage.setItem("hotkeysVersion", "" + this.version),
            "hotkeys" in localStorage)
          ) {
            localStorage.removeItem("hotkeys");
          }
        }
        load() {
          try {
            var localHotkeySt = JSON.parse(localStorage.getItem("hotkeys"));
            if (typeof localHotkeySt != "object" || localHotkeySt == null) {
              throw Error("Parsing hotkeys failed, opting for defaults");
            }
            var verifyHotkeys = Object.values(localHotkeySt);
            var configHotkeys = Object.assign({}, _______________anonymousFunc);
            let defaultHotkey;
            for (defaultHotkey in configHotkeys) {
              var _defaultHotkey = configHotkeys[defaultHotkey];
              if (_defaultHotkey && verifyHotkeys.includes(_defaultHotkey)) {
                configHotkeys[defaultHotkey] =
                  _______________anonymousFunc[defaultHotkey];
              }
            }
            if (
              "multibox" in localHotkeySt &&
              localHotkeySt.multibox &&
              !localHotkeySt.switchMultibox
            ) {
              delete localHotkeySt.multibox;
              localHotkeySt.switchMultibox = localHotkeySt.multibox;
            } else {
              localHotkeySt.switchMultibox ||=
                _______________anonymousFunc.switchMultibox;
            }
            this.WuV = Object.assign(configHotkeys, localHotkeySt);
          } catch (errorMessage) {
            (0, n.$s)(
              2,
              typeof errorMessage == "string"
                ? errorMessage
                : (errorMessage && errorMessage.message) ||
                    "An error occurred while parsing hotkeys",
            );
            this.WuV = Object.assign({}, _______________anonymousFunc);
          }
          this.hNu(this.WuV);
        }
        save() {
          localStorage.setItem("hotkeys", JSON.stringify(this.WuV));
        }
        reset() {
          localStorage.removeItem("hotkeys");
          this.load();
          return this.WuV;
        }
        get(itemRef) {
          return (itemRef in this.WuV && this.WuV[itemRef]) || "None";
        }
        set(hasKeyUpdate, updatedValue) {
          if (!c.has(hasKeyUpdate)) {
            return false;
          }
          if (this.WuV[hasKeyUpdate] !== updatedValue) {
            if (updatedValue) {
              let WuVEntry;
              for (WuVEntry of Object.entries(this.WuV)) {
                if (WuVEntry[1] === updatedValue) {
                  this.WuV[WuVEntry[0]] = "";
                }
              }
            }
            this.WuV[hasKeyUpdate] = updatedValue;
            this.save();
            this.hNu(this.WuV);
          }
          return true;
        }
        hNu(______self) {
          this.pressed.clear();
          let selfProperty;
          for (selfProperty in ______self) {
            var currentValue;
            var n = ______self[selfProperty];
            if (c.has(selfProperty)) {
              currentValue = c.get(selfProperty);
              this.pressed.set(n, currentValue);
            }
          }
          this.released.clear();
          if ("feedMacro" in ______self) {
            this.released.set(______self.feedMacro, () =>
              transformed95.A.kmM.feed(false),
            );
          }
          if ("m-feedMacro" in ______self) {
            this.released.set(______self["m-feedMacro"], () => {
              if (userTransform.A.get("switchControlMode")) {
                transformed95.A.eWI[
                  ____________currentIndex.A.yNT === 0 ? 1 : 0
                ].jjW(false);
              }
            });
          }
        }
        press(_currentKey) {
          return (
            !!this.pressed.has(_currentKey) &&
            (this.pressed.get(_currentKey)(), true)
          );
        }
        release(releaseFlag) {
          return (
            !!this.released.has(releaseFlag) &&
            (this.released.get(releaseFlag)(), true)
          );
        }
        XRq(normalizeAndE) {
          if (normalizeAndE) {
            return normalizeAndE
              .toString()
              .toUpperCase()
              .replace(/^(LEFT|RIGHT|NUMPAD|DIGIT|KEY)/, "");
          } else {
            return "Unknown";
          }
        }
      })());
    },
    34738(keyedMap, expenseMap, DataStore) {
      DataStore.d(expenseMap, {
        A: () => c,
      });
      var key95195Data = DataStore(95195);
      var dataForKey955 = DataStore(95514);
      var expense92915 = DataStore(92915);
      DataStore(15308);
      var n = DataStore(61036);
      var assignExpense = DataStore(75908);
      var o = DataStore(87706);
      var r = DataStore(83529);
      let l = assignExpense.aN;
      class c {
        constructor(documentEvent) {
          this.tagId = null;
          this.pid = documentEvent;
          this.texture = o.RenderTexture.create({
            width: assignExpense.eU + l,
            height: assignExpense.eU + l,
            resolution: r.A.get("gameResolution"),
          });
          this.HcK = this.duk();
          this.PJd();
        }
        get visibility() {
          let _toggleElement = 2;
          key95195Data.A.eWI.some(
            (checkElement) =>
              !!checkElement.connected &&
              checkElement.tagId === this.tagId &&
              !((_toggleElement = 1), 0),
          );
          return _toggleElement;
        }
        fyP(defaultTagId) {
          return (
            this.tagId !== (defaultTagId = defaultTagId || null) &&
            ((this.tagId = defaultTagId), true)
          );
        }
        rAX(lineThickness, naturalLogE = 9.5, constantTwent = 20) {
          this.wFC = lineThickness = lineThickness || 0;
          (constantTwent = new o.Graphics()
            .lineStyle(constantTwent, lineThickness, 1)
            .drawCircle(0, 0, assignExpense.Wp - naturalLogE)
            .endFill()).pivot.set(-assignExpense.Wp);
          dataForKey955.Uk.render(constantTwent, this.texture, false);
        }
        AcX(uniqueFlag) {
          if (uniqueFlag !== this.Rak) {
            if (uniqueFlag) {
              this.Rak = true;
            } else {
              delete this.Rak;
            }
            key95195Data.A.VTJ.filter(
              (currentNode) => currentNode.pid === this.pid,
            ).forEach((FlagTriggered) => {
              if (uniqueFlag) {
                FlagTriggered.xtA();
              } else {
                FlagTriggered.DgL();
              }
            });
          }
        }
        duk() {
          var varInstance = new o.Container();
          varInstance.pivot.set(-assignExpense.eU / 2);
          varInstance.addChildAt(
            (this.PzK = (0, assignExpense.Jm)(
              (this.ppI = c.wed(this)),
              (this.SYL = c.lUo(this)),
            )),
            0,
          );
          varInstance.scale.set(assignExpense.eU / (assignExpense.Wp * 2));
          varInstance.position.set(l / 2, l / 2);
          return varInstance;
        }
        PJd() {
          dataForKey955.Uk.render(this.HcK, this.texture, true);
          if (this.wFC) {
            this.rAX(this.wFC);
          }
        }
        static wed(expenseOrList) {
          var _________userId = key95195Data.A.MOW(expenseOrList.pid);
          var expenseOrList = expenseOrList.fvy
            ? expense92915.O$
            : expense92915.ic;
          return expenseOrList[n.RI(_________userId * expenseOrList.length)];
        }
        static lUo(expenseDataOr) {
          var ____fetchData = key95195Data.A.MOW(expenseDataOr.pid);
          var expenseDataOr = expenseDataOr.fvy
            ? expense92915.oZ
            : expense92915.cy;
          return expenseDataOr[n.RI(____fetchData * expenseDataOr.length)];
        }
      }
      c.prototype.destroyed = false;
    },
    53278(
      _____________________________________________anonymousUser,
      handleAnonLog,
      extractAnonId,
    ) {
      extractAnonId.d(handleAnonLog, {
        A: () => n,
      });
      var extractedAnon = extractAnonId(83529);
      var extractUserId = extractAnonId(33656);
      var handleAnonLog = extractAnonId(34738);
      var mapTransform = extractAnonId(87706);
      class n extends handleAnonLog.A {
        constructor(createWithArg) {
          super(createWithArg);
        }
        gkY(newName) {
          return (
            this.name !== newName && ((this.name = newName), this.DGt(), true)
          );
        }
        DGt() {
          this.xMs(this.name || extractUserId.Ab);
        }
        xMs(dataInput) {
          if (this.RiW) {
            this.RiW.text = dataInput;
          } else {
            this.RiW = new mapTransform.Text(dataInput, extractedAnon.A.lqB);
          }
          this.RiW.style.fill = 16777215;
          this.RiW.updateText(false);
        }
        AaG() {
          this.cSM =
            this.vyo ??
            (extractedAnon.A.get("namesEnabled") &&
              extractedAnon.A.get("showNames") >= this.visibility);
          this.VAP =
            extractedAnon.A.get("massEnabled") &&
            extractedAnon.A.get("showMass") >= this.visibility;
        }
        destroy() {
          this.HcK.destroy(true);
          this.texture.VqU = true;
          this.texture.destroy(true);
          if (this.RiW) {
            this.RiW.destroy(true);
            delete this.RiW;
          }
          this.destroyed = true;
        }
      }
      n.prototype.destroyed = false;
      n.prototype.fvy = true;
    },
    35827(factoryMethod, isNullish, ValueFactory) {
      ValueFactory.d(isNullish, {
        A: () => GameInitial,
      });
      var valueFactory4 = ValueFactory(41958);
      var ________________anonymousFunc = ValueFactory(53278);
      var valueFactory = ValueFactory(78225);
      ValueFactory(15308);
      var isNullish = ValueFactory(37007);
      var isNullish = ValueFactory.n(isNullish);
      var n = ValueFactory(33656);
      class GameInitial extends isNullish() {
        constructor(gameUI) {
          super();
          this.players = new Map();
          this.bots = new Map();
          this.IOE = [, ,];
          this.CBb = [];
          this.game = gameUI;
        }
        reset() {
          this.players.forEach((executeWithGl) => executeWithGl.destroy());
          this.players.clear();
          this.bots.forEach((canine) => canine.destroy());
          this.bots.clear();
          this.IOE.splice(0, 2);
          this.CBb.splice(0, this.CBb.length);
        }
        get zZH() {
          return this.bots.size;
        }
        get eLz() {
          return this.players.size;
        }
        has(hasSameNameAs) {
          return (
            this.players.has(hasSameNameAs) || this.bots.has(hasSameNameAs)
          );
        }
        vrx(playerId) {
          if (this.players.has(playerId)) {
            return this.players.get(playerId);
          } else {
            return null;
          }
        }
        qsc(findBotOrNull) {
          if (this.bots.has(findBotOrNull)) {
            return this.bots.get(findBotOrNull);
          } else {
            return null;
          }
        }
        get(checkKeyExist) {
          if (this.players.has(checkKeyExist)) {
            return this.players.get(checkKeyExist);
          } else if (this.bots.has(checkKeyExist)) {
            return this.bots.get(checkKeyExist);
          } else {
            return null;
          }
        }
        ytA(________________________________eventHandler, setHandler) {
          this.IOE[________________________________eventHandler] = setHandler;
        }
        ZRd(getElementByE) {
          return this.IOE[getElementByE] || null;
        }
        RRW({
          pid: processId,
          nickname: __________userId,
          skin: userAppearace,
          skinUrl: avatarUrl,
          hWu: o,
          tagId: r,
          bot: l,
          ...c
        }) {
          var UserDetails;
          let hasBotFeat;
          if (l) {
            if (!this.bots.has(processId)) {
              this.bots.set(
                processId,
                (hasBotFeat = new ________________anonymousFunc.A(processId)),
              );
              hasBotFeat.gkY(n.LK);
              hasBotFeat.AaG();
              this.emit("JmnFrX", processId);
            }
          } else {
            if (this.players.has(processId)) {
              hasBotFeat = this.players.get(processId);
              this.emit("uJxLgi", processId);
            } else {
              hasBotFeat = new valueFactory4.A(processId);
              if ((UserDetails = valueFactory.A.pids.indexOf(processId)) >= 0) {
                this.IOE[UserDetails] = hasBotFeat;
              }
              this.players.set(processId, hasBotFeat);
              this.emit("WnIviS", processId);
            }
            if (typeof userAppearace == "string" && !l) {
              avatarUrl = "https://skins.vanis.io/s/" + userAppearace;
            }
            if (c.perk_badges) {
              hasBotFeat.jqz = c.perk_badges;
            }
            UserDetails = hasBotFeat.gkY(__________userId, o || c.perk_color);
            processId = hasBotFeat.Xtl(avatarUrl);
            l = hasBotFeat.fyP(r);
            if (UserDetails || processId || l) {
              hasBotFeat.AaG();
            }
          }
          return hasBotFeat;
        }
        AaG(verifyAndCall, unverifiedBot) {
          this.players.forEach((unrecognizedH) => {
            if (!verifyAndCall || !verifyAndCall.has(unrecognizedH)) {
              unrecognizedH.AaG();
            }
          });
          this.bots.forEach((_unverifiedBot) => {
            if (!unverifiedBot || !unverifiedBot.has(_unverifiedBot)) {
              _unverifiedBot.AaG();
            }
          });
        }
        NAQ(playerDrain, isFalse = false) {
          if (this.players.has(playerDrain)) {
            if (isFalse) {
              this.CBb.push(playerDrain);
            } else {
              isFalse = this.players.get(playerDrain);
              this.players.delete(playerDrain);
              this.emit("KneCHr", playerDrain);
              isFalse.destroy();
            }
          }
        }
        Wca(removeAndDest, _isFalse = false) {
          if (this.bots.has(removeAndDest)) {
            if (_isFalse) {
              this.CBb.push(removeAndDest);
            } else {
              _isFalse = this.bots.get(removeAndDest);
              this.bots.delete(removeAndDest);
              this.emit("seZDXL", removeAndDest);
              _isFalse.destroy();
            }
          }
        }
        remove(removeItem, isTrue = false) {
          if (isTrue) {
            this.CBb.push(removeItem);
          } else if (this.bots.has(removeItem)) {
            this.Wca(removeItem);
          } else {
            this.NAQ(removeItem);
          }
        }
        rvD() {
          for (var _filteredItems = this.CBb; _filteredItems.length; ) {
            var firstFiltered = _filteredItems.shift();
            this.remove(firstFiltered);
          }
        }
      }
    },
    41958(elementToolP, convertAnonym, transformKeyB) {
      transformKeyB.d(convertAnonym, {
        A: () => c,
      });
      var _transformKeyB = transformKeyB(95195);
      var transformedId = transformKeyB(83529);
      var _______elementIndex = transformKeyB(15308);
      var n = transformKeyB(75908);
      var convertAnonym = transformKeyB(34738);
      var _____transformer = transformKeyB(95514);
      var o = transformKeyB(33656);
      var r = transformKeyB(87706);
      let l = (0, n.Jm)(0, 0);
      class c extends convertAnonym.A {
        constructor(hasMatchingId) {
          super(hasMatchingId);
          this.skinUrl = null;
          this.isMe = _transformKeyB.A.state.pids.includes(hasMatchingId);
        }
        GRd(_sprite) {
          _sprite = new r.BaseTexture(
            new r.resources.ImageBitmapResource(_sprite),
          );
          _sprite = new r.Texture(_sprite);
          (_sprite = new r.Sprite(_sprite)).anchor.set(0.5);
          _sprite.width = _sprite.height = n.eU;
          _sprite.position.set(0, 0);
          return _sprite;
        }
        cPn(hexDigestIfHo) {
          if (hexDigestIfHo) {
            this.TIJ = "#" + hexDigestIfHo;
          } else {
            this.TIJ = null;
          }
          return (this.hWu = hexDigestIfHo
            ? parseInt(hexDigestIfHo, 16)
            : null);
        }
        gkY(thisContext, __________context) {
          thisContext = thisContext || o.Ab;
          return (
            (this.tQg !== thisContext || this.aLU !== __________context) &&
            ((this.tQg = thisContext),
            (this.aLU = __________context),
            this.DGt(),
            true)
          );
        }
        DGt() {
          var tQgMatchesO = this.tQg === o.Ab;
          var hasCurrent = this.tQg === o.CF;
          let tInitialState = tQgMatchesO ? "" : this.tQg;
          var instanceName = this.name;
          var n = this.hWu;
          let currentEntity = this.cPn(
            tQgMatchesO || hasCurrent ? null : this.aLU,
          );
          this.xMs(tInitialState, currentEntity);
          if (
            !tQgMatchesO &&
            !hasCurrent &&
            this.RiW.texture.width >
              transformedId.A.get("cellLongNameThreshold")
          ) {
            tInitialState = o.CF;
            currentEntity = this.cPn(null);
            this.xMs(tInitialState, currentEntity);
          }
          if (tQgMatchesO) {
            this.name = o.Ab;
          } else {
            this.name = tInitialState;
          }
          if (instanceName !== this.name || n !== this.hWu) {
            _transformKeyB.A.emit(
              "VAEhBF",
              this.pid,
              tInitialState,
              currentEntity,
              currentEntity || null,
            );
          }
        }
        xMs(setTextValue, elementStyleF) {
          if (this.RiW) {
            this.RiW.text = setTextValue;
          } else {
            this.RiW = new r.Text(setTextValue, transformedId.A.lqB);
          }
          if (typeof elementStyleF == "number") {
            this.RiW.style.fill = elementStyleF;
          } else {
            this.RiW.style.fill = 16777215;
          }
          this.RiW.updateText(false);
        }
        Xtl(isDefaultSkin) {
          return (
            (isDefaultSkin = isDefaultSkin || null) !== this.skinUrl &&
            (this.iIm(),
            this.yLF() && this.PJd(),
            (this.skinUrl = isDefaultSkin),
            this.urX && this.Tqd(),
            true)
          );
        }
        yLF() {
          return (
            !!this.tFf &&
            (this.HcK.removeChild(l),
            (this.tFf.mask = null),
            this.tFf.destroy(true),
            delete this.tFf,
            true)
          );
        }
        Tqd() {
          this.iIm();
          this.XIv = _transformKeyB.A.kpA.bCr(this.skinUrl, (applyMasking) => {
            this.tFf = this.GRd(applyMasking);
            (this.tFf.mask = l).position.set(0, 0);
            this.HcK.addChild(this.tFf.mask, this.tFf);
            this.PJd();
          });
        }
        AaG() {
          let isNamesDisboc = transformedId.A.get("namesEnabled");
          let isSkinCustom = transformedId.A.get("skinsEnabled");
          let entityHasMass = transformedId.A.get("massEnabled");
          if (this.isMe) {
            entityHasMass =
              ((isNamesDisboc = transformedId.A.get("showOwnName")),
              (isSkinCustom = transformedId.A.get("showOwnSkin")),
              transformedId.A.get("showOwnMass"));
          } else {
            entityHasMass =
              ((isNamesDisboc =
                transformedId.A.get("showNames") >= this.visibility),
              (isSkinCustom =
                transformedId.A.get("showSkins") >= this.visibility),
              transformedId.A.get("showMass") >= this.visibility);
          }
          isNamesDisboc = transformedId.A.get("namesEnabled") && isNamesDisboc;
          isSkinCustom = transformedId.A.get("skinsEnabled") && isSkinCustom;
          entityHasMass = transformedId.A.get("massEnabled") && entityHasMass;
          if (this.vyo != null) {
            isNamesDisboc = this.vyo;
          }
          if ((isSkinCustom = this.GeA ?? isSkinCustom) && !this.urX) {
            if (this.tFf) {
              this.tFf.visible = true;
              this.PJd();
            } else if (this.skinUrl != null) {
              this.Tqd();
            }
          } else if (!isSkinCustom && this.urX && (this.iIm(), this.tFf)) {
            this.tFf.visible = false;
            this.PJd();
          }
          this.cSM = isNamesDisboc;
          this.urX = isSkinCustom;
          this.VAP = entityHasMass;
          this.eew = transformedId.A.get("showNameColor");
        }
        iIm() {
          if (this.XIv) {
            this.XIv();
            delete this.XIv;
          }
        }
        rAX(updateWFCWith, constValue = 5.5, ten = 10, xInt = 1) {
          this.wFC = updateWFCWith = updateWFCWith || 0;
          (ten = this.qTn =
            new r.Graphics()
              .lineStyle(ten, updateWFCWith, xInt)
              .drawCircle(0, 0, n.Wp - constValue)
              .endFill()).pivot.set(0, 0);
          ten.position.set(n.Wp + n.aN / 2, n.Wp + n.aN / 2);
          _____transformer.Uk.render(ten, this.texture, false);
        }
        PJd() {
          var extractedPix;
          let identifier = this.SYL;
          if (
            !this.isMe &&
            !!this.tFf &&
            (!!this.urX || !!this.GeA) &&
            (extractedPix = (0, n.E1)(
              _____transformer.Uk.extract.pixels(this.tFf),
            )) !== 0 &&
            !isNaN(extractedPix)
          ) {
            identifier = extractedPix;
          }
          this.PzK.clear();
          this.PzK.lineStyle(5, (0, _______elementIndex.v2)(identifier, 0.5), 1)
            .beginFill(this.ppI)
            .drawCircle(0, 0, n.Wp + 0.5)
            .endFill();
          super.PJd();
        }
        destroy() {
          this.iIm();
          this.yLF();
          this.HcK.destroy(true);
          this.texture.destroy(true);
          this.texture.VqU = true;
          if (this.RiW) {
            this.RiW.destroy(true);
          }
          _transformKeyB.A.emit("kIoddg", this.pid);
          this.destroyed = true;
        }
      }
      c.prototype.destroyed = false;
      c.prototype.faB = true;
    },
    75908(
      executeAfterC,
      _________________________________eventHandler,
      ___anonymousID,
    ) {
      ___anonymousID.d(_________________________________eventHandler, {
        E1: () => r,
        Jm: () => o,
        Wp: () => n,
        aN: () => __EventHandler,
        eU: () => ________________counter,
      });
      var _________________________________eventHandler = ___anonymousID(83529);
      var _executeAfterC = ___anonymousID(61036);
      var eventCHandler = ___anonymousID(87706);
      let ________________counter =
        _________________________________eventHandler.A.GAS;
      let n = ________________counter / 2;
      let __EventHandler =
        _________________________________eventHandler.A.get("cellBorderSize");
      let o = (fillColor, strokeStrokeF) =>
        new eventCHandler.Graphics()
          .lineStyle(5, strokeStrokeF, 1)
          .beginFill(fillColor)
          .drawCircle(0, 0, n + 0.5)
          .endFill();
      let r = (chunks) => {
        var _____________iterationTrak = 0;
        var chunkCounter = 0;
        var currentReadSn = 0;
        var chunkIndex = 0;
        for (
          var n = chunks.byteLength, chunkLoopCoun = 0;
          chunkLoopCoun < n;
          chunkLoopCoun += 4
        ) {
          var o = chunks[chunkLoopCoun];
          var r = chunks[chunkLoopCoun + 1];
          var l = chunks[chunkLoopCoun + 2];
          var c = chunks[chunkLoopCoun + 3];
          _____________iterationTrak += o * o * c;
          chunkCounter += r * r * c;
          currentReadSn += l * l * c;
          chunkIndex += c;
        }
        if (chunkIndex) {
          return (
            (_executeAfterC.LI(
              _executeAfterC.RZ(_____________iterationTrak / chunkIndex),
            ) <<
              16) |
            (_executeAfterC.LI(_executeAfterC.RZ(chunkCounter / chunkIndex)) <<
              8) |
            (_executeAfterC.LI(_executeAfterC.RZ(currentReadSn / chunkIndex)) <<
              0)
          );
        } else {
          return NaN;
        }
      };
    },
    35963(dataCache9551, CacheManager, _________calculateSum) {
      _________calculateSum.d(CacheManager, {
        A: () => cacheIndex,
      });
      var __________calculateSum = _________calculateSum(95514);
      var _processedSum = _________calculateSum(30847);
      let cacheIndex = new (class {
        constructor() {
          this.chunks = [];
          this.running = false;
          var videoSource = __________calculateSum.Uk.view.captureStream(30);
          this.recorder = new MediaRecorder(videoSource, {
            mimeType: "video/webm; codecs=vp9",
            audioBitsPerSecond: 0,
            videoBitsPerSecond: 5000000,
          });
          this.recorder.addEventListener("dataavailable", (getDataAndAdd) =>
            this.add(getDataAndAdd.data),
          );
        }
        start() {
          if (!this.running) {
            this.chunks.length = 0;
            this.running = true;
            this.recorder.start(30);
          }
        }
        add(divideIntoChs) {
          if (this.chunks.length > 450) {
            this.chunks.shift();
          }
          this.chunks.push(divideIntoChs);
        }
        async download() {
          var downloadChunk = this.chunks.slice(0);
          this.stop();
          {
            var formatNumber = (padZeroForSmO) =>
              padZeroForSmO < 10 ? "0" + padZeroForSmO : "" + padZeroForSmO;
            var formatDateAsY = new Date();
            var formatNumber =
              formatDateAsY.getFullYear() +
              "-" +
              formatNumber(formatDateAsY.getMonth() + 1) +
              "-" +
              formatNumber(formatDateAsY.getDate()) +
              "." +
              formatNumber(formatDateAsY.getHours()) +
              "-" +
              formatNumber(formatDateAsY.getMinutes()) +
              "-" +
              formatNumber(formatDateAsY.getSeconds());
            var formatDateAsY = URL.createObjectURL(
              new Blob(downloadChunk, {
                type: "video/webm",
              }),
            );
            let extractYear = document.createElement("a");
            extractYear.href = formatDateAsY;
            extractYear.setAttribute("download", formatNumber + ".webm");
            document.body.appendChild(extractYear);
            extractYear.click();
            (0, _processedSum.wg)(() => document.body.removeChild(extractYear));
          }
          return Math.round(downloadChunk.length / 15);
        }
        stop() {
          if (this.running) {
            this.running = false;
            this.chunks.length = 0;
            this.recorder.stop();
          }
        }
      })();
    },
    83529(prepareInput, inputPreparer, _ObjectFactory) {
      _ObjectFactory.d(inputPreparer, {
        A: () => ______transformData,
      });
      var inputPreparer = _ObjectFactory(58489);
      var object61036 = _ObjectFactory(61036);
      var _inputPreparer = _ObjectFactory(15308);
      var preprocess = _ObjectFactory(37007);
      var preprocess = _ObjectFactory.n(preprocess);
      var n = _ObjectFactory(87706);
      _ObjectFactory(31091);
      _ObjectFactory(57088);
      let createInputPd = new Map();
      createInputPd.set("useWebGL", new inputPreparer.A("useWebGL", true));
      createInputPd.set(
        "gameResolution",
        new inputPreparer.A("gameResolution", 1),
      );
      createInputPd.set(
        "smallTextThreshold",
        new inputPreparer.A("smallTextThreshold", 40),
      );
      createInputPd.set("autoZoom", new inputPreparer.A("autoZoom", false));
      createInputPd.set(
        "rememeberEjecting",
        new inputPreparer.A("rememeberEjecting", true),
      );
      createInputPd.set(
        "autoRespawn",
        new inputPreparer.A("autoRespawn", false),
      );
      createInputPd.set(
        "mouseFreezeSoft",
        new inputPreparer.A("mouseFreezeSoft", true),
      );
      createInputPd.set("drawDelay", new inputPreparer.A("drawDelay", 120));
      createInputPd.set(
        "cameraMoveDelay",
        new inputPreparer.A("cameraMoveDelay", 150),
      );
      createInputPd.set(
        "cameraSwitchDelay",
        new inputPreparer.A("cameraSwitchDelay", 200),
      );
      createInputPd.set(
        "cameraZoomDelay",
        new inputPreparer.A("cameraZoomDelay", 150),
      );
      createInputPd.set(
        "cameraZoomSpeed",
        new inputPreparer.A("cameraZoomSpeed", 10),
      );
      createInputPd.set(
        "replayDuration",
        new inputPreparer.A("replayDuration", 8),
      );
      createInputPd.set(
        "showReplaySaved",
        new inputPreparer.A("showReplaySaved", 2),
      );
      createInputPd.set("showNames", new inputPreparer.A("showNames", 2));
      createInputPd.set("showMass", new inputPreparer.A("showMass", 2));
      createInputPd.set("showSkins", new inputPreparer.A("showSkins", 1));
      createInputPd.set(
        "showOwnName",
        new inputPreparer.A("showOwnName", true),
      );
      createInputPd.set(
        "showOwnMass",
        new inputPreparer.A("showOwnMass", true),
      );
      createInputPd.set(
        "showOwnSkin",
        new inputPreparer.A("showOwnSkin", true),
      );
      createInputPd.set("showCrown", new inputPreparer.A("showCrown", true));
      createInputPd.set(
        "foodVisible",
        new inputPreparer.A("foodVisible", true),
      );
      createInputPd.set(
        "eatAnimation",
        new inputPreparer.A("eatAnimation", true),
      );
      createInputPd.set("showHud", new inputPreparer.A("showHud", true));
      createInputPd.set(
        "showLeaderboard",
        new inputPreparer.A("showLeaderboard", true),
      );
      createInputPd.set(
        "showServerName",
        new inputPreparer.A("showServerName", false),
      );
      createInputPd.set("showChat", new inputPreparer.A("showChat", true));
      createInputPd.set(
        "showChatToast",
        new inputPreparer.A("showChatToast", false),
      );
      createInputPd.set(
        "minimapEnabled",
        new inputPreparer.A("minimapEnabled", true),
      );
      createInputPd.set(
        "minimapLocations",
        new inputPreparer.A("minimapLocations", true),
      );
      createInputPd.set("showFPS", new inputPreparer.A("showFPS", true));
      createInputPd.set("showPing", new inputPreparer.A("showPing", true));
      createInputPd.set(
        "showCellCount",
        new inputPreparer.A("showCellCount", true),
      );
      createInputPd.set(
        "showPlayerScore",
        new inputPreparer.A("showPlayerScore", false),
      );
      createInputPd.set(
        "showPlayerMass",
        new inputPreparer.A("showPlayerMass", true),
      );
      createInputPd.set(
        "showLatencyWarning",
        new inputPreparer.A("showLatencyWarning", true),
      );
      createInputPd.set("showClock", new inputPreparer.A("showClock", false));
      createInputPd.set(
        "showSessionTime",
        new inputPreparer.A("showSessionTime", false),
      );
      createInputPd.set(
        "showPlayerCount",
        new inputPreparer.A("showPlayerCount", false),
      );
      createInputPd.set(
        "showSpectators",
        new inputPreparer.A("showSpectators", false),
      );
      createInputPd.set(
        "showRestartTiming",
        new inputPreparer.A("showRestartTiming", false),
      );
      createInputPd.set(
        "showTagTotalMass",
        new inputPreparer.A("showRestartTiming", false),
      );
      createInputPd.set(
        "showBlockedMessageCount",
        new inputPreparer.A("showBlockedMessageCount", true),
      );
      createInputPd.set(
        "filterChatMessages",
        new inputPreparer.A("filterChatMessages", true),
      );
      createInputPd.set(
        "clearChatMessages",
        new inputPreparer.A("clearChatMessages", true),
      );
      createInputPd.set(
        "backgroundColor",
        new inputPreparer.A("backgroundColor", "101010"),
      );
      createInputPd.set(
        "borderColor",
        new inputPreparer.A("borderColor", "000000"),
      );
      createInputPd.set(
        "foodColor",
        new inputPreparer.A("foodColor", "ffffff"),
      );
      createInputPd.set(
        "ejectedColor",
        new inputPreparer.A("ejectedColor", "ea2577"),
      );
      createInputPd.set(
        "cellNameOutlineColor",
        new inputPreparer.A("cellNameOutlineColor", "000000"),
      );
      createInputPd.set(
        "cursorImageUrl",
        new inputPreparer.A("cursorImageUrl", ""),
      );
      createInputPd.set(
        "backgroundImageUrl",
        new inputPreparer.A("backgroundImageUrl", "./img/background.png"),
      );
      createInputPd.set(
        "virusImageUrl",
        new inputPreparer.A("virusImageUrl", "./img/virus.png"),
      );
      createInputPd.set(
        "arrowImageUrl",
        new inputPreparer.A("arrowImageUrl", "./img/arrow.png"),
      );
      createInputPd.set(
        "cellMassColor",
        new inputPreparer.A("cellMassColor", "ffffff"),
      );
      createInputPd.set(
        "cellMassOutlineColor",
        new inputPreparer.A("AAA", "000000"),
      );
      createInputPd.set(
        "cellNameFont",
        new inputPreparer.A("cellNameFont", "Hind Madurai"),
      );
      createInputPd.set(
        "cellNameWeight",
        new inputPreparer.A("cellNameWeight", 1),
      );
      createInputPd.set(
        "cellNameOutline",
        new inputPreparer.A("cellNameOutline", 2),
      );
      createInputPd.set(
        "cellNameSmoothOutline",
        new inputPreparer.A("cellNameSmoothOutline", true),
      );
      createInputPd.set(
        "cellLongNameThreshold",
        new inputPreparer.A("cellLongNameThreshold", 750),
      );
      createInputPd.set(
        "cellMassFont",
        new inputPreparer.A("cellMassFont", "Ubuntu"),
      );
      createInputPd.set(
        "cellMassWeight",
        new inputPreparer.A("cellMassWeight", 2),
      );
      createInputPd.set(
        "cellMassOutline",
        new inputPreparer.A("cellMassOutline", 2),
      );
      createInputPd.set(
        "cellMassTextSize",
        new inputPreparer.A("cellMassTextSize", 0),
      );
      createInputPd.set(
        "cellMassSmoothOutline",
        new inputPreparer.A("cellMassSmoothOutline", true),
      );
      createInputPd.set("shortMass", new inputPreparer.A("shortMass", true));
      createInputPd.set(
        "showBackgroundImage",
        new inputPreparer.A("showBackgroundImage", true),
      );
      createInputPd.set(
        "backgroundImageRepeat",
        new inputPreparer.A("backgroundImageRepeat", true),
      );
      createInputPd.set(
        "backgroundDefaultIfUnequal",
        new inputPreparer.A("backgroundDefaultIfUnequal", true),
      );
      createInputPd.set(
        "backgroundImageOpacity",
        new inputPreparer.A("backgroundImageOpacity", 0.6),
      );
      createInputPd.set(
        "useFoodColor",
        new inputPreparer.A("useFoodColor", false),
      );
      createInputPd.set(
        "namesEnabled",
        new inputPreparer.A("namesEnabled", true),
      );
      createInputPd.set(
        "skinsEnabled",
        new inputPreparer.A("skinsEnabled", true),
      );
      createInputPd.set(
        "massEnabled",
        new inputPreparer.A("massEnabled", true),
      );
      createInputPd.set(
        "showLocations",
        new inputPreparer.A("showLocations", false),
      );
      createInputPd.set(
        "cellBorderSize",
        new inputPreparer.A("cellBorderSize", 1),
      );
      createInputPd.set(
        "autoHideReplayControls",
        new inputPreparer.A("autoHideReplayControls", false),
      );
      createInputPd.set("minimapSize", new inputPreparer.A("minimapSize", 220));
      createInputPd.set("minimapFPS", new inputPreparer.A("minimapFPS", 30));
      createInputPd.set(
        "minimapSmoothing",
        new inputPreparer.A("minimapSmoothing", 0.08),
      );
      createInputPd.set(
        "rememeberEjecting",
        new inputPreparer.A("rememeberEjecting", true),
      );
      createInputPd.set(
        "switchUnfocusedColor",
        new inputPreparer.A("switchUnfocusedColor", 16777215),
      );
      createInputPd.set(
        "switchFocusedColor",
        new inputPreparer.A("switchFocusedColor", 16711935),
      );
      createInputPd.set(
        "activeTabContext",
        new inputPreparer.A("activeTabContext", 0),
      );
      createInputPd.set(
        "animateEjectedCells",
        new inputPreparer.A("animateEjectedCells", true),
      );
      createInputPd.set(
        "animatePlayerCells",
        new inputPreparer.A("animatePlayerCells", false),
      );
      createInputPd.set(
        "inputs",
        new inputPreparer.A(
          "inputs",
          '{"names":["Tab 1","Tab 2"],"skins":["https://skins.vanis.io/s/OKKqrM","https://skins.vanis.io/s/OKKqrM"],"tags":["",""]}',
        ),
      );
      createInputPd.set(
        "showTotalPlayerMass",
        new inputPreparer.A("showTotalPlayerMass", true),
      );
      createInputPd.set(
        "showTotalPlayerScore",
        new inputPreparer.A("showTotalPlayerScore", true),
      );
      createInputPd.set(
        "excludeBotsOnLeaderboard",
        new inputPreparer.A("excludeBotsOnLeaderboard", false),
      );
      createInputPd.set(
        "useAntialiasing",
        new inputPreparer.A("useAntialiasing", false),
      );
      createInputPd.set(
        "menuFoodGlow",
        new inputPreparer.A("menuFoodGlow", false),
      );
      createInputPd.set("chatHeight", new inputPreparer.A("chatHeight", 200));
      createInputPd.set(
        "lineSplitDelay",
        new inputPreparer.A("lineSplitDelay", 750),
      );
      createInputPd.set("cellsOpacity", new inputPreparer.A("cellsOpacity", 1));
      createInputPd.set("showStats", new inputPreparer.A("showStats", true));
      createInputPd.set(
        "useSharedViewport",
        new inputPreparer.A("useSharedViewport", true),
      );
      createInputPd.set(
        "sharedViewportMaxDistance",
        new inputPreparer.A("sharedViewportMaxDistance", 7000),
      );
      createInputPd.set(
        "linkTabNames",
        new inputPreparer.A("linkTabNames", false),
      );
      createInputPd.set(
        "linkTabSkins",
        new inputPreparer.A("linkTabSkins", false),
      );
      createInputPd.set(
        "linkTabTags",
        new inputPreparer.A("linkTabTags", false),
      );
      createInputPd.set(
        "joinTabsTogether",
        new inputPreparer.A("joinTabsTogether", false),
      );
      createInputPd.set(
        "switchControlMode",
        new inputPreparer.A("switchControlMode", false),
      );
      createInputPd.set("hudScale", new inputPreparer.A("hudScale", 1));
      createInputPd.set(
        "triggerAtCells",
        new inputPreparer.A("triggerAtCells", 12),
      );
      createInputPd.set(
        "triggerIgnoreSizeEnabled",
        new inputPreparer.A("triggerIgnoreSizeEnabled", false),
      );
      createInputPd.set(
        "triggerIgnoreSizeBelow",
        new inputPreparer.A("triggerIgnoreSizeBelow", 10),
      );
      createInputPd.set(
        "minimapResolution",
        new inputPreparer.A("minimapResolution", 1.5),
      );
      createInputPd.set(
        "showMinimapStats",
        new inputPreparer.A("showMinimapStats", true),
      );
      createInputPd.set(
        "tabStatusMode",
        new inputPreparer.A("tabStatusMode", 0),
      );
      let o = (computeDivide, divisor) => {
        let ___________calculateSum;
        switch (computeDivide) {
          case 3:
            ___________calculateSum = divisor / 5;
            break;
          case 1:
            ___________calculateSum = divisor / 20;
            break;
          default:
            ___________calculateSum = divisor / 10;
        }
        return object61036.mk(___________calculateSum);
      };
      let r = (textStyle) =>
        textStyle === 0 ? "thin" : textStyle === 2 ? "bold" : "normal";
      let l = "extendedSettings";
      class c extends preprocess() {
        buj() {
          this.set("inputs", JSON.stringify(this.inputs));
        }
        DQm() {
          try {
            let inputHandler;
            if ("inputs" in this.njC) {
              inputHandler = this.get("inputs");
            } else {
              (0, _inputPreparer.$s)(
                1,
                "No player inputs found; falling back to defaults",
              );
              inputHandler = this.eyU("inputs");
              this.set("inputs", inputHandler);
            }
            this.inputs = JSON.parse(inputHandler);
          } catch (parseInputsOr) {
            (0, _inputPreparer.$s)(
              1,
              "Failed to parse player inputs; falling back to defaults",
            );
            this.inputs = JSON.parse(this.eyU("inputs"));
            this.buj();
          }
        }
        constructor() {
          super();
          this.GAS = 512;
          this.setMaxListeners(0);
          let parsedData = {};
          let localStorageL = 0;
          if (l in localStorage) {
            try {
              parsedData = JSON.parse(localStorage.getItem(l));
              localStorageL = 1;
            } catch (errorCatcher) {}
          }
          if (!localStorageL && "settings" in localStorage) {
            try {
              parsedData = JSON.parse(localStorage.getItem("settings"));
              localStorageL = 2;
            } catch (___error) {}
          }
          if (localStorageL === 0) {
            this.njC = parsedData = {};
            createInputPd.forEach(
              (valueObject, _________________________________________index) => {
                parsedData[_________________________________________index] =
                  valueObject.value;
              },
            );
            this.store();
          } else {
            this.njC = parsedData;
          }
          createInputPd.forEach((uiEvent, addUniqueKey) => {
            if (!(addUniqueKey in parsedData)) {
              parsedData[addUniqueKey] = uiEvent.value;
            }
          });
          this.DQm();
          if (localStorageL === 2) {
            this.store();
          }
          this.set("skinsEnabled", true);
          this.set("namesEnabled", true);
          this.set("massEnabled", true);
          this.QNM();
          this.bsH();
        }
        store() {
          localStorage.setItem(l, JSON.stringify(this.njC));
        }
        QNM() {
          var createTextSty = new n.TextStyle({
            fontFamily: this.get("cellNameFont"),
            fontSize: 80,
            fontWeight: r(this.get("cellNameWeight")),
          });
          var cellOutlineSt = this.get("cellNameOutline");
          if (cellOutlineSt) {
            createTextSty.stroke = parseInt(
              this.get("cellNameOutlineColor"),
              16,
            );
            createTextSty.strokeThickness = o(
              cellOutlineSt,
              createTextSty.fontSize,
            );
            if (this.get("cellNameSmoothOutline")) {
              createTextSty.lineJoin = "round";
            } else {
              createTextSty.lineJoin = "miter";
            }
          }
          this.lqB = createTextSty;
        }
        bsH() {
          var createTypedef = new n.TextStyle({
            fontFamily: this.get("cellMassFont"),
            fontSize: 56 + this.get("cellMassTextSize") * 20,
            fontWeight: r(this.get("cellMassWeight")),
            lineJoin: "round",
            fill: parseInt(this.get("cellMassColor"), 16),
          });
          var ______________________________________________anonymousUser =
            this.get("cellMassOutline");
          if (______________________________________________anonymousUser) {
            createTypedef.stroke = parseInt(
              this.get("cellMassOutlineColor"),
              16,
            );
            createTypedef.strokeThickness = o(
              ______________________________________________anonymousUser,
              createTypedef.fontSize,
            );
            if (this.get("cellMassSmoothOutline")) {
              createTypedef.lineJoin = "round";
            } else {
              createTypedef.lineJoin = "miter";
            }
          }
          this.jLt = createTypedef;
        }
        get useWebGL() {
          return n.utils.isWebGLSupported() && this.get("useWebGL");
        }
        eyU(_createInputPd) {
          if (createInputPd.has(_createInputPd)) {
            return createInputPd.get(_createInputPd).value;
          } else {
            return null;
          }
        }
        has(doesCustomKey) {
          return doesCustomKey in this.njC;
        }
        get(optionalGet) {
          if (this.has(optionalGet)) {
            return this.njC[optionalGet];
          } else {
            return this.eyU(optionalGet);
          }
        }
        set(checkAndModer, _defaultValue) {
          return (
            (!this.has(checkAndModer) ||
              this.get(checkAndModer) !== _defaultValue) &&
            !(createInputPd[checkAndModer] !== _defaultValue
              ? (this.njC[checkAndModer] = _defaultValue)
              : delete this.njC[checkAndModer],
            this.store(),
            this.emit("zrVIMz", checkAndModer, _defaultValue),
            0)
          );
        }
        org(castNumber) {
          return Number(this.get(castNumber));
        }
        lQo(concatEmpty) {
          return "" + this.get(concatEmpty);
        }
        dlo(getShort) {
          return !!this.get(getShort);
        }
      }
      inputPreparer = new c();
      let ______transformData = (_ObjectFactory.g.settings = inputPreparer);
    },
    58489(xKey, _keyValuePair, keyValueMap) {
      keyValueMap.d(_keyValuePair, {
        A: () => KeyValuePair,
      });
      class KeyValuePair {
        constructor(jqueryRef, constructorFn) {
          this.key = jqueryRef;
          this.value = constructorFn;
        }
      }
    },
    82196(callbacks, _triggerAction, configureAndF) {
      configureAndF.d(_triggerAction, {
        A: () => dataLoader,
      });
      var _eventHandler1 = configureAndF(15308);
      let ____selector = (CallbackTrait, removeIfPres) =>
        !(
          (removeIfPres = (CallbackTrait = CallbackTrait.callbacks).indexOf(
            removeIfPres,
          )) < 0
        ) && !(CallbackTrait.splice(removeIfPres, 1), 0);
      class dataLoader {
        constructor() {
          this.loaders = new Map();
          this.UQz();
        }
        UQz() {
          let createsEventB = new URL(configureAndF(97833), configureAndF.b);
          fetch(createsEventB)
            .then(async (imageBuffer) => {
              imageBuffer = URL.createObjectURL(await imageBuffer.blob());
              (0, _eventHandler1.$s)(
                0,
                'Skin worker loaded asynchronously at "' +
                  imageBuffer +
                  '" from file at "' +
                  createsEventB +
                  '"',
              );
              this.worker = new Worker(imageBuffer);
              this.worker.addEventListener("message", this.vzR.bind(this));
            })
            .catch(() => {
              (0, _eventHandler1.$s)(
                2,
                'Skin worker failed to load asynchronously from file at "' +
                  createsEventB +
                  '"?',
              );
            });
        }
        hha() {
          this.loaders.clear();
        }
        bCr(JobLoader, jobLoaderFin) {
          let jobLoaderMeta;
          if (!this.loaders.has(JobLoader)) {
            this.loaders.set(
              JobLoader,
              (jobLoaderMeta = {
                callbacks: [jobLoaderFin],
              }),
            );
            this.worker.postMessage(JobLoader);
            return ____selector.bind(null, jobLoaderMeta, jobLoaderFin);
          }
          if ((jobLoaderMeta = this.loaders.get(JobLoader)).image != null) {
            jobLoaderFin(jobLoaderMeta.image);
          } else if (!jobLoaderMeta.errored) {
            jobLoaderMeta.callbacks.push(jobLoaderFin);
            return ____selector.bind(null, jobLoaderMeta, jobLoaderFin);
          }
          return null;
        }
        vzR(___anonymousCall) {
          var contentLoader = ___anonymousCall.data;
          var ___anonymousCall = this.loaders.get(contentLoader.url);
          if (contentLoader.errored) {
            ___anonymousCall.errored = true;
            ___anonymousCall.callbacks.length = 0;
          } else {
            ___anonymousCall.image = contentLoader.image;
            for (
              var callbackSequn = ___anonymousCall.callbacks;
              callbackSequn.length;

            ) {
              callbackSequn.pop()(contentLoader.image);
            }
          }
        }
      }
    },
    78225(_____initialize, _____initializer, ______initialize) {
      ______initialize.d(_____initializer, {
        A: () => DefaultConfig,
      });
      var ______initializer = ______initialize(83529);
      let DefaultConfig = new (class {
        get bTs() {
          return this.VqP[this.yNT];
        }
        get biB() {
          return this.OcY[this.yNT];
        }
        constructor() {
          this.selectedServer = null;
          this.VqP = [0, 0];
          this.OcY = [0, 0];
          this.zCS = [false, false];
          this.tXL = [false, false];
          this.pids = [0, 0];
          this.yNT = 0;
          this.rendering = true;
          this.Xwi = null;
          this.yNT = ______initializer.A.get("activeTabContext");
          if (isNaN(this.yNT) || (this.yNT !== 0 && this.yNT !== 1)) {
            this.yNT = 0;
            ______initializer.A.set("activeTabContext", 0);
          }
        }
        reset() {
          this.VqP = [0, 0];
          this.OcY = [0, 0];
          this.zCS = [false, false];
          this.tXL = [false, false];
          this.pids = [0, 0];
          this.Ebi = "Play";
          this.Xwi = null;
        }
        jMO(____config) {
          this.selectedServer = ____config;
          this.Xwi = ____config.url;
        }
        get vSE() {
          return this.selectedServer?.url || null;
        }
      })();
    },
    97665(deltaXY, referencePt, _translate) {
      _translate.d(referencePt, {
        Sl: () => computeSquar,
      });
      _translate(61036);
      let computeSquar = (calculateSquE, closestPoint) => {
        var horizontalDif = calculateSquE.x - closestPoint.x;
        var calculateSquE = calculateSquE.y - closestPoint.y;
        return horizontalDif * horizontalDif + calculateSquE * calculateSquE;
      };
    },
    24968(aggregator, dataSampleAgg, transformSix1) {
      transformSix1.d(dataSampleAgg, {
        A: () => SampleStatAcc,
      });
      var _transformSix1 = transformSix1(61036);
      class SampleStatAcc {
        constructor() {
          this.samples = [];
          this.average = 0;
          this.current = 0;
          this.total = 0;
        }
        reset() {
          this.samples.length = 0;
          this.average = 0;
          this.current = 0;
          this.total = 0;
        }
        update(averageSample) {
          var rollingSensor = this.samples;
          rollingSensor.push((this.current = averageSample));
          if (rollingSensor.length > 128) {
            rollingSensor.shift();
            this.average =
              rollingSensor.reduce(
                (_accumulate, accumulateSum) => _accumulate + accumulateSum,
              ) / rollingSensor.length;
          } else {
            this.average = averageSample;
          }
          this.total++;
        }
        get minimum() {
          if (this.samples.length != 0) {
            return _transformSix1.jk(...this.samples);
          } else {
            return 0;
          }
        }
        get maximum() {
          if (this.samples.length != 0) {
            return _transformSix1.T9(...this.samples);
          } else {
            return 0;
          }
        }
      }
    },
    33656(callbackMap, shortcuts, _shortcuts) {
      _shortcuts.d(shortcuts, {
        Ab: () => abKeyCallback,
        C6: () => conditionedSn,
        CF: () => Y,
        DK: () => conditionMet,
        DY: () => ___itemIndex,
        Dk: () => r,
        EP: () => o,
        Es: () => shortcutKey,
        LK: () => __shortcuts,
        MM: () => keyActionMap,
        Nr: () => keyShortcuts,
        Ns: () => applyShortcut,
        Qv: () => executeShortC,
        Rk: () => _conditionMet,
        Rr: () => conditionalQu,
        S6: () => keyHandler,
        Tw: () => shortcutIndex,
        U7: () => mapShortcuts,
        Yf: () => n,
        Zl: () => setShortcut,
        bz: () => assignShortCn,
        e5: () => OriginalShort,
        e_: () => conditionMap,
        f9: () => l,
        g8: () => mapCallbacks,
        nC: () => m,
        nG: () => shortcutsMap,
        pk: () => f,
        r3: () => resolveShortC,
        tz: () => p,
        vL: () => c,
        w5: () => getResultOrQu,
        w8: () => keyActionBind,
        zh: () => assignShortCd,
        zw: () => shortcutMap,
      });
      shortcuts = _shortcuts(71675);
      let keyShortcuts = (activeTab) =>
        "Tab " + activeTab + " reconnecting to server...";
      let shortcutMap = (disconnect) => "Tab " + disconnect + " disconnected";
      let ___itemIndex = "Server restarting...";
      let n = (tabName) => "Connection for tab " + tabName + " rejected";
      let assignShortCd =
        (_shortcuts = decodeURI(atob("JUUyJTk4JTg2"))) +
        " " +
        atob("QXhvbiB2") +
        shortcuts.rE +
        " | " +
        atob("RGV2ZWxvcGVkIGJ5IEFlcm8=") +
        " " +
        _shortcuts;
      let o = "Captcha library is not loaded";
      let r = "unknown server";
      let l = (connectionNot) => "Connected to " + connectionNot;
      let c = (_tabIdentifier) =>
        "Connection established for tab " + _tabIdentifier;
      let shortcutKey = (tabFltClosed) =>
        "Closing existing FLt for tab " + tabFltClosed;
      let mapCallbacks = "Spectating largest player";
      let executeShortC = (additionalSpy) => "Spectating " + additionalSpy;
      let conditionedSn = "No active server URL set during attempt to connect?";
      let mapShortcuts =
        "Rendering has been paused to save memory while the tab is unfocused";
      let m = (gameFocusRest) =>
        gameFocusRest
          ? "Regained focus on game tab"
          : "Focus on game tab was lost";
      let getResultOrQu = (welcomePlayer) =>
        "Welcome back (playing as tab " + welcomePlayer + ")";
      let p = (frameSelector) => "[FRAME #" + frameSelector + "]";
      let f = (framerateToHr, currentFPS, currentTimeEp, maxFps) =>
        "FPS [now {" +
        Math.round(framerateToHr) +
        "} avg {" +
        currentFPS +
        "} min {" +
        currentTimeEp +
        "} max {" +
        maxFps +
        "}]";
      let OriginalShort = (
        __tabIndex,
        tabPingTimeIn,
        averagePing,
        maxTabPingLag,
        maxLastTabPin,
      ) =>
        "Ping for tab " +
        __tabIndex +
        " [now {" +
        tabPingTimeIn +
        "ms} | avg {" +
        averagePing +
        "ms} min {" +
        maxTabPingLag +
        "ms} max {" +
        maxLastTabPin +
        "ms}]";
      let keyHandler = "'gameObject' global defined but is deprecated!";
      let assignShortCn = (videoReplayDt) =>
        "Replay of the last " +
        videoReplayDt +
        " seconds rendered and downloaded";
      let keyActionBind =
        "Recording started (press keybind again to stop recording)";
      let shortcutIndex = (autoRespawnIs) =>
        "Auto respawn " + (autoRespawnIs ? "disabled" : "enabled");
      let setShortcut = (messageBasedE) => {
        let splitTypeDesp;
        switch (messageBasedE) {
          case 0:
            splitTypeDesp = "one split";
            break;
          case 1:
            splitTypeDesp = "double split";
            break;
          case 2:
            splitTypeDesp = "line split";
            break;
          case 3:
            splitTypeDesp = "trick split";
        }
        return "Triggered " + splitTypeDesp + " on selected player!";
      };
      let resolveShortC = (eventSourceE, TabIndexEvent) =>
        "Watching " + eventSourceE + " on tab " + TabIndexEvent;
      let keyActionMap = "Waiting to watch player";
      let conditionMet =
        "This client is currently in alpha and is subject to bugs.\n\nUse with caution! (v" +
        shortcuts.rE +
        ")";
      let _conditionMet =
        "%c %c" + _shortcuts + " Axon for Vanis.io - v" + shortcuts.rE + " %c ";
      let applyShortcut = "Lacking mandatory data";
      let conditionalQu = (tabSelection) => "Play as tab " + tabSelection;
      let conditionMap = (currentLevel) =>
        "You have reached level " + currentLevel + "!";
      let shortcutsMap = "https://skins.vanis.io/s/vanis1";
      let abKeyCallback = "Unnamed";
      let Y = "Long Name";
      let __shortcuts = decodeURIComponent("%F0%9F%A4%96");
    },
    15308(globalCounter, GlobalCounter, _globalCounter) {
      _globalCounter.d(GlobalCounter, {
        $s: () => l,
        Cc: () => ___globalCounter,
        N: () => n,
        X0: () => c,
        hJ: () => hashGlobalCtr,
        me: () => _GlobalCounter,
        oR: () => incrementOrAl,
        rO: () => ____globalCounter,
        v2: () => setGlobalCoun,
      });
      var GlobalCounter = _globalCounter(78465);
      var GlobalCounter = _globalCounter.n(GlobalCounter);
      var __globalCounter = _globalCounter(61036);
      var updateCount = _globalCounter(83529);
      let ___globalCounter = (__accumulate, adaptiveError, _iterationTime) =>
        __accumulate + (adaptiveError - __accumulate) * _iterationTime;
      let n = (essentialData, _configuration, threadIndex) =>
        __globalCounter.jk(
          threadIndex,
          __globalCounter.T9(_configuration, essentialData),
        );
      var updateGlobalC = ["INFO", "WARN", "ERROR", "DEBUG", "FATAL"].map(
        (_dollarSign) => "[" + _dollarSign + "]",
      );
      let o = new Map([
        [0, console.log.bind(null, updateGlobalC.shift())],
        [1, console.warn.bind(null, updateGlobalC.shift())],
        [2, console.error.bind(null, updateGlobalC.shift())],
        [3, console.log.bind(null, updateGlobalC.shift())],
        [4, console.error.bind(null, updateGlobalC.shift())],
        [5, console.log.bind(null)],
      ]);
      let r = Function(
        atob("cmV0dXJuKF8sLi4uX18pPT57Xy5jYWxsKG51bGwsLi4uX18pfQ=="),
      )();
      let l = (fnParams, ...____additionalArg) => {
        if (o.has(fnParams)) {
          r(o.get(fnParams), ...____additionalArg);
        }
      };
      let c = (assertFail, ...validationFal) => {
        if (!assertFail) {
          o.get(4)("Assertion failed:", ...validationFal);
        }
      };
      let hashGlobalCtr = (________anonymousType, selectTeaBot) => {
        var argNames = updateCount.A.inputs;
        ________anonymousType.Tea(
          argNames.names[updateCount.A.get("linkTabNames") ? 0 : selectTeaBot],
        );
        ________anonymousType.Tea(
          argNames.skins[updateCount.A.get("linkTabSkins") ? 0 : selectTeaBot],
        );
        ________anonymousType.Tea(
          argNames.tags[updateCount.A.get("linkTabTags") ? 0 : selectTeaBot],
        );
      };
      _globalCounter.g.Swal = GlobalCounter();
      let incrementOrAl = GlobalCounter().mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        showCloseButton: true,
      });
      let _GlobalCounter = (userInputArgs, messageType, _messageType) => {
        let defaultMsgTy;
        if (typeof messageType != "string") {
          switch (messageType) {
            default:
            case 0:
            case undefined:
              defaultMsgTy = "info";
              break;
            case 1:
              defaultMsgTy = "warning";
              break;
            case 2:
              defaultMsgTy = "error";
              break;
            case 3:
              defaultMsgTy = "success";
              break;
            case 4:
              defaultMsgTy = "question";
          }
        } else {
          defaultMsgTy = messageType;
        }
        if (typeof messageType == "number") {
          messageType = messageType;
        } else {
          messageType = "info";
        }
        incrementOrAl.fire({
          icon: defaultMsgTy,
          title: userInputArgs,
          timer: _messageType || (defaultMsgTy === "error" ? 5000 : 2000),
          timerProgressBar: true,
        });
      };
      let setGlobalCoun = (divideAndMult, zeroVariable = 0.5) =>
        (~~((divideAndMult >> 16) * zeroVariable) << 16) |
        (~~(((divideAndMult >> 8) & 255) * zeroVariable) << 8) |
        (~~((divideAndMult & 255) * zeroVariable) << 0);
      let ____globalCounter = () => {
        var createCurrent = new Date();
        return (
          ("0" + createCurrent.getHours()).slice(-2) +
          ":" +
          ("0" + createCurrent.getMinutes()).slice(-2) +
          ":" +
          ("0" + createCurrent.getSeconds()).slice(-2)
        );
      };
    },
    72093(processEntity, ___________eventData, getEventData) {
      var eventData7417 = getEventData(74173);
      var eventDataFor9 = getEventData(95195);
      var eventIndex835 = getEventData(83529);
      var n = getEventData(15308);
      var fetchEvents = getEventData(92915);
      var o = getEventData(95514);
      var r = getEventData(30847);
      var l = getEventData(87706);
      var c = getEventData(31628);
      let ___processEvent = (upperLimit, maxUnbiasedRn) =>
        Math.random() * (maxUnbiasedRn - upperLimit) + upperLimit;
      class containerInst {
        constructor(checkUsedOcc) {
          (this.container = checkUsedOcc).addChild(
            (this.graphic = new l.Graphics()),
          );
          checkUsedOcc = containerInst.used.indexOf(false);
          (0, n.X0)(
            checkUsedOcc >= 0,
            "Too many elements are being used (exceeded limit of 512",
          );
          containerInst.used[checkUsedOcc] = true;
          this.id = checkUsedOcc;
        }
        spawn(AnonymousType) {
          this.position = AnonymousType;
          this.angle = ___processEvent(-3, 3);
          this.radius = ___processEvent(2, 5);
          this.speed = ___processEvent(0.5, 3);
          if (eventIndex835.A.get("useFoodColor")) {
            this.color = parseInt(eventIndex835.A.get("foodColor"), 16);
          } else {
            this.color = fetchEvents.pz[this.id % fetchEvents.pz.length];
          }
          this.graphic
            .beginFill(this.color)
            .drawCircle(0, 0, this.radius)
            .endFill();
          this.glow = eventIndex835.A.get("menuFoodGlow");
        }
        destroy() {
          containerInst.used[this.id] = false;
          this.container.removeChild(this.graphic);
          this.graphic.destroy(true);
        }
        update(currentSpeed) {
          var currentSpeed = this.speed * currentSpeed;
          this.position.add(
            Math.cos(this.angle) * currentSpeed,
            Math.sin(this.angle) * currentSpeed,
          );
          this.radius += currentSpeed * 0.0035;
          var { x: currentSpeed, y: catchAndLogUn } = this.position;
          this.graphic.position.set(currentSpeed, catchAndLogUn);
        }
        xHa(playerX) {
          return this.position.collides(
            playerX.x + this.radius,
            playerX.y + this.radius,
          );
        }
        set glow(setGlowFilter) {
          if (setGlowFilter) {
            this.graphic.filters = [
              new c.qx({
                color: this.color,
                distance: 10 + ~~this.radius,
                outerStrength: 5,
                quality: 0.8,
                innerStrength: 3,
                knockout: false,
              }),
            ];
          } else {
            this.graphic.filters = [];
          }
        }
      }
      containerInst.used = Array(512).fill(false);
      let fetchEventDs = new (class {
        constructor() {
          this.TOR = eventData7417.A.from();
          this.position = eventData7417.A.from();
          this.running = false;
          this.xJc = true;
          this.onResize = () => {
            var windowWidth = window.innerWidth;
            var windowDimens = window.innerHeight;
            this.app.renderer.resize(windowWidth, windowDimens);
            this.position.set(0, 0);
            this.TOR.set(windowWidth, windowDimens);
            this.container.x = this.app.screen.width / 2;
            this.container.y = this.app.screen.height / 2;
            this.container.pivot.x = 0;
            this.container.pivot.y = 0;
          };
          this.animate = (processShould) => {
            if (eventDataFor9.A.running) {
              return this.stop();
            }
            if (this.running) {
              var eventMillis = performance.now();
              this.WdV ||= this.lastStamp = eventMillis;
              let eventTimeDif = (eventMillis - this.lastStamp) / 6;
              var filteredTimeD = eventMillis - this.WdV - 550;
              if (filteredTimeD > 0) {
                eventTimeDif /= Math.pow(
                  3,
                  (filteredTimeD = Math.min(filteredTimeD / 1000, 1.2)),
                );
              }
              this.update(eventTimeDif);
              this.lastStamp = eventMillis;
            }
          };
          this.canvas = document.querySelector(".particles.canvas");
          this.app = new l.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            resolution: window.devicePixelRatio || 1,
            view: this.canvas,
            forceCanvas: !eventIndex835.A.useWebGL,
            antialias: true,
            powerPreference: "high-performance",
            backgroundColor: parseInt(
              eventIndex835.A.get("backgroundColor"),
              16,
            ),
            autoDensity: true,
          });
          (0, o.h0)(this.app);
          this.app.stop();
          this.app.ticker.add(this.animate);
          this.container = new l.Container();
          this.app.stage.addChild(this.container);
          this.items = new Set();
          for (let countUpTo95 = 0; countUpTo95 < 96; countUpTo95++) {
            this.items.add(new containerInst(this.container));
          }
          this.container.x = this.canvas.width / 2;
          this.container.y = this.canvas.height / 2;
          eventIndex835.A.on("zrVIMz", (toggleGlow, glowColor) => {
            if (toggleGlow === "useFoodColor") {
              this.xJc = true;
            } else if (toggleGlow === "menuFoodGlow") {
              this.stop();
              this.items.forEach((assignGlow) => {
                assignGlow.glow = glowColor;
              });
              this.start();
            }
          });
        }
        start() {
          if (!this.running) {
            this.onResize();
            window.addEventListener("resize", this.onResize);
            this.xJc = true;
            this.running = true;
            this.app.start();
            (0, o.L2)(false);
            this.visible = true;
          }
        }
        stop() {
          if (this.running) {
            (0, o.L2)(true);
            this.visible = false;
            window.removeEventListener("resize", this.onResize);
            this.app.stop();
            this.app.renderer.clear();
            delete this.WdV;
            delete this.lastStamp;
            this.running = false;
          }
        }
        update(_updateState) {
          this.items.forEach((EventManager) => {
            if (this.xJc || EventManager.xHa(this.TOR)) {
              EventManager.spawn(
                this.position
                  .clone()
                  .add(___processEvent(-200, 200), ___processEvent(-200, 200)),
              );
            }
            EventManager.update(_updateState);
          });
          this.xJc = false;
        }
        set visible(toggleCanvasH) {
          this.canvas.classList[toggleCanvasH ? "remove" : "add"]("hide");
        }
      })();
      eventDataFor9.A.on("stopped", () => fetchEventDs.start());
      (0, r.wg)(() => {
        if (!eventDataFor9.A.running) {
          fetchEventDs.start();
        }
      });
    },
    37635(createXFromE, tempExtended, ExtendedTempl) {
      ExtendedTempl.d(tempExtended, {
        A: () => TemporaryExt,
      });
      tempExtended = ExtendedTempl(74173);
      class TemporaryExt extends tempExtended.A {
        constructor() {
          super();
        }
        static nVI(_______initializer) {
          var createDefault = new TemporaryExt();
          createDefault.frozen =
            createDefault.centralize =
            createDefault.pause =
              false;
          createDefault.buffer = _______initializer;
          return createDefault;
        }
        static from(
          _______________________________________________anonymousUser = 0,
          _________________counter = 0,
        ) {
          var initialTemp = new TemporaryExt();
          initialTemp.frozen =
            initialTemp.centralize =
            initialTemp.pause =
              false;
          initialTemp.buffer = new Float32Array(2);
          initialTemp.x =
            _______________________________________________anonymousUser;
          initialTemp.y = _________________counter;
          return initialTemp;
        }
        reset() {
          this.x = this.y = 0;
          this.frozen = false;
          return this;
        }
      }
    },
    53967(dataCollector, resultObject, taskHandler) {
      taskHandler.d(resultObject, {
        A: () => continueTask,
      });
      class continueTask {
        constructor() {
          this.running = false;
          this.tasks = [];
          this.HaC = () => {
            var runInitial;
            if (this.running) {
              (runInitial = this.tasks.shift())?.();
              this.add(runInitial);
              this.Mlb = requestAnimationFrame(this.HaC);
            }
          };
        }
        add(____document) {
          this.tasks.push(____document);
        }
        start() {
          if (!this.running) {
            this.running = true;
            this.HaC();
          }
        }
        stop() {
          if (this.running) {
            this.running = false;
            cancelAnimationFrame(this.Mlb);
            delete this.Mlb;
          }
        }
      }
    },
    24216(utilityBank, _____dataHandler, _______transformData) {
      _______transformData.d(_____dataHandler, {
        h: () => r,
      });
      var transformedN = _______transformData(95195);
      var transformedB2 = _______transformData(78225);
      var _dataProcessor = _______transformData(1786);
      var n = _______transformData(30847);
      var transmuter = _______transformData(33656);
      var o = _______transformData(83529);
      let r = new (class {
        constructor() {
          this.cells = [];
          this.cUB = (filterAndAdd, callback) => {
            if (this.target && callback.exG) {
              let findInContext = callback;
              if (findInContext.pid === this.target.pid) {
                if (
                  (callback = this.cells.some(
                    (_currentValue) => findInContext.id === _currentValue,
                  )
                    ? -1
                    : this.cells.push(findInContext.id)) !== -1 &&
                  o.A.get("triggerIgnoreSizeEnabled") &&
                  findInContext.dxt <= o.A.get("triggerIgnoreSizeBelow")
                ) {
                  this.QIF++;
                } else if (
                  !this.done &&
                  callback !== -1 &&
                  callback >= this.QIF + o.A.get("triggerAtCells")
                ) {
                  this.done = true;
                  if (this.gAx === 0) {
                    this.split(1, this.context);
                  } else if (this.gAx === 1) {
                    this.gun(this.context);
                  } else if (this.gAx === 2) {
                    transformedN.A.kmM.lineSplit(this.context);
                  } else {
                    this.oCs(this.context);
                  }
                  this.reset();
                  this.EEA((0, transmuter.Zl)(this.gAx));
                  (0, n.wg)(() => {
                    delete this.done;
                    this.EEA(null);
                  }, 800);
                }
              }
            }
          };
          this.FDq = (DataHandler, isDataProcess, checkDataInst) => {
            if (this.target && isDataProcess instanceof _dataProcessor.kF) {
              if (
                isDataProcess.pid === this.target.pid &&
                !((isDataProcess = this.cells.indexOf(isDataProcess.id)) < 0)
              ) {
                this.cells.splice(isDataProcess, 1);
              }
            }
          };
          this.reset();
          transformedN.A.on("stopped", () => this.reset());
          transformedN.A.on("started", () => this.reset());
        }
        watch(referenceData, hasReference) {
          var transposedN;
          var getValue = transformedN.A.FCi.get(referenceData);
          return (
            !!getValue &&
            (transposedN = transformedN.A.VTJ.filter(
              (eventPidMatch) => eventPidMatch.pid === referenceData,
            )).length !== 0 &&
            ((this.context = transformedB2.A.yNT),
            (this.target = getValue),
            (this.gAx = hasReference),
            this.EEA((0, transmuter.r3)(getValue.name, 1 + this.context)),
            (this.QIF = this.cells.push(
              ...transposedN.map((getIdentifier) => getIdentifier.id),
            )),
            (transformedN.A.ykh = this.cUB),
            (transformedN.A.RYB = this.FDq),
            true)
          );
        }
        reset() {
          delete this.context;
          delete this.target;
          delete this.isLarge;
          this.cells.length = 0;
          this.QIF = 0;
          this.EEA(transmuter.MM);
          if (transformedN.A.ykh === this.cUB) {
            delete transformedN.A.ykh;
          }
          if (transformedN.A.RYB === this.FDq) {
            delete transformedN.A.RYB;
          }
        }
        EEA(emitEventWith) {
          transformedN.A.emit("RyKxvm", emitEventWith);
        }
        split(_identifier, ____eventEmitter) {
          if (
            !(____eventEmitter = transformedN.A.eWI[____eventEmitter]).mouse
              .pause
          ) {
            ____eventEmitter.CiT();
          }
          ____eventEmitter.JOy(_identifier);
          transformedN.A.Ifp += _identifier;
          if (transformedN.A.Ifp <= 2) {
            transformedN.A.Pzr = performance.now() + 300;
          } else {
            delete transformedN.A.Pzr;
            transformedN.A.Ifp = 0;
          }
        }
        gun(splitItems) {
          this.split(2, splitItems);
        }
        oCs(____data) {
          this.split(2, ____data);
          transformedN.A.eWI[____data].jjW(true);
          (0, n.wg)(() => this.split(8, ____data));
        }
      })();
    },
    28156(_uniqueKey, _____eventEmitter, _____fetchData) {
      _____fetchData(30608);
      _____fetchData(94121);
      var uniqueKeyFrom = _____fetchData(95195);
      var fetchData7167 = _____fetchData(71675);
      var __uniqueKey = _____fetchData(15308);
      var n = _____fetchData(61036);
      var eventEmitterU = _____fetchData(30847);
      _____fetchData(13711);
      var o = _____fetchData(33656);
      var r = _____fetchData(28858);
      var l = _____fetchData(87706);
      _____fetchData(78465);
      var c = _____fetchData(6716);
      _____fetchData(72093);
      _____fetchData.g.PIXI = l;
      let __________________________________eventHandler;
      __________________________________eventHandler = r.S.subscribe(
        (conditionKey) => {
          if (conditionKey) {
            (0, __uniqueKey.me)(o.DK, 1, 2500);
            __________________________________eventHandler();
          }
        },
      );
      (0, __uniqueKey.$s)(
        5,
        o.Rk,
        "background-color:#b2beb5;padding:3px;",
        "background-color:#353839;color:#e5e4e2;font-weight:bold;padding:3px;",
        "background-color:#b2beb5;padding:3px;",
      );
      (0, __uniqueKey.$s)(0, "Game instance", uniqueKeyFrom.A);
      (0, __uniqueKey.$s)(0, "Running PIXI v" + l.VERSION);
      localStorage.setItem("clientVersion", fetchData7167.rE);
      new c.A({
        target: document.body,
      });
      for (let emitFromOneTo = 1; emitFromOneTo <= 16; emitFromOneTo++) {
        (0, eventEmitterU.wg)(() => {
          location.hash = "#" + (8192 + n.RI(n.yT() * 8192)).toString(16);
        }, emitFromOneTo * 20);
      }
      (0, eventEmitterU.wg)(() => {
        location.hash = "A";
      }, 320);
      (0, __uniqueKey.$s)(0, "Client loaded");
    },
    14456(initWithAdded, executor, anonType) {
      anonType.d(executor, {
        h: () => Regions,
      });
      var _________anonymousType = anonType(71675);
      var scopedAnon = anonType(95195);
      var uniqueId78225 = anonType(78225);
      var n = anonType(15308);
      var executeWithDu = anonType(61416);
      var o = anonType(36391);
      var r = anonType(54603);
      let l = "cachedServers";
      let c = "regionCode";
      let createExecutr = [
        "ovt",
        "ffa",
        "instant",
        "gigasplit",
        "megasplit",
        "terasplit",
        "crazy",
        "self-feed",
      ];
      class Regions {
        constructor() {
          this.regions = ["EU", "NA", "AS"];
          this.WnJ = -1;
          this.hri = (sortByAdjustC, compareItemBy) => {
            var difference =
              (sortByAdjustC.index || 99) - (compareItemBy.index || 99);
            if (difference == 0) {
              return sortByAdjustC.name.localeCompare(
                compareItemBy.name,
                "en",
                {
                  numeric: true,
                  ignorePunctuation: true,
                },
              );
            } else {
              return difference;
            }
          };
          scopedAnon.A.on("kaczpN", this.load.bind(this));
          this.load(true);
          scopedAnon.A.on(
            "Dcxyoc",
            (processArgs) => processArgs && this.load(true),
          );
          this.QAf().then((firstRegion) => {
            if (!firstRegion || !this.regions.includes(firstRegion)) {
              firstRegion = this.regions[0];
            }
            this.LEA(firstRegion);
          });
        }
        LEA(storageHelper) {
          localStorage.setItem(c, storageHelper);
          (0, r.Jt)(executeWithDu.oo).forEach(
            (isElementInSn) => (isElementInSn.visible = false),
          );
          executeWithDu.aK.set(storageHelper);
        }
        QAf() {
          if (c in localStorage) {
            return Promise.resolve(localStorage.getItem(c));
          } else {
            return fetch("https://ipapi.co/json")
              .then((htmlDocManip) => htmlDocManip.json())
              .then((continentCode) => continentCode.continent_code)
              .catch(() => null);
          }
        }
        async load(_accessor) {
          if (
            !_accessor &&
            (!scopedAnon.A.Xrx || performance.now() <= this.WnJ + 60000)
          ) {
            return false;
          }
          let fetchGameData;
          try {
            fetchGameData = await fetch(
              _________anonymousType.VY + "gameservers.json",
            );
          } catch (fetchError) {
            (0, n.$s)(
              1,
              (this.error = "Failed fetching servers (" + fetchError + ")"),
            );
            return false;
          }
          if (!fetchGameData.ok) {
            (0, n.$s)(
              1,
              (this.error =
                "Failed fetching servers with status: " + fetchGameData.status),
            );
            return false;
          }
          let c = await fetchGameData.text();
          if (c.length === 0) {
            (0, n.$s)(
              1,
              (this.error = "Failed fetching servers (returned nothing)"),
            );
            return false;
          }
          let apiUrl;
          try {
            apiUrl = JSON.parse(c);
          } catch (fetchServerDt) {
            (0, n.$s)(
              1,
              "Failed fetching servers (couldn't pass JSON: \"" + c + '")',
            );
            try {
              apiUrl = JSON.parse(localStorage.getItem(l));
            } catch (catchedDu) {
              executeWithDu.b0.set([]);
              return false;
            }
          }
          if ("selectedServer" in localStorage) {
            let serverInfo;
            let m = localStorage.getItem("selectedServer");
            try {
              serverInfo = JSON.parse(m);
            } catch (unsuccessfulP) {
              (0, n.$s)(
                1,
                'Failed parsing selected server (value: "' + m + '"")',
              );
            }
            if (
              (serverInfo =
                serverInfo &&
                apiUrl.filter(
                  (compareServer) =>
                    compareServer.name === serverInfo.name &&
                    compareServer.region == serverInfo.region,
                )?.[0])
            ) {
              uniqueId78225.A.jMO(serverInfo);
              executeWithDu.BA.set(serverInfo.url);
            }
          }
          executeWithDu.b0.set(apiUrl.sort(this.hri));
          var p = Array(createExecutr.length);
          executeWithDu.AQ.set(null);
          var f = (0, r.Jt)(executeWithDu.b0).length;
          let conditionalGD = 0;
          while (conditionalGD < f) {
            var apiUrlGD = apiUrl[conditionalGD++];
            var executerKey = apiUrlGD.name
              .match(/(\'?\w+([-']\w+)*\'?)/)?.[0]
              .toLowerCase();
            var executerKey = createExecutr.indexOf(executerKey);
            if (!(executerKey < 0)) {
              let setApiUrlGD;
              (setApiUrlGD =
                executerKey in p ? p[executerKey] : (p[executerKey] = [])).push(
                apiUrlGD,
              );
            }
          }
          var _accessor = p
            .filter((ensureTruthy) => !!ensureTruthy)
            .map((updateOrInit, taskType) => {
              let oUpdate;
              if (
                (oUpdate = (0, r.Jt)(executeWithDu.oo)[taskType]) instanceof o.y
              ) {
                oUpdate.update(updateOrInit);
              } else {
                oUpdate = new o.y(updateOrInit);
              }
              return oUpdate;
            });
          var loadGameData = _accessor.findIndex(
            (isOvtMode) => isOvtMode.mode === "ovt",
          );
          if (loadGameData >= 0) {
            executeWithDu.AQ.set(_accessor[loadGameData]);
            _accessor.splice(loadGameData, 1);
          }
          executeWithDu.oo.set(_accessor);
          localStorage.setItem(l, c);
          return true;
        }
        join(removeMulti) {
          var singleItemPre = {
            first: true,
          };
          delete scopedAnon.A.FLt.OIw;
          delete scopedAnon.A.FLt.zGd;
          delete scopedAnon.A.FLt.Fcz;
          delete scopedAnon.A.FLt.uTX;
          delete scopedAnon.A.FLt.Jtp;
          scopedAnon.A.emit("tPqeFj", singleItemPre, removeMulti.url);
          if (!singleItemPre.wait) {
            localStorage.setItem("selectedServer", JSON.stringify(removeMulti));
            uniqueId78225.A.jMO({
              ...removeMulti,
            });
            scopedAnon.A.FLt.OIw = true;
            executeWithDu.BA.set(removeMulti.url);
            let filterAndSer = 1 + uniqueId78225.A.yNT;
            singleItemPre.promise.then((connectStatus) =>
              (0, n.$s)(
                0,
                "Connection attempt for tab " +
                  filterAndSer +
                  " was " +
                  (connectStatus ? "successful" : "unsuccessful"),
              ),
            );
          }
        }
      }
    },
    36391(VisibilityAnn, ____updateElement, addYProperty) {
      addYProperty.d(____updateElement, {
        y: () => VisibilityMgr,
      });
      var setYProperty = addYProperty(61416);
      var yAxisData = addYProperty(54603);
      class VisibilityMgr {
        constructor(framework) {
          this.visible = false;
          this.update(framework);
        }
        get wPu() {
          return this.servers.filter(
            (extractedReg) =>
              !(extractedReg = extractedReg.region
                ? extractedReg.region.toUpperCase()
                : (extractedReg = extractedReg.url
                      .toLowerCase()
                      .match(/game-([a-z]{2})/))
                  ? extractedReg[1].toUpperCase()
                  : "") || extractedReg === (0, yAxisData.Jt)(setYProperty.aK),
          );
        }
        update(setServerList) {
          if (setServerList.length > 0) {
            this.name = setServerList[0].name.match(
              /(\'?\w+([-']\w+)*\'?)/,
            )?.[0];
          } else {
            this.name = "N/A";
          }
          this.mode = this.name.toLowerCase();
          this.servers = setServerList;
        }
        add(addServer) {
          this.servers.push(addServer);
        }
        remove(removeServer) {
          if ((removeServer = this.servers.indexOf(removeServer)) >= 0) {
            this.servers.splice(removeServer, 1);
          }
        }
        wGF() {
          this.visible = !this.visible;
        }
      }
    },
    54659(addEventThose, unusedScript, unusedScripts) {
      unusedScripts.d(unusedScript, {
        H: () => _unusedEvent,
        R: () => levelUpgrades,
      });
      let levelUpgrades = [
        [4096, "level_100", "Level 100 reached"],
        [8192, "level_200", "Level 200 reached"],
        [16384, "level_300", "Level 300 reached"],
        [268435456, "slb_winner", "Topped season leaderboard"],
        [33554432, "server_booster", "Discord server booster"],
        [16777216, "place_contributor_2022", "r/place contributor (2022)"],
        [67108864, "place_contributor_2023", "r/place contributor (2023)"],
        [256, "youtuber", "YouTuber"],
        [1024, "editor", "Editor"],
        [8, "contributor", "Contributor"],
        [65536, "ffa_winner", "FFA tournament winner"],
        [131072, "instant_winner", "Instant tournament winner"],
        [262144, "gigasplit_winner", "Gigasplit tournament winner"],
        [524288, "megasplit_winner", "Megasplit tournament winner"],
        [1048576, "crazy_winner", "Crazy tournament winner"],
        [2097152, "self-feed_winner", "Self-feed tournament winner"],
        [16, "organizer", "Official tournament organizer"],
        [32, "referee", "Official tournament referee"],
        [4, "skin_mod", "Skin moderator"],
        [2, "mod", "Moderator"],
        [1, "admin", "Administrator"],
        [2147483648, "official", "Official message", true],
        [536870912, "system", "System message", true],
      ];
      let _unusedEvent = new Map([
        ["level_100", 4096],
        ["level_200", 8192],
        ["level_300", 16384],
        ["slb_winner", 268435456],
        ["server_booster", 33554432],
        ["place_contributor_2022", 16777216],
        ["place_contributor_2023", 67108864],
        ["youtuber", 256],
        ["editor", 1024],
        ["contributor", 8],
        ["ffa_winner", 65536],
        ["instant_winner", 131072],
        ["gigasplit_winner", 262144],
        ["megasplit_winner", 524288],
        ["crazy_winner", 1048576],
        ["self-feed_winner", 2097152],
        ["organizer", 16],
        ["referee", 32],
        ["skin_mod", 4],
        ["mod", 2],
        ["admin", 1],
        ["official", 2147483648],
        ["system", 536870912],
      ]);
    },
    28858(_________getUserData, isValidLogin, loginStatus) {
      loginStatus.d(isValidLogin, {
        S: () => __userInfo,
        W: () => _______________________________fetchUserData,
      });
      let _fetchUserInfo = loginStatus(54603);
      let _______________________________fetchUserData = (0, _fetchUserInfo.T5)(
        false,
      );
      let __userInfo = (0, _fetchUserInfo.T5)(false);
    },
    64127(initializeZ, zInitializer, dispatchT5For) {
      dispatchT5For.d(zInitializer, {
        z: () => dispatchedZ64,
      });
      let dispatchedZ64 = (0, dispatchT5For(54603).T5)(false);
    },
    35171(________transformData, SystemClockMn, _SystemClockMn) {
      _SystemClockMn.d(SystemClockMn, {
        $f: () => _________transformData,
        U_: () => _indexIter,
        nK: () => o,
        qo: () => ____________calculateSum,
        x4: () => n,
      });
      let systemClockMn = _SystemClockMn(38052);
      let ____________calculateSum = new systemClockMn.A(
        "clockTime",
        false,
        null,
      );
      let _indexIter = new systemClockMn.A("sessionTime", false, null);
      let n = new systemClockMn.A("restartTiming", false, null);
      let _________transformData = new systemClockMn.A("bTs", false, 0);
      let o = new systemClockMn.A("totalTagMass", false, 0);
    },
    36742(_initializeByF, eventSettings, ___eventConfig) {
      ___eventConfig.d(eventSettings, {
        E: () => ____eventConfig,
        b: () => eventSetting,
      });
      var eventSetting;
      var eventSettings = ___eventConfig(54603);
      (___eventConfig = eventSetting = eventSetting || {})[
        (___eventConfig.None = -1)
      ] = "None";
      ___eventConfig[(___eventConfig.Settings = 0)] = "Settings";
      ___eventConfig[(___eventConfig.Themes = 1)] = "Themes";
      ___eventConfig[(___eventConfig.Inputs = 2)] = "Inputs";
      ___eventConfig[(___eventConfig.Replays = 3)] = "Replays";
      ___eventConfig[(___eventConfig.Leaderboard = 4)] = "Leaderboard";
      let ____eventConfig = (0, eventSettings.T5)(eventSetting.None);
    },
    8125(initObject, _entity, methodFactory) {
      methodFactory.d(_entity, {
        m7: () => m7Processor,
        pB: () => _processor,
        qC: () => n,
        xR: () => o,
      });
      let method54603 = methodFactory(54603);
      let getEntity5460 = methodFactory(78225);
      let m7Processor = (0, method54603.T5)(true);
      let n = (0, method54603.T5)(true);
      let _processor = (0, method54603.T5)("");
      let o = (0, method54603.T5)(getEntity5460.A.yNT);
    },
    61416(__validateEmail, EmailValidity, parseEmail) {
      parseEmail.d(EmailValidity, {
        AQ: () => o,
        BA: () => r,
        aK: () => __arrayIndex,
        b0: () => emailIndex,
        oo: () => n,
        pc: () => l,
      });
      let emailDetails = parseEmail(14456);
      let _isValidInput = parseEmail(54603);
      let __arrayIndex = (0, _isValidInput.T5)("");
      let n = (0, _isValidInput.T5)([]);
      let emailIndex = (0, _isValidInput.T5)([]);
      let o = (0, _isValidInput.T5)(null);
      let r = (0, _isValidInput.T5)("");
      let l = new emailDetails.h();
    },
    54915(actionMapper, controlMap, keyToFunction) {
      keyToFunction.d(controlMap, {
        BW: () => handleBackKey,
        KP: () => navigatorKey,
        NC: () => ncHandler,
        Xt: () => handleXtKey,
        Yo: () => r,
        ZK: () => l,
        fN: () => o,
        fj: () => _keyActionMap,
        hU: () => __________________________________________index,
        hZ: () => c,
        rd: () => n,
        uU: () => mapActionTo,
      });
      let _actionMapper = keyToFunction(38052);
      let mapActionTo = new _actionMapper.A("fps", false, 0);
      let __________________________________________index = new _actionMapper.A(
        "ping",
        false,
        0,
      );
      let n = new _actionMapper.A("playerMass", false, "");
      let _keyActionMap = new _actionMapper.A("totalPlayerMass", false, "");
      let o = new _actionMapper.A("playerScore", false, "");
      let r = new _actionMapper.A("cellCount", false, 0);
      let l = new _actionMapper.A("latencyWarning", true, false);
      let c = new _actionMapper.A("triggerStatus", true, "");
      let navigatorKey = new _actionMapper.A("mouseFrozenFor", false, -1);
      let handleXtKey = new _actionMapper.A("movementStoppedFor", false, -1);
      let ncHandler = new _actionMapper.A("linesSlittingFor", false, -1);
      let handleBackKey = new _actionMapper.A("nerdStats", false, "");
    },
    38052(keyArg, __updateState, initStateWith) {
      initStateWith.d(__updateState, {
        A: () => __________initialState,
      });
      var _________initialState = initStateWith(54603);
      class __________initialState {
        constructor(_jqObj, ___________initialState, initializeSty) {
          this.value = (0, _________initialState.T5)();
          this.visible = (0, _________initialState.T5)();
          this.key = _jqObj;
          this.value = (0, _________initialState.T5)(initializeSty);
          this.visible = (0, _________initialState.T5)(___________initialState);
        }
        set(SharedBox) {
          this.value.set(SharedBox);
        }
        show() {
          this.visible.set(true);
        }
        hide() {
          this.visible.set(false);
        }
        get name() {
          return this.key;
        }
        subscribe(valueSubject) {
          return this.value.subscribe(valueSubject);
        }
      }
    },
    37921(setDefaultAnc, eventDefaults, defaultEventO) {
      defaultEventO.d(eventDefaults, {
        A: () => onJPH,
      });
      var defaultEvent8 = defaultEventO(83529);
      var defaultEvent7 = defaultEventO(78225);
      var defaultEvent = defaultEventO(15308);
      var n = defaultEventO(11029);
      var defaultEventR = defaultEventO(19437);
      defaultEventO(63836);
      var o = defaultEventO(24968);
      var r = defaultEventO(8125);
      var l = defaultEventO(33656);
      var c = defaultEventO(95654);
      var _eventDefaults = defaultEventO(4371);
      var eventDefaults = defaultEventO(22398);
      var fallbackEvent = defaultEventO(61036);
      var defaultEventS = defaultEventO(30847);
      var setDefaultEvt = defaultEventO(6883);
      var configureAndC = defaultEventO(37635);
      let m = new eventDefaults.A();
      class onJPH {
        set connected(setConnection) {
          this.uuS = setConnection;
          this.game.emit("jPH", this.context, setConnection);
        }
        get connected() {
          return this.uuS;
        }
        fyP(compareTagId) {
          return (
            (compareTagId = compareTagId || null) !== this.tagId &&
            ((this.tagId = compareTagId), true)
          );
        }
        constructor(______fetchData, _______eventDetails) {
          this.opened = false;
          this.uuS = false;
          this.pNb = 0;
          this.mtv = null;
          this.SiW = null;
          this.OqS = null;
          this.Iwi = 0;
          this.ping = new o.A();
          this.mouse = configureAndC.A.from(0, 0);
          this.SLg = 0;
          this.game = ______fetchData;
          this.context = _______eventDetails;
        }
        async init(_jqObject) {
          return Promise.resolve().then(() => true);
        }
        open(checkEventAnd, preventGamePv) {
          return new Promise(async (checkGameStop) => {
            if (this.game.running && !this.rSL.opened) {
              this.game.stop();
              defaultEvent7.A.yNT = this.context;
            }
            if (this.opened) {
              (0, defaultEvent.$s)(1, (0, l.Es)(1 + this.context));
              this.close();
            }
            if (
              !(await this.init(
                (this.OqS =
                  preventGamePv || checkEventAnd.replace("ws", "http")),
              ))
            ) {
              return checkGameStop(false);
            }
            this.mtv = checkEventAnd;
            this.opened = true;
            this.Xlu = checkGameStop;
            let isGameFinish = (this.ws = new _eventDefaults.A(
              checkEventAnd,
              "tFoL46WDlZuRja7W6qCl",
            ));
            isGameFinish.binaryType = "arraybuffer";
            isGameFinish.onopen = () => {
              if (!this.opened) {
                return checkGameStop(false);
              }
              (0, defaultEvent.me)((0, l.vL)(1 + this.context), 3);
              this.stk = this.pNb++;
              this.SiW = checkEventAnd;
              isGameFinish.onclose = this.pTl.bind(this);
            };
            isGameFinish.onclose = this.Ksg.bind(this);
            isGameFinish.onmessage = this.utE.bind(this);
          });
        }
        close() {
          var disconnectWeb = this.ws;
          if (disconnectWeb) {
            disconnectWeb.onmessage = null;
            disconnectWeb.onclose = null;
            disconnectWeb.onerror = null;
            disconnectWeb.close();
            delete this.ws;
            delete this.mtv;
            delete this.SiW;
            delete this.OqS;
            this.Iwi = 0;
            this.ping.reset();
            this.opened = this.connected = false;
            delete this.OIw;
            delete this.zGd;
            delete this.Fcz;
            delete this.uTX;
            delete this.VFc;
            if (this.cSq) {
              clearInterval(this.cSq);
              delete this.cSq;
            }
            if (this.xXM) {
              clearInterval(this.xXM);
              delete this.xXM;
            }
            delete this.tagId;
            if (this.SuG) {
              (0, defaultEventS.DJ)(this.SuG);
              delete this.SuG;
            }
            this.mouse.reset();
            if (this.rSL.connected) {
              this.game.oiz = 1;
            } else {
              this.game.oiz = 0;
            }
            this.SLg = 0;
          }
        }
        send(__________event) {
          var webSocket;
          if (__________event instanceof setDefaultEvt.A) {
            __________event = __________event.kpj();
          }
          return (
            !!this.opened &&
            ((webSocket = this.ws),
            (0, defaultEvent.X0)(
              webSocket instanceof _eventDefaults.A,
              "Socket not defined?",
            ),
            webSocket.send(__________event),
            true)
          );
        }
        pTl(GameContext) {
          delete this.stk;
          this.opened = this.connected = false;
          var currentPing = this.ping.current;
          this.close();
          this.Xlu?.(false);
          var _currentGame = this.game;
          if (_currentGame.running) {
            if (
              GameContext.code !== 1003 &&
              _currentGame.pEA(this.context == 0 ? 1 : 0)
            ) {
              _currentGame.bLD(this.context, true);
            } else {
              _currentGame.stop();
            }
          }
          let resetGameClos;
          if (GameContext.code === 1003) {
            resetGameClos = 1500 - currentPing;
            if (this.context === defaultEvent7.A.yNT) {
              (0, defaultEvent.me)(l.DY, 0, resetGameClos);
            }
          } else {
            resetGameClos = 3000 + ~~(fallbackEvent.yT() * 100);
            let n = (0, l.zw)(1 + this.context);
            if (typeof GameContext.reason == "string") {
              n += " (" + GameContext.reason + ")";
            }
            (0, defaultEvent.me)(n, 2, resetGameClos);
          }
          if (
            !_currentGame.pEA(this.context === 0 ? 1 : 0) &&
            !_currentGame.Xrx
          ) {
            _currentGame.FQe(true);
          }
          this.SuG = (0, defaultEventS.wg)(() => {
            if (
              !this.opened &&
              (!this.SiW || this.SiW === defaultEvent7.A.vSE)
            ) {
              (0, defaultEvent.me)((0, l.Nr)(1 + this.context));
              if (defaultEvent7.A.vSE) {
                this.open(defaultEvent7.A.vSE, this.OqS);
              }
            }
          }, resetGameClos);
        }
        Ksg() {
          delete this.stk;
          ((this.opened = this.connected = false), defaultEvent.me)(
            (0, l.Yf)(1 + this.context),
            2,
          );
          this.Xlu?.(false);
        }
        SGD(_eventRef) {
          let gameInteract = this.game;
          if (this.rSL.connected) {
            this.game.oiz = 2;
          } else {
            this.game.oiz = 1;
          }
          _eventRef = (0, n.O4)(_eventRef);
          let _defaultEvent = (defaultEvent7.A.pids[this.context] =
            _eventRef.lrL);
          if (this.context === defaultEvent7.A.yNT) {
            this.game.emit("cjyapb", l.zh);
          }
          this.cSq = (0, defaultEventS.yb)(() => {
            var variableRef;
            if (!this.opened) {
              clearInterval(this.cSq);
              delete this.cSq;
            }
            if (gameInteract.FCi.has(_defaultEvent)) {
              clearInterval(this.cSq);
              delete this.cSq;
              (variableRef = gameInteract.FCi.get(_defaultEvent)).isMe = true;
              gameInteract.emit("kIoddg", _defaultEvent);
              gameInteract.emit(
                "VAEhBF",
                _defaultEvent,
                variableRef.name,
                variableRef.hWu,
                variableRef.hWu,
              );
              gameInteract.FCi.ytA(this.context, variableRef);
              if (this.context !== defaultEvent7.A.yNT) {
                gameInteract.jWf(this.context, defaultEvent7.A.yNT);
              } else {
                gameInteract.jWf(
                  defaultEvent7.A.yNT === 0 ? 1 : 0,
                  defaultEvent7.A.yNT,
                );
              }
            }
          }, 16);
          if (!gameInteract.running) {
            gameInteract.start(_eventRef);
          }
          this.xXM = (0, defaultEventS.yb)(() => {
            var isCursorPause;
            if (this.connected) {
              if ((isCursorPause = this.mouse).centralize) {
                this.rHk(9);
              } else if (!isCursorPause.pause) {
                this.CiT();
              }
            }
          }, 25);
          this.VFc = performance.now();
          (0, defaultEventS.wg)(
            () => {
              if (!gameInteract.ycZ(this.context)) {
                if (this.uTX != null) {
                  defaultEvent7.A.yNT = this.context;
                  defaultEvent8.A.set("activeTabContext", this.context);
                  delete this.uTX;
                } else if (this.Jtp != null) {
                  if (this.SiW != null) {
                    this.rSL.open(this.SiW);
                  }
                  delete this.Jtp;
                }
                let contextInfo = false;
                if (this.Fcz != null) {
                  this.NTE();
                  delete this.Fcz;
                  contextInfo = true;
                } else if (this.zGd != null) {
                  gameInteract.kmM.Xiy(null, null, this.context);
                  delete this.zGd;
                  contextInfo = true;
                } else if (this.OIw != null) {
                  gameInteract.kmM.Xiy(null, null, this.context);
                  gameInteract.Cwd = 0.04;
                  delete this.OIw;
                }
                if (contextInfo) {
                  gameInteract.FQe(false);
                }
              }
            },
            30 + ~~(fallbackEvent.yT() * 30),
          );
          this.connected = true;
          this.Xlu?.(true);
        }
        gtu(standardEvent) {
          standardEvent = new defaultEventS.SE(standardEvent.buffer, 1);
          this.yJs(new c.A(standardEvent).mQJ());
        }
        IWf() {
          var selfInvoker = this.game;
          var timeDifferenc = fallbackEvent.LI(performance.now() - this.Iwi);
          this.ping.update(timeDifferenc);
          if (this.bjN) {
            selfInvoker.emit("EMciAd", timeDifferenc);
          }
        }
        sYi(removeManaged) {
          var cleansedItem;
          var gameRef = this.game;
          if (this.bjN) {
            while ((cleansedItem = removeManaged.wVa()) !== 0) {
              gameRef.FCi.remove(cleansedItem, true);
            }
          }
        }
        ttk(gameConfig) {
          var _configOptions;
          var _gameConfig;
          var __gameInstance = this.game;
          if (
            this.bjN &&
            ((_configOptions = gameConfig.dsR()) & 1 &&
              __gameInstance.FCi.get((_gameConfig = gameConfig.wVa()))?.AcX(
                true,
              ),
            _configOptions & 2)
          ) {
            __gameInstance.FCi.get((_gameConfig = gameConfig.wVa()))?.AcX(
              false,
            );
          }
        }
        hWn(hasEventsToE2) {
          var gameContext = this.game;
          gameContext.hYE[this.context] = performance.now();
          gameContext.GAB = performance.now();
          var [hasEventsToE2, _defaultEventR] = (0, defaultEventR.f)(
            hasEventsToE2,
            this.context,
          );
          var hasEventsToE2 =
            (gameContext.TRu[this.context] = hasEventsToE2) != 0;
          gameContext.DMs(this.context, hasEventsToE2);
          if (hasEventsToE2) {
            gameContext.fwE(this.context, false);
            gameContext.scores[this.context] = _defaultEventR;
            gameContext.xmF[this.context] = fallbackEvent.T9(
              _defaultEventR,
              gameContext.xmF[this.context],
            );
            if (defaultEvent7.A.zCS[this.context]) {
              gameContext.triggerAutoRespawn(this.context);
              delete this.VjJ;
            }
          } else if (
            defaultEvent7.A.zCS[this.context] &&
            ++gameContext.gFX[this.context] == this.VjJ
          ) {
            gameContext.triggerAutoRespawn(this.context);
            delete this.VjJ;
          }
          if (this.bjN) {
            gameContext.KRz++;
            gameContext.pWR(true);
            gameContext.FCi.rvD();
          }
        }
        GZq(uniqueIdWelCm) {
          var __currentGame = this.game;
          var uniqueIdWelCm = {
            pid: uniqueIdWelCm.wVa(),
            text: uniqueIdWelCm.mIn(),
          };
          if (uniqueIdWelCm.pid === 0) {
            if (this.context === defaultEvent7.A.yNT) {
              if (/Welcome to Vanis\.io,.+\!/.test(uniqueIdWelCm.text)) {
                let _selectedServe = l.Dk;
                var commaIndex;
                var n = defaultEvent7.A.selectedServer;
                if (n) {
                  _selectedServe = n.region + " " + n.name;
                } else if (
                  (n = uniqueIdWelCm.text.indexOf(",")) >= 0 &&
                  (commaIndex = uniqueIdWelCm.text.indexOf("!", (n += 2))) >= 0
                ) {
                  _selectedServe = uniqueIdWelCm.text.substring(n, commaIndex);
                }
                uniqueIdWelCm.text = (0, l.f9)(_selectedServe);
              } else if (/Server restart.+/.test(uniqueIdWelCm.text)) {
                (0, defaultEvent.me)(uniqueIdWelCm.text, 1000);
                return;
              }
              this.game.emit("QsoZPW", uniqueIdWelCm.text);
            }
          } else if (
            !(__currentGame.oiz > 1) ||
            this.tagId !== this.rSL.tagId ||
            this.context === defaultEvent7.A.yNT
          ) {
            if (__currentGame.FCi.has(uniqueIdWelCm.pid)) {
              n = __currentGame.FCi.get(uniqueIdWelCm.pid);
              uniqueIdWelCm.DvN = PIXI.utils.hex2string(n.ppI);
              if (__currentGame.oiz > 1 && this.tagId !== this.rSL.tagId) {
                uniqueIdWelCm.ePG = this.context;
              }
              uniqueIdWelCm.from = n.name;
              if (n.TIJ) {
                uniqueIdWelCm.Yqh = n.TIJ;
              }
              if (n.jqz) {
                uniqueIdWelCm.badges = n.jqz;
              }
              this.game.emit("NExDkf", uniqueIdWelCm);
            }
          }
        }
        utE(getNextEvent) {
          var eventWithEnh = setDefaultEvt.A.nVI(getNextEvent.data);
          eventWithEnh.id = ++this.SLg;
          var ___currentGame = this.game;
          switch (eventWithEnh.dsR()) {
            case 1:
              return this.SGD(eventWithEnh);
            case 2:
              return this.gtu(eventWithEnh);
            case 3:
              return this.IWf();
            case 4:
              return this.sYi(eventWithEnh);
            case 6:
              return this.rHk(6);
            case 7:
              return this.ttk(eventWithEnh);
            case 10:
              return this.hWn(eventWithEnh);
            case 11:
              if (this.bjN) {
                return (0, n.Zj)(eventWithEnh);
              } else {
                return undefined;
              }
            case 12:
              if (
                !this.bjN &&
                ___currentGame.oiz > 1 &&
                this.rSL.tagId == this.tagId
              ) {
                return undefined;
              } else {
                return (0, n.RP)(eventWithEnh, this.context);
              }
            case 13:
              return this.GZq(eventWithEnh);
            case 16:
              return (0, n.ci)(eventWithEnh);
            case 17:
              if (this.bjN) {
                ___currentGame.camera.IFG[this.context].set(
                  eventWithEnh.Nhb(1, true),
                );
                return;
              } else {
                return undefined;
              }
            case 18:
              return ___currentGame.bLD(this.context);
            case 19:
              var ____processEvent = eventWithEnh.dsR() !== 0;
              ___currentGame.emit("AFHIfE", eventWithEnh.uDd());
              if (____processEvent) {
                ____processEvent = eventWithEnh.wVa();
                (0, defaultEvent.me)((0, l.e_)(____processEvent), 3, 3000);
                return;
              } else {
                return undefined;
              }
            case 20:
              if (defaultEvent8.A.get("autoRespawn") && !this.game.Xrx) {
                defaultEvent7.A.zCS[this.context] = true;
                if (performance.now() - this.VFc <= 30000) {
                  this.VjJ = 37;
                } else {
                  this.VFc = performance.now();
                  this.VjJ = 86;
                }
                ___currentGame.gFX[this.context] = 0;
              } else {
                ___currentGame.xCd[this.context] = (0, defaultEventS.wg)(
                  ___currentGame.AUn.bind(___currentGame, this.context),
                  900,
                );
              }
              return;
            case 22:
              if ("grecaptcha" in window) {
                m.request(this);
                return;
              } else {
                alert(l.EP);
                return;
              }
            case 23:
              defaultEvent7.A.VqP[this.context] = eventWithEnh.wVa();
              return;
            case 24:
              if (this.bjN) {
                ___currentGame.KRz = eventWithEnh.uDd();
                ___currentGame.emit("NZB", eventWithEnh.uDd());
                return;
              } else {
                return undefined;
              }
            case 26:
              r.qC.set(!eventWithEnh.dsR());
              if (eventWithEnh.length > eventWithEnh.offset + 1) {
                r.pB.set(eventWithEnh.zWb() || (0, l.Rr)(1 + this.context));
              }
              return;
            case 28:
              if (this.bjN) {
                return (0, n.Py)(eventWithEnh);
              } else {
                return undefined;
              }
          }
        }
        yJs(_fetchTokens) {
          var useVanity =
            "ignoreToken" in defaultEventO.g ||
            !/^wss?:\/\/[a-zA-Z0-9_-]+\.vanis\.io/i.test(this.SiW)
              ? null
              : localStorage.vanisToken;
          let setDefaultAt2 = setDefaultEvt.A.ZiI(
            2 +
              _fetchTokens.length +
              (typeof useVanity == "string" ? useVanity.length : 0),
          );
          setDefaultAt2.hKc(5);
          setDefaultAt2.hKc(this.game.zfx);
          _fetchTokens.forEach((initializeOrG) =>
            setDefaultAt2.hKc(initializeOrG),
          );
          (0, defaultEvent.hJ)(setDefaultAt2, this.context);
          if (typeof useVanity == "string") {
            setDefaultAt2.qBs(useVanity);
          }
          this.send(setDefaultAt2);
        }
        CiT() {
          var ___EventHandler;
          var defaultEventX;
          var triggerEventX;
          if (this.connected) {
            ({ x: defaultEventX, y: triggerEventX } =
              ((___EventHandler = setDefaultEvt.A.ZiI(5)).hKc(16), this.mouse));
            ___EventHandler.Ylk(defaultEventX);
            ___EventHandler.Ylk(triggerEventX);
            this.send(___EventHandler);
          }
        }
        rHk(___eventContext) {
          var __defaultEvent = setDefaultEvt.A.ZiI(1);
          __defaultEvent.hKc(___eventContext);
          this.send(__defaultEvent);
        }
        BtR() {
          var setDefaultEvT = setDefaultEvt.A.ZiI(1);
          setDefaultEvT.hKc(3);
          var sendStartTime = performance.now();
          this.send(setDefaultEvT);
          var setDefaultEvT = performance.now() - sendStartTime;
          if (setDefaultEvT != 0) {
            return sendStartTime + setDefaultEvT;
          } else {
            return sendStartTime;
          }
        }
        mKa(eventCreator) {
          var ___defaultEvent;
          if (typeof eventCreator == "string") {
            (___defaultEvent = setDefaultEvt.A.ZiI(
              1 + (eventCreator.length + 1),
            )).hKc(11);
            ___defaultEvent.qBs(eventCreator);
            this.send(___defaultEvent);
          }
        }
        uot(urlEncodedUrl) {
          urlEncodedUrl = (0, defaultEventS.x4)(
            encodeURIComponent(urlEncodedUrl),
          );
          var urlEncodedEvt = setDefaultEvt.A.ZiI(1 + urlEncodedUrl.length);
          urlEncodedEvt.hKc(99);
          urlEncodedEvt.zlO(urlEncodedUrl);
          this.send(urlEncodedEvt);
        }
        adz(_conditionalHo) {
          var ____defaultEvent = setDefaultEvt.A.ZiI(
            _conditionalHo != null ? 3 : 1,
          );
          ____defaultEvent.hKc(2);
          if (typeof _conditionalHo == "number") {
            ____defaultEvent.Ylk(_conditionalHo);
          }
          this.send(____defaultEvent);
        }
        NTE() {
          this.VFc = performance.now();
          var defaultAsyncW = setDefaultEvt.A.ZiI(1);
          defaultAsyncW.hKc(1);
          (0, defaultEvent.hJ)(defaultAsyncW, this.context);
          this.send(defaultAsyncW);
        }
        DQA() {
          this.rHk(10);
        }
        jjW(_eventType) {
          var hasEventArgs = arguments.length !== 0;
          var ____________eventData = setDefaultEvt.A.ZiI(hasEventArgs ? 2 : 1);
          ____________eventData.hKc(21);
          if (hasEventArgs) {
            ____________eventData.hKc(+_eventType);
          }
          this.send(____________eventData);
        }
        JOy(onHKcEvent) {
          var modifiedEvent = setDefaultEvt.A.ZiI(2);
          modifiedEvent.hKc(17);
          modifiedEvent.hKc(onHKcEvent);
          this.send(modifiedEvent);
        }
        get bjN() {
          return (
            this.context === defaultEvent7.A.yNT ||
            !this.game.pEA(defaultEvent7.A.yNT)
          );
        }
        get rSL() {
          return this.game.eWI[this.context == 0 ? 1 : 0];
        }
      }
    },
    6883(getInt8, getByte, _______fetchData) {
      _______fetchData.d(getByte, {
        A: () => OffsetManager,
      });
      var dataItem74173 = _______fetchData(74173);
      var ________fetchData = _______fetchData(72511);
      var fetchIndexed = _______fetchData(30847);
      let n = {
        i8: fetchIndexed.U$.prototype.getInt8,
        u8: fetchIndexed.U$.prototype.getUint8,
        i16: fetchIndexed.U$.prototype.getInt16,
        u16: fetchIndexed.U$.prototype.getUint16,
        i32: fetchIndexed.U$.prototype.getInt32,
        u32: fetchIndexed.U$.prototype.getUint32,
      };
      let dataFetcher = {
        i8: fetchIndexed.U$.prototype.setInt8,
        u8: fetchIndexed.U$.prototype.setUint8,
        i16: fetchIndexed.U$.prototype.setInt16,
        u16: fetchIndexed.U$.prototype.setUint16,
        i32: fetchIndexed.U$.prototype.setInt32,
        u32: fetchIndexed.U$.prototype.setUint32,
      };
      let o = (
        selfRefPosGet,
        _selfRefPosGet,
        __selfRefPosGet,
        depthTracker,
        selfReference,
      ) => {
        if (typeof selfReference != "number") {
          selfReference = selfRefPosGet.offset;
          selfRefPosGet.offset += __selfRefPosGet;
        }
        return _selfRefPosGet.call(
          selfRefPosGet.view,
          selfReference,
          depthTracker,
        );
      };
      let r = (
        contextScope,
        executeInView,
        displayItemIn,
        rowLimit,
        _______iterator,
        rowIndex,
      ) => {
        l(contextScope, rowLimit);
        if (typeof rowIndex != "number") {
          rowIndex = contextScope.offset;
          contextScope.offset += rowLimit;
        }
        executeInView.call(
          contextScope.view,
          rowIndex,
          displayItemIn,
          _______iterator,
        );
      };
      let l = (elementOffset, indexAdjuster) => {
        var indexAdjuster = elementOffset.offset + indexAdjuster;
        if (indexAdjuster > elementOffset.length) {
          indexAdjuster = new fetchIndexed.Az(indexAdjuster);
          new fetchIndexed.SE(indexAdjuster).set(
            new fetchIndexed.SE(elementOffset.kpj()),
          );
          elementOffset.view = new fetchIndexed.U$(indexAdjuster);
        }
      };
      let c = {
        utf8(stringToUtf8, startPosition, __isFalse = false) {
          var stringLength = stringToUtf8.length;
          let _startIndex =
            typeof startPosition == "number"
              ? startPosition
              : stringToUtf8.offset;
          let skipEncodedIf = "";
          for (; _startIndex < stringLength; _startIndex++) {
            var o = n.u8.call(stringToUtf8.view, _startIndex);
            if (__isFalse && o === 0) {
              if (typeof startPosition != "number") {
                stringToUtf8.offset = _startIndex + 1;
              }
              return skipEncodedIf;
            }
            skipEncodedIf += ________fetchData.QV(o);
          }
          return skipEncodedIf;
        },
        utf16(processUtf16, startOffset, ____________initialState = false) {
          var utf16CharsToE = processUtf16.length;
          let utf16Starting =
            typeof startOffset == "number" ? startOffset : processUtf16.offset;
          let _processUtf16 = "";
          for (; utf16Starting < utf16CharsToE - 1; utf16Starting += 2) {
            var o = n.u16.call(processUtf16.view, utf16Starting);
            if (____________initialState && o === 0) {
              if (typeof startOffset != "number") {
                processUtf16.offset = utf16Starting + 2;
              }
              return _processUtf16;
            }
            _processUtf16 += ________fetchData.QV(o);
          }
          return _processUtf16;
        },
      };
      let memoryDataRet = {
        utf8(dataView, dataViewUTF8, backupLength) {
          var utf8Character = dataViewUTF8.length;
          l(dataView, utf8Character);
          if (typeof backupLength != "number") {
            backupLength = dataView.offset;
            dataView.offset += utf8Character;
          }
          for (
            let utf8CharCount = 0;
            utf8CharCount < utf8Character;
            utf8CharCount++
          ) {
            dataFetcher.u8.call(
              dataView.view,
              backupLength + utf8CharCount,
              dataViewUTF8.charCodeAt(utf8CharCount),
            );
          }
        },
        utf16(stringBuffer, utf16Encode, defaultIndex) {
          var utf16Length = utf16Encode.length;
          l(stringBuffer, utf16Length * 2);
          if (typeof defaultIndex != "number") {
            defaultIndex = stringBuffer.offset;
            stringBuffer.offset += utf16Length * 2;
          }
          for (let utf16Index = 0; utf16Index < utf16Length; utf16Index++) {
            dataFetcher.u16.call(
              stringBuffer.view,
              defaultIndex + utf16Index * 2,
              utf16Encode.charCodeAt(utf16Index),
            );
          }
        },
      };
      class OffsetManager {
        constructor(fetchedIndex, __constructor) {
          this.offset = 0;
          if (fetchedIndex instanceof fetchIndexed.U$) {
            this.view = fetchedIndex;
          } else {
            if (!(fetchedIndex instanceof fetchIndexed.Az)) {
              throw TypeError(
                "First argument to SmartBuffer constructor must be an ArrayBuffer or DataView",
              );
            }
            this.view = new fetchIndexed.U$(fetchedIndex);
          }
          if (typeof __constructor == "number") {
            this.offset = __constructor;
          }
        }
        static ZiI(_fetchIndexed) {
          return new this(new fetchIndexed.Az(_fetchIndexed), 0);
        }
        static nVI(selfCloneVI, _initEvent) {
          return new this(selfCloneVI, _initEvent);
        }
        get buffer() {
          var viewAccess = this.view;
          if (viewAccess != null) {
            return viewAccess.buffer;
          } else {
            return null;
          }
        }
        kpj() {
          return this.buffer;
        }
        get length() {
          var isEmptyView = this.view;
          if (isEmptyView != null) {
            return isEmptyView.byteLength;
          } else {
            return 0;
          }
        }
        get eof() {
          return this.offset >= this.length;
        }
        now(callbackWithN) {
          return o(this, n.i8, 1, undefined, callbackWithN);
        }
        dsR(dataSourceRet) {
          return o(this, n.u8, 1, undefined, dataSourceRet);
        }
        DfC(dataOrObj) {
          return o(this, n.i16, 2, true, dataOrObj);
        }
        sdq(valueHolder) {
          return o(this, n.i16, 2, false, valueHolder);
        }
        wVa(_unknownValue) {
          return o(this, n.u16, 2, true, _unknownValue);
        }
        jPk(_______________________________placeholder) {
          return o(
            this,
            n.u16,
            2,
            false,
            _______________________________placeholder,
          );
        }
        tMN(_____selector) {
          return o(this, n.i32, 4, true, _____selector);
        }
        Yqj(_uniqueId) {
          return o(this, n.i32, 4, false, _uniqueId);
        }
        uDd(________________________________placeholder) {
          return o(
            this,
            n.u32,
            4,
            true,
            ________________________________placeholder,
          );
        }
        DHr(__________processData) {
          return o(this, n.u32, 4, false, __________processData);
        }
        Nhb(validateAndAd, offsetAnchor) {
          if (typeof validateAndAd != "number") {
            validateAndAd = this.offset;
            this.offset += 4;
          }
          return dataItem74173.A.from(
            n.i16.call(this.view, validateAndAd, offsetAnchor),
            n.i16.call(this.view, validateAndAd + 2, offsetAnchor),
          );
        }
        gEZ(encodingType = "utf8", ErrorHandler) {
          return c[encodingType](this, ErrorHandler, false);
        }
        zWb(_encodingType = "utf8", encodeWithEnc) {
          return c[_encodingType](this, encodeWithEnc, true);
        }
        mIn(textEncoding = "utf8", encodedText) {
          return (0, fetchIndexed.IU)(
            (0, fetchIndexed.ih)(this.zWb(textEncoding, encodedText)),
          );
        }
        GhR(___________context, processError) {
          r(
            this,
            dataFetcher.i8,
            ___________context,
            1,
            undefined,
            processError,
          );
        }
        hKc(_contextualGet, __contextualGet) {
          r(
            this,
            dataFetcher.u8,
            _contextualGet,
            1,
            undefined,
            __contextualGet,
          );
        }
        Ylk(_________fetchData, errCallback) {
          r(this, dataFetcher.i16, _________fetchData, 2, true, errCallback);
        }
        Kyd(__________fetchData, _ErrorHandler) {
          r(
            this,
            dataFetcher.i16,
            __________fetchData,
            2,
            false,
            _ErrorHandler,
          );
        }
        drz(paramArray, fetchDataWith) {
          r(this, dataFetcher.u16, paramArray, 2, true, fetchDataWith);
        }
        xiT(_____additionalArg, onFetchData) {
          r(this, dataFetcher.u16, _____additionalArg, 2, false, onFetchData);
        }
        CXO(resourceFetch, ____errorHandler) {
          r(this, dataFetcher.i32, resourceFetch, 4, true, ____errorHandler);
        }
        xNc(____________context, _____processEvent) {
          r(
            this,
            dataFetcher.i32,
            ____________context,
            4,
            false,
            _____processEvent,
          );
        }
        NsC(_requestData, _fetchDataWith) {
          r(this, dataFetcher.u32, _requestData, 4, true, _fetchDataWith);
        }
        BoJ(onDataFetched, __fetchDataWith) {
          r(this, dataFetcher.u32, onDataFetched, 4, false, __fetchDataWith);
        }
        zlO(_memoryDataRet, __encodingType = "utf8", __dataProvider) {
          memoryDataRet[__encodingType](this, _memoryDataRet, __dataProvider);
        }
        qBs(encodeAndPrep, UTF8Encoding = "utf8", encodingInfo) {
          memoryDataRet[UTF8Encoding](this, encodeAndPrep, encodingInfo);
          if (UTF8Encoding === "utf8") {
            this.hKc(0);
          } else {
            this.drz(0);
          }
        }
        KrG(sendEncodedUr, utf8Encoding = "utf8", encodedURL) {
          this.zlO(
            (0, fetchIndexed.x4)((0, fetchIndexed.OH)(sendEncodedUr)),
            utf8Encoding,
            encodedURL,
          );
        }
        Tea(__fetchIndexed, _utf8Encoding = "utf8", fetchDecoded) {
          this.qBs(
            (0, fetchIndexed.x4)((0, fetchIndexed.OH)(__fetchIndexed)),
            _utf8Encoding,
            fetchDecoded,
          );
        }
      }
    },
    11029(
      _configInitial,
      ___________________________________eventHandler,
      _eventHandlers,
    ) {
      _eventHandlers.d(___________________________________eventHandler, {
        O4: () => o,
        Py: () => c,
        RP: () => eventMapping,
        Zj: () => l,
        ci: () => r,
      });
      var ____________________________________eventHandler =
        _eventHandlers(95195);
      var stateChange = _eventHandlers(78225);
      var addEventList = _eventHandlers(41958);
      var n = _eventHandlers(53278);
      var eventActionBt = _eventHandlers(83529);
      let o = (_______initializeAnd) => {
        var unusedVar;
        var emptyData;
        var initializeUnw;
        var styleConfig = {};
        var styleConfigBG = (styleConfig.border = {});
        var n = (styleConfig.sizes = {
          zVF: 0,
          wEA: 0,
          MgU: 1,
          eyl: 1,
          zYf: 2,
        });
        styleConfig.protocol = _______initializeAnd.dsR();
        if (styleConfig.protocol >= 4) {
          styleConfig.PHu = _______initializeAnd.dsR();
          styleConfig.MXg = _______initializeAnd.wVa();
          styleConfig.lrL = _______initializeAnd.wVa();
          styleConfigBG.minx = _______initializeAnd.DfC();
          styleConfigBG.miny = _______initializeAnd.DfC();
          styleConfigBG.maxx = _______initializeAnd.DfC();
          styleConfigBG.maxy = _______initializeAnd.DfC();
          unusedVar = _______initializeAnd.dsR();
          styleConfigBG.circle = !!(unusedVar & 1);
          if (unusedVar & 2) {
            emptyData = n.zVF = _______initializeAnd.wVa();
            initializeUnw = n.wEA = _______initializeAnd.wVa();
            n.MgU = initializeUnw - emptyData;
          }
          if (unusedVar & 4) {
            n.zYf = (n.eyl = _______initializeAnd.wVa()) * 2;
          }
          styleConfigBG.width = styleConfigBG.maxx - styleConfigBG.minx;
          styleConfigBG.height = styleConfigBG.maxy - styleConfigBG.miny;
        } else {
          if (styleConfig.protocol >= 2) {
            styleConfig.PHu = _______initializeAnd.dsR();
            styleConfig.MXg = _______initializeAnd.wVa();
            styleConfig.lrL = _______initializeAnd.wVa();
            styleConfigBG.width = _______initializeAnd.uDd();
            styleConfigBG.height = _______initializeAnd.uDd();
          } else {
            styleConfig.PHu = 1;
            styleConfig.MXg = _______initializeAnd.DfC();
            styleConfig.lrL = _______initializeAnd.DfC();
            initializeUnw = _______initializeAnd.wVa();
            styleConfigBG.width = initializeUnw;
            styleConfigBG.height = initializeUnw;
          }
          styleConfigBG.minx = -styleConfigBG.width / 2;
          styleConfigBG.miny = -styleConfigBG.height / 2;
          styleConfigBG.maxx = +styleConfigBG.width / 2;
          styleConfigBG.maxy = +styleConfigBG.height / 2;
        }
        styleConfigBG.x = (styleConfigBG.minx + styleConfigBG.maxx) / 2;
        styleConfigBG.y = (styleConfigBG.miny + styleConfigBG.maxy) / 2;
        return styleConfig;
      };
      let r = (_parsedData) => {
        _parsedData = JSON.parse(_parsedData.mIn());
        let changeCount = -1;
        let processInfo;
        for (processInfo of _parsedData) {
          var n = stateChange.A.pids.indexOf(processInfo.pid);
          if (!(n < 0)) {
            if (
              ____________________________________eventHandler.A.eWI[n].fyP(
                processInfo.tagId,
              )
            ) {
              if (changeCount === -1) {
                changeCount = n;
              } else {
                changeCount = 2;
              }
            }
          }
        }
        let findElementBy = new Set();
        let o = new Set();
        _parsedData.forEach(
          (_____________________________________eventHandler) => {
            ((_____________________________________eventHandler =
              ____________________________________eventHandler.A.FCi.RRW(
                _____________________________________eventHandler,
              )) instanceof addEventList.A
              ? findElementBy
              : o
            ).add(_____________________________________eventHandler);
          },
        );
        if (changeCount !== -1) {
          if (changeCount >= 0) {
            if (changeCount === 2) {
              for (let r = 0; r < 2; r++) {
                ____________________________________eventHandler.A.emit(
                  "UrkjyI",
                  [],
                  r,
                );
              }
            } else {
              ____________________________________eventHandler.A.emit(
                "UrkjyI",
                [],
                changeCount,
              );
            }
          }
          ____________________________________eventHandler.A.FCi.AaG(
            findElementBy,
            o,
          );
        }
      };
      let l = (getCurrencyTx) => {
        var TransactionCs = [];
        for (;;) {
          var transformedCo;
          var currencyTx = getCurrencyTx.wVa();
          if (currencyTx === 0) {
            ____________________________________eventHandler.A.emit(
              "OyTJwL",
              TransactionCs,
            );
            return;
          }
          if (
            ____________________________________eventHandler.A.FCi.has(
              currencyTx,
            )
          ) {
            if (
              !(
                (transformedCo =
                  ____________________________________eventHandler.A.FCi.get(
                    currencyTx,
                  )) instanceof n.A
              ) ||
              !eventActionBt.A.get("excludeBotsOnLeaderboard")
            ) {
              currencyTx = {
                pid: currencyTx,
                position: TransactionCs.length + 1,
                text: transformedCo.name,
              };
              if (transformedCo instanceof n.A) {
                currencyTx.color = "#ffffff";
                currencyTx.bold = false;
              } else {
                currencyTx.color = transformedCo.TIJ || "#ffffff";
                currencyTx.bold = !!transformedCo.hWu;
                currencyTx.badges = transformedCo.jqz;
              }
              TransactionCs.push(currencyTx);
            }
          }
        }
      };
      let c = (checkZeroRetr) => {
        var eventQueue = [];
        for (;;) {
          var isEmptyQueue = checkZeroRetr.dsR();
          if (isEmptyQueue === 0) {
            ____________________________________eventHandler.A.emit(
              "OyTJwL",
              eventQueue,
            );
            return;
          }
          var _______initialize;
          var ___________________________________________index = {};
          if (isEmptyQueue & 1) {
            ___________________________________________index.position =
              checkZeroRetr.dsR();
          }
          if (isEmptyQueue & 2) {
            ___________________________________________index.pid =
              checkZeroRetr.wVa();
          }
          if (isEmptyQueue & 4) {
            ___________________________________________index.text =
              checkZeroRetr.mIn();
            ___________________________________________index.color = "#ffffff";
          } else {
            _______initialize =
              isEmptyQueue & 2 &&
              ____________________________________eventHandler.A.FCi.vrx(
                ___________________________________________index.pid,
              );
            if (_______initialize) {
              ___________________________________________index.text =
                _______initialize.name;
            } else {
              ___________________________________________index.text = "n/a";
            }
            ___________________________________________index.color =
              (_______initialize && _______initialize.TIJ) || "#ffffff";
          }
          if (isEmptyQueue & 8) {
            ___________________________________________index.score =
              checkZeroRetr.mIn();
          }
          if (isEmptyQueue & 16) {
            ___________________________________________index.color =
              "#" +
              ("00" + checkZeroRetr.dsR().toString(16)).slice(-2) +
              ("00" + checkZeroRetr.dsR().toString(16)).slice(-2) +
              ("00" + checkZeroRetr.dsR().toString(16)).slice(-2);
          }
          if (isEmptyQueue & 32) {
            ___________________________________________index.bold = true;
          }
          if (isEmptyQueue & 64) {
            ___________________________________________index.link =
              checkZeroRetr.mIn();
          }
          eventQueue.push(___________________________________________index);
        }
      };
      let eventMapping = (obj, __eventRef) => {
        var collectUntilE = [];
        for (;;) {
          var isItemLeftInW = obj.wVa();
          if (isItemLeftInW === 0) {
            ____________________________________eventHandler.A.emit(
              "UrkjyI",
              collectUntilE,
              __eventRef,
            );
            stateChange.A.OcY[__eventRef] = obj.uDd();
            return;
          }
          obj.offset++;
          var n = obj.dsR();
          var conditionalEm = obj.dsR();
          collectUntilE.push({
            pid: isItemLeftInW,
            x: n / 255,
            y: conditionalEm / 255,
          });
        }
      };
    },
    22398(handleUserAud, auditEvent, manageUserAud) {
      manageUserAud.d(auditEvent, {
        A: () => SComponent,
      });
      manageUserAud(15308);
      let unusedX;
      class SComponent {
        handle(_executeTask) {
          this.hide();
          this.FLt.mKa(_executeTask);
          delete this.FLt;
        }
        request(captchaVerify) {
          if (this.container == null) {
            this.container = document.querySelector(".captcha-container");
          }
          this.visible = true;
          this.FLt = captchaVerify;
          grecaptcha.ready(() => {
            if (typeof unusedX == "number") {
              grecaptcha.reset(unusedX);
            } else {
              unusedX = grecaptcha.render(this.container, {
                sitekey: "6LfN7J4aAAAAAPN5k5E2fltSX2PADEyYq6j1WFMi",
                callback: this.handle.bind(this),
              });
            }
          });
        }
        set visible(visibility) {
          if (visibility) {
            this.container.style.display = "";
          } else {
            this.container.style.display = "none";
          }
        }
        show() {
          this.visible = true;
        }
        hide() {
          this.visible = false;
        }
      }
    },
    30847(commonOps, uiElementOper, uiOperations) {
      uiOperations.d(uiElementOper, {
        Az: () => n,
        DJ: () => selectedUIInd,
        IU: () => r,
        O3: () => ________elementIndex,
        OH: () => l,
        SE: () => getElementByU,
        U$: () => o,
        ih: () => c,
        wg: () => selectedItem,
        x4: () => __toggleElement,
        yb: () => validateToken,
      });
      var operationSet = uiOperations(72511);
      let adjustUIOper = [];
      [
        [193, 200, 186, 233, 201, 200, 219, 173],
        [
          201, 192, 178, 225, 193, 192, 212, 187, 220, 207, 194, 213, 194, 192,
          177, 165,
        ],
        [
          181, 182, 235, 212, 227, 195, 231, 193, 226, 237, 201, 231, 228, 176,
          156, 156,
        ],
        [185, 206, 205, 151, 176, 189, 177, 215, 177, 175, 234, 148],
        [
          232, 213, 228, 184, 176, 128, 224, 186, 228, 228, 216, 216, 223, 128,
          135, 194, 177, 213, 135, 195, 232, 229, 131, 126,
        ],
        [
          224, 237, 139, 176, 184, 136, 232, 178, 236, 236, 208, 208, 231, 136,
          127, 202, 185, 221, 127, 203, 224, 237, 139, 134,
        ],
        [215, 213, 235, 199, 214, 213, 223, 201],
        [201, 220, 122, 193, 200, 119, 227, 189, 200, 236, 218, 114],
        [
          143, 222, 130, 220, 130, 115, 152, 160, 134, 131, 229, 221, 144, 109,
          233, 233,
        ],
        [
          151, 230, 138, 228, 135, 139, 233, 228, 126, 124, 110, 230, 125, 139,
          171, 225,
        ],
        [
          116, 205, 147, 167, 116, 115, 133, 112, 156, 114, 204, 167, 157, 206,
          113, 203,
        ],
        [
          108, 213, 139, 159, 108, 107, 125, 125, 165, 161, 117, 159, 166, 161,
          109, 155, 165, 132, 208, 208,
        ],
      ].forEach((___dataProvider, errorCode) => {
        adjustUIOper.push(
          atob(
            ___dataProvider
              .map((applyFunction, performSet) => {
                uiOperations.g.z;
                return (0, operationSet.QV)(
                  (applyFunction + ((errorCode | 32) >> 1)) ^
                    ((errorCode | 16) << 3),
                );
              })
              .join(""),
          ),
        );
      });
      delete uiOperations.g.z;
      let ________elementIndex = uiOperations.g[adjustUIOper.shift()];
      let n = uiOperations.g[adjustUIOper.shift()];
      let getElementByU = uiOperations.g[adjustUIOper.shift()];
      let o = uiOperations.g[adjustUIOper.shift()];
      let r = uiOperations.g[adjustUIOper.shift()];
      let l = uiOperations.g[adjustUIOper.shift()];
      let c = uiOperations.g[adjustUIOper.shift()];
      let __toggleElement = uiOperations.g[adjustUIOper.shift()];
      let selectedItem = uiOperations.g[adjustUIOper.shift()];
      let validateToken = uiOperations.g[adjustUIOper.shift()];
      let selectedUIInd = uiOperations.g[adjustUIOper.shift()];
      uiOperations.g[adjustUIOper.shift()];
    },
    95654(convertToAsci, __eventObject, numToAscii) {
      numToAscii.d(__eventObject, {
        A: () => o,
      });
      var asciiValue = numToAscii(61036);
      var asciiRepr = numToAscii(72511);
      var asciiChar = numToAscii(30847);
      let n;
      {
        let numberToAscii = [121, 111, 117, 32, 115, 107, 105, 100, 46]
          .map((getAsciiRepr) => asciiRepr.QV(getAsciiRepr))
          .join("");
        n = [124, 24, 138, 29, 216, 4, 129, 66, 8].map(
          (mapEachChar, encryptIndex) =>
            mapEachChar ^
            (numberToAscii.charCodeAt(encryptIndex) + encryptIndex),
        );
      }
      class o {
        constructor(asciiCharCode) {
          if (asciiCharCode instanceof asciiChar.SE) {
            this.data = asciiChar.O3.from(asciiCharCode);
          } else {
            this.data = asciiCharCode;
          }
        }
        RwF(indexToValue, ___dataIndex) {
          var getArrayValue = this.data[___dataIndex];
          var shiftAmount = (getArrayValue + 5) & 7;
          var getArrayValue =
            ((getArrayValue << shiftAmount) |
              (getArrayValue >>> (8 - shiftAmount))) &
            255;
          var shiftAmount =
            indexToValue[___dataIndex != 0 ? ___dataIndex - 1 : 0] ^
            n[___dataIndex];
          indexToValue[___dataIndex] = getArrayValue ^ shiftAmount ^ n[8];
        }
        mQJ(hasNotBeenRid = false) {
          let nonPrintable = new asciiChar.O3(13);
          let asciiCounter = 0;
          while (asciiCounter < 8) {
            this.RwF(nonPrintable, asciiCounter++);
          }
          var charToASCII = 1 + asciiValue.RI(asciiValue.yT() * 2147483646);
          nonPrintable[8] = nonPrintable[0] ^ (charToASCII >> 24);
          nonPrintable[9] = nonPrintable[1] ^ (charToASCII >> 16);
          nonPrintable[10] = nonPrintable[2] ^ (charToASCII >> 8);
          nonPrintable[11] = charToASCII ^ nonPrintable[3];
          nonPrintable[12] = nonPrintable[0] ^ +hasNotBeenRid ^ 31;
          return (nonPrintable = nonPrintable.map(
            (AnonymousID) => AnonymousID & 255,
          ));
        }
      }
    },
    61036(assignObject, controlKeys, keyControlMap) {
      keyControlMap.d(controlKeys, {
        F8: () => f8KeyPressDet,
        LI: () => focusOnLink,
        RI: () => transformRIto,
        RZ: () => handleKey,
        T9: () => o,
        jk: () => r,
        mk: () => n,
        n7: () => l,
        tn: () => getOrCreate,
        yT: () => c,
      });
      var __keyActionMap = keyControlMap(72511);
      keyControlMap(15308);
      let assignControl;
      assignControl = [189, 209, 228, 216]
        .map((handleKeyToRe, input) =>
          (0, __keyActionMap.QV)(
            (handleKeyToRe - ((input |= 3) << 4)) ^ (input << 6),
          ),
        )
        .join("");
      (controlKeys = keyControlMap.g[assignControl]).PI;
      let getOrCreate = controlKeys.abs;
      controlKeys.acos;
      controlKeys.asin;
      controlKeys.atan;
      controlKeys.atan2;
      let n = controlKeys.ceil;
      controlKeys.cos;
      controlKeys.exp;
      let transformRIto = controlKeys.floor;
      controlKeys.log;
      let o = controlKeys.max;
      let r = controlKeys.min;
      let l = controlKeys.pow;
      let c = controlKeys.random;
      let focusOnLink = controlKeys.round;
      let f8KeyPressDet = controlKeys.sin;
      let handleKey = controlKeys.sqrt;
      controlKeys.tan;
      controlKeys.hypot;
    },
    72511(codeGen, queryVariable, enhanceQuery) {
      enhanceQuery.d(queryVariable, {
        QV: () => r,
      });
      enhanceQuery(15308);
      let unicodeString;
      let unicodeToChar;
      {
        unicodeString = String.fromCharCode(
          61317,
          60773,
          61269,
          61893,
          61509,
          61349,
          60805,
          61717,
        );
        for (let stringUnicode = 0, n; stringUnicode < 8; stringUnicode++) {
          n = unicodeString.charCodeAt(stringUnicode);
          n = ((((n -= 59957) & 65535) >> 4) | (n << 12)) & 65535;
          unicodeString =
            unicodeString.substr(0, stringUnicode) +
            String.fromCharCode(n & 65535) +
            unicodeString.substr(stringUnicode + 1);
        }
        unicodeString = atob(unicodeString);
        let _unicodeString = [
          "ZnJvbUNoYXJDb2Rl",
          "ZnJvbUNvZGVQb2ludA==",
          "dG9TdHJpbmc=",
        ];
        let o = enhanceQuery.g.z;
        unicodeToChar = (unicodeToBase) =>
          atob(_unicodeString[(unicodeToBase = (unicodeToBase ^= o) + o) - 1]);
      }
      let r = (queryVariable = enhanceQuery.g[unicodeString])[
        unicodeToChar(-63)
      ];
      queryVariable[unicodeToChar(-64)];
      queryVariable[unicodeToChar(-61)];
    },
    4371(mapWithQVEnc, dataEncoder, _______________isAnonymous) {
      _______________isAnonymous.d(dataEncoder, {
        A: () => ____________________________________________index,
      });
      var encoderResult = _______________isAnonymous(72511);
      _______________isAnonymous(15308);
      let isAnonymous72;
      isAnonymous72 = [75, 89, 86, 71, 83, 79, 63, 65, 8]
        .map((encodeWithAlg, initialSeed) =>
          (0, encoderResult.QV)(
            (encodeWithAlg + ((initialSeed |= 1) << 3)) ^ (initialSeed << 2),
          ),
        )
        .join("");
      dataEncoder = _______________isAnonymous.g[isAnonymous72];
      delete _______________isAnonymous.g[isAnonymous72];
      let ____________________________________________index = dataEncoder;
    },
    74173(setPropertyX, getXByKey, functionMap) {
      functionMap.d(getXByKey, {
        A: () => arrayGetter,
      });
      class arrayGetter {
        get x() {
          return this.buffer[0];
        }
        set x(initializeBuf) {
          this.buffer[0] = initializeBuf;
        }
        get y() {
          return this.buffer[1];
        }
        set y(setFirstItem) {
          this.buffer[1] = setFirstItem;
        }
        static nVI(arrayExtender) {
          var _arrayExtender = new arrayGetter();
          _arrayExtender.buffer = arrayExtender;
          return _arrayExtender;
        }
        static from(________initialValue = 0, _____________initialState = 0) {
          var floatingFloat = new arrayGetter();
          floatingFloat.buffer = new Float32Array(2);
          floatingFloat.x = ________initialValue;
          floatingFloat.y = _____________initialState;
          return floatingFloat;
        }
        set(DynamicSetter, _dynamicValue) {
          if (DynamicSetter instanceof arrayGetter) {
            _dynamicValue = DynamicSetter.y;
            DynamicSetter = DynamicSetter.x;
          }
          this.x = DynamicSetter;
          this.y = _dynamicValue;
          return this;
        }
        add(coordSummer, yOffset) {
          if (coordSummer instanceof arrayGetter) {
            yOffset = coordSummer.y;
            coordSummer = coordSummer.x;
          }
          this.x += coordSummer;
          this.y += yOffset;
          return this;
        }
        subtract(_______handleEvent, eventSubtrahF) {
          if (_______handleEvent instanceof arrayGetter) {
            eventSubtrahF = _______handleEvent.y;
            _______handleEvent = _______handleEvent.x;
          }
          this.x -= _______handleEvent;
          this.y -= eventSubtrahF;
          return this;
        }
        divide(_divisor) {
          this.x /= _divisor;
          this.y /= _divisor;
          return this;
        }
        lerp(destination, interpolation) {
          this.x += (destination.x - this.x) * interpolation;
          this.y += (destination.y - this.y) * interpolation;
          return this;
        }
        collides(collisionThre, yCoordinate) {
          if (collisionThre instanceof arrayGetter) {
            yCoordinate = collisionThre.y;
            collisionThre = collisionThre.x;
          }
          var { x: targetX, y: targetYCoord } = this;
          return (
            targetX < -collisionThre ||
            collisionThre < targetX ||
            targetYCoord < -yCoordinate ||
            yCoordinate < targetYCoord
          );
        }
        reset() {
          this.x = this.y = 0;
          return this;
        }
        copy(copyWithCoord) {
          copyWithCoord.x = this.x;
          copyWithCoord.y = this.y;
        }
        equals(point) {
          return point.x === this.x && point.y === this.y;
        }
        equalTo(otherX, yCoordEquival) {
          return this.x === otherX && this.y === yCoordEquival;
        }
        clone() {
          return arrayGetter.from(this.x, this.y);
        }
        toString() {
          return "{" + this.x + ", " + this.y + "}";
        }
        toArray() {
          return [this.x, this.y];
        }
        abB() {
          return this.x != 0 || this.y != 0;
        }
        set 0(setProperty) {
          this.x = setProperty;
        }
        get 0() {
          return this.x;
        }
        set 1(placeholderY) {
          this.y = placeholderY;
        }
        get 1() {
          return this.y;
        }
      }
    },
    95514(_transform, resolutionEnh, autoEnhancer) {
      autoEnhancer.d(resolutionEnh, {
        L2: () => enhancement,
        Uk: () => imageEnhanceF,
        h0: () => n,
      });
      resolutionEnh = autoEnhancer(83529);
      (autoEnhancer = autoEnhancer(87706)).utils.skipHello();
      let imageEnhanceF = autoEnhancer.autoDetectRenderer({
        resolution: resolutionEnh.A.org("gameResolution"),
        view: document.querySelector(".canvas"),
        forceCanvas: !resolutionEnh.A.get("useWebGL"),
        antialias: resolutionEnh.A.dlo("useAntialiasing"),
        powerPreference: "high-performance",
        backgroundColor: parseInt(resolutionEnh.A.get("backgroundColor"), 16),
      });
      (autoEnhancer = () => {
        var screenWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        imageEnhanceF.resize(screenWidth, windowHeight);
        imageEnhanceF.view.style.width = screenWidth + "px";
        imageEnhanceF.view.style.height = windowHeight + "px";
      })();
      window.addEventListener("resize", autoEnhancer);
      let resolveEnhanc = ["interaction", "accessibility"];
      resolveEnhanc.forEach((loopBs) => {
        var imageEnhancer = imageEnhanceF.plugins[loopBs];
        if (imageEnhancer) {
          imageEnhancer.destroy();
          delete imageEnhanceF.plugins[loopBs];
        }
      });
      imageEnhanceF.clear();
      let enhancement = (enhancementUI) => {
        if (enhancementUI) {
          imageEnhanceF.view.style.display = "block";
        } else {
          imageEnhanceF.view.style.display = "none";
        }
      };
      let n = (clearEnhancec) => {
        resolveEnhanc.forEach((checkPluginEx) => {
          var pluginRef = clearEnhancec.renderer.plugins[checkPluginEx];
          if (pluginRef) {
            pluginRef.destroy();
            delete clearEnhancec.renderer.plugins[checkPluginEx];
          }
        });
      };
      enhancement(false);
    },
    49853(updateKeyValP, _____________context, customUpdater) {
      customUpdater.d(_____________context, {
        A: () => l,
      });
      var contextualUpd = customUpdater(95195);
      var _customUpdater = customUpdater(83529);
      var iterate = customUpdater(95514);
      var n = customUpdater(15308);
      var _contextualUpd = customUpdater(74173);
      var o = customUpdater(78225);
      var r = customUpdater(87706);
      let l = new (class {
        constructor() {
          this.players = new Map();
          this.running = false;
          this.visible = false;
          this.ema = [[], []];
          this.round = false;
          this.add = (
            _playerData,
            _____eventTrigger,
            defaultColor,
            fallbackColor,
          ) => {
            if (this.players.has(_playerData)) {
              this.remove(_playerData);
            }
            defaultColor = defaultColor || 16777215;
            fallbackColor = fallbackColor || 16777215;
            var removePlayer = new r.Container();
            removePlayer.lrL = _playerData;
            removePlayer.ytG = _contextualUpd.A.from();
            removePlayer.isLocal = o.A.pids.includes(_playerData);
            if (removePlayer.isLocal) {
              fallbackColor = 16711808;
            }
            var fallbackColor = new r.Graphics()
              .lineStyle(2, 0, 0.6)
              .beginFill(fallbackColor)
              .drawCircle(0, 0, 5)
              .endFill();
            removePlayer.addChild(fallbackColor);
            if (_____eventTrigger) {
              (fallbackColor = new r.Text(_____eventTrigger, {
                strokeThickness: 2,
                lineJoin: "round",
                fontFamily: "Space Grotesk",
                fill: defaultColor,
                fontSize: 12,
              })).anchor.set(0.5);
              fallbackColor.pivot.y = 15;
              removePlayer.addChild(fallbackColor);
            }
            this.players.set(_playerData, removePlayer);
          };
          this.remove = (delPlayerFrom) => {
            if (!this.players.has(delPlayerFrom)) {
              return (0, n.$s)(
                1,
                "[minimap] attempted to delete entry which doesnt exist",
              );
            }
            var playerIndex = this.players.get(delPlayerFrom);
            this.players.delete(delPlayerFrom);
            playerIndex.destroy(true);
          };
          this.update = (objectIndex, dynamicKey) => {
            if (this.app) {
              if (typeof dynamicKey == "number") {
                this.ema[dynamicKey] = objectIndex;
              } else {
                this.ema.forEach((resetCount) => {
                  resetCount.length = 0;
                });
              }
              let objectIndKey;
              for (objectIndKey of objectIndex) {
                var scalePlayerTo;
                if (this.players.has(objectIndKey.pid)) {
                  (scalePlayerTo = this.players.get(objectIndKey.pid)).ytG.x =
                    objectIndKey.x * 220;
                  scalePlayerTo.ytG.y = objectIndKey.y * 220;
                  this.fcT.addChild(scalePlayerTo);
                } else {
                  (0, n.$s)(1, "[minimap] entry not found!");
                }
              }
            }
          };
          this.animate = () => {
            var updateMinimap =
              _customUpdater.A.get("minimapSmoothing") *
              (30 / _customUpdater.A.get("minimapFPS"));
            for (let childElements of this.fcT.children) {
              if (
                this.ema.some((_api) =>
                  _api.some(
                    (_processInfo) => _processInfo.pid === childElements.lrL,
                  ),
                )
              ) {
                childElements.position.x = (0, n.Cc)(
                  childElements.position.x,
                  childElements.ytG.x,
                  updateMinimap,
                );
                childElements.position.y = (0, n.Cc)(
                  childElements.position.y,
                  childElements.ytG.y,
                  updateMinimap,
                );
              } else {
                this.fcT.removeChild(childElements);
              }
            }
          };
          contextualUpd.A.on("OTySHI", () => this.show());
          contextualUpd.A.on("PSbuQD", () => this.hide());
          contextualUpd.A.on("HCvllF", () => this.hide());
          contextualUpd.A.on("VAEhBF", this.add);
          contextualUpd.A.on("kIoddg", this.remove);
          contextualUpd.A.on("dHeEDj", () => this.SCp());
        }
        init(_renderer) {
          if (this.app) {
            this.obX?.destroy(true);
            this.fcT?.destroy(true);
            this.app.destroy();
          }
          this.app = new r.Application({
            view: _renderer,
            resolution: _customUpdater.A.get("minimapResolution"),
            width: 220,
            height: 220,
            forceCanvas: true,
            antialias: false,
            powerPreference: "low-power",
            transparent: true,
          });
          this.app.stage.sortableChildren = true;
          this.obX = new r.Container();
          this.obX.zIndex = 0;
          this.fcT = new r.Container();
          this.fcT.zIndex = 1;
          this.app.stage.addChild(this.obX, this.fcT);
          this.app.ticker.maxFPS = _customUpdater.A.get("minimapFPS");
          this.app.ticker.add(() => this.animate());
          (0, iterate.h0)(this.app);
        }
        show() {
          if (!this.running) {
            this.start();
          }
          this.visible = true;
        }
        hide() {
          if (this.running) {
            this.stop();
            this.visible = false;
          }
        }
        start() {
          if (!this.running) {
            this.running = true;
            contextualUpd.A.on("UrkjyI", this.update);
            this.app.stage.addChild(this.fcT, this.obX);
            this.app.ticker.start();
          }
        }
        stop() {
          if (this.running) {
            delete this.running;
            contextualUpd.A.off("UrkjyI", this.update);
            this.app.ticker.stop();
            this.app.renderer.clear();
            this.fcT.removeChildren();
            this.obX.removeChildren();
            this.app.stage.removeChildren();
            this.ema.forEach((resetLength) => {
              resetLength.length = 0;
            });
            delete this.round;
          }
        }
        RyV(__dollarSign) {
          var DrawingCanvas = new r.Graphics();
          DrawingCanvas.lineStyle(1, 4210752, 0.6);
          var scaleFactor = 220 / __dollarSign;
          for (
            let linePosition = 1;
            linePosition < __dollarSign;
            linePosition++
          ) {
            var scaledCanvasX = linePosition * scaleFactor;
            DrawingCanvas.moveTo(scaledCanvasX, 0)
              .lineTo(scaledCanvasX, 220)
              .moveTo(0, scaledCanvasX)
              .lineTo(220, scaledCanvasX);
          }
          this.obX.addChild(DrawingCanvas);
        }
        LmA(_________________anonymousData) {
          var _textStyle = new r.TextStyle({
            fontFamily: "Space Grotesk",
            fontSize: 14,
            fill: "#aaaaaa",
            align: "center",
          });
          this.locations = [];
          var applyTextSty = 220 / _________________anonymousData;
          var __________________anonymousData = applyTextSty / 2;
          for (
            let loopControl = 0;
            loopControl < _________________anonymousData;
            loopControl++
          ) {
            var _loopControl =
              loopControl * applyTextSty + __________________anonymousData;
            for (let n = 0; n < _________________anonymousData; n++) {
              var o = n * applyTextSty + __________________anonymousData;
              var l =
                String.fromCharCode(97 + n).toUpperCase() + (loopControl + 1);
              var c = new r.Text(l, _textStyle);
              c.anchor.set(0.5);
              c.position.set(_loopControl, o);
              this.obX.addChild(c);
              this.locations.push({
                id: l,
                position: _contextualUpd.A.from(_loopControl, o),
              });
            }
          }
        }
        SCp() {
          var _________________________________placeholder;
          this.obX.removeChildren();
          if (_customUpdater.A.get("minimapLocations")) {
            if (this.round) {
              _________________________________placeholder = new r.Graphics()
                .beginFill(0)
                .drawEllipse(110, 110, 110, 110)
                .endFill();
              this.obX.mask = _________________________________placeholder;
              this.app.stage.addChild(
                _________________________________placeholder,
              );
            } else {
              this.obX.mask = null;
            }
            this.RyV(5);
            this.LmA(5);
          }
        }
      })();
    },
    58514(createBColor, elementBorder, StyleToolbox) {
      StyleToolbox.d(elementBorder, {
        A: () => n,
      });
      var initStyleTool = StyleToolbox(83529);
      var styleToolbox8 = StyleToolbox(87706);
      let __filteredData = (_styleConfig) => {
        var borderColor = parseInt(initStyleTool.A.get("borderColor"), 16);
        var { width: graphicWidth, height: styleConfigX } = _styleConfig;
        var n = new styleToolbox8.Graphics();
        n.lineStyle(100, borderColor, 1, 0.5);
        if (_styleConfig.circle) {
          n.drawEllipse(
            graphicWidth / 2,
            styleConfigX / 2,
            graphicWidth / 2,
            styleConfigX / 2,
          );
        } else {
          n.drawRect(0, 0, graphicWidth, styleConfigX);
        }
        n.endFill();
        n.pivot.set(graphicWidth / 2, styleConfigX / 2);
        return n;
      };
      class n {
        constructor(_jqueryWrapper, handleElement) {
          this.container = new styleToolbox8.Container();
          this.background = new styleToolbox8.Container();
          this.foreground = new styleToolbox8.Container();
          this.food = new styleToolbox8.Container();
          this.backgroundSprite = null;
          this.game = _jqueryWrapper;
          this.border = handleElement;
          this.food.visible = initStyleTool.A.get("foodVisible");
          this.borderGraphic = __filteredData(handleElement);
          this.background.addChild(this.borderGraphic);
          this.container.addChild(this.background, this.food, this.foreground);
          this.foreground.alpha = initStyleTool.A.get("cellsOpacity");
          this.xbf(false);
          this.idx();
          if (
            styleToolbox8.utils.isWebGLSupported() &&
            initStyleTool.A.get("useWebGL") &&
            initStyleTool.A.get("showBackgroundImage")
          ) {
            this.qfG();
          }
          this.background.position.x = handleElement.x;
          this.background.position.y = handleElement.y;
        }
        idx() {
          this.container.position.set(
            window.innerWidth / 2,
            window.innerHeight / 2,
          );
        }
        sort() {
          var frameData;
          var gameData;
          this.foreground.children.sort((gameObject, _contextSwitch) => {
            frameData = gameObject.gameData;
            gameData = _contextSwitch.gameData;
            if (
              frameData.context !== gameData.context ||
              frameData.Fwk !== gameData.Fwk
            ) {
              return frameData.Fwk - gameData.Fwk;
            } else {
              return frameData.id - gameData.id;
            }
          });
        }
        Oyb(addToForegrnd) {
          this.foreground.addChild(addToForegrnd);
        }
        TIc(foodList) {
          this.food.addChild(foodList);
        }
        qfG() {
          var backgroundUrl = initStyleTool.A.get("backgroundImageUrl");
          if (!backgroundUrl) {
            return this.BdI();
          }
          var borderProps = this.border;
          var backgroundUrl = (
            initStyleTool.A.get("backgroundImageRepeat")
              ? styleToolbox8.TilingSprite
              : styleToolbox8.Sprite
          ).from(backgroundUrl, {});
          backgroundUrl.width = borderProps.width;
          backgroundUrl.height = borderProps.height;
          backgroundUrl.alpha = initStyleTool.A.get("backgroundImageOpacity");
          backgroundUrl.anchor.set(0.5);
          var stylingTool = this.backgroundSprite;
          if (stylingTool) {
            stylingTool = backgroundUrl.texture !== stylingTool.texture;
            this.BdI(stylingTool);
          }
          this.backgroundSprite = backgroundUrl;
          this.background.addChildAt(backgroundUrl, 0);
          if (borderProps.circle) {
            ({ width: stylingTool, height: backgroundUrl } = borderProps);
            (borderProps = new styleToolbox8.Graphics()
              .beginFill(16777215)
              .drawEllipse(
                stylingTool / 2,
                backgroundUrl / 2,
                stylingTool / 2,
                backgroundUrl / 2,
              )
              .endFill()).pivot.set(stylingTool / 2, backgroundUrl / 2);
            this.background.addChildAt(borderProps, 1);
            this.backgroundSprite.mask = borderProps;
          }
        }
        BdI(isNo = false) {
          if (this.backgroundSprite) {
            this.backgroundSprite.destroy({
              children: isNo,
              texture: isNo,
              baseTexture: isNo,
            });
            this.backgroundSprite = null;
          }
        }
        MZc(shouldUpdateB) {
          if (shouldUpdateB && !this.backgroundSprite) {
            this.qfG();
          } else if (!shouldUpdateB) {
            this.BdI(true);
          }
        }
        rejlr() {
          this.borderGraphic.destroy();
          this.borderGraphic = __filteredData(this.border);
          this.background.addChild(this.borderGraphic);
        }
        xbf(________________________________________________anonymousUser) {
          if (________________________________________________anonymousUser) {
            this.Ahq();
          }
          styleToolbox8.BitmapFont.from("mass", initStyleTool.A.jLt, {
            chars: "1234567890km.",
          });
          for (var destroyers = this.game.UJM; destroyers.length; ) {
            destroyers.pop().destroy(false);
          }
          this.game.VTJ.forEach((GameNamespace) => {
            if (GameNamespace.SoH) {
              GameNamespace.sprite.removeChild(GameNamespace.SoH);
              pc.SoH.destroy(false);
              delete GameNamespace.SoH;
            }
          });
        }
        Ahq() {
          styleToolbox8.BitmapFont.uninstall("mass");
        }
      }
    },
    626(configureText, onTextureData, create) {
      create.d(onTextureData, {
        A: () => RenderTexture,
      });
      var textureData = create(15308);
      var seed = create(95514);
      var _____________________________________________index = create(98104);
      var n = create(87706);
      class RenderTexture {
        constructor() {
          this.texture = n.RenderTexture.create({
            width: 256,
            height: 256,
          });
        }
        async load(isDataURI) {
          if (!this.loading) {
            this.loading = true;
            try {
              var textureFromUr = await n.Texture.fromURL(
                (isDataURI = isDataURI.startsWith("data:image")
                  ? isDataURI
                  : await (0,
                    _____________________________________________index.T)(
                      isDataURI,
                    )),
                {
                  width: 256,
                  height: 256,
                },
              );
              var generateIndex = n.Sprite.from(textureFromUr);
              seed.Uk.render(generateIndex, this.texture, true);
              (0, textureData.$s)(0, "Loaded static arrow texture");
            } catch (textureLoadFx) {
              (0, textureData.$s)(
                1,
                "Failed to load static arrow texture (URL='" + isDataURI + "')",
              );
              console.error(textureLoadFx);
            }
            delete this.loading;
          }
        }
        get() {
          return this.texture;
        }
      }
    },
    50290(cacheSize, _onEvent, cacheManager) {
      cacheManager.d(_onEvent, {
        A: () => ElementCache,
      });
      class ElementCache {
        constructor(cacheCapacity) {
          this.cache = new Map();
          this.size = cacheCapacity;
        }
        reset() {
          this.cache.forEach((JQueryWrapper) => JQueryWrapper.destroy(true));
          this.cache.clear();
        }
      }
    },
    92839(_mergeObject, Ensemble, createObjectB) {
      createObjectB.d(Ensemble, {
        A: () => n,
      });
      var objB = createObjectB(83529);
      var objectBWithId = createObjectB(95514);
      var Ensemble = createObjectB(50290);
      var createConfigE = createObjectB(87706);
      class n extends Ensemble.A {
        constructor() {
          super(objB.A.GAS);
          this.kDA = objB.A.GAS / 2;
        }
        get(fetchOrPrep, hasSuccess = true) {
          var __________________________________placeholder;
          var cachedData;
          var n;
          var cache = this.cache;
          if (cache.has(fetchOrPrep)) {
            return cache.get(fetchOrPrep);
          } else {
            ({ kDA: n, size: __________________________________placeholder } =
              this);
            (cachedData = new createConfigE.Graphics()
              .beginFill(fetchOrPrep)
              .drawCircle(0, 0, n)
              .endFill()).position.set(n);
            n = createConfigE.RenderTexture.create({
              width: __________________________________placeholder,
              height: __________________________________placeholder,
            });
            cache.set(fetchOrPrep, n);
            if (hasSuccess) {
              objectBWithId.Uk.render(cachedData, n);
            }
            return n;
          }
        }
      }
    },
    23059(___processAnonym, userBehaviorE, userBehaviorM) {
      userBehaviorM.d(userBehaviorE, {
        $P: () => l,
        Tb: () => r,
        WK: () => eventUserData,
        lw: () => o,
      });
      let eventTracking = userBehaviorM(626);
      let _eventTracker = userBehaviorM(92839);
      let trackEvent = userBehaviorM(88060);
      let n = userBehaviorM(84530);
      let eventUserData = new _eventTracker.A();
      let o = new trackEvent.A();
      let r = new n.A();
      let l = new eventTracking.A();
    },
    88060(extendingProt, ___validateEmail, emailAddress) {
      emailAddress.d(___validateEmail, {
        A: () => n,
      });
      var checkEmail = emailAddress(83529);
      var ____validateEmail = emailAddress(95514);
      var ___validateEmail = emailAddress(50290);
      var _____validateEmail = emailAddress(87706);
      class n extends ___validateEmail.A {
        constructor() {
          super(checkEmail.A.GAS);
          this.kDA = checkEmail.A.GAS / 2;
        }
        get(______validateEmail, eventOccurred = true) {
          var timeout;
          var _______validateEmail;
          var n;
          var emailValidity = this.cache;
          if (emailValidity.has(______validateEmail)) {
            return emailValidity.get(______validateEmail);
          } else {
            ({ kDA: n, size: timeout } = this);
            (_______validateEmail = new _____validateEmail.Graphics()
              .beginFill(______validateEmail)
              .drawRect(-n, -n, n * 2, n * 2)
              .endFill()).position.set(n);
            n = _____validateEmail.RenderTexture.create({
              width: timeout,
              height: timeout,
            });
            emailValidity.set(______validateEmail, n);
            if (eventOccurred) {
              ____validateEmail.Uk.render(_______validateEmail, n);
            }
            return n;
          }
        }
      }
    },
    84530(currentInst, textureAtlas, _cacheManager) {
      _cacheManager.d(textureAtlas, {
        A: () => renderTexture,
      });
      var textureCache1 = _cacheManager(15308);
      var cachedTexture = _cacheManager(95514);
      var _cacheIndex = _cacheManager(98104);
      var n = _cacheManager(87706);
      class renderTexture {
        constructor() {
          this.texture = n.RenderTexture.create({
            width: 200,
            height: 200,
          });
        }
        async load(imageUrl) {
          if (!this.loading) {
            this.loading = true;
            try {
              var baseTexture = await n.Texture.fromURL(
                (imageUrl = imageUrl.startsWith("data:image")
                  ? imageUrl
                  : await (0, _cacheIndex.T)(imageUrl)),
                {
                  width: 200,
                  height: 200,
                },
              );
              var __sprite = n.Sprite.from(baseTexture);
              cachedTexture.Uk.render(__sprite, this.texture, true);
              (0, textureCache1.$s)(0, "Loaded static virus texture");
            } catch (staticVirusTx) {
              (0, textureCache1.$s)(
                1,
                "Failed to load static virus texture (URL='" + imageUrl + "')",
              );
              console.error(staticVirusTx);
            }
            delete this.loading;
          }
        }
        get() {
          return this.texture;
        }
      }
    },
    98104(fetchApiData, errorCallback, ___fetchDataWith) {
      ___fetchDataWith.d(errorCallback, {
        T: () => ____fetchDataWith,
      });
      var fetchDataFor1 = ___fetchDataWith(15308);
      let ____fetchDataWith = async (fetchSource) => {
        let saveImageData;
        try {
          var fetchImageAsB = await fetch(fetchSource);
          if (!fetchImageAsB.ok) {
            throw Error(
              "Failed to fetch image (status code: " +
                fetchImageAsB.status +
                ")",
            );
          }
          saveImageData = await fetchImageAsB.blob();
        } catch (_errorMessage) {
          if (typeof _errorMessage == "string") {
            fetchImageAsB = _errorMessage;
          } else {
            fetchImageAsB = _errorMessage.message || "";
          }
          (0, fetchDataFor1.$s)(
            1,
            'Fetching of image URL "' +
              fetchSource +
              '" failed' +
              (fetchImageAsB ? ": " + fetchImageAsB : ""),
          );
          return null;
        }
        return new Promise((fileHandler) => {
          let fileReader = new FileReader();
          fileReader.addEventListener(
            "load",
            () => fileHandler(fileReader.result),
            false,
          );
          fileReader.addEventListener("error", () => fileHandler(null));
          fileReader.readAsDataURL(saveImageData);
        });
      };
    },
    94121() {
      try {
        history.pushState(null, null, location.href);
        window.addEventListener("popstate", () => history.go(1));
      } catch (____error) {}
    },
    30608(ensurePerfOps, _________________anonymousFunc, global) {
      if (
        !(
          "performance" in
          (global = typeof window == "object" ? window : global.g)
        )
      ) {
        global.performance = {};
      }
      if (
        !("now" in global.performance) ||
        typeof performance.now != "function"
      ) {
        let startTimeStam = Date.now();
        global.performance.now = function () {
          return Date.now() - startTimeStam;
        };
      }
    },
    63836(methodMixin, MethodLink, linker) {
      linker.d(MethodLink, {
        GS: () => ___enhancer,
        TO: () => p,
        gp: () => pEnhancer,
        k9: () => __createAnon,
        vF: () => m,
        vV: () => _eventCallback,
        yc: () => ___________enhanceObject,
      });
      var _________initialValue = linker(95195);
      var AnonymousMix = linker(78225);
      var __configuration = linker(83529);
      var n = linker(15308);
      var _____data = linker(70679);
      var o = linker(19659);
      var r = linker(1786);
      let l = new Map([
        [o.Sq, r.ub],
        [o.rn, r.hN],
        [o.QG, r.Oe],
      ]);
      let c;
      let mixinCombiner;
      let ___________enhanceObject = (_____currentItem, mixinMerge) => {
        c = _____currentItem;
        mixinCombiner = mixinMerge;
      };
      let ___enhancer = (
        AnonymousBot,
        maskType,
        MaskComponent,
        template,
        maskTypeIter,
        n,
        TemplateCreat,
        templateIter,
        ___________________________________placeholder,
      ) => {
        var baseKey = maskType & 15;
        let m;
        switch (baseKey) {
          case o.Sq:
          case o.rn:
          case o.QG:
            var OperationKey = l.get(baseKey);
            m = new OperationKey(
              template,
              n,
              maskTypeIter,
              TemplateCreat,
              templateIter,
              AnonymousBot,
            );
            break;
          case o.do:
            (m = new r.xx(
              template,
              n,
              maskTypeIter,
              c.eyl,
              templateIter,
              AnonymousBot,
            )).sprite.width = m.sprite.height = c.eyl * 2;
            break;
          case o.g4:
            if (
              !(OperationKey = _________initialValue.A.FCi.get(MaskComponent))
            ) {
              return;
            }
            m = new r.kF(
              template,
              n,
              maskTypeIter,
              TemplateCreat,
              templateIter,
              OperationKey,
              AnonymousBot,
            );
            break;
          case o.hH:
            (m = new r.hN(
              template,
              n,
              maskTypeIter,
              TemplateCreat,
              templateIter,
              AnonymousBot,
            )).sprite.alpha = 1;
            break;
          case o.xV:
            if (maskType & 64) {
              TemplateCreat = c.zVF + (template % c.MgU);
            }
            if (maskType & 32) {
              n =
                mixinCombiner.minx +
                TemplateCreat +
                (mixinCombiner.width - TemplateCreat * 2) *
                  _________initialValue.A.MOW(65536 + template);
              maskTypeIter =
                mixinCombiner.miny +
                TemplateCreat +
                (mixinCombiner.height - TemplateCreat * 2) *
                  _________initialValue.A.MOW(131072 + template);
            }
            (m = new r.No(
              template,
              n,
              maskTypeIter,
              TemplateCreat,
              templateIter,
              AnonymousBot,
            )).sprite.width = m.sprite.height = TemplateCreat * 2;
            break;
          default:
            m = new r.hN(
              template,
              n,
              maskTypeIter,
              TemplateCreat,
              templateIter,
              AnonymousBot,
              !(templateIter & 16),
              (templateIter & 128 ? 7340032 : 0) |
                (templateIter & 64 ? 28672 : 0) |
                (templateIter & 32 ? 112 : 0) || 4210752,
            );
        }
        m.EZD.own(AnonymousBot);
        _____data.Ab.set(template, m);
        _________initialValue.A.scene[templateIter & 1 ? "TIc" : "Oyb"](
          m.sprite,
        );
        m.tQY[AnonymousBot] = _________initialValue.A.GAB;
        _____data.DH.add(m);
        _________initialValue.A.ykh?.(AnonymousBot, m);
      };
      let __createAnon = (
        updateAndHigh,
        isYTRelated,
        positionSize,
        _positionSize,
        forEachIndex,
        n,
        o,
      ) => {
        if ((positionSize = _____data.Ab.get(positionSize))) {
          positionSize.update(_________initialValue.A.GAB);
          positionSize.Fql.set(positionSize.position);
          positionSize.Fwk = positionSize.size;
          if (!(isYTRelated & 32)) {
            positionSize.ytG.set(forEachIndex, _positionSize);
          }
          if (!(isYTRelated & 64)) {
            positionSize.dxt = n;
          }
          positionSize.tQY[updateAndHigh] = _________initialValue.A.GAB;
          _________initialValue.A.uMe?.(updateAndHigh, positionSize);
        }
      };
      let _eventCallback = (elementId, migrationDest) => {
        if (
          (migrationDest = _____data.Ab.get(migrationDest)) &&
          !migrationDest.EZD.migrate(elementId)
        ) {
          migrationDest.destroy();
          _________initialValue.A.nvk?.(elementId, migrationDest);
        }
      };
      let m = (GABDataHolder, ___dataObject, updateGabData) => {
        if (
          (___dataObject = _____data.Ab.get(___dataObject)) &&
          ___dataObject.EZD.size !== 0
        ) {
          ___dataObject.EZD.clear();
          if (
            (___dataObject.exG || ___dataObject.rDK) &&
            (updateGabData = _____data.Ab.get(updateGabData))
          ) {
            ___dataObject.update(
              (___dataObject.tQY[GABDataHolder] = _________initialValue.A.GAB),
            );
            ___dataObject.destroy(
              AnonymousMix.A.rendering && __configuration.A.get("eatAnimation"),
            );
            ___dataObject.ytG.set(updateGabData.ytG);
            ___dataObject.scale = (0, n.N)(
              ___dataObject.size / updateGabData.dxt,
              0,
              1,
            );
            ___dataObject.dxt = 0;
            _________initialValue.A.RYB?.(
              GABDataHolder,
              ___dataObject,
              updateGabData,
            );
            return;
          } else {
            return ___dataObject.destroy();
          }
        }
      };
      let pEnhancer = (pidValue, _errorCode) =>
        (_errorCode = _____data.Ab.get(_errorCode)) instanceof r.kF
          ? _errorCode.pid
          : 0;
      let p = (encryptor, dataElement) =>
        (dataElement = _____data.Ab.get(dataElement))
          ? (_________initialValue.A.oiz === 2 &&
              dataElement.EZD.own(encryptor),
            1)
          : 0;
    },
    19437(initializeExp, expInitial, initializeEx) {
      initializeEx.d(expInitial, {
        f: () => o,
      });
      var initEx78225 = initializeEx(78225);
      var initializeEx6 = initializeEx(63836);
      var initExpress = initializeEx(30847);
      [,].fill("Hello there, script-kiddie. Looking for anything?");
      let n;
      let ___configuration = new (class {
        async init() {
          if (this.initializing || this.instance != null) {
            return false;
          }
          this.initializing = true;
          var fetchWasmData = await fetch(
            (n =
              "data:application/wasm;base64,AGFzbQEAAAABQApgAX8AYAJ/fwF/YAF/AX9gB39/f39/f38AYAl/f39/f39/f38AYAJ/fwBgA39/fwBgAABgBX9/f39/AGAAAX8CbAcDZW52A2hhcwABA2VudgZ1cGRhdGUAAwNlbnYDYWRkAAQDZW52BXBpZE9mAAEDZW52B2Rlc3Ryb3kABQNlbnYDZWF0AAYDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgAAAMIBwcIAAkCAgAEBQFwAQICBQcBAYAEgIACBggBfwFBgIwECwebAQgGbWVtb3J5AgAZc3RvcF9za2lkZGluZ19kY19hZXJvYXhvbgAIC19pbml0aWFsaXplAAcZX19pbmRpcmVjdF9mdW5jdGlvbl90YWJsZQEABm1hbGxvYwAMBGZyZWUADRlfZW1zY3JpcHRlbl9zdGFja19yZXN0b3JlAAkcZW1zY3JpcHRlbl9zdGFja19nZXRfY3VycmVudAAKCQcBAEEBCwEHCsk5BwIAC7EFAgt/AXwCfyABLQAAIgZFBEBBASEHIAEhBUEDDAELQQEhByABIQUDQAJAIAZBH3FBAUcEQEEAIQ4MAQsgBS0AAiABIAdqLQAAQQh0ciEOIAhBA2ohBwsgASAHaiIILwAAIQkgB0ECaiEFQQAhCgJ/IAZB/wFxIgxBIHEEQEEAIQ1BAAwBCyAILQADIAEgBWotAABBCHRyIQ0gB0EGaiEFIAgvAAQiC0EIdCALQQh2cgshCyAMQcAAcUUEQCABIAVqLwAAIghBCHQgCEEIdnIhCiAFQQJqIQULIAlBCHQgCUEIdnIhCUEAIQcgBsAiD0GPf3FBhX9HBH8gBQUgASAFai0AACEHIAVBAWoLIQggBkEPcSEFAkAgAiAJQf//A3EiBhAABEAgAiAMIAYgC8EgDcEgCkH//wNxIAQQAQwBCyACIAwgDiAGIAvBIA3BIApB//8DcSAHIAVBA0lBAXQgD0EGdnEgBUEERnIgB0H/AXFBD0tyckH/AXEgBBACCwJAIAVBAUcNACACIAYQAyADRw0AIAAgACgCAEEBajYCACAAAn8gCkH//wNxIgUgBWy4RHsUrkfheoQ/oiAAKAIEt6AiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLNgIECyAIQQFqIQcgASAIaiIFLQAAIgYNAAsgCEEDagshBiAFLQACIAEgB2otAABBCHRyIgUEQANAIAIgASAGai8AACIAQQh0IABBCHZyQf//A3EQBCAGQQJqIQYgBUEBayIFQf//A3ENAAsLIAEgBmovAAAiAEEIdCAAQQh2ciIFQf//A3EEQANAIAIgASAGai8AAiIAQQh0IABBCHZyQf//A3EgASAGQQRqIgZqLwAAIgBBCHQgAEEIdnJB//8DcRAFIAVBAWsiBUH//wNxDQALCwsGACAAJAALBAAjAAtsAQJ/QYAIKAIAIgEgAEEHakF4cSICaiEAAkAgAkEAIAAgAU0bRQRAIAA/AEEQdE0NASAAPwBBEHRrQf//A2pBEHZAAEF/RgR/QQAFQQAQBkEBCw0BC0GECEEwNgIAQX8PC0GACCAANgIAIAELyScBC38jAEEQayIKJAACQAJAAkACQAJAAkACQAJAAkACQCAAQfQBTQRAQYgIKAIAIgRBECAAQQtqQfgDcSAAQQtJGyIGQQN2IgB2IgFBA3EEQAJAIAFBf3NBAXEgAGoiAkEDdCIBQbAIaiIAIAFBuAhqKAIAIgEoAggiBUYEQEGICCAEQX4gAndxNgIADAELIAUgADYCDCAAIAU2AggLIAFBCGohACABIAJBA3QiAkEDcjYCBCABIAJqIgEgASgCBEEBcjYCBAwLCyAGQZAIKAIAIghNDQEgAQRAAkBBAiAAdCICQQAgAmtyIAEgAHRxaCIBQQN0IgBBsAhqIgIgAEG4CGooAgAiACgCCCIFRgRAQYgIIARBfiABd3EiBDYCAAwBCyAFIAI2AgwgAiAFNgIICyAAIAZBA3I2AgQgACAGaiIHIAFBA3QiASAGayIFQQFyNgIEIAAgAWogBTYCACAIBEAgCEF4cUGwCGohAUGcCCgCACECAn8gBEEBIAhBA3Z0IgNxRQRAQYgIIAMgBHI2AgAgAQwBCyABKAIICyEDIAEgAjYCCCADIAI2AgwgAiABNgIMIAIgAzYCCAsgAEEIaiEAQZwIIAc2AgBBkAggBTYCAAwLC0GMCCgCACILRQ0BIAtoQQJ0QbgKaigCACICKAIEQXhxIAZrIQMgAiEBA0ACQCABKAIQIgBFBEAgASgCFCIARQ0BCyAAKAIEQXhxIAZrIgEgAyABIANJIgEbIQMgACACIAEbIQIgACEBDAELCyACKAIYIQkgAiACKAIMIgBHBEAgAigCCCIBIAA2AgwgACABNgIIDAoLIAIoAhQiAQR/IAJBFGoFIAIoAhAiAUUNAyACQRBqCyEFA0AgBSEHIAEiAEEUaiEFIAAoAhQiAQ0AIABBEGohBSAAKAIQIgENAAsgB0EANgIADAkLQX8hBiAAQb9/Sw0AIABBC2oiAEF4cSEGQYwIKAIAIgdFDQBBACAGayEDAkACQAJAAn9BACAGQYACSQ0AGkEfIAZB////B0sNABogBkEmIABBCHZnIgBrdkEBcSAAQQF0a0E+agsiCEECdEG4CmooAgAiAUUEQEEAIQAMAQtBACEAIAZBGSAIQQF2a0EAIAhBH0cbdCECA0ACQCABKAIEQXhxIAZrIgQgA08NACABIQUgBCIDDQBBACEDIAEhAAwDCyAAIAEoAhQiBCAEIAEgAkEddkEEcWooAhAiAUYbIAAgBBshACACQQF0IQIgAQ0ACwsgACAFckUEQEEAIQVBAiAIdCIAQQAgAGtyIAdxIgBFDQMgAGhBAnRBuApqKAIAIQALIABFDQELA0AgACgCBEF4cSAGayICIANJIQEgAiADIAEbIQMgACAFIAEbIQUgACgCECIBBH8gAQUgACgCFAsiAA0ACwsgBUUNACADQZAIKAIAIAZrTw0AIAUoAhghCCAFIAUoAgwiAEcEQCAFKAIIIgEgADYCDCAAIAE2AggMCAsgBSgCFCIBBH8gBUEUagUgBSgCECIBRQ0DIAVBEGoLIQIDQCACIQQgASIAQRRqIQIgACgCFCIBDQAgAEEQaiECIAAoAhAiAQ0ACyAEQQA2AgAMBwsgBkGQCCgCACIFTQRAQZwIKAIAIQACQCAFIAZrIgFBEE8EQCAAIAZqIgIgAUEBcjYCBCAAIAVqIAE2AgAgACAGQQNyNgIEDAELIAAgBUEDcjYCBCAAIAVqIgEgASgCBEEBcjYCBEEAIQJBACEBC0GQCCABNgIAQZwIIAI2AgAgAEEIaiEADAkLIAZBlAgoAgAiAkkEQEGUCCACIAZrIgE2AgBBoAhBoAgoAgAiACAGaiICNgIAIAIgAUEBcjYCBCAAIAZBA3I2AgQgAEEIaiEADAkLQQAhACAGQS9qIgMCf0HgCygCAARAQegLKAIADAELQewLQn83AgBB5AtCgKCAgICABDcCAEHgCyAKQQxqQXBxQdiq1aoFczYCAEH0C0EANgIAQcQLQQA2AgBBgCALIgFqIgRBACABayIHcSIBIAZNDQhBwAsoAgAiBQRAQbgLKAIAIgggAWoiCSAITQ0JIAUgCUkNCQsCQEHECy0AAEEEcUUEQAJAAkACQAJAQaAIKAIAIgUEQEHICyEAA0AgBSAAKAIAIghPBEAgCCAAKAIEaiAFSw0DCyAAKAIIIgANAAsLQQAQCyICQX9GDQMgASEEQeQLKAIAIgBBAWsiBSACcQRAIAEgAmsgAiAFakEAIABrcWohBAsgBCAGTQ0DQcALKAIAIgAEQEG4CygCACIFIARqIgcgBU0NBCAAIAdJDQQLIAQQCyIAIAJHDQEMBQsgBCACayAHcSIEEAsiAiAAKAIAIAAoAgRqRg0BIAIhAAsgAEF/Rg0BIAZBMGogBE0EQCAAIQIMBAtB6AsoAgAiAiADIARrakEAIAJrcSICEAtBf0YNASACIARqIQQgACECDAMLIAJBf0cNAgtBxAtBxAsoAgBBBHI2AgALIAEQCyECQQAQCyEAIAJBf0YNBSAAQX9GDQUgACACTQ0FIAAgAmsiBCAGQShqTQ0FC0G4C0G4CygCACAEaiIANgIAQbwLKAIAIABJBEBBvAsgADYCAAsCQEGgCCgCACIDBEBByAshAANAIAIgACgCACIBIAAoAgQiBWpGDQIgACgCCCIADQALDAQLQZgIKAIAIgBBACAAIAJNG0UEQEGYCCACNgIAC0EAIQBBzAsgBDYCAEHICyACNgIAQagIQX82AgBBrAhB4AsoAgA2AgBB1AtBADYCAANAIABBA3QiAUG4CGogAUGwCGoiBTYCACABQbwIaiAFNgIAIABBAWoiAEEgRw0AC0GUCCAEQShrIgBBeCACa0EHcSIBayIFNgIAQaAIIAEgAmoiATYCACABIAVBAXI2AgQgACACakEoNgIEQaQIQfALKAIANgIADAQLIAIgA00NAiABIANLDQIgACgCDEEIcQ0CIAAgBCAFajYCBEGgCCADQXggA2tBB3EiAGoiATYCAEGUCEGUCCgCACAEaiICIABrIgA2AgAgASAAQQFyNgIEIAIgA2pBKDYCBEGkCEHwCygCADYCAAwDC0EAIQAMBgtBACEADAQLQZgIKAIAIAJLBEBBmAggAjYCAAsgAiAEaiEFQcgLIQACQANAIAUgACgCACIBRwRAIAAoAggiAA0BDAILCyAALQAMQQhxRQ0DC0HICyEAA0ACQCADIAAoAgAiAU8EQCABIAAoAgRqIgUgA0sNAQsgACgCCCEADAELC0GUCCAEQShrIgBBeCACa0EHcSIBayIHNgIAQaAIIAEgAmoiATYCACABIAdBAXI2AgQgACACakEoNgIEQaQIQfALKAIANgIAIAMgBUEnIAVrQQdxakEvayIAIAAgA0EQakkbIgFBGzYCBCABQdALKQIANwIQIAFByAspAgA3AghB0AsgAUEIajYCAEHMCyAENgIAQcgLIAI2AgBB1AtBADYCACABQRhqIQADQCAAQQc2AgQgAEEIaiAAQQRqIQAgBUkNAAsgASADRg0AIAEgASgCBEF+cTYCBCADIAEgA2siAkEBcjYCBCABIAI2AgACfyACQf8BTQRAIAJBeHFBsAhqIQACf0GICCgCACIBQQEgAkEDdnQiAnFFBEBBiAggASACcjYCACAADAELIAAoAggLIQEgACADNgIIIAEgAzYCDEEMIQJBCAwBC0EfIQAgAkH///8HTQRAIAJBJiACQQh2ZyIAa3ZBAXEgAEEBdGtBPmohAAsgAyAANgIcIANCADcCECAAQQJ0QbgKaiEBAkACQEGMCCgCACIFQQEgAHQiBHFFBEBBjAggBCAFcjYCACABIAM2AgAMAQsgAkEZIABBAXZrQQAgAEEfRxt0IQAgASgCACEFA0AgBSIBKAIEQXhxIAJGDQIgAEEddiEFIABBAXQhACABIAVBBHFqIgQoAhAiBQ0ACyAEIAM2AhALIAMgATYCGEEIIQIgAyIBIQBBDAwBCyABKAIIIgAgAzYCDCABIAM2AgggAyAANgIIQQAhAEEYIQJBDAsgA2ogATYCACACIANqIAA2AgALQZQIKAIAIgAgBk0NAEGUCCAAIAZrIgE2AgBBoAhBoAgoAgAiACAGaiICNgIAIAIgAUEBcjYCBCAAIAZBA3I2AgQgAEEIaiEADAQLQYQIQTA2AgBBACEADAMLIAAgAjYCACAAIAAoAgQgBGo2AgQgAkF4IAJrQQdxaiIIIAZBA3I2AgQgAUF4IAFrQQdxaiIEIAYgCGoiA2shBwJAQaAIKAIAIARGBEBBoAggAzYCAEGUCEGUCCgCACAHaiIANgIAIAMgAEEBcjYCBAwBC0GcCCgCACAERgRAQZwIIAM2AgBBkAhBkAgoAgAgB2oiADYCACADIABBAXI2AgQgACADaiAANgIADAELIAQoAgQiAEEDcUEBRgRAIABBeHEhCSAEKAIMIQICQCAAQf8BTQRAIAQoAggiASACRgRAQYgIQYgIKAIAQX4gAEEDdndxNgIADAILIAEgAjYCDCACIAE2AggMAQsgBCgCGCEGAkAgAiAERwRAIAQoAggiACACNgIMIAIgADYCCAwBCwJAIAQoAhQiAAR/IARBFGoFIAQoAhAiAEUNASAEQRBqCyEBA0AgASEFIAAiAkEUaiEBIAAoAhQiAA0AIAJBEGohASACKAIQIgANAAsgBUEANgIADAELQQAhAgsgBkUNAAJAIAQoAhwiAEECdEG4CmoiASgCACAERgRAIAEgAjYCACACDQFBjAhBjAgoAgBBfiAAd3E2AgAMAgsgBkEQQRQgBigCECAERhtqIAI2AgAgAkUNAQsgAiAGNgIYIAQoAhAiAARAIAIgADYCECAAIAI2AhgLIAQoAhQiAEUNACACIAA2AhQgACACNgIYCyAHIAlqIQcgBCAJaiIEKAIEIQALIAQgAEF+cTYCBCADIAdBAXI2AgQgAyAHaiAHNgIAIAdB/wFNBEAgB0F4cUGwCGohAAJ/QYgIKAIAIgFBASAHQQN2dCICcUUEQEGICCABIAJyNgIAIAAMAQsgACgCCAshASAAIAM2AgggASADNgIMIAMgADYCDCADIAE2AggMAQtBHyECIAdB////B00EQCAHQSYgB0EIdmciAGt2QQFxIABBAXRrQT5qIQILIAMgAjYCHCADQgA3AhAgAkECdEG4CmohAAJAAkBBjAgoAgAiAUEBIAJ0IgVxRQRAQYwIIAEgBXI2AgAgACADNgIADAELIAdBGSACQQF2a0EAIAJBH0cbdCECIAAoAgAhAQNAIAEiACgCBEF4cSAHRg0CIAJBHXYhASACQQF0IQIgACABQQRxaiIFKAIQIgENAAsgBSADNgIQCyADIAA2AhggAyADNgIMIAMgAzYCCAwBCyAAKAIIIgEgAzYCDCAAIAM2AgggA0EANgIYIAMgADYCDCADIAE2AggLIAhBCGohAAwCCwJAIAhFDQACQCAFKAIcIgFBAnRBuApqIgIoAgAgBUYEQCACIAA2AgAgAA0BQYwIIAdBfiABd3EiBzYCAAwCCyAIQRBBFCAIKAIQIAVGG2ogADYCACAARQ0BCyAAIAg2AhggBSgCECIBBEAgACABNgIQIAEgADYCGAsgBSgCFCIBRQ0AIAAgATYCFCABIAA2AhgLAkAgA0EPTQRAIAUgAyAGaiIAQQNyNgIEIAAgBWoiACAAKAIEQQFyNgIEDAELIAUgBkEDcjYCBCAFIAZqIgQgA0EBcjYCBCADIARqIAM2AgAgA0H/AU0EQCADQXhxQbAIaiEAAn9BiAgoAgAiAUEBIANBA3Z0IgJxRQRAQYgIIAEgAnI2AgAgAAwBCyAAKAIICyEBIAAgBDYCCCABIAQ2AgwgBCAANgIMIAQgATYCCAwBC0EfIQAgA0H///8HTQRAIANBJiADQQh2ZyIAa3ZBAXEgAEEBdGtBPmohAAsgBCAANgIcIARCADcCECAAQQJ0QbgKaiEBAkACQCAHQQEgAHQiAnFFBEBBjAggAiAHcjYCACABIAQ2AgAgBCABNgIYDAELIANBGSAAQQF2a0EAIABBH0cbdCEAIAEoAgAhAQNAIAEiAigCBEF4cSADRg0CIABBHXYhASAAQQF0IQAgAiABQQRxaiIHKAIQIgENAAsgByAENgIQIAQgAjYCGAsgBCAENgIMIAQgBDYCCAwBCyACKAIIIgAgBDYCDCACIAQ2AgggBEEANgIYIAQgAjYCDCAEIAA2AggLIAVBCGohAAwBCwJAIAlFDQACQCACKAIcIgFBAnRBuApqIgUoAgAgAkYEQCAFIAA2AgAgAA0BQYwIIAtBfiABd3E2AgAMAgsgCUEQQRQgCSgCECACRhtqIAA2AgAgAEUNAQsgACAJNgIYIAIoAhAiAQRAIAAgATYCECABIAA2AhgLIAIoAhQiAUUNACAAIAE2AhQgASAANgIYCwJAIANBD00EQCACIAMgBmoiAEEDcjYCBCAAIAJqIgAgACgCBEEBcjYCBAwBCyACIAZBA3I2AgQgAiAGaiIFIANBAXI2AgQgAyAFaiADNgIAIAgEQCAIQXhxQbAIaiEAQZwIKAIAIQECf0EBIAhBA3Z0IgcgBHFFBEBBiAggBCAHcjYCACAADAELIAAoAggLIQQgACABNgIIIAQgATYCDCABIAA2AgwgASAENgIIC0GcCCAFNgIAQZAIIAM2AgALIAJBCGohAAsgCkEQaiQAIAALzAsBB38CQCAARQ0AIABBCGsiAyAAQQRrKAIAIgFBeHEiAGohBQJAIAFBAXENACABQQJxRQ0BIAMgAygCACIBayIDQZgIKAIASQ0BIAAgAWohAAJAAkACQEGcCCgCACADRwRAIAMoAgwhAiABQf8BTQRAIAIgAygCCCIERw0CQYgIQYgIKAIAQX4gAUEDdndxNgIADAULIAMoAhghBiACIANHBEAgAygCCCIBIAI2AgwgAiABNgIIDAQLIAMoAhQiAQR/IANBFGoFIAMoAhAiAUUNAyADQRBqCyEEA0AgBCEHIAEiAkEUaiEEIAIoAhQiAQ0AIAJBEGohBCACKAIQIgENAAsgB0EANgIADAMLIAUoAgQiAUEDcUEDRw0DQZAIIAA2AgAgBSABQX5xNgIEIAMgAEEBcjYCBCAFIAA2AgAPCyAEIAI2AgwgAiAENgIIDAILQQAhAgsgBkUNAAJAIAMoAhwiAUECdEG4CmoiBCgCACADRgRAIAQgAjYCACACDQFBjAhBjAgoAgBBfiABd3E2AgAMAgsgBkEQQRQgBigCECADRhtqIAI2AgAgAkUNAQsgAiAGNgIYIAMoAhAiAQRAIAIgATYCECABIAI2AhgLIAMoAhQiAUUNACACIAE2AhQgASACNgIYCyADIAVPDQAgBSgCBCIBQQFxRQ0AAkACQAJAAkAgAUECcUUEQEGgCCgCACAFRgRAQaAIIAM2AgBBlAhBlAgoAgAgAGoiADYCACADIABBAXI2AgQgA0GcCCgCAEcNBkGQCEEANgIAQZwIQQA2AgAPC0GcCCgCACAFRgRAQZwIIAM2AgBBkAhBkAgoAgAgAGoiADYCACADIABBAXI2AgQgACADaiAANgIADwsgAUF4cSAAaiEAIAUoAgwhAiABQf8BTQRAIAUoAggiBCACRgRAQYgIQYgIKAIAQX4gAUEDdndxNgIADAULIAQgAjYCDCACIAQ2AggMBAsgBSgCGCEGIAIgBUcEQCAFKAIIIgEgAjYCDCACIAE2AggMAwsgBSgCFCIBBH8gBUEUagUgBSgCECIBRQ0CIAVBEGoLIQQDQCAEIQcgASICQRRqIQQgAigCFCIBDQAgAkEQaiEEIAIoAhAiAQ0ACyAHQQA2AgAMAgsgBSABQX5xNgIEIAMgAEEBcjYCBCAAIANqIAA2AgAMAwtBACECCyAGRQ0AAkAgBSgCHCIBQQJ0QbgKaiIEKAIAIAVGBEAgBCACNgIAIAINAUGMCEGMCCgCAEF+IAF3cTYCAAwCCyAGQRBBFCAGKAIQIAVGG2ogAjYCACACRQ0BCyACIAY2AhggBSgCECIBBEAgAiABNgIQIAEgAjYCGAsgBSgCFCIBRQ0AIAIgATYCFCABIAI2AhgLIAMgAEEBcjYCBCAAIANqIAA2AgAgA0GcCCgCAEcNAEGQCCAANgIADwsgAEH/AU0EQCAAQXhxQbAIaiEBAn9BiAgoAgAiBEEBIABBA3Z0IgBxRQRAQYgIIAAgBHI2AgAgAQwBCyABKAIICyEAIAEgAzYCCCAAIAM2AgwgAyABNgIMIAMgADYCCA8LQR8hAiAAQf///wdNBEAgAEEmIABBCHZnIgFrdkEBcSABQQF0a0E+aiECCyADIAI2AhwgA0IANwIQIAJBAnRBuApqIQcCfwJAAn9BjAgoAgAiAUEBIAJ0IgRxRQRAQYwIIAEgBHI2AgBBGCECIAchBEEIDAELIABBGSACQQF2a0EAIAJBH0cbdCECIAcoAgAhBANAIAQiASgCBEF4cSAARg0CIAJBHXYhBCACQQF0IQIgASAEQQRxakEQaiIHKAIAIgQNAAtBGCECIAEhBEEICyEAIAMiAQwBCyABKAIIIgQgAzYCDEEIIQIgAUEIaiEHQRghAEEACyEFIAcgAzYCACACIANqIAQ2AgAgAyABNgIMIAAgA2ogBTYCAEGoCEGoCCgCAEEBayIAQX8gABs2AgALCwsJAQBBgQgLAgYB"),
          );
          var _____uninitialized = {
            env: {
              add: initializeEx6.GS,
              update: initializeEx6.k9,
              has: initializeEx6.TO,
              destroy: initializeEx6.vV,
              eat: initializeEx6.vF,
              pidOf: initializeEx6.gp,
              emscripten_notify_memory_growth(memoryGrowth) {},
              console_log: console.log.bind(null),
            },
          };
          this.instance = await WebAssembly.instantiate(
            await WebAssembly.compile(await fetchWasmData.arrayBuffer()),
            _____uninitialized,
          );
          this.wasm = this.instance.exports;
          this.heap = new initExpress.SE(this.wasm.memory.buffer);
          delete this.initializing;
          return true;
        }
        parse(skiddingData, parseEvent, EventStopper) {
          var skiddingStopp;
          var ____itemIndex;
          var n;
          var airSkiddingCe;
          if (this.instance) {
            ({
              stop_skidding_dc_aeroaxon: airSkiddingCe,
              free: skiddingStopp,
              malloc: ____itemIndex,
            } = this.wasm);
            ____itemIndex = ____itemIndex(8 + skiddingData.byteLength);
            (n = new Int32Array(this.heap.buffer, ____itemIndex, 2)).fill(0);
            this.heap.set(skiddingData, ____itemIndex + 8);
            airSkiddingCe(
              ____itemIndex,
              ____itemIndex + 8,
              parseEvent,
              initEx78225.A.pids[parseEvent],
              EventStopper,
            );
            skiddingData = n[0];
            airSkiddingCe = n[1];
            skiddingStopp(____itemIndex);
            return [skiddingData, airSkiddingCe];
          } else {
            return [-1, -1];
          }
        }
      })();
      ___configuration.init();
      let o = (_list, ParseErrorNot) =>
        ___configuration.parse(
          new initExpress.SE(_list.buffer, 1),
          ParseErrorNot,
          -1,
        );
    },
    97833(getExportsAsM, exportModule, exportedModId) {
      getExportsAsM.exports = exportedModId.p + "f19c0afc50aad5b7d507.js";
    },
    42634() {},
    71675(projectModule) {
      projectModule.exports = {
        rE: "1.1.0",
        VY: "https://vanis.io/",
      };
    },
  };
  var loginSuccess = {};
  function _getOrCreate(__________anonymousType) {
    var _________________________________________________anonymousUser =
      loginSuccess[__________anonymousType];
    if (
      _________________________________________________anonymousUser ===
      undefined
    ) {
      _________________________________________________anonymousUser =
        loginSuccess[__________anonymousType] = {
          id: __________anonymousType,
          loaded: false,
          exports: {},
        };
      methodActions[__________anonymousType].call(
        _________________________________________________anonymousUser.exports,
        _________________________________________________anonymousUser,
        _________________________________________________anonymousUser.exports,
        _getOrCreate,
      );
      _________________________________________________anonymousUser.loaded = true;
    }
    return _________________________________________________anonymousUser.exports;
  }
  _getOrCreate.m = methodActions;
  alias = [];
  _getOrCreate.O = (filterByType, filterTypes, _filterTypes, filterRule) => {
    if (!filterTypes) {
      var n = Infinity;
      for (var aliasIndex = 0; aliasIndex < alias.length; aliasIndex++) {
        for (
          var o,
            [filterTypes, _filterTypes, filterRule] = alias[aliasIndex],
            r = true,
            l = 0;
          l < filterTypes.length;
          l++
        ) {
          if (
            filterRule <= n &&
            Object.keys(_getOrCreate.O).every((__getOrCreate) =>
              _getOrCreate.O[__getOrCreate](filterTypes[l]),
            )
          ) {
            filterTypes.splice(l--, 1);
          } else {
            r = false;
            if (filterRule < n) {
              n = filterRule;
            }
          }
        }
        if (
          r &&
          (alias.splice(aliasIndex--, 1), (o = _filterTypes()) !== undefined)
        ) {
          filterByType = o;
        }
      }
      return filterByType;
    }
    filterRule = filterRule || 0;
    for (
      var aliasIndex = alias.length;
      aliasIndex > 0 && alias[aliasIndex - 1][2] > filterRule;
      aliasIndex--
    ) {
      alias[aliasIndex] = alias[aliasIndex - 1];
    }
    alias[aliasIndex] = [filterTypes, _filterTypes, filterRule];
  };
  _getOrCreate.n = (requireModule) => {
    var importModule =
      requireModule && requireModule.__esModule
        ? () => requireModule.default
        : () => requireModule;
    _getOrCreate.d(importModule, {
      a: importModule,
    });
    return importModule;
  };
  _getOrCreate.d = (____dataObject, filteredKeyUp) => {
    for (var filteredKey in filteredKeyUp) {
      if (
        _getOrCreate.o(filteredKeyUp, filteredKey) &&
        !_getOrCreate.o(____dataObject, filteredKey)
      ) {
        Object.defineProperty(____dataObject, filteredKey, {
          enumerable: true,
          get: filteredKeyUp[filteredKey],
        });
      }
    }
  };
  _getOrCreate.g = (function () {
    if (typeof globalThis == "object") {
      return globalThis;
    }
    try {
      return this || Function("return this")();
    } catch (getEnv) {
      if (typeof window == "object") {
        return window;
      }
    }
  })();
  _getOrCreate.o = (_hasProperty, keyExists) =>
    Object.prototype.hasOwnProperty.call(_hasProperty, keyExists);
  _getOrCreate.r = (importName) => {
    if (typeof Symbol != "undefined" && Symbol.toStringTag) {
      Object.defineProperty(importName, Symbol.toStringTag, {
        value: "Module",
      });
    }
    Object.defineProperty(importName, "__esModule", {
      value: true,
    });
  };
  _getOrCreate.nmd = (createOrGetSt) => {
    createOrGetSt.paths = [];
    createOrGetSt.children ||= [];
    return createOrGetSt;
  };
  _getOrCreate.p = "./";
  _getOrCreate.b = document.baseURI || self.location.href;
  secondArg = {
    792: 0,
    524: 0,
  };
  _getOrCreate.O.j = (checkIfSecond) => secondArg[checkIfSecond] === 0;
  n = (checkEqualNon, nonZeroMatch) => {
    var nonZeroCount;
    var configData;
    var n;
    var [arrayValues, o, r] = nonZeroMatch;
    var l = 0;
    if (arrayValues.some((notZeroExists) => secondArg[notZeroExists] !== 0)) {
      for (nonZeroCount in o) {
        if (_getOrCreate.o(o, nonZeroCount)) {
          _getOrCreate.m[nonZeroCount] = o[nonZeroCount];
        }
      }
      if (r) {
        n = r(_getOrCreate);
      }
    }
    for (
      checkEqualNon && checkEqualNon(nonZeroMatch);
      l < arrayValues.length;
      l++
    ) {
      configData = arrayValues[l];
      if (_getOrCreate.o(secondArg, configData) && secondArg[configData]) {
        secondArg[configData][0]();
      }
      secondArg[configData] = 0;
    }
    return _getOrCreate.O(n);
  };
  (thirdArg = self.webpackChunkvanis_client =
    self.webpackChunkvanis_client || []).forEach(n.bind(null, 0));
  thirdArg.push = n.bind(null, thirdArg.push.bind(thirdArg));
  _getOrCreate.O(undefined, [121, 524], () => _getOrCreate(27461));
  var n = _getOrCreate.O(undefined, [121, 524], () => _getOrCreate(28156));
  _getOrCreate.O(n);
})();
