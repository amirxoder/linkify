import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { confirmTextSchema } from "@/lib/validation";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";

export const DangerZoneForm = () => {
  const form = useForm<z.infer<typeof confirmTextSchema>>({
    resolver: zodResolver(confirmTextSchema),
    defaultValues: {
      confirmText: "",
    },
  });

  const onSubmit = (data: z.infer<typeof confirmTextSchema>) => {
    console.log(data);
  };

  return (
    <>
      <p className="text-xs text-muted-foreground text-center">
        Are you sure you want to delete your account? This action cannot be
        undone.
      </p>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant={"destructive"}
            className="w-full mt-2 hover:bg-red-600"
          >
            Delete Account
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <Separator className="my-1" />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="confirmText"
                render={({ field }) => (
                  <FormItem>
                    <FormDescription>
                      please type <strong>DELETE</strong> to confirm.
                    </FormDescription>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="DELETE"
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-destructive" />
                  </FormItem>
                )}
              />
              <AlertDialogFooter className="justify-center mt-2">
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <Button type="submit" variant={"destructive"}>
                  Confirm
                </Button>
              </AlertDialogFooter>
            </form>
          </Form>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
