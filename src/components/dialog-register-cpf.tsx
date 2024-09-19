import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { ClipboardList } from "lucide-react";
import { Button } from "./button";
import { useAuth } from "@hooks";
import { LoginParams } from "@domain/auth/authTypes";
import { toast } from "react-toastify";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { cpfMask } from "@utils";

interface CPF extends LoginParams {
  cpf: string;
}

export function DialogRegisterCPF() {
  const { updateUserCPF } = useAuth();
  const [loadingRegisterCPF, setLoadingRegisterCPF] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(true);
  const { register, handleSubmit } = useForm<CPF>({});
  const onSubmit: SubmitHandler<CPF> = async (data) => {
    setLoadingRegisterCPF(true);
    try {
      await updateUserCPF(data.cpf);
      setOpenDialog(false);
      toast.success("CPF vinculado com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao vincular CPF");
    } finally {
      setLoadingRegisterCPF(false);
    }
  };
  return (
    <Dialog open={openDialog} onOpenChange={() => setOpenDialog(!openDialog)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-1.5">
            <ClipboardList />
            <span>Finalize seu registro</span>
          </DialogTitle>
          <DialogDescription>
            Verificamos que seu CPF não está vinculado a sua conta, para
            completar seus dados e conseguir entrar com o GOV BR vincule seu CPF
            a sua conta.
          </DialogDescription>
        </DialogHeader>
        <form action="flex items-center" onSubmit={handleSubmit(onSubmit)}>
          <DialogFooter>
            <input
              className="ring-0 border outline-none p-2 w-full rounded-md  sm:text-base text-zinc-900  "
              id="cpf"
              type="text"
              placeholder="000.000.000-00"
              inputMode="numeric"
              required
              {...register("cpf")}
              onChange={(e) => {
                e.target.value = cpfMask(e.target.value);
              }}
            />
            <Button
              title="Vincular"
              type="submit"
              loading={loadingRegisterCPF}
            />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
