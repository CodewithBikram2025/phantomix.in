import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Loader2, Save, User as UserIcon, Shield, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar";
import { AnimatedBackground } from "@/components/phantomix/AnimatedBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useAuthSession } from "@/hooks/use-auth-session";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/settings")({
  head: () => ({ meta: [{ title: "Settings — Phantomix" }] }),
  component: SettingsPage,
});

type Profile = {
  display_name: string | null;
  avatar_url: string | null;
  block_trackers: boolean;
  block_ads: boolean;
  https_only: boolean;
  ai_suggestions: boolean;
  telemetry: boolean;
};

const DEFAULTS: Profile = {
  display_name: "",
  avatar_url: "",
  block_trackers: true,
  block_ads: true,
  https_only: true,
  ai_suggestions: true,
  telemetry: false,
};

function SettingsPage() {
  const { session } = useAuthSession();
  const userId = session?.user?.id;
  const email = session?.user?.email;
  const [profile, setProfile] = useState<Profile>(DEFAULTS);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!userId) return;
    (async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("profiles")
        .select("display_name,avatar_url,block_trackers,block_ads,https_only,ai_suggestions,telemetry")
        .eq("id", userId)
        .maybeSingle();
      if (error) toast.error(error.message);
      if (data) setProfile({ ...DEFAULTS, ...data });
      setLoading(false);
    })();
  }, [userId]);

  const update = <K extends keyof Profile>(key: K, value: Profile[K]) =>
    setProfile((p) => ({ ...p, [key]: value }));

  const handleSave = async () => {
    if (!userId) return;
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .upsert({ id: userId, ...profile, updated_at: new Date().toISOString() });
    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success("Settings saved");
  };

  const initial = (profile.display_name || email || "P").charAt(0).toUpperCase();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full relative">
        <AnimatedBackground />
        <AppSidebar />
        <SidebarInset className="relative z-10 bg-transparent">
          <DashboardNavbar email={email} />
          <main className="p-4 md:p-6 max-w-3xl w-full mx-auto space-y-6">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-3xl md:text-4xl font-display font-bold">
                Profile <span className="text-gradient">Settings</span>
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Manage your identity and privacy in the phantom-verse.
              </p>
            </motion.div>

            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            ) : (
              <>
                <Card className="glass-strong border-border/40">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <UserIcon className="h-4 w-4 text-primary" /> Identity
                    </CardTitle>
                    <CardDescription>How you appear across Phantomix.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16 border border-primary/40">
                        {profile.avatar_url ? <AvatarImage src={profile.avatar_url} /> : null}
                        <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-lg font-semibold">
                          {initial}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{email}</p>
                        <p className="text-xs text-muted-foreground">Signed-in account</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name">Display name</Label>
                      <Input
                        id="name"
                        placeholder="Phantom user"
                        value={profile.display_name ?? ""}
                        onChange={(e) => update("display_name", e.target.value)}
                        maxLength={80}
                        className="glass border-border/40"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="avatar">Avatar URL</Label>
                      <Input
                        id="avatar"
                        type="url"
                        placeholder="https://..."
                        value={profile.avatar_url ?? ""}
                        onChange={(e) => update("avatar_url", e.target.value)}
                        maxLength={500}
                        className="glass border-border/40"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-strong border-border/40">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" /> Privacy & Security
                    </CardTitle>
                    <CardDescription>Choose what Phantomix blocks by default.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    <ToggleRow
                      label="Block trackers"
                      hint="Stop cross-site tracking scripts."
                      checked={profile.block_trackers}
                      onChange={(v) => update("block_trackers", v)}
                    />
                    <Separator className="bg-border/40" />
                    <ToggleRow
                      label="Block ads"
                      hint="Hide ads across the web."
                      checked={profile.block_ads}
                      onChange={(v) => update("block_ads", v)}
                    />
                    <Separator className="bg-border/40" />
                    <ToggleRow
                      label="HTTPS-only mode"
                      hint="Upgrade insecure connections automatically."
                      checked={profile.https_only}
                      onChange={(v) => update("https_only", v)}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-strong border-border/40">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-primary" /> AI & Telemetry
                    </CardTitle>
                    <CardDescription>Control Copilot and anonymous diagnostics.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    <ToggleRow
                      label="AI suggestions"
                      hint="Let Phantomix Copilot suggest answers as you browse."
                      checked={profile.ai_suggestions}
                      onChange={(v) => update("ai_suggestions", v)}
                    />
                    <Separator className="bg-border/40" />
                    <ToggleRow
                      label="Share anonymous telemetry"
                      hint="Help us improve performance with anonymized usage data."
                      checked={profile.telemetry}
                      onChange={(v) => update("telemetry", v)}
                    />
                  </CardContent>
                </Card>

                <div className="flex justify-end">
                  <Button onClick={handleSave} disabled={saving} className="gap-2">
                    {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                    Save changes
                  </Button>
                </div>
              </>
            )}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

function ToggleRow({
  label, hint, checked, onChange,
}: { label: string; hint: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="pr-4">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-muted-foreground">{hint}</p>
      </div>
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  );
}
