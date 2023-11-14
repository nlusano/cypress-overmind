import {
  createStateHook,
  createActionsHook,
  createReactionHook,
} from "overmind-react";
import { state } from "./state";
import { IContext } from "overmind";
import * as actions from "./actions";

export const config = {
  state,
  actions,
};

export type Context = IContext<{
  state: typeof config.state;
  actions: typeof config.actions;
}>;

export const useAppState = createStateHook<Context>();
export const useActions = createActionsHook<Context>();
export const useReaction = createReactionHook<Context>();
