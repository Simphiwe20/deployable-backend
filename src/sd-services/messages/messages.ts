// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { MongoPersistance } from '../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu from '../authentication'; //_splitter_
//append_imports_end
export class messages {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'messages';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new messages(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_messages_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: messages');
    //appendnew_flow_messages_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: messages');

    this.app['post'](
      `${this.serviceBasePath}/add-messages`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_qN88sC8aTYpo4slL(bh, parentSpanInst);
          //appendnew_next_sd_iuRpZZAbg7niF9UU
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_iuRpZZAbg7niF9UU');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-messages`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_4Rjz6kQ45LPLXC6f(bh, parentSpanInst);
          //appendnew_next_sd_B2BRCQ33HpAEOXzT
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_B2BRCQ33HpAEOXzT');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['put'](
      `${this.serviceBasePath}/update-message`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_xx52knYet8OoCi00(bh, parentSpanInst);
          //appendnew_next_sd_ocDMnj8uErU6nvhR
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ocDMnj8uErU6nvhR');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_messages_HttpIn
  }
  //   service flows_messages

  //appendnew_flow_messages_start

  async sd_qN88sC8aTYpo4slL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qN88sC8aTYpo4slL',
      parentSpanInst
    );
    try {
      bh.buy = {
        collection: 'messages',
      };

      bh.input.body['_id'] = new Date().getTime();

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pkxfoj5MTQbW93FU(bh, parentSpanInst);
      //appendnew_next_sd_qN88sC8aTYpo4slL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qN88sC8aTYpo4slL',
        spanInst,
        'sd_qN88sC8aTYpo4slL'
      );
    }
  }

  async sd_pkxfoj5MTQbW93FU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pkxfoj5MTQbW93FU',
      parentSpanInst
    );
    try {
      bh.status = 200;

      delete bh.input.body['collection'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5uVhXGlUsk0mubvO(bh, parentSpanInst);
      //appendnew_next_sd_pkxfoj5MTQbW93FU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pkxfoj5MTQbW93FU',
        spanInst,
        'sd_pkxfoj5MTQbW93FU'
      );
    }
  }

  async sd_5uVhXGlUsk0mubvO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5uVhXGlUsk0mubvO',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_Kkkscf5YGu1U4UWP',
        bh.buy.collection,
        bh.input.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_NJy0rTR4LH5rf0KC(bh, parentSpanInst);
      //appendnew_next_sd_5uVhXGlUsk0mubvO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5uVhXGlUsk0mubvO',
        spanInst,
        'sd_5uVhXGlUsk0mubvO'
      );
    }
  }

  async sd_NJy0rTR4LH5rf0KC(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NJy0rTR4LH5rf0KC');
    }
  }

  async sd_4Rjz6kQ45LPLXC6f(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4Rjz6kQ45LPLXC6f',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'messages',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qlWSsdzAmyrdbJ11(bh, parentSpanInst);
      //appendnew_next_sd_4Rjz6kQ45LPLXC6f
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4Rjz6kQ45LPLXC6f',
        spanInst,
        'sd_4Rjz6kQ45LPLXC6f'
      );
    }
  }

  async sd_qlWSsdzAmyrdbJ11(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qlWSsdzAmyrdbJ11',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXuInstance: SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu.authentication =
        SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu.authentication.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXuInstance.toCheckIfTheUserExists(
          spanInst,
          bh.search
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_LaLgfwPItzzFTlzd(bh, parentSpanInst);
      //appendnew_next_sd_qlWSsdzAmyrdbJ11
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qlWSsdzAmyrdbJ11',
        spanInst,
        'sd_qlWSsdzAmyrdbJ11'
      );
    }
  }

  async sd_LaLgfwPItzzFTlzd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LaLgfwPItzzFTlzd',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.success(bh, parentSpanInst);
      } else {
        bh = await this.notFound(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LaLgfwPItzzFTlzd',
        spanInst,
        'sd_LaLgfwPItzzFTlzd'
      );
    }
  }

  async success(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('success', parentSpanInst);
    try {
      bh.status = 200;
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_uJDa4VV6HD90Xkl5(bh, parentSpanInst);
      //appendnew_next_success
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_11Gu68wCU82bVFYJ',
        spanInst,
        'success'
      );
    }
  }

  async sd_uJDa4VV6HD90Xkl5(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uJDa4VV6HD90Xkl5');
    }
  }

  async notFound(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('notFound', parentSpanInst);
    try {
      if (bh.result) {
        bh.status = 200;
      } else {
        bh.status = 404;
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_uJDa4VV6HD90Xkl5(bh, parentSpanInst);
      //appendnew_next_notFound
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hX2e8mwmiNtwp5Zf',
        spanInst,
        'notFound'
      );
    }
  }

  async sd_xx52knYet8OoCi00(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xx52knYet8OoCi00',
      parentSpanInst
    );
    try {
      bh.collection = 'messages';
      bh.filter = { _id: bh.input.body['_id'] };

      delete bh.input.body.collection;

      bh.body = { $set: bh.input.body };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_auQbXlPcVNZ3CJaK(bh, parentSpanInst);
      //appendnew_next_sd_xx52knYet8OoCi00
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xx52knYet8OoCi00',
        spanInst,
        'sd_xx52knYet8OoCi00'
      );
    }
  }

  async sd_auQbXlPcVNZ3CJaK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_auQbXlPcVNZ3CJaK',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_Kkkscf5YGu1U4UWP',
        bh.collection,
        bh.filter,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_CUFtiuzHvdhxdN0R(bh, parentSpanInst);
      //appendnew_next_sd_auQbXlPcVNZ3CJaK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_auQbXlPcVNZ3CJaK',
        spanInst,
        'sd_auQbXlPcVNZ3CJaK'
      );
    }
  }

  async sd_CUFtiuzHvdhxdN0R(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CUFtiuzHvdhxdN0R');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_messages_Catch
}
