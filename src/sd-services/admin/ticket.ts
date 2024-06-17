// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { EmailOutService } from '../../utils/ndefault-email/EmailOut/EmailOutService'; //_splitter_
//append_imports_end
export class ticket {
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
    this.serviceName = 'ticket';
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
      instance = new ticket(
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
    //appendnew_flow_ticket_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ticket');
    //appendnew_flow_ticket_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: ticket');

    this.app['post'](
      `${this.serviceBasePath}/ticket`,
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
          bh = await this.sd_ieoZWFPf4HCooHG9(bh, parentSpanInst);
          //appendnew_next_sd_KpRf9wdIocEqQnxS
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_KpRf9wdIocEqQnxS');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ticket_HttpIn
  }
  //   service flows_ticket

  //appendnew_flow_ticket_start

  async sd_ieoZWFPf4HCooHG9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ieoZWFPf4HCooHG9',
      parentSpanInst
    );
    try {
      bh.payload = {
        to: 'kimberlymnguni@gmail.com',
        subject: 'Ticket',
        from: 'Capitec',
        body: `Admin sent a ticket of : ${bh.input.body.ticket}`,
      };

      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_vRj3NJ6lDXHT6Uhv(bh, parentSpanInst);
      //appendnew_next_sd_ieoZWFPf4HCooHG9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ieoZWFPf4HCooHG9',
        spanInst,
        'sd_ieoZWFPf4HCooHG9'
      );
    }
  }

  async sd_vRj3NJ6lDXHT6Uhv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vRj3NJ6lDXHT6Uhv',
      parentSpanInst
    );
    try {
      let mailConfigObj = this.sdService.getConfigObj(
        'emailout-config',
        'sd_bkwqQKmMI8faGDdO'
      );
      let server = mailConfigObj.server;
      let port = mailConfigObj.port;
      let secure = mailConfigObj.secure;
      let tls = mailConfigObj.tls;
      let userid = mailConfigObj.userid;
      let password = mailConfigObj.password;
      let emailServiceInstance = EmailOutService.getInstance();
      bh.result = await emailServiceInstance.sendEmail(
        {
          server,
          port,
          secure,
          tls,
        },
        {
          userid,
          password,
          to: bh.payload.to,
          subject: bh.payload.subject,
          body: bh.payload.body,
          cc: undefined,
          bcc: undefined,
          from: bh.payload.from,
          html: undefined,
          iCal: undefined,
          routingOptions: undefined,
          contentOptions: undefined,
          securityOptions: undefined,
          headerOptions: undefined,
          attachments: undefined,
        }
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_IEEkx66TNTfEkl7G(bh, parentSpanInst);
      //appendnew_next_sd_vRj3NJ6lDXHT6Uhv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vRj3NJ6lDXHT6Uhv',
        spanInst,
        'sd_vRj3NJ6lDXHT6Uhv'
      );
    }
  }

  async sd_IEEkx66TNTfEkl7G(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IEEkx66TNTfEkl7G');
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
  //appendnew_flow_ticket_Catch
}
