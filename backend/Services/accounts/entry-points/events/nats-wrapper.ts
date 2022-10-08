import nats, { Stan } from 'node-nats-streaming';

class NatsWrapper {
  private _client?: Stan;

  get client() {
    // eslint-disable-next-line no-underscore-dangle
    if (!this._client) {
      throw new Error('Cannot access NATS client before connecting');
    }
    // eslint-disable-next-line no-underscore-dangle
    return this._client;
  }

  connect(clusterId: string, clientId: string, url: string) {
    // eslint-disable-next-line no-underscore-dangle
    this._client = nats.connect(clusterId, clientId, { url });

    return new Promise<void>((resolve, reject) => {
      this.client.on('connect', () => {
        console.log('Connected to NATS');
        resolve();
      });

      // eslint-disable-next-line no-underscore-dangle
      this.client.on('error', (err) => {
        console.log('Error connecting to NATS');
        reject(err);
      });
    });
  }
}

export const natsWrapper = new NatsWrapper();
