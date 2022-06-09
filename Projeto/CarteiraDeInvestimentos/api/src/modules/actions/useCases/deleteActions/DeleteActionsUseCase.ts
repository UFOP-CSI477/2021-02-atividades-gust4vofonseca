import { IActionsRepository } from "@modules/actions/repositories/IActionsRepository";
import { IWalletRepository } from "@modules/wallet/repositories/IWalletRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteActionsUseCase {
    constructor(
        @inject("ActionRepository")
        private actionsReposiroty: IActionsRepository,
        @inject("WalletRepository")
        private walletRepository: IWalletRepository
    ) {}

    async execute(id: string, wallet_id: string, user_id: string): Promise<void> {
        const wallet = await this.walletRepository.findById(wallet_id);

        if (wallet.user_id !== user_id) {
            return
        }

        const action = await this.actionsReposiroty.findById(id);

        if (action.wallet_id !== wallet_id) {
            return
        }

        if (!action) {
            return
        }

        await this.actionsReposiroty.delete(id);
    }
}

export { DeleteActionsUseCase };
