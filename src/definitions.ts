export interface callkitPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
